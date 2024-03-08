import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombaineComponent } from './combaine.component';

describe('CombaineComponent', () => {
  let component: CombaineComponent;
  let fixture: ComponentFixture<CombaineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombaineComponent]
    });
    fixture = TestBed.createComponent(CombaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
