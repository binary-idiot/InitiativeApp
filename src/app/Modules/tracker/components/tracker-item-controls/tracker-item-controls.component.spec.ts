import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerItemControlsComponent } from './tracker-item-controls.component';

describe('TrackerItemControlsComponent', () => {
  let component: TrackerItemControlsComponent;
  let fixture: ComponentFixture<TrackerItemControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerItemControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerItemControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
