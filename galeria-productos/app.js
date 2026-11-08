/**
 * Galería Interactiva de Productos (Dark & Minimalist Edition)
 * Incluye Carrito de Compras Interactivo con Vanilla JavaScript:
 * Arreglos, Funciones, map(), filter(), reduce() y Manipulación del DOM.
 */

// =============================================================================
// PASO 1: Arreglo de Productos del Catálogo
// =============================================================================
// Cada producto contiene las propiedades requeridas: nombre, precio y categoría,
// además de imagen de alta resolución y descripción.
const productos = [
  {
    id: 1,
    nombre: "Laptop Gamer Stealth",
    precio: 1299,
    categoria: "Tecnología",
    descripcion: "Pantalla OLED 165Hz, chasis de aluminio pulido y rendimiento de última generación.",
    imagen: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    nombre: "Auriculares Studio Wireless",
    precio: 180,
    categoria: "Tecnología",
    descripcion: "Acústica de alta fidelidad, cancelación activa de ruido y acabado negro mate.",
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    nombre: "Teclado Mecánico Custom",
    precio: 95,
    categoria: "Tecnología",
    descripcion: "Interruptores lineales lubricados de fábrica y retroiluminación sutil blanca.",
    imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    nombre: "Smartwatch Horizon Minimal",
    precio: 210,
    categoria: "Tecnología",
    descripcion: "Caja de acero inoxidable, cristal de zafiro y seguimiento avanzado de actividad.",
    imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    nombre: "Camiseta de Algodón Orgánico",
    precio: 35,
    categoria: "Ropa",
    descripcion: "Tejido peinado de densidad premium, corte contemporáneo de tacto extra suave.",
    imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    nombre: "Chaqueta Cortavientos Urban",
    precio: 120,
    categoria: "Ropa",
    descripcion: "Membrana técnica impermeable con costuras selladas y diseño monocromático.",
    imagen: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    nombre: "Zapatillas Monocromo Runner",
    precio: 90,
    categoria: "Ropa",
    descripcion: "Suela con amortiguación ergonómica y silueta limpia para uso diario.",
    imagen: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    nombre: "Cafetera Expreso Barista",
    precio: 145,
    categoria: "Hogar",
    descripcion: "Bomba italiana de 15 bares, acabado en acero cepillado y control térmico PID.",
    imagen: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    nombre: "Lámpara de Mesa Arquitectónica",
    precio: 55,
    categoria: "Hogar",
    descripcion: "Iluminación LED difusa con regulador táctil continuo y base de metal fundido.",
    imagen: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    nombre: "Juego de Cocina Cerámica",
    precio: 75,
    categoria: "Hogar",
    descripcion: "Revestimiento mineral antiadherente de alta resistencia apto para inducción.",
    imagen: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 11,
    nombre: "Balón de Match Oficial",
    precio: 45,
    categoria: "Deportes",
    descripcion: "Estructura termosellada sin costuras exteriores para un vuelo estable y preciso.",
    imagen: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 12,
    nombre: "Tapete de Yoga Pro Grip",
    precio: 30,
    categoria: "Deportes",
    descripcion: "Caucho natural reciclable con superficie de máxima adherencia y amortiguación de 5mm.",
    imagen: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=80"
  }
];

// =============================================================================
// Estado del Carrito de Compras (Arreglo con Persistencia en LocalStorage)
// =============================================================================
let carrito = JSON.parse(localStorage.getItem("carrito_constanza") || localStorage.getItem("carrito_luxe")) || [];

// =============================================================================
// Referencias a Elementos del DOM
// =============================================================================
// Galería y Filtros
const contenedorGaleria = document.getElementById("galeria-productos");
const botonesCategoria = document.querySelectorAll(".btn-category");
const inputPrecio = document.getElementById("input-precio");
const btnFiltrarPrecio = document.getElementById("btn-filtrar-precio");
const btnLimpiar = document.getElementById("btn-limpiar");
const contadorProductos = document.getElementById("contador-productos");
const badgeFiltroActivo = document.getElementById("badge-filtro-activo");

// Carrito de Compras
const btnAbrirCarrito = document.getElementById("btn-abrir-carrito");
const btnCerrarCarrito = document.getElementById("btn-cerrar-carrito");
const drawerCarrito = document.getElementById("drawer-carrito");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartFooter = document.getElementById("cart-footer");
const cartItemCount = document.getElementById("cart-item-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartTotal = document.getElementById("cart-total");
const badgeCarrito = document.getElementById("badge-carrito");
const btnCheckout = document.getElementById("btn-checkout");
const btnVaciarCarrito = document.getElementById("btn-vaciar-carrito");
const toastNotificacion = document.getElementById("toast-notificacion");
const cartSidebarItems = document.getElementById("cart-sidebar-items");
const cartSidebarTotal = document.getElementById("cart-sidebar-total");
const btnCheckoutSidebar = document.getElementById("btn-checkout-sidebar");

// =============================================================================
// PASO 2: Mostrar los productos en pantalla usando map()
// =============================================================================
/**
 * Renderiza dinámicamente las tarjetas de productos en el DOM utilizando map().
 * @param {Array} lista - Arreglo de objetos de productos a mostrar.
 */
function renderizarProductos(lista) {
  if (lista.length === 0) {
    contenedorGaleria.innerHTML = `
      <div class="empty-state">
        <h3>Sin coincidencias</h3>
        <p>No se encontraron productos con los criterios seleccionados. Ajusta el filtro o restablece la búsqueda.</p>
        <button type="button" class="btn-primary" onclick="restablecerFiltros()">Ver catálogo completo</button>
      </div>
    `;
    actualizarContador(0, productos.length);
    return;
  }

  // REQUERIMIENTO TÉCNICO: map() para transformar el arreglo en HTML dinámico
  const tarjetasHTML = lista.map(producto => {
    return `
      <article class="product-card" data-id="${producto.id}">
        <div class="card-media">
          <img 
            src="${producto.imagen}" 
            alt="${producto.nombre}" 
            class="product-image"
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80';"
          >
        </div>
        <div class="card-body">
          <span class="product-category-tag">${producto.categoria}</span>
          <h3 class="product-title">${producto.nombre}</h3>
          <p class="product-description">${producto.descripcion}</p>
          <div class="product-footer">
            <div class="price-container">
              <span class="price-label">Precio</span>
              <span class="product-price">$${producto.precio.toLocaleString("es-ES")}</span>
            </div>
            <button type="button" class="btn-card" onclick="agregarAlCarrito(${producto.id})">
              Añadir al Carrito
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // REQUERIMIENTO TÉCNICO: Manipulación del DOM mediante innerHTML
  contenedorGaleria.innerHTML = tarjetasHTML;

  // Actualizar el contador de productos visibles
  actualizarContador(lista.length, productos.length);
}

/**
 * Actualiza el contador de productos visibles en el DOM.
 */
function actualizarContador(visibles, total) {
  contadorProductos.textContent = `Mostrando ${visibles} de ${total} artículos`;
}

/**
 * Actualiza la etiqueta informativa del filtro activo.
 */
function actualizarBadgeFiltro(mensaje) {
  if (mensaje) {
    badgeFiltroActivo.textContent = mensaje;
    badgeFiltroActivo.style.display = "inline-block";
  } else {
    badgeFiltroActivo.style.display = "none";
  }
}

// =============================================================================
// PASO 3: Filtrar por categoría usando filter()
// =============================================================================
/**
 * Filtra el arreglo de productos por su categoría utilizando filter().
 * @param {string} categoriaSeleccionada - Nombre de la categoría o "todos".
 */
function filtrarPorCategoria(categoriaSeleccionada) {
  inputPrecio.value = "";

  if (categoriaSeleccionada === "todos") {
    renderizarProductos(productos);
    actualizarBadgeFiltro("");
    return;
  }

  // REQUERIMIENTO TÉCNICO: filter() para filtrar productos por categoría
  const productosFiltrados = productos.filter(producto => {
    return producto.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase();
  });

  renderizarProductos(productosFiltrados);
  actualizarBadgeFiltro(`Categoría: ${categoriaSeleccionada}`);
}

// Configurar los listeners para cada botón de categoría
botonesCategoria.forEach(boton => {
  boton.addEventListener("click", () => {
    botonesCategoria.forEach(btn => btn.classList.remove("active"));
    boton.classList.add("active");

    const categoria = boton.getAttribute("data-categoria");
    filtrarPorCategoria(categoria);
  });
});

// =============================================================================
// PASO 4: Filtrar por precio máximo usando filter()
// =============================================================================
/**
 * Filtra los productos cuyo precio sea menor o igual al valor ingresado.
 */
function filtrarPorPrecioMaximo() {
  const valorIngresado = inputPrecio.value.trim();

  if (valorIngresado === "" || isNaN(valorIngresado) || Number(valorIngresado) < 0) {
    alert("Por favor, ingresa un precio máximo válido (número mayor o igual a 0).");
    inputPrecio.focus();
    return;
  }

  const precioMaximo = Number(valorIngresado);

  // REQUERIMIENTO TÉCNICO: filter() para obtener productos con precio <= precioMaximo
  const productosFiltrados = productos.filter(producto => {
    return producto.precio <= precioMaximo;
  });

  botonesCategoria.forEach(btn => btn.classList.remove("active"));
  renderizarProductos(productosFiltrados);
  actualizarBadgeFiltro(`Precio máximo: $${precioMaximo}`);
}

btnFiltrarPrecio.addEventListener("click", filtrarPorPrecioMaximo);

inputPrecio.addEventListener("keypress", (evento) => {
  if (evento.key === "Enter") {
    evento.preventDefault();
    filtrarPorPrecioMaximo();
  }
});

// =============================================================================
// Función para Restablecer Filtros
// =============================================================================
function restablecerFiltros() {
  inputPrecio.value = "";
  
  botonesCategoria.forEach(btn => {
    if (btn.getAttribute("data-categoria") === "todos") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  actualizarBadgeFiltro("");
  renderizarProductos(productos);
}

btnLimpiar.addEventListener("click", restablecerFiltros);

// =============================================================================
// LÓGICA DEL CARRITO DE COMPRAS (Arreglos, map(), filter(), reduce() y DOM)
// =============================================================================

/**
 * Guarda el arreglo del carrito en localStorage para persistencia.
 */
function guardarCarrito() {
  localStorage.setItem("carrito_constanza", JSON.stringify(carrito));
}

/**
 * Renderiza dinámicamente los artículos del carrito en el DOM usando map().
 * Calcula subtotales y totales con reduce().
 */
function renderizarCarrito() {
  // Calcular cantidad total de artículos y precio total con reduce()
  const totalArticulos = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acumulador, item) => acumulador + (item.precio * item.cantidad), 0);

  // Actualizar indicadores del DOM
  badgeCarrito.textContent = totalArticulos;
  cartItemCount.textContent = `${totalArticulos} ${totalArticulos === 1 ? "artículo" : "artículos"}`;
  cartSubtotal.textContent = `$${totalPrecio.toLocaleString("es-ES")}`;
  cartTotal.textContent = `$${totalPrecio.toLocaleString("es-ES")}`;

  // Actualizar indicadores de la barra lateral derecha
  if (cartSidebarItems) {
    cartSidebarItems.textContent = `${totalArticulos} ${totalArticulos === 1 ? "artículo" : "artículos"}`;
  }
  if (cartSidebarTotal) {
    cartSidebarTotal.textContent = `$${totalPrecio.toLocaleString("es-ES")}`;
  }

  // Caso: Carrito vacío
  if (carrito.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <h3>Tu carrito está vacío</h3>
        <p>Aún no has añadido ningún producto de la colección.</p>
        <button type="button" class="btn-primary" onclick="cerrarCarrito()">Explorar Catálogo</button>
      </div>
    `;
    cartFooter.style.display = "none";
    return;
  }

  // Caso: Carrito con artículos -> Renderizar usando map()
  cartFooter.style.display = "block";
  const itemsHTML = carrito.map(item => {
    const subtotalArticulo = item.precio * item.cantidad;

    return `
      <div class="cart-item" data-id="${item.id}">
        <img 
          src="${item.imagen}" 
          alt="${item.nombre}" 
          class="cart-item-img"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80';"
        >
        <div class="cart-item-info">
          <h4 class="cart-item-title" title="${item.nombre}">${item.nombre}</h4>
          <div class="cart-item-price">$${item.precio.toLocaleString("es-ES")} &times; ${item.cantidad} = $${subtotalArticulo.toLocaleString("es-ES")}</div>
          <div class="cart-quantity-row">
            <div class="quantity-controls" aria-label="Controles de cantidad">
              <button 
                type="button" 
                class="btn-qty" 
                onclick="modificarCantidad(${item.id}, -1)" 
                title="Disminuir cantidad"
              >&minus;</button>
              <span class="qty-display">${item.cantidad}</span>
              <button 
                type="button" 
                class="btn-qty" 
                onclick="modificarCantidad(${item.id}, 1)" 
                title="Aumentar cantidad"
              >&plus;</button>
            </div>
            <button 
              type="button" 
              class="btn-remove-item" 
              onclick="eliminarDelCarrito(${item.id})" 
              title="Eliminar del carrito"
              aria-label="Eliminar ${item.nombre}"
            >&times;</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Inyección en el DOM
  cartItemsContainer.innerHTML = itemsHTML;
}

/**
 * Añade un producto al carrito por su ID.
 * Si ya existe, incrementa su cantidad.
 * @param {number} idProducto - ID del producto a agregar.
 */
function agregarAlCarrito(idProducto) {
  const producto = productos.find(p => p.id === idProducto);
  if (!producto) return;

  const itemExistente = carrito.find(item => item.id === idProducto);

  if (itemExistente) {
    itemExistente.cantidad += 1;
  } else {
    // Añadir nuevo objeto al arreglo del carrito
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      categoria: producto.categoria,
      imagen: producto.imagen,
      cantidad: 1
    });
  }

  guardarCarrito();
  renderizarCarrito();
  mostrarToast(`"${producto.nombre}" añadido al carrito`);
}

/**
 * Modifica la cantidad de un producto (+1 o -1).
 * Si la cantidad llega a 0, elimina el producto del carrito.
 */
function modificarCantidad(idProducto, cambio) {
  const item = carrito.find(item => item.id === idProducto);
  if (!item) return;

  item.cantidad += cambio;

  if (item.cantidad <= 0) {
    eliminarDelCarrito(idProducto);
    return;
  }

  guardarCarrito();
  renderizarCarrito();
}

/**
 * Elimina un producto del carrito usando filter().
 * @param {number} idProducto - ID del producto a remover.
 */
function eliminarDelCarrito(idProducto) {
  // REQUERIMIENTO TÉCNICO: filter() para remover el elemento del arreglo
  carrito = carrito.filter(item => item.id !== idProducto);

  guardarCarrito();
  renderizarCarrito();
  mostrarToast("Artículo eliminado del carrito");
}

/**
 * Vacía todos los artículos del carrito.
 */
function vaciarCarrito() {
  if (carrito.length === 0) return;

  if (confirm("¿Estás seguro de que deseas vaciar tu carrito de compras?")) {
    carrito = [];
    guardarCarrito();
    renderizarCarrito();
    mostrarToast("Carrito vaciado");
  }
}

/**
 * Procesa la compra simulada, calcula el total y limpia el carrito.
 */
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  alert(`¡Gracias por tu compra!\n\nTu pedido por un total de $${total.toLocaleString("es-ES")} ha sido confirmado con éxito.`);

  carrito = [];
  guardarCarrito();
  renderizarCarrito();
  cerrarCarrito();
}

/**
 * Abre el panel lateral del carrito.
 */
function abrirCarrito() {
  drawerCarrito.classList.add("open");
  drawerCarrito.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Evitar scroll del fondo
}

/**
 * Cierra el panel lateral del carrito.
 */
function cerrarCarrito() {
  drawerCarrito.classList.remove("open");
  drawerCarrito.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/**
 * Muestra una notificación emergente sutil (Toast).
 */
let temporizadorToast;
function mostrarToast(mensaje) {
  toastNotificacion.textContent = mensaje;
  toastNotificacion.classList.add("show");

  clearTimeout(temporizadorToast);
  temporizadorToast = setTimeout(() => {
    toastNotificacion.classList.remove("show");
  }, 2600);
}

// =============================================================================
// Event Listeners del Carrito
// =============================================================================
btnAbrirCarrito.addEventListener("click", abrirCarrito);
btnCerrarCarrito.addEventListener("click", cerrarCarrito);
cartBackdrop.addEventListener("click", cerrarCarrito);
btnVaciarCarrito.addEventListener("click", vaciarCarrito);
btnCheckout.addEventListener("click", finalizarCompra);
if (btnCheckoutSidebar) {
  btnCheckoutSidebar.addEventListener("click", () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
    } else {
      abrirCarrito();
    }
  });
}

// Cerrar con la tecla Escape
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && drawerCarrito.classList.contains("open")) {
    cerrarCarrito();
  }
});

// =============================================================================
// Inicialización al cargar la página
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderizarProductos(productos);
  renderizarCarrito();
});
