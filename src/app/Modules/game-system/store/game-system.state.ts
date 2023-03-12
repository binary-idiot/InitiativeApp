import {Action, NgxsOnInit, Selector, State, StateContext, StateToken} from "@ngxs/store";
import {GameSystem} from "@shared/models/game-system.model";
import {GameSystemActions} from "@modules/game-system/store/game-system.actions";
import SetSelected = GameSystemActions.SetSelected;
import {Injectable} from "@angular/core";
import Init = GameSystemActions.Init;
import {GameSystemService} from "@modules/game-system/services/game-system.service";
import Save = GameSystemActions.Save;
import {insertItem, patch, updateItem} from "@ngxs/store/operators";

export interface GameSystemStateModel {
  systems: GameSystem[];
  selected: number | null;
}

export const GAME_SYSTEM_STATE_TOKEN = new StateToken<GameSystemStateModel>('game_system_state');

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

  @Selector([GameSystemState.systems])
  static maxKey(state: GameSystemStateModel, systems: GameSystem[]): number {
    return this.getMaxKey(systems);
  }

  @Action(Init)
  init({ setState }: StateContext<GameSystemStateModel>) {
    setState({
      systems: this.systemService.loadSystems(),
      selected: 0
    })
  }

  @Action(SetSelected)
  setSelected({ patchState, getState }: StateContext<GameSystemStateModel>, { payload }: SetSelected) {
    if (getState().systems[payload] !== undefined) {
      patchState({ selected: payload });
    }
  }

  @Action(Save)
  save({ setState, getState }: StateContext<GameSystemStateModel>, { payload }: Save){
    const systems = getState().systems;
    const systemIndex = systems
      .findIndex((system: GameSystem) => system.key === payload.key);
    let newSystem = false;

    if (systemIndex === -1 || payload.key === -1) {
      payload.key = GameSystemState.getMaxKey(systems) + 1;
      newSystem = true;
    }

    setState(
      patch({
        systems: ((newSystem)
          ? insertItem(payload)
          : updateItem(systemIndex, payload))
      })
    )
  }

  private static getMaxKey(systems: GameSystem[]): number {
    const max: number = Math.max(...systems.map((s: GameSystem) => s.key));
    return (max === -Infinity || Number.isNaN(max)) ? 0 : max;
  }
}
