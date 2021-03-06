import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesModalComponent } from './expenses-modal.component';

describe('ExpensesModalComponent', () => {
  let component: ExpensesModalComponent;
  let fixture: ComponentFixture<ExpensesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
