# 🛒 Guía del Componente de Tienda de Merchandising

## Descripción General
El nuevo componente **Shop** proporciona una tienda de merchandising totalmente integrada con una API externa para obtener productos en tiempo real.

## Características

### ✨ Funcionalidades Principales
- **Catálogo de Productos**: Obtiene productos desde una API
- **Búsqueda**: Filtra productos por nombre o descripción
- **Carrito de Compras**: Gestión completa del carrito
- **Persistencia**: El carrito se guarda en localStorage
- **Responsive**: Diseño adaptable a dispositivos móviles
- **Manejo de Errores**: Productos de respaldo en caso de fallo de API

## Estructura de Archivos

```
src/app/
├── components/
│   └── shop/
│       ├── shop.ts              # Lógica del componente
│       ├── shop.html            # Template
│       ├── shop.css             # Estilos
│       └── shop.spec.ts         # Pruebas unitarias
└── services/
    └── store.service.ts         # Servicio para la API y carrito
```

## Configuración

### 1. API Utilizada
Por defecto, el componente utiliza **Fake Store API** (https://fakestoreapi.com/products)
- **Ventaja**: No requiere autenticación
- **Ideal para**: Desarrollo y pruebas

### 2. Integración en la Ruta
La tienda se accede en la ruta: `/shop`

En [app.routes.ts](../app.routes.ts) ya está registrada:
```typescript
{ path: 'shop', component: Shop }
```

### 3. Configuración de HttpClient
En [app.config.ts](../app.config.ts) se proporciona:
```typescript
provideHttpClient()
```

## Cómo Personalizar la API

### Cambiar la URL de la API
Edita [store.service.ts](../../services/store.service.ts):

```typescript
private apiUrl = 'https://tu-api.com/productos';
```

### Estructura Esperada de la API
La API debe retornar un array de objetos con esta estructura:
```typescript
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}
```

### Adaptar la Respuesta de la API
Si tu API devuelve datos en diferente formato, modifica el método `loadProducts()` en [shop.ts](shop.ts):

```typescript
loadProducts(): void {
  this.loading = true;
  this.storeService.getProducts().subscribe({
    next: (data: any[]) => {
      // Adapta aquí según tu estructura de datos
      this.products = data.map(item => ({
        id: item.id,
        name: item.title,
        description: item.description,
        price: item.price,
        image: item.image,
        stock: item.stock
      }));
      // ...
    }
  });
}
```

## Servicios Disponibles (StoreService)

### Métodos para Productos
```typescript
getProducts(): Observable<any[]>          // Obtener todos los productos
getProduct(id: number): Observable<any>   // Obtener un producto específico
```

### Métodos para el Carrito
```typescript
addToCart(product: Product): void           // Agregar producto
removeFromCart(productId: number): void     // Eliminar producto
updateQuantity(productId, qty): void        // Actualizar cantidad
getCart(): CartItem[]                       // Obtener carrito actual
getCartTotal(): number                      // Obtener total
clearCart(): void                           // Vaciar carrito
```

## Ejemplos de Uso

### Agregar un Producto al Carrito
```typescript
const producto = { id: 1, name: 'Camiseta', price: 19.99, ... };
this.storeService.addToCart(producto);
```

### Obtener Total del Carrito
```typescript
const total = this.storeService.getCartTotal();
console.log(`Total: $${total.toFixed(2)}`);
```

### Suscribirse a Cambios del Carrito
```typescript
this.storeService.cart$.subscribe(items => {
  console.log('Carrito actualizado:', items);
});
```

## Personalización del Diseño

### Colores
Los colores principales están definidos en [shop.css](shop.css):
- **Primario**: `#00d4ff` (Cian)
- **Fondo**: `#1e1e2e` (Oscuro)
- **Secundario**: `#2d2d44` (Gris oscuro)

Puedes cambiar estos valores para adaptar el diseño a tu marca.

### Textos
Todos los textos están en el template [shop.html](shop.html) y pueden ser modificados o traducidos.

## Pruebas Unitarias

Ejecutar pruebas:
```bash
npm test
```

El archivo [shop.spec.ts](shop.spec.ts) incluye pruebas para:
- Creación del componente
- Carga de productos
- Agregar al carrito
- Cálculo del total

## Integración con APIs Reales

### Ejemplo con Strapi (CMS)
```typescript
private apiUrl = 'https://tu-strapi.com/api/merchandises';
```

### Ejemplo con Firebase Realtime Database
```typescript
private apiUrl = 'https://tu-proyecto.firebaseio.com/products.json';
```

### Ejemplo con API REST personalizada
```typescript
private apiUrl = 'https://tu-backend.com/api/v1/products';
```

## Flujo de Compra

1. Usuario accede a `/shop`
2. Se cargan productos desde la API
3. Usuario busca/filtra productos
4. Usuario agregaa productos al carrito
5. Usuario revisa el carrito (panel lateral)
6. Usuario puede:
   - Ajustar cantidades
   - Eliminar productos
   - Proceder al checkout
7. Al checkout, se limpia el carrito

## Almacenamiento Local

El carrito se persiste en `localStorage` con clave `'cart'`:
```typescript
localStorage.setItem('cart', JSON.stringify(cartItems));
```

Esto permite que los usuarios conserven su carrito incluso después de cerrar la pestaña.

## Troubleshooting

### Los productos no se cargan
- Verifica que la URL de la API es correcta
- Revisa la consola (F12) para mensajes de error
- Comprueba que la API está disponible

### El carrito se vacía al recargar
- Verifica que `localStorage` esté habilitado en el navegador
- Comprueba que no hay errores en la consola

### Los estilos no se aplican correctamente
- Asegúrate de que Bootstrap está instalado (`npm list bootstrap`)
- Limpia la caché del navegador (Ctrl+Shift+Del)

## Próximas Mejoras Sugeridas

- [ ] Integración con pasarela de pagos (Stripe, PayPal)
- [ ] Autenticación de usuarios
- [ ] Historial de compras
- [ ] Sistema de puntos/recompensas
- [ ] Filtros por categoría y precio
- [ ] Carrito persistente en base de datos
- [ ] Notificaciones de cambios de stock

---

**Última actualización**: Mayo 2026
