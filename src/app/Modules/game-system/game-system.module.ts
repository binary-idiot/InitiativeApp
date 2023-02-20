import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSystemConfigComponent } from './components/game-system-config/game-system-config.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        GameSystemConfigComponent
    ],
    exports: [
        GameSystemConfigComponent
    ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ]
})
export class GameSystemModule { }
