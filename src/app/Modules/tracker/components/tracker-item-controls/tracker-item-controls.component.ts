import {Component, OnDestroy, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  ItemDataFieldSchema,
  ItemDataFieldType,
  ItemSchema
} from "@shared/models/item.schema";
import {filter, Subscription} from "rxjs";
import {GameSystem} from "@shared/models/game-system.model";
import {TrackerService} from "@modules/tracker/services/tracker.service";
import {isNonNull} from "@shared/utils/type-utils";
import {GameSystemFacade} from "@modules/game-system/game-system.facade";


@Component({
  selector: 'app-tracker-item-controls',
  templateUrl: './tracker-item-controls.component.html',
  styleUrls: ['./tracker-item-controls.component.scss']
})
export class TrackerItemControlsComponent implements OnInit, OnDestroy{

  systemSub: Subscription;
  itemForm: FormGroup;
  itemSchema: ItemSchema;

  readonly fieldType = ItemDataFieldType;

  constructor(
    public systemFacade: GameSystemFacade,
    private trackerService: TrackerService) {
  }

  ngOnInit(): void {
    this.systemSub = this.systemFacade.selectedSystem$
      .pipe(
        filter(isNonNull)
      )
      .subscribe((system: GameSystem) => {
        this.itemSchema = system.itemModel;
        this.buildForm();
      })
  }

  buildForm() {
    const dataFields: { [key: number]: FormControl } = {};

    this.itemSchema.dataFields.forEach((field: ItemDataFieldSchema) => {
      dataFields[field.key] = (field.required)
        ? new FormControl(field.defaultValue, Validators.required)
        : new FormControl(field.defaultValue);
    });

    this.itemForm = new FormGroup({
      name: new FormControl(this.itemSchema.nameField.defaultValue, Validators.required),
      order: new FormControl(this.itemSchema.orderField.defaultValue, Validators.required),
      dataFields: new FormGroup(dataFields)
    });
  }

  addItem(): void {
    this.trackerService.addItem(this.itemForm.value);
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.systemSub.unsubscribe()
  }

}
