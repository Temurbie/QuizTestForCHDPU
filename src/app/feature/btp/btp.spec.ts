import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTP } from './btp';

describe('BTP', () => {
  let component: BTP;
  let fixture: ComponentFixture<BTP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BTP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BTP);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
