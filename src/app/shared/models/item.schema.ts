export enum ItemDataFieldType {
  Text,
  Number
}

export type ItemDataFieldValueType = string | Number;

export interface ItemDataFieldSchema {
  key: number;
  label: string;
  type: ItemDataFieldType;
  defaultValue: ItemDataFieldValueType;
  required: boolean;
}

export interface ItemSchema {
  nameField: { label: string, defaultValue: string };
  dataFields: ItemDataFieldSchema[];
}

