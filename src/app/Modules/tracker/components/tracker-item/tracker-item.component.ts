import {Component, Input} from '@angular/core';
import {TrackerItem} from "@shared/models/tracker-item.model";
import {TrackerService} from "@modules/tracker/services/tracker.service";
import {GameSystemFacade} from "@modules/game-system/game-system.facade";

@Component({
  selector: 'app-tracker-item',
  templateUrl: './tracker-item.component.html',
  styleUrls: ['./tracker-item.component.scss']
})
export class TrackerItemComponent {
  @Input() item: TrackerItem;

  constructor(
    public systemFacade: GameSystemFacade,
    private trackerService: TrackerService) {
  }

  removeItem(): void {
    this.trackerService.removeItem(this.item);
  }
}
