import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, switchMap, withLatestFrom} from "rxjs";
import {GameSystem} from "@shared/models/game-system.model";
import {ItemDataFieldType} from "@shared/models/item.schema";

@Injectable({
  providedIn: 'root'
})
export class GameSystemService {

  private selected$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private systems$: BehaviorSubject<GameSystem[]> = new BehaviorSubject<GameSystem[]>([
    {
      key: 0,
      systemName: 'd&d',
      itemModel: {
        nameField: {
          label: 'Name',
          defaultValue: ''
        },
        dataFields: [
          {
            key: 0,
            label: 'Health',
            type: ItemDataFieldType.Number,
            defaultValue: 0,
            required: true
          },
          {
            key: 1,
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

  selectedSystem(): Observable<GameSystem | null> {
    return this.systems$
      .pipe(
        withLatestFrom(this.selected$),
        switchMap(([systems, selected]) => {
          return of(systems.find(systems => systems.key === selected) ?? null)
        })
      )
  }

  constructor() { }
}
