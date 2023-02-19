import {ItemDataFieldValueType} from "@shared/models/item.schema";

export interface TrackerItem {
  name: string;
  dataFields: { [key: number]: ItemDataFieldValueType}
}
