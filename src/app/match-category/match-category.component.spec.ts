import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCategoryComponent } from './match-category.component';

describe('MatchCategoryComponent', () => {
  let component: MatchCategoryComponent;
  let fixture: ComponentFixture<MatchCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchCategoryComponent]
    });
    fixture = TestBed.createComponent(MatchCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
