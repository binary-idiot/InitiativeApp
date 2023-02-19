import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {GameSystem} from "@shared/models/game-system.model";
import {ItemDataFieldType} from "@shared/models/item.schema";

@Injectable({
  providedIn: 'root'
})
export class GameSystemService {

  private systems$: BehaviorSubject<GameSystem[]> = new BehaviorSubject<GameSystem[]>([
    {
      systemName: 'd&d',
      itemModel: {
        nameField: {
          label: 'Name',
          defaultValue: ''
        },
        dataFields: [
          {
            key: 1,
            label: 'Health',
            type: ItemDataFieldType.Number,
            defaultValue: 0,
            required: true
          },
          {
            key: 2,
            label: 'Order',
            type: ItemDataFieldType.Number,
            defaultValue: 0,
            required: true
          }
        ]
      }
    }
  ])

  systems(): Observable<GameSystem[]> {
    return this.systems$.asObservable();
  }

  selectedSystem(): Observable<GameSystem> {
    return this.systems()
      .pipe(
        map((systems: GameSystem[]) => systems[0])
      );
  }

  constructor() { }
}
