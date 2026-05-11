import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Shop } from './shop';
import { StoreService } from '../../services/store.service';

describe('Shop', () => {
  let component: Shop;
  let fixture: ComponentFixture<Shop>;
  let storeService: StoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shop],
      providers: [StoreService]
    }).compileComponents();

    fixture = TestBed.createComponent(Shop);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on init', () => {
    expect(component.products.length).toBeGreaterThan(0);
  });

  it('should add product to cart', () => {
    const testProduct = component.products[0];
    component.addToCart(testProduct);
    expect(component.cartItems.length).toBeGreaterThan(0);
  });

  it('should calculate cart total correctly', () => {
    const testProduct = component.products[0];
    component.addToCart(testProduct);
    const expected = testProduct.price;
    expect(component.getCartTotal()).toBeCloseTo(expected, 2);
  });
});
