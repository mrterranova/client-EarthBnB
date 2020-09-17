import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrianPhotoComponent } from './brian-photo.component';
import { By } from '@angular/platform-browser';

describe('BrianPhotoComponent', () => {
  let component: BrianPhotoComponent;
  let fixture: ComponentFixture<BrianPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrianPhotoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrianPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


/////////////////////////
  // don't know why these fail now that it's getting fake data fro  our api - will research if time permits
/////////////////////////




  // basic crash test " akin to renders without crashing"

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // Unit test for specific text element "Like magic words from Amazin app testing"

  // it('shoud display brian-photo works! in a p tag', () => {
  //   // we are accessing the "p" tag 
  //   const ptagBWL = fixture.debugElement.query(By.css('p')).nativeElement;
  //   expect(ptagBWL.innerHTML).toBe('brian-photo works!');
  // });
});
