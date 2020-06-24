import { Component, OnInit } from '@angular/core';
import { ImageProcessorService } from '../../layers/user-view/image-processor.service';

@Component({
    selector   : 'app-main-layout-frame',
    templateUrl: './main-layout-frame.component.html',
    styleUrls  : ['./main-layout-frame.component.scss']
})
export class MainLayoutFrameComponent implements OnInit {

    constructor(private imgRepo: ImageProcessorService) { }

    ngOnInit(): void {
    }

}
