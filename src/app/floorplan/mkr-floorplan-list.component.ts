import { Component } from '@angular/core';
import { MkrFloorplanThumbComponent } from './mkr-floorplan-thumb.component';

@Component({
    selector: 'mkr-floorplan-list',
    templateUrl: './mkr-floorplan-list.component.html'
})

export class MkrFloorplanListComponent {
    floorplan1 = {
        id: 1,
        name: 'Living Room',
        dateModified: '11/20/2018',
        size: '120 sq ft.'
    };
}
