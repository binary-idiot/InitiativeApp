import {ItemSchema} from "./item.schema";

export interface GameSystem {
  key: number;
  systemName: string;
  itemModel: ItemSchema;
}
