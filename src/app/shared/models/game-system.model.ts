import {ItemModelForm, ItemSchema} from "./item.schema";
import {FormControl, FormGroup} from "@angular/forms";

export interface GameSystem {
  key: number;
  name: string;
  itemModel: ItemSchema;
}

export interface GameSystemForm {
  key: FormControl<number>;
  name: FormControl<string>;
  itemModel: FormGroup<ItemModelForm>;
}
