import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {TrackerModule} from "@modules/tracker/tracker.module";



@NgModule({
  declarations: [
    WelcomeComponent
  ],
    imports: [
        CommonModule,
        TrackerModule
    ]
})
export class WelcomeModule { }
