import {ItemDataFieldValueType} from "@shared/models/item.schema";

export interface TrackerItem {
  name: string;
  order: number;
  dataFields: { [key: number]: ItemDataFieldValueType}
}
