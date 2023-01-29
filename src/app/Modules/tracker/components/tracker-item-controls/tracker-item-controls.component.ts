import { Component } from '@angular/core';
import {TrackerService} from "@modules/tracker/services/tracker.service";
import {TrackerItem} from "@modules/tracker/models/tracker-item.model";

@Component({
  selector: 'app-tracker-item-controls',
  templateUrl: './tracker-item-controls.component.html',
  styleUrls: ['./tracker-item-controls.component.scss']
})
export class TrackerItemControlsComponent {

  currentItem: TrackerItem = { name: '', health: 0, order: 0 }
  constructor(private trackerService: TrackerService) {
  }

  addItem(): void {
    this.trackerService.addItem(this.currentItem);
    this.currentItem = { name: '', health: 0, order: 0 };
  }
}
