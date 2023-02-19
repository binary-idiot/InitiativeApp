import {Component, Input} from '@angular/core';
import {TrackerItem} from "@shared/models/tracker-item.model";
import {TrackerService} from "@modules/tracker/services/tracker.service";
import {GameSystemService} from "@modules/game-system/services/game-system.service";

@Component({
  selector: 'app-tracker-item',
  templateUrl: './tracker-item.component.html',
  styleUrls: ['./tracker-item.component.scss']
})
export class TrackerItemComponent {
  @Input() item: TrackerItem;

  constructor(
    public systemService: GameSystemService,
    private trackerService: TrackerService) {
  }

  removeItem(): void {
    this.trackerService.removeItem(this.item);
  }
}
