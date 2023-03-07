export enum ItemDataFieldType {
  Text,
  Number
}

export type ItemDataFieldValueType = string | Number;

export interface ItemPrimaryFieldSchema<T> {
  label: string,
  defaultValue: T
}

export interface ItemDataFieldSchema {
  key: number;
  label: string;
  type: ItemDataFieldType;
  defaultValue: ItemDataFieldValueType;
  required: boolean;
}

export interface ItemSchema {
  nameField: ItemPrimaryFieldSchema<string>;
  orderField: ItemPrimaryFieldSchema<number>;
  dataFields: ItemDataFieldSchema[];
}

