import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSystemSelectComponent } from './game-system-select.component';

describe('GameSystemSelectComponent', () => {
  let component: GameSystemSelectComponent;
  let fixture: ComponentFixture<GameSystemSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSystemSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSystemSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
