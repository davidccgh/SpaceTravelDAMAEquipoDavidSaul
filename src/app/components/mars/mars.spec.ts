import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mars } from './mars';

describe('Mars', () => {
  let component: Mars;
  let fixture: ComponentFixture<Mars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mars],
    }).compileComponents();

    fixture = TestBed.createComponent(Mars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
