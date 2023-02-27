import {Injectable} from '@angular/core';
import {GameSystem} from "@shared/models/game-system.model";
import {ItemDataFieldType} from "@shared/models/item.schema";

@Injectable({
  providedIn: 'root'
})
export class GameSystemService {

  loadSystems(): GameSystem[] {
    return [
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
    ]
  }

  getNewSystem(): GameSystem {
    return {
      key: -1,
      systemName: 'New System',
      itemModel: {
        nameField: {
          label: 'Name',
          defaultValue: ''
        },
        dataFields: []
      }
    }
  }

  constructor() { }
}
