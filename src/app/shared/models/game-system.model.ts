import {TrackerItemSchema} from "./tracker-item.schema";

export interface GameSystem {
  systemName: string;
  itemModel: TrackerItemSchema;
}
