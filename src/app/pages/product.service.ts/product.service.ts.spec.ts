import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServiceTs } from './product.service.ts';

describe('ProductServiceTs', () => {
  let component: ProductServiceTs;
  let fixture: ComponentFixture<ProductServiceTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductServiceTs],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductServiceTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
