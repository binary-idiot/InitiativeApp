import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSystemConfigSectionComponent } from './game-system-config-section.component';

describe('GameSystemConfigComponent', () => {
  let component: GameSystemConfigSectionComponent;
  let fixture: ComponentFixture<GameSystemConfigSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSystemConfigSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSystemConfigSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
