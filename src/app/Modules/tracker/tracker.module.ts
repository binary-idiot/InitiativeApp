import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerComponent } from './components/tracker/tracker.component';



@NgModule({
    declarations: [
        TrackerComponent
    ],
    exports: [
        TrackerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TrackerModule { }
