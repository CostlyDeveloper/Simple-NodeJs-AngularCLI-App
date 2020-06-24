import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ImageProcessorService } from '../../../layers/user-view/image-processor.service';

@Component({
    selector   : 'app-header',
    templateUrl: './header.component.html',
    styleUrls  : ['./header.component.scss'],
    animations : [
        trigger('toggleHeight', [
            state('hide', style({
                height  : '0px',
                opacity : '0',
                overflow: 'hidden'
                // display: 'none'
            })),
            state('show', style({
                height : '*',
                opacity: '1'
                // display: 'block'
            })),
            transition('hide => show', animate('200ms ease-in')),
            transition('show => hide', animate('200ms ease-out'))
        ])
    ]
})
export class HeaderComponent implements OnInit {

    mobMenuVisibility: string = 'hide';
    menuItems: MenuItem[]     = [];

    constructor(public imgRepo: ImageProcessorService) { }

    ngOnInit(): void {
        // Generator izbornika koristi klasu MenuItem
        this.menuItems.push(
            new MenuItem('Home', '/')
        );

    }
}

export class MenuItem {
    constructor(public Title: string, public RouterLink: string) {}
}
