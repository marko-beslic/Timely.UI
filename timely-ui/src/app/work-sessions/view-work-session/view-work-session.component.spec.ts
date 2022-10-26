import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkSessionComponent } from './view-work-session.component';

describe('ViewWorkSessionComponent', () => {
  let component: ViewWorkSessionComponent;
  let fixture: ComponentFixture<ViewWorkSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWorkSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWorkSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
