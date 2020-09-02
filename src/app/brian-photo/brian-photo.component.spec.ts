import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrianPhotoComponent } from './brian-photo.component';

describe('BrianPhotoComponent', () => {
  let component: BrianPhotoComponent;
  let fixture: ComponentFixture<BrianPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrianPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrianPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
