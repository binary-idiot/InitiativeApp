import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameSystemService} from "@modules/game-system/services/game-system.service";
import {Observable, of, Subscription, switchMap, take} from "rxjs";
import {GameSystem} from "@shared/models/game-system.model";

@Component({
  selector: 'app-game-system-config',
  templateUrl: './game-system-config.component.html',
  styleUrls: ['./game-system-config.component.scss']
})
export class GameSystemConfigComponent implements OnInit, OnDestroy {
  systemSub: Subscription;
  systems: GameSystem[];
  selectedSystem$: Observable<GameSystem | null>;
  constructor(
    public systemService: GameSystemService) {
  }

  ngOnInit(): void {
    this.systemSub = this.systemService.systems()
      .subscribe((systems: GameSystem[]) => {
        this.systems = systems;
        this.systems.push(this.systemService.getNewSystem());
    });

    this.selectedSystem$ = this.systemService.selectedSystem()
      .pipe(
        take(1),
        switchMap((system: GameSystem | null) => {
          return of(system);
        })
      )
  }

  ngOnDestroy(): void {
   this.systemSub.unsubscribe();
  }

}
