export enum TrackerItemDataFieldType {
  text,
  number
}

export interface TrackerItemDataFieldSchema {
  name: string;
  type: TrackerItemDataFieldType;
  defaultValue: unknown;
}

export interface TrackerItemSchema {
  // itemName: string;
  dataFields: TrackerItemDataFieldSchema[];
}

