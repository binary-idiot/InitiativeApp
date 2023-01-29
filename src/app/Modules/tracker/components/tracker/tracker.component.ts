import { Component } from '@angular/core';
import {TrackerService} from "@modules/tracker/services/tracker.service";

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent {

  constructor(public trackerService: TrackerService) {
  }
}
