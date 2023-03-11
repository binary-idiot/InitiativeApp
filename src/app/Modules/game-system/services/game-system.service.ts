import {Injectable} from '@angular/core';
import {GameSystem} from "@shared/models/game-system.model";
import {ItemFieldType} from "@shared/models/item.schema";

@Injectable({
  providedIn: 'root'
})
export class GameSystemService {

  loadSystems(): GameSystem[] {
    return [
      {
        key: 0,
        name: 'd&d',
        itemModel: {
          nameField: {
            label: 'Name',
            defaultValue: ''
          },
          orderField: {
            label: 'Order',
            defaultValue: 1
          },
          dataFields: [
            {
              key: 0,
              label: 'Health',
              type: ItemFieldType.Number,
              defaultValue: 0,
              required: true
            },
            {
              key: 1,
              label: 'Armor',
              type: ItemFieldType.Number,
              defaultValue: 0,
              required: true
            }
          ]
        }
      },

      {
        key: 1,
        name: 'alt d&d',
        itemModel: {
          nameField: {
            label: 'Player',
            defaultValue: ''
          },
          orderField: {
            label: 'Initiative',
            defaultValue: 1
          },
          dataFields: [
            {
              key: 0,
              label: 'HP',
              type: ItemFieldType.Number,
              defaultValue: 0,
              required: true
            },
            {
              key: 1,
              label: 'AC',
              type: ItemFieldType.Number,
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
      name: 'New System',
      itemModel: {
        nameField: {
          label: 'Name',
          defaultValue: ''
        },
        orderField: {
          label: 'Order',
          defaultValue: 0
        },
        dataFields: []
      }
    }
  }

  constructor() { }
}
