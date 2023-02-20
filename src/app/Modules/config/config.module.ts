import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigPage } from './pages/config-page/config-page.component';
import {AccordionModule} from "primeng/accordion";
import {GameSystemModule} from "@modules/game-system/game-system.module";



@NgModule({
  declarations: [
    ConfigPage
  ],
  imports: [
    CommonModule,
    AccordionModule,
    GameSystemModule
  ]
})
export class ConfigModule { }
