import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InplayPopupComponent } from './inplay-popup.component';

describe('InplayPopupComponent', () => {
  let component: InplayPopupComponent;
  let fixture: ComponentFixture<InplayPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InplayPopupComponent]
    });
    fixture = TestBed.createComponent(InplayPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
