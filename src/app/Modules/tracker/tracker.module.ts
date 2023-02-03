import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerComponent } from './components/tracker/tracker.component';
import { TrackerItemComponent } from './components/tracker-item/tracker-item.component';
import { TrackerItemControlsComponent } from './components/tracker-item-controls/tracker-item-controls.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        TrackerComponent,
        TrackerItemComponent,
        TrackerItemControlsComponent
    ],
    exports: [
        TrackerComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TrackerModule { }
