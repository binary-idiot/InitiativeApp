import {Injectable} from "@angular/core";
import {Select} from "@ngxs/store";
import {GameSystemState} from "@modules/game-system/store/game-system.state";
import {Observable} from "rxjs";
import {GameSystem} from "@shared/models/game-system.model";

@Injectable({
  providedIn: 'root'
})
export class GameSystemFacade {
  @Select(GameSystemState.selectedSystem) selectedSystem$: Observable<GameSystem>;
  @Select(GameSystemState.systems) systems$: Observable<GameSystem[]>
}
