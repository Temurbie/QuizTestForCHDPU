import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperTest } from './wrapper-test';

describe('WrapperTest', () => {
  let component: WrapperTest;
  let fixture: ComponentFixture<WrapperTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
