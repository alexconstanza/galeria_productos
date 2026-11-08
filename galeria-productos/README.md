# Tienda Comercial Constanza &mdash; Catálogo Exclusivo con Carrito

Plataforma de catálogo interactivo desarrollada exclusivamente con **HTML5, CSS3 y JavaScript vanilla**. Diseñada con una arquitectura visual moderna de 3 columnas: **Categorías a la izquierda**, **Catálogo de artículos centrado** y **Carrito de compras a la derecha**.

---

## 📐 Distribución Visual en 3 Columnas

1. **Columna Izquierda (Categorías y Filtros)**:
   - Panel lateral fijo (*sticky*) que acompaña la navegación.
   - Lista vertical de botones de categoría con respuesta táctil y estado activo resaltado.
   - Filtro de precio máximo por presupuesto y botón de restablecimiento completo.

2. **Columna Central (Catálogo de Artículos)**:
   - Los productos se presentan en el centro visual de la página con mayor protagonismo.
   - Cuadrícula responsiva con tarjetas de producto (`<article class="product-card">`), fotografía real de alta resolución, efecto zoom sutil y precio destacado.
   - Barra de estado con contador en tiempo real de artículos encontrados.

3. **Columna Derecha (Carrito de Compras)**:
   - Panel lateral fijo (*sticky*) con acceso directo a la compra.
   - Visualización en tiempo real del número de artículos añadidos y total acumulado calculado con `reduce()`.
   - Botón *"Ver Carrito Detallado"* para desplegar el drawer interactivo y botón *"Finalizar Compra"*.

---

## 🎨 Tipografía y Estilo Dark Minimalist

- **Tipografía**: Combinación de `Space Grotesk` (títulos, precios, acentos) y `Outfit` (cuerpo de texto, controles).
- **Paleta**: Tonos obsidiana (`#090a0f`), superficies grafito (`#121319`, `#181a22`) y detalles refinados en oro champagne (`#d4af37`).
- **Diseño Adaptativo**: En pantallas pequeñas o dispositivos móviles, la estructura se reorganiza fluidamente en una sola columna con controles accesibles.

---

## ⚙️ Métodos y Técnicas de JavaScript

| Método | Aplicación |
|---|---|
| `map()` | Generación dinámica de las tarjetas del catálogo central y de los artículos dentro del carrito. |
| `filter()` | Filtrado de productos por categoría, filtrado por precio máximo y eliminación de artículos del carrito. |
| `reduce()` | Cálculo acumulativo del total monetario y la cantidad de artículos en el carrito. |
| `find()` | Búsqueda de productos en el catálogo o artículos existentes en el carrito. |
| DOM API | Event listeners, actualización reactiva con `innerHTML` y control de atributos `aria-*`. |
| `localStorage` | Persistencia en el navegador de los artículos bajo `carrito_constanza`. |

---

## 📁 Estructura del Proyecto

```
galeria-productos/
├── index.html     # Layout de 3 columnas: Categorías (izq), Artículos (centro), Carrito (der)
├── styles.css     # Estilos ultra modernos con Space Grotesk, Outfit y CSS Grid
├── app.js         # Lógica de datos, filtros funcionales y carrito interactivo
└── README.md      # Documentación del proyecto
```

---

## 🚀 Cómo Abrir el Proyecto

Abre [index.html](file:///c:/Users/User/Downloads/KODIGO/galeria-productos/index.html) haciendo doble clic en el archivo desde el explorador para visualizar los cambios inmediatamente.
