import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MptsComponent } from './mpts.component';

describe('MptsComponent', () => {
  let component: MptsComponent;
  let fixture: ComponentFixture<MptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
