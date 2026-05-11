import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { PRODUCTS } from '../constants/products';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCart();
  }

  // Obtener todos los productos (instantáneo, sin HTTP)
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  // Obtener un producto específico
  getProduct(id: number): Observable<Product | undefined> {
    return of(PRODUCTS.find(p => p.id === id));
  }

  // Agregar producto al carrito
  addToCart(product: Product): void {
    const currentCart = this.cartSubject.value;
    const existingItem = currentCart.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentCart.push({ product, quantity: 1 });
    }

    this.cartSubject.next([...currentCart]);
    this.saveCart();
  }

  // Eliminar producto del carrito
  removeFromCart(productId: number): void {
    const updatedCart = this.cartSubject.value.filter(
      item => item.product.id !== productId
    );
    this.cartSubject.next(updatedCart);
    this.saveCart();
  }

  // Actualizar cantidad en el carrito
  updateQuantity(productId: number, quantity: number): void {
    const currentCart = this.cartSubject.value;
    const item = currentCart.find(i => i.product.id === productId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.cartSubject.next([...currentCart]);
        this.saveCart();
      }
    }
  }

  // Obtener carrito actual
  getCart(): CartItem[] {
    return this.cartSubject.value;
  }

  // Obtener total del carrito
  getCartTotal(): number {
    return this.cartSubject.value.reduce(
      (total, item) => total + (item.product.price * item.quantity),
      0
    );
  }

  // Limpiar carrito
  clearCart(): void {
    this.cartSubject.next([]);
    this.saveCart();
  }

  // Guardar carrito en localStorage
  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartSubject.value));
  }

  // Cargar carrito de localStorage
  private loadCart(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        this.cartSubject.next(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }
}
