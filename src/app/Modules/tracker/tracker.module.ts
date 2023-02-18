import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerComponent } from './components/tracker/tracker.component';
import { TrackerItemComponent } from './components/tracker-item/tracker-item.component';
import { TrackerItemControlsComponent } from './components/tracker-item-controls/tracker-item-controls.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import { TrackerPage } from './pages/tracker-page/tracker-page.component';



@NgModule({
    declarations: [
        TrackerComponent,
        TrackerItemComponent,
        TrackerItemControlsComponent,
        TrackerPage
    ],
    exports: [
        TrackerComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    PanelModule,
    CardModule,
    DividerModule
  ]
})
export class TrackerModule { }
