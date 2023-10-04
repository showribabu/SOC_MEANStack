import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowriComponent } from './showri.component';

describe('ShowriComponent', () => {
  let component: ShowriComponent;
  let fixture: ComponentFixture<ShowriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowriComponent]
    });
    fixture = TestBed.createComponent(ShowriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
