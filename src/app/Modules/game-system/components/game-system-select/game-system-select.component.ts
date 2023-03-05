import {Component} from '@angular/core';
import {GameSystemFacade} from "@modules/game-system/game-system.facade";
import {nameOf} from "@shared/utils/type-utils";
import {GameSystem} from "@shared/models/game-system.model";

@Component({
  selector: 'app-game-system-select',
  templateUrl: './game-system-select.component.html',
  styleUrls: ['./game-system-select.component.scss']
})
export class GameSystemSelectComponent {

  valueName: string = nameOf<GameSystem>('key');
  labelName: string = nameOf<GameSystem>('name');

  constructor(public systemFacade: GameSystemFacade) {
  }

}
