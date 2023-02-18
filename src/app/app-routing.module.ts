import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrackerModule} from "@modules/tracker/tracker.module";
import {TrackerPage} from "@modules/tracker/pages/tracker-page/tracker-page.component";

const routes: Routes = [
  { path: '', component: TrackerPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    TrackerModule
  ]
})
export class AppRoutingModule { }
