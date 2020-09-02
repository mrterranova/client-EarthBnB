import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostbuttonsandsercurityComponent } from './hostbuttonsandsercurity.component';

describe('HostbuttonsandsercurityComponent', () => {
  let component: HostbuttonsandsercurityComponent;
  let fixture: ComponentFixture<HostbuttonsandsercurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostbuttonsandsercurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostbuttonsandsercurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
