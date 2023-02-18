import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfigModule} from "@modules/config/config.module";
import {TrackerPage} from "@modules/tracker/pages/tracker-page/tracker-page.component";
import {ConfigPage} from "@modules/config/pages/config-page/config-page.component";
import {TrackerModule} from "@modules/tracker/tracker.module";

const routes: Routes = [
  { path: 'tracker', component: TrackerPage },
  { path: 'config', component: ConfigPage },
  { path: '', redirectTo: 'tracker', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    TrackerModule,
    ConfigModule
  ]
})
export class AppRoutingModule { }
