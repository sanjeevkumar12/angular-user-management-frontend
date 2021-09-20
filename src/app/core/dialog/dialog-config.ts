export class DialogConfig<D = any> {
  data?: D;
}

export class ConfirmDialogModel {

  constructor(public title: string, public message: string) {
  }
}

export class AlertDialogModel {

  constructor(public title: string, public message: string) {
  }
}
