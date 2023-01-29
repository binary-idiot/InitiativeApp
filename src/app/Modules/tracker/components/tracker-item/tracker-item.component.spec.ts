import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerItemComponent } from './tracker-item.component';

describe('TrackerItemComponent', () => {
  let component: TrackerItemComponent;
  let fixture: ComponentFixture<TrackerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
