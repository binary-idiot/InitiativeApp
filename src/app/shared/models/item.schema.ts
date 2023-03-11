import {FormArray, FormControl, FormGroup} from "@angular/forms";

export enum ItemFieldType {
  Text,
  Number
}

export type ItemFieldValueType = string | number;

export interface ItemPrimaryFieldSchema<T> {
  label: string,
  defaultValue: T
}

export interface ItemDataFieldSchema {
  key: number;
  label: string;
  type: ItemFieldType;
  defaultValue: ItemFieldValueType;
  required: boolean;
}

export interface ItemSchema {
  nameField: ItemPrimaryFieldSchema<string>;
  orderField: ItemPrimaryFieldSchema<number>;
  dataFields: ItemDataFieldSchema[];
}

export interface ItemPrimaryFieldForm<T> {
  label: FormControl<string>;
  defaultValue: FormControl<T>
}

export interface ItemDataFieldForm {
  key: FormControl<number>;
  label: FormControl<string>;
  type: FormControl<any>;
  defaultValue: FormControl<ItemFieldValueType>
  required: FormControl<boolean>;
}

export interface ItemModelForm {
  nameField: FormGroup<ItemPrimaryFieldForm<string>>;
  orderField: FormGroup<ItemPrimaryFieldForm<number>>;
  dataFields: FormArray<FormGroup<ItemDataFieldForm>>;
}
