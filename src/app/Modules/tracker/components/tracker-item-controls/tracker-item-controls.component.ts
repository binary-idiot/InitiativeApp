import {Component, OnInit} from '@angular/core';
import {TrackerService} from "@modules/tracker/services/tracker.service";
import {TrackerItem} from "@shared/models/tracker-item.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tracker-item-controls',
  templateUrl: './tracker-item-controls.component.html',
  styleUrls: ['./tracker-item-controls.component.scss']
})
export class TrackerItemControlsComponent implements OnInit{
  itemForm: FormGroup;
  constructor(
    private trackerService: TrackerService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.itemForm = this.fb.nonNullable.group<TrackerItem>({
      name: '',
      health: 0,
      order: 0
    })
  }


  addItem(): void {
    this.trackerService.addItem(this.itemForm.value);
    this.itemForm.reset()
  }

}
