import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulsComponent } from './articuls.component';

describe('ArticulsComponent', () => {
  let component: ArticulsComponent;
  let fixture: ComponentFixture<ArticulsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticulsComponent]
    });
    fixture = TestBed.createComponent(ArticulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
