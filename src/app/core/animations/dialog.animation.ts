import { trigger, state, query , sequence, style, animate, transition } from '@angular/animations';

export const dialogAnimation = trigger('dialog', [
    transition('void => *', [
        style({ opacity: 0, transform: 'scale(0.0)'  }),
        sequence([
            animate('1ms', style({ opacity: 1 })),
            animate('100ms ease-in', style({ transform: 'scale(1)' }))
        ])
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
    ])
  ])

export const fadeInGrow = trigger('fadeInGrow', [
    transition(':enter', [
        query(':enter', [
            style({ opacity: 0, transform: 'scale(0.8)'  }),
            sequence([
                animate('1ms', style({ opacity: 1 })),
                animate('500ms ease-in', style({ transform: 'scale(1)' }))
            ])
        ])
    ])
])