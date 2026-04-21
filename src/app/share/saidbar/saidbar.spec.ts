import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saidbar } from './saidbar';

describe('Saidbar', () => {
  let component: Saidbar;
  let fixture: ComponentFixture<Saidbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saidbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Saidbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
