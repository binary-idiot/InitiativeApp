import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EnumKeyValPipe} from "@shared/pipes/enum-key-val.pipe";



@NgModule({
  declarations: [
    EnumKeyValPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EnumKeyValPipe
  ]
})
export class UtilitiesModule { }
