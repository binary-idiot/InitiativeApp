import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
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
            fieldName: 'name',
            fieldType: TrackerItemDataFieldType.text
          },
          {
            fieldName: 'HP',
            fieldType: TrackerItemDataFieldType.number
          },
          {
            fieldName: 'Order',
            fieldType: TrackerItemDataFieldType.number
          }
        ]
      }
    }
  ])

  getSystems(): Observable<GameSystem[]> {
    return this.systems$.asObservable();
  }

  constructor() { }
}
