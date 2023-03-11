import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSystemConfigComponent } from './components/game-system-config/game-system-config.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GameSystemSelectComponent } from './components/game-system-select/game-system-select.component';
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";



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
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule
  ]
})
export class GameSystemModule { }
