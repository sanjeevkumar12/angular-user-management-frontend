export type DialogType = 'component' | 'alert' | 'confirm';
export type DialogPosition = 'centered' | 'scrollable'
export type DialogSize = 'sm' | 'lg' | 'xl'

export class DialogContext<D = any> {
    data?: D;
    type?: DialogType = 'component';
    position? : DialogPosition;
    title?: string;
    message?: string;
    size?: DialogSize; 
    save_btn_label?: string = 'Save';

    // size_class(){
    //   return this.size ? `dialog-${this.size}` : ''
    // }

    // position_class(){
    //   return this.position ? `dialog-${this.position}` : ''
    // }
  }
  