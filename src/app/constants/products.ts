import { Product } from '../store';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Camiseta Space Hawkings Edición Limitada',
    description: 'Camiseta premium de algodón 100% con diseño exclusivo de Space Hawkings. Perfecta para fans del espacio.',
    price: 24.99,
    image: '/img/camiseta-space.jpg',
    stock: 30,
    details: {
      material: '100% Algodón Premium',
      color: 'Negro con estampado frontal',
      talla: 'XS a XXXL',
      peso: '180g',
      dimensiones: 'Ajustado al cuerpo (consulta guía de tallas)',
      caracteristicas: [
        'Diseño exclusivo con estampado high-tech',
        'Etiqueta interior removible',
        'Costuras reforzadas',
        'Sostenible y ecológica'
      ],
      cuidados: 'Lavar a 30°C. No usar blanqueador. Secar en horizontal. Planchar a baja temperatura.'
    }
  },
  {
    id: 2,
    name: 'Gorro Astronauta Ajustable',
    description: 'Gorro de calidad con ajuste trasero. Ideal para cualquier clima. Talla única adaptable.',
    price: 16.99,
    image: '/img/gorro-astronauta.jpg',
    stock: 25,
    details: {
      material: '100% Poliéster con forro de algodón',
      color: 'Blanco con logo bordado azul',
      talla: 'Única ajustable (cierre de velcro)',
      peso: '120g',
      dimensiones: 'Circunferencia: 54-58 cm',
      caracteristicas: [
        'Ajuste trasero de velcro',
        'Bordado resistente',
        'Transpirable',
        'Protección UV'
      ],
      cuidados: 'Lavar a mano con agua fría. No usar secadora. Dejar secar naturalmente.'
    }
  },
  {
    id: 3,
    name: 'Taza Marte 350ml',
    description: 'Taza de cerámica de alta calidad con diseño temático de Marte. Apta para lavavajillas.',
    price: 12.99,
    image: '/img/taza-marte.jpg',
    stock: 40,
    details: {
      material: 'Cerámica de alta temperatura',
      color: 'Rojo óxido con ilustración de Marte',
      talla: '350ml',
      peso: '350g',
      dimensiones: 'Altura: 10cm, Diámetro: 8.5cm',
      caracteristicas: [
        'Apta para lavavajillas',
        'Apta para microondas',
        'Esmalte seguro para alimentos',
        'Diseño duradero'
      ],
      cuidados: 'Lavar con agua tibia y jabón. Apta para lavavajillas (ciclo normal). Microondas: sí.'
    }
  },
  {
    id: 4,
    name: 'Sudadera Viajero Espacial',
    description: 'Sudadera cómoda y cálida con estampado frontal. Material: 80% algodón, 20% poliéster.',
    price: 34.99,
    image: '/img/sudadera-viajero.jpg',
    stock: 15,
    details: {
      material: '80% Algodón, 20% Poliéster',
      color: 'Gris carbón con estampado frontal color',
      talla: 'XS a XXXL',
      peso: '450g',
      dimensiones: 'Consulta guía de tallas para medidas exactas',
      caracteristicas: [
        'Cómoda y cálida',
        'Cordones de algodón',
        'Bolsillos laterales',
        'Costuras reforzadas',
        'Etiqueta removible'
      ],
      cuidados: 'Lavar a 40°C. No usar blanqueador. Secar en horizontal o a baja temperatura.'
    }
  },
  {
    id: 5,
    name: 'Pegatinas Espacio (Pack x10)',
    description: 'Pack de 10 pegatinas de vinilo con diseños espaciales. Resistentes al agua.',
    price: 8.99,
    image: '/img/pegatinas.jpg',
    stock: 50,
    details: {
      material: 'Vinilo adhesivo resistente al agua',
      color: 'Multicolor (10 diseños diferentes)',
      talla: 'Tamaño mixto (3-8cm)',
      peso: '50g',
      dimensiones: 'Paquete: 10x15cm',
      caracteristicas: [
        'Resistente al agua y UV',
        'Fácil de aplicar y remover',
        'Adhesivo permanente',
        'Diseños únicos y exclusivos',
        '10 pegatinas diferentes'
      ],
      cuidados: 'Limpiar la superficie antes de aplicar. Presionar firmemente durante 30 segundos. Puede durar 3-5 años.'
    }
  },
  {
    id: 6,
    name: 'Llavero Nave Espacial',
    description: 'Llavero metálico en forma de nave. Pequeño, práctico y coleccionable.',
    price: 6.99,
    image: '/img/llavero-nave.jpg',
    stock: 60,
    details: {
      material: 'Aleación de zinc con acabado cromado',
      color: 'Plateado brillante',
      talla: 'Compacto (5cm de largo)',
      peso: '80g',
      dimensiones: 'Largo: 5cm, Ancho: 2.5cm',
      caracteristicas: [
        'Diseño en forma de nave futurista',
        'Acabado resistente al óxido',
        'Argolla de metal resistente',
        'Coleccionable',
        'Perfecto como regalo'
      ],
      cuidados: 'Limpiar ocasionalmente con paño suave. No usar productos químicos. Mantener en lugar seco.'
    }
  }
];
