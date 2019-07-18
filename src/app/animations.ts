import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    group,
    animateChild,
  } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => goAnimate', [
            // hide the inner elements
            query('h1', style({ opacity: 0 })),
            query('.content', style({ opacity: 0 })),
            
            // animate the inner elements in, one by one
            query('h1', animate(1000, style({ opacity: 1 }))),
            query('.content', animate(1000, style({ opacity: 1 }))),
        ]),

        transition('HomePage <=> AboutPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query('.item', style({ left: '20px' }), { optional: true, limit: 1 }),
            query(':leave', animateChild()),
            // query('.item', animateChild()),
            group([
                query(':leave', [
                    animate('3000ms ease-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('3000ms ease-out', style({ left: '0%' }))
                ]),
                query('.item', animate(1000, style({ left: '50px' })), { optional: true, limit: 1 }),
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> FilterPage', [
            style({ position: 'relative' }),
            query('.content, .content-next', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query('.content', [
                style({ left: '200px' })
            ], { optional: true }),
            query('.content-next', [
                style({ left: '100px' })
            ], { optional: true }),
            query('.content-next', animateChild(), { optional: true }),
            group([
                query('.content-next', [
                    animate('2000ms ease-out', style({ left: '200px' }))
                ], { optional: true }),
                query('.content', [
                    animate('3000ms ease-out', style({ left: '100px' }))
                ], { optional: true })
            ]),
            query('.content', animateChild(), { optional: true }),
        ])
    ]);
