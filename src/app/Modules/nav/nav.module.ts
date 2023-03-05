import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MenubarModule} from "primeng/menubar";
import {GameSystemModule} from "@modules/game-system/game-system.module";



@NgModule({
  declarations: [

    TopNavComponent
  ],
  exports: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    GameSystemModule
  ]
})
export class NavModule { }
