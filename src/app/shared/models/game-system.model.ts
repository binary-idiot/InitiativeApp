import {ItemSchema} from "./item.schema";

export interface GameSystem {
  key: number;
  name: string;
  itemModel: ItemSchema;
}
