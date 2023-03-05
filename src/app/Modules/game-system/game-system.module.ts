import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSystemConfigComponent } from './components/game-system-config/game-system-config.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import { GameSystemSelectComponent } from './components/game-system-select/game-system-select.component';



@NgModule({
    declarations: [
        GameSystemConfigComponent,
        GameSystemSelectComponent
    ],
  exports: [
    GameSystemConfigComponent,
    GameSystemSelectComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ]
})
export class GameSystemModule { }
