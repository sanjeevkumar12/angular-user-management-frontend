import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Type,
} from '@angular/core'
import { DialogComponent } from './dialog.component'
import { DialogContext } from './dialog-config';
import { DialogRef } from './dialog-ref';
import { DialogInjector } from '../dialog/dialog-injector';
import {DialogModule} from './dialog.module'

@Injectable({
  providedIn: DialogModule,
})
export class DialogService {
  dialogComponentRef!: ComponentRef<DialogComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {}

  public open(componentType: Type<any>, config: DialogContext) {
    const dialogRef = this.appendDialogComponentToBody(config, componentType);
    return dialogRef;
  }

  private appendDialogComponentToBody(config: DialogContext,componentType: Type<any>) {
    const map = new WeakMap();
    map.set(DialogContext, config);

    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map));

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    componentRef.instance.childComponentType = componentType;
    componentRef.instance.config = config;
    componentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody(componentRef);
    });

    const sub = dialogRef.afterClosed.subscribe(() => {
      this.removeDialogComponentFromBody(componentRef);
      sub.unsubscribe();
    });

    return dialogRef;
  }

  private removeDialogComponentFromBody(dialogComponentRef: any) {
    this.appRef.detachView(dialogComponentRef.hostView);
    dialogComponentRef.destroy();
  }
}