import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Num4Component } from './num4.component';

describe('Num4Component', () => {
  let component: Num4Component;
  let fixture: ComponentFixture<Num4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Num4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Num4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
