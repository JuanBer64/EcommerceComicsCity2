# 🌳 Diagrama de Árbol de Uso del Sistema - Comics City

## 📊 Estructura por Niveles de Acceso

### 🌍 Nivel 1: Acceso Público (Sin Autenticación)

```
Comics City (Público)
├── 🏠 Página de Inicio
│   ├── Hero Section con información principal
│   ├── Cómics destacados (3 primeros)
│   ├── Botones de navegación a catálogos
│   └── Enlaces a secciones Marvel y DC
│
├── 📚 Catálogo PDF
│   ├── Filtros por mes
│   │   ├── Todos los meses
│   │   ├── Febrero 2024
│   │   └── Marzo 2024
│   ├── Filtros por editorial
│   │   ├── Todas las editoriales
│   │   ├── Marvel
│   │   └── DC
│   └── Visualización de catálogos
│       ├── Portadas de catálogos
│       └── Enlaces a PDFs externos
│
├── 🔴 Sección Marvel
│   ├── Filtro por mes de publicación
│   ├── Grid de cómics Marvel
│   ├── Tarjetas de cómics con información
│   └── Botón "Agregar al carrito" (redirige a login)
│
├── 🔵 Sección DC
│   ├── Filtro por mes de publicación
│   ├── Grid de cómics DC
│   ├── Tarjetas de cómics con información
│   └── Botón "Agregar al carrito" (redirige a login)
│
└── 🔐 Login/Registro
    ├── Formulario de inicio de sesión
    │   ├── Campo email
    │   └── Campo contraseña
    └── Formulario de registro
        ├── Campo nombre completo
        ├── Campo email
        ├── Campo contraseña
        ├── Campo teléfono (opcional)
        └── Campo dirección (opcional)
```

---

### 🔒 Nivel 2: Acceso Autenticado (Usuario Logueado)

```
Comics City (Usuario Autenticado)
├── 🏠 Página de Inicio
│   ├── Mismo contenido que público
│   └── ✅ Funcionalidad completa de "Agregar al carrito"
│
├── 📚 Catálogo PDF
│   └── Mismo acceso que usuario público
│
├── 🔴 Sección Marvel
│   ├── Filtros funcionales
│   ├── Cómics Marvel disponibles
│   └── ✅ Agregar al carrito funcional
│
├── 🔵 Sección DC
│   ├── Filtros funcionales
│   ├── Cómics DC disponibles
│   └── ✅ Agregar al carrito funcional
│
├── 🛒 Carrito de Compras
│   ├── Lista de productos agregados
│   │   ├── Imagen del cómic
│   │   ├── Información del producto
│   │   ├── Precio individual
│   │   └── Botón eliminar
│   ├── Cálculo automático del total
│   ├── Botón "Confirmar Pedido"
│   └── Redirección a historial tras compra
│
├── 👤 Perfil de Usuario
│   ├── Información personal
│   │   ├── Avatar del usuario
│   │   ├── Nombre completo
│   │   ├── Email
│   │   └── Fecha de registro
│   ├── Navegación del perfil
│   │   ├── 📝 Datos de cuenta
│   │   │   ├── Nombre
│   │   │   ├── Email
│   │   │   ├── Teléfono
│   │   │   └── Dirección
│   │   ├── 📍 Direcciones (próximamente)
│   │   ├── 📦 Pedidos
│   │   │   └── [Redirige a sección de pedidos]
│   │   └── 💳 Tarjetas de pago (próximamente)
│   └── Funcionalidad de logout
│
├── 📦 Mis Pedidos
│   ├── Lista de pedidos realizados
│   │   ├── Número de pedido
│   │   ├── Fecha de realización
│   │   ├── Estado del pedido
│   │   │   ├── 🔵 Confirmado
│   │   │   ├── 🟡 En Camino
│   │   │   └── 🟢 Entregado
│   │   ├── Total del pedido
│   │   └── Detalle de productos
│   │       ├── Imagen del cómic
│   │       ├── Título y editorial
│   │       └── Precio individual
│   └── Mensaje si no hay pedidos
│
└── 🚪 Logout
    ├── Limpieza de sesión
    ├── Redirección a página principal
    └── Actualización del estado de navegación
```

---

## 🔄 Flujos de Navegación Principales

### 🌊 Flujo de Usuario No Autenticado

```
Inicio → Explorar Catálogos → Intentar agregar al carrito → Login/Registro → Autenticación exitosa → Acceso completo
```

### 🌊 Flujo de Usuario Autenticado

```
Login → Inicio → Explorar → Agregar al carrito → Carrito → Confirmar pedido → Mis pedidos → Perfil
```

### 🌊 Flujo de Compra Completo

```
1. Explorar cómics (Marvel/DC/Catálogo)
2. Seleccionar productos
3. Agregar al carrito
4. Revisar carrito
5. Confirmar pedido
6. Ver confirmación
7. Consultar en "Mis Pedidos"
```

---

## 🛡️ Protecciones por Nivel de Acceso

### 🚫 Rutas Protegidas (Requieren Autenticación)
- `/cart` - Carrito de compras
- `/profile` - Perfil de usuario
- `/orders` - Historial de pedidos
- Función "Agregar al carrito" en cualquier sección

### ✅ Rutas Públicas (Acceso Libre)
- `/home` - Página principal
- `/catalog` - Catálogos PDF
- `/marvel` - Sección Marvel (solo visualización)
- `/dc` - Sección DC (solo visualización)
- `/login` - Login y registro

---

## 🎯 Estados de la Aplicación

### 📱 Estado de Navegación
- `currentPage`: Página activa actual
- `cartCount`: Número de productos en carrito
- `user`: Información del usuario logueado

### 💾 Persistencia de Datos
- **LocalStorage**: Simulación de backend
  - `currentUser`: Datos del usuario autenticado
  - `comicCart`: Productos en el carrito
  - `comicOrders`: Historial de pedidos

### 🔄 Gestión de Estado
- **React Hooks**: useState, useEffect
- **Componentes controlados**: Formularios y filtros
- **Comunicación entre componentes**: Props y callbacks

---

## 📊 Métricas de Uso por Nivel

### 👥 Usuario Público
- **Páginas más visitadas**: Inicio, Catálogo, Marvel, DC
- **Acciones limitadas**: Solo visualización y navegación
- **Conversión**: Registro tras intento de agregar al carrito

### 🔐 Usuario Autenticado
- **Funcionalidades completas**: Todas las características
- **Engagement**: Carrito, pedidos, perfil
- **Retención**: Historial de pedidos y gestión de cuenta

---

## 🚀 Escalabilidad del Sistema

### 🔧 Módulos Extensibles
- **Nuevas Editoriales**: Fácil agregado de Image, IDW, etc.
- **Sistemas de Pago**: Integración con PayPal, Stripe
- **Notificaciones**: Email, SMS, push notifications
- **Admin Panel**: Gestión de catálogos y pedidos

### 📈 Futuras Funcionalidades
- **Wishlist**: Lista de deseos
- **Reviews**: Sistema de reseñas
- **Subscripciones**: Suscripciones automáticas
- **Rewards**: Sistema de puntos y descuentos