import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {GameSystem} from "@shared/models/game-system.model";
import {TrackerItemDataFieldType} from "@shared/models/tracker-item.schema";

@Injectable({
  providedIn: 'root'
})
export class GameSystemService {

  private systems$: BehaviorSubject<GameSystem[]> = new BehaviorSubject<GameSystem[]>([
    {
      systemName: 'd&d',
      itemModel: {
        dataFields: [
          {
            name: 'name',
            type: TrackerItemDataFieldType.text,
            defaultValue: ''
          },
          {
            name: 'Health',
            type: TrackerItemDataFieldType.number,
            defaultValue: 0
          },
          {
            name: 'Order',
            type: TrackerItemDataFieldType.number,
            defaultValue: 0
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
