export namespace GameSystemActions {

  export class Init {
    static readonly type = '[GameSystem] Init';
  }
  export class SetSelected {
    static readonly  type = '[GameSystem] Set Selected';
    constructor(public payload: number) {
    }
  }
}
