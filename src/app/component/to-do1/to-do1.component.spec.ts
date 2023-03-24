import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDo1Component } from './to-do1.component';

describe('ToDo1Component', () => {
  let component: ToDo1Component;
  let fixture: ComponentFixture<ToDo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
