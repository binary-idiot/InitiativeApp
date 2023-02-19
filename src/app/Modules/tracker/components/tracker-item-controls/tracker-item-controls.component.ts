import {Component, OnDestroy, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  TrackerItemDataFieldSchema,
  TrackerItemDataFieldType,
  TrackerItemSchema
} from "@shared/models/tracker-item.schema";
import {GameSystemService} from "@modules/game-system/services/game-system.service";
import {Subscription} from "rxjs";
import {GameSystem} from "@shared/models/game-system.model";


@Component({
  selector: 'app-tracker-item-controls',
  templateUrl: './tracker-item-controls.component.html',
  styleUrls: ['./tracker-item-controls.component.scss']
})
export class TrackerItemControlsComponent implements OnInit, OnDestroy{

  systemSub: Subscription;
  itemForm: FormGroup;
  itemSchema: TrackerItemSchema;

  readonly fieldType = TrackerItemDataFieldType;

  constructor(
    // private trackerService: TrackerService,
    public systemService: GameSystemService) {
  }

  ngOnInit(): void {
    this.systemSub = this.systemService.selectedSystem()
      .subscribe((system: GameSystem) => {
        this.itemSchema = system.itemModel;
        this.buildForm();
      })
  }

  buildForm() {
    const dataFields: { [key: string]: FormControl } = {};

    this.itemSchema.dataFields.forEach((field: TrackerItemDataFieldSchema) => {
      dataFields[field.name] = new FormControl(field.defaultValue, Validators.required);
    });

    this.itemForm = new FormGroup(dataFields);
  }

  addItem(): void {
    // this.trackerService.addItem(this.itemForm.value);
    const val = this.itemForm.value;
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.systemSub.unsubscribe()
  }

}
