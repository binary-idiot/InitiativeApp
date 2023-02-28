import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSystemConfigComponent } from './game-system-config.component';

describe('GameSystemConfigComponent', () => {
  let component: GameSystemConfigComponent;
  let fixture: ComponentFixture<GameSystemConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSystemConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSystemConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
