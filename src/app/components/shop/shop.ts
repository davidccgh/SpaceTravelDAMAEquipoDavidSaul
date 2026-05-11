import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreService, Product, CartItem } from '../../services/store.service';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, FormsModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop implements OnInit {
  products: Product[] = [];
  cartItems: CartItem[] = [];
  loading = false;
  error: string | null = null;
  cartVisible = false;
  filteredProducts: Product[] = [];
  searchTerm = '';

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.storeService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  loadProducts(): void {
    this.loading = true;
    this.error = null;
    
    this.storeService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.filterProducts();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading products:', err);
        this.error = 'Error al cargar los productos. Intenta más tarde.';
        this.loading = false;
      }
    });
  }

  // Productos de ejemplo como respaldo
  private loadFallbackProducts(): void {
    this.products = [
      {
        id: 1,
        name: 'Camiseta Space Hawkings Edición Limitada',
        description: 'Camiseta premium de algodón 100% con diseño exclusivo',
        price: 24.99,
        image: '/img/camiseta-space.png',
        stock: 30
      },
      {
        id: 2,
        name: 'Gorro Astronauta Ajustable',
        description: 'Gorro de calidad con ajuste trasero',
        price: 16.99,
        image: '/img/gorro-astronauta.png',
        stock: 25
      },
      {
        id: 3,
        name: 'Taza Marte 350ml',
        description: 'Taza de cerámica de alta calidad',
        price: 12.99,
        image: '/img/taza-marte.png',
        stock: 40
      }
    ];
    this.filterProducts();
  }

  filterProducts(): void {
    if (!this.searchTerm.trim()) {
      this.filteredProducts = [...this.products];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      );
    }
  }

  onSearchChange(): void {
    this.filterProducts();
  }

  addToCart(product: Product): void {
    if (product.stock > 0) {
      this.storeService.addToCart(product);
      // Feedback visual
      alert(`${product.name} añadido al carrito!`);
    }
  }

  toggleCart(): void {
    this.cartVisible = !this.cartVisible;
  }

  removeFromCart(productId: number): void {
    this.storeService.removeFromCart(productId);
  }

  updateQuantity(productId: number, quantity: number): void {
    this.storeService.updateQuantity(productId, quantity);
  }

  getCartTotal(): number {
    return this.storeService.getCartTotal();
  }

  checkout(): void {
    if (this.cartItems.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    alert(`¡Compra realizada! Total: $${this.getCartTotal().toFixed(2)}`);
    this.storeService.clearCart();
    this.cartVisible = false;
  }

  getCartItemsCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}
