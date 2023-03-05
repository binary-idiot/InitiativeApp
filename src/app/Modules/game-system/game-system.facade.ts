import {Injectable} from "@angular/core";
import {Select, Store} from "@ngxs/store";
import {GameSystemState} from "@modules/game-system/store/game-system.state";
import {Observable} from "rxjs";
import {GameSystem} from "@shared/models/game-system.model";
import {GameSystemActions} from "@modules/game-system/store/game-system.actions";
import SetSelected = GameSystemActions.SetSelected;

@Injectable({
  providedIn: 'root'
})
export class  GameSystemFacade {
  @Select(GameSystemState.selectedSystem) selectedSystem$: Observable<GameSystem | null>;
  @Select(GameSystemState.systems) systems$: Observable<GameSystem[]>

  selected$: Observable<GameSystem | null>;

  constructor(
    private store: Store
  ) {}

  changeSystem(systemKey: number){
    this.store.dispatch(new SetSelected(systemKey));
  }
}
