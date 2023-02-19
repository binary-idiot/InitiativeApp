import {ItemSchema} from "./item.schema";

export interface GameSystem {
  systemName: string;
  itemModel: ItemSchema;
}
