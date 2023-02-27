import {Action, NgxsOnInit, Selector, State, StateContext, StateToken} from "@ngxs/store";
import {GameSystem} from "@shared/models/game-system.model";
import {GameSystemActions} from "@modules/game-system/store/game-system.actions";
import SetSelected = GameSystemActions.SetSelected;
import {Injectable} from "@angular/core";
import Init = GameSystemActions.Init;
import {GameSystemService} from "@modules/game-system/services/game-system.service";

export interface GameSystemStateModel {
  systems: GameSystem[];
  selected: number | null;
}

export const GAME_SYSTEM_STATE_TOKEN = new StateToken<GameSystemStateModel>('GameSystemState');

@State<GameSystemStateModel>({
  name: GAME_SYSTEM_STATE_TOKEN,
  defaults: {
    systems: [],
    selected: null
  }
})
@Injectable()
export class GameSystemState implements NgxsOnInit {

  constructor(private systemService: GameSystemService) {}

  ngxsOnInit(ctx: StateContext<any>): void {
    ctx.dispatch(new Init());
  }

  @Selector()
  static selectedSystem(state: GameSystemStateModel): GameSystem | null {
    return (state.selected !== null)? state.systems[state.selected] : null;
  }

  @Selector()
  static systems(state: GameSystemStateModel): GameSystem[] {
    return state.systems;
  }

  @Action(Init)
  init({ setState }: StateContext<GameSystemStateModel>) {
    setState({
      systems: this.systemService.loadSystems(),
      selected: 0
    })
  }

  @Action(SetSelected)
  setSelected({ patchState, getState }: StateContext<GameSystemStateModel>, { payload }: SetSelected){
    if (getState().systems[payload] !== undefined) {
      patchState({ selected: payload });
    }
  }
}
