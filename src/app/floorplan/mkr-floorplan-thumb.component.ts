import { Component, Input } from '@angular/core';

@Component({
    selector: 'mkr-floorplan-thumb',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{floorplan.name}}</h2>
        <div>Date Modified: {{floorplan.dateModified}}</div>
        <div>Size: {{floorplan.size}}</div>
    `
})

export class MkrFloorplanThumbComponent {
    @Input() floorplan: any;
}
