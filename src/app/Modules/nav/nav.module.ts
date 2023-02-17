import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MenubarModule} from "primeng/menubar";



@NgModule({
  declarations: [

    TopNavComponent
  ],
  exports: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class NavModule { }
