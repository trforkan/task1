import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnhovertrialComponent } from './onhovertrial.component';

describe('OnhovertrialComponent', () => {
  let component: OnhovertrialComponent;
  let fixture: ComponentFixture<OnhovertrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnhovertrialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnhovertrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
