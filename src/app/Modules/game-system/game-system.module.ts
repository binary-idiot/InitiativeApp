import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSystemConfigSectionComponent } from './components/game-system-config/game-system-config-section.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        GameSystemConfigSectionComponent
    ],
    exports: [
        GameSystemConfigSectionComponent
    ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ]
})
export class GameSystemModule { }
