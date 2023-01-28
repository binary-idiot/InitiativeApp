import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '@modules/welcome/components/welcome/welcome.component';
import {WelcomeModule} from "@modules/welcome/welcome.module";

const routes: Routes = [
  { path: '', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    WelcomeModule
  ]
})
export class AppRoutingModule { }
