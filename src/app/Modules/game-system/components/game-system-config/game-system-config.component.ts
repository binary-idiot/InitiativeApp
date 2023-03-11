import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {GameSystemService} from "@modules/game-system/services/game-system.service";
import {BehaviorSubject, Subscription, take} from "rxjs";
import {GameSystem, GameSystemForm} from "@shared/models/game-system.model";
import {GameSystemFacade} from "@modules/game-system/game-system.facade";
import {nameOf} from "@shared/utils/type-utils";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ItemDataFieldSchema, ItemFieldType} from "@shared/models/item.schema";





@Component({
  selector: 'app-game-system-config',
  templateUrl: './game-system-config.component.html',
  styleUrls: ['./game-system-config.component.scss']
})
export class GameSystemConfigComponent implements OnInit, OnDestroy {
  fieldType = ItemFieldType;
  optionLabel: string = nameOf<GameSystem>('name');
  systemSub: Subscription;
  systems: GameSystem[];
  systemForm: FormGroup<GameSystemForm>;
  selectedSystem$: BehaviorSubject<GameSystem | null> = new BehaviorSubject<GameSystem | null>(null);

  constructor(
    public systemService: GameSystemService,
    public systemFacade: GameSystemFacade,
    private fb: FormBuilder,
    private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.systemSub = this.systemFacade.systems$
      .subscribe((systems: GameSystem[]) => {
        this.systems = [...systems] ?? [];
        this.systems.push(this.systemService.getNewSystem());
    });

    this.systemFacade.selectedSystem$
      .pipe(take(1))
      .subscribe((system: GameSystem | null) => {
        this.selectedSystem$.next(system);

        if (system !== null){
          this.buildForm(system);
        }
      });
  }

  buildForm(system: GameSystem): void {
    const dataFields = system.itemModel.dataFields
      .map((df: ItemDataFieldSchema) => this.fb.nonNullable.group({
        key: df.key,
        label: df.label,
        type: df.type,
        defaultValue: df.defaultValue,
        required: df.required
      }))

    this.systemForm = this.fb.nonNullable.group({
      key: system.key,
      name: system.name,
      itemModel: this.fb.nonNullable.group({
        nameField: this.fb.nonNullable.group({
          label: system.itemModel.nameField.label,
          defaultValue: system.itemModel.nameField.defaultValue
        }),
        orderField: this.fb.nonNullable.group({
          label: system.itemModel.orderField.label,
          defaultValue: system.itemModel.orderField.defaultValue
        }),
        dataFields: this.fb.nonNullable.array(dataFields)
      })
    })

    this.changeDetector.detectChanges();
  }

  saveSystem(): void {
  }

  ngOnDestroy(): void {
   this.systemSub.unsubscribe();
  }

}
