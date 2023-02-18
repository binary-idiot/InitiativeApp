export enum TrackerItemDataFieldType {
  text,
  number
}

export interface TrackerItemDataFieldSchema {
  fieldName: string;
  fieldType: TrackerItemDataFieldType
}

export interface TrackerItemSchema {
  // itemName: string;
  dataFields: TrackerItemDataFieldSchema[];
}

