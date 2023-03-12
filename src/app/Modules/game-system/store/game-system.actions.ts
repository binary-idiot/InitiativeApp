import {GameSystem} from "@shared/models/game-system.model";

export namespace GameSystemActions {

  export class Init {
    static readonly type = '[GameSystem] Init';
  }
  export class SetSelected {
    static readonly  type = '[GameSystem] Set Selected';
    constructor(public payload: number) {
    }
  }

  export class Save {
    static readonly type = '[GameSystem] Save';
    constructor(public payload: GameSystem) {
    }
  }
}
