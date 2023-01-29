import {Component, Input} from '@angular/core';
import {TrackerItem} from "@modules/tracker/models/tracker-item.model";
import {TrackerService} from "@modules/tracker/services/tracker.service";

@Component({
  selector: 'app-tracker-item',
  templateUrl: './tracker-item.component.html',
  styleUrls: ['./tracker-item.component.scss']
})
export class TrackerItemComponent {
  @Input() item: TrackerItem;

  constructor(private trackerService: TrackerService) {
  }

  removeItem(): void {
    this.trackerService.removeItem(this.item);
  }
}
