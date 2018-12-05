import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './mkr-app-routing.module';
import { MkrAppComponent } from './mkr-app.component';
import { MkrFloorplanListComponent } from './floorplan/mkr-floorplan-list.component';
import { MkrFloorplanThumbComponent } from './floorplan/mkr-floorplan-thumb.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    MkrAppComponent,
    MkrFloorplanListComponent,
    MkrFloorplanThumbComponent
  ],

  bootstrap: [MkrAppComponent]
})
export class AppModule { }
