# Comics City - E-commerce de Preventas de Cómics

## 📖 Descripción del Proyecto

Comics City es una aplicación web de e-commerce especializada en preventas de cómics de las editoriales Marvel y DC. Permite a los usuarios explorar catálogos mensuales, realizar pedidos anticipados y gestionar sus compras de manera sencilla.

## 🚀 Características Principales

- **Catálogos PDF**: Visualización de catálogos mensuales organizados por editorial
- **Sistema de Preventas**: Reserva de cómics antes del lanzamiento oficial
- **Autenticación**: Sistema completo de login/registro
- **Carrito de Compras**: Gestión de productos seleccionados
- **Perfil de Usuario**: Gestión de datos personales y pedidos
- **Diseño Responsive**: Optimizado para móvil y escritorio

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 (CDN)
- **Estilos**: TailwindCSS + CSS personalizado
- **Íconos**: Font Awesome 6.5.1
- **Transpilador**: Babel Standalone
- **Almacenamiento**: LocalStorage (simulación de backend)

## 📁 Estructura del Proyecto

```
comics-city/
├── index.html              # Página principal
├── styles.css              # Estilos personalizados
├── app.js                  # Componente principal de la aplicación
├── components/             # Componentes reutilizables
│   ├── Navbar.js          # Barra de navegación
│   ├── Footer.js          # Pie de página
│   ├── ComicCard.js       # Tarjeta de cómic
│   └── CartItem.js        # Elemento del carrito
├── pages/                 # Páginas de la aplicación
│   ├── Home.js            # Página de inicio
│   ├── Catalog.js         # Catálogo de PDFs
│   ├── Marvel.js          # Cómics de Marvel
│   ├── DC.js              # Cómics de DC
│   ├── Cart.js            # Carrito de compras
│   ├── Orders.js          # Historial de pedidos
│   ├── Profile.js         # Perfil de usuario
│   └── Login.js           # Login/Registro
├── utils/                 # Utilidades
│   ├── mockData.js        # Datos de prueba
│   └── storage.js         # Gestión de localStorage
└── README.md              # Documentación
```

## 🔧 Instalación y Configuración

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional pero recomendado)

### Opción 1: Servidor Local Simple

1. **Clona o descarga el proyecto**
bash
git clone [url-del-repositorio]
cd comics-city


2. **Usando Python (si está instalado)**
bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000


3. **Usando Node.js (si está instalado)**
bash
# Instalar servidor global
npm install -g http-server

# Ejecutar servidor
http-server -p 8000


4. **Usando PHP (si está instalado)**
bash
php -S localhost:8000


### Opción 2: Extensión de VS Code

1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

### Opción 3: Abrir Directamente

⚠️ **Limitación**: Algunos navegadores pueden bloquear el acceso a archivos locales por CORS.

1. Abre `index.html` directamente en tu navegador
2. Si hay problemas de CORS, usa una de las opciones de servidor local

## 🌐 Acceso a la Aplicación

Una vez configurado el servidor, accede a:

http://localhost:8000


## 👤 Datos de Prueba

### Usuario de Prueba
- **Email**: cualquier email válido
- **Contraseña**: cualquier contraseña
- **Nota**: El sistema simula la autenticación, cualquier credencial válida funcionará

### Cómics Disponibles
- 6 cómics de muestra (3 Marvel, 3 DC)
- Fechas de lanzamiento: Febrero y Marzo 2024
- Precios entre $4.99 - $6.99

## 🔄 Funcionalidades Principales

### Navegación
- **Inicio**: Página principal con destacados
- **Catálogo**: PDFs organizados por mes y editorial
- **Marvel/DC**: Cómics filtrados por editorial
- **Carrito**: Gestión de productos (requiere login)
- **Perfil**: Datos de usuario y pedidos (requiere login)

### Sistema de Autenticación
- Login/Registro en una sola interfaz
- Protección de rutas sensibles
- Persistencia de sesión con localStorage
- Logout funcional

### Carrito y Pedidos
- Agregar/eliminar productos
- Cálculo automático de totales
- Confirmación de pedidos
- Historial de compras

## 🎨 Personalización

### Colores y Estilos
Modifica `styles.css` para cambiar:
- Gradientes de marca
- Colores de Marvel (rojo) y DC (azul)
- Animaciones y transiciones

### Datos de Prueba
Edita `utils/mockData.js` para:
- Agregar más cómics
- Cambiar precios y fechas
- Actualizar información de catálogos

## 🐛 Solución de Problemas

### Error de CORS

Access to script at 'file://...' from origin 'null' has been blocked by CORS policy

**Solución**: Usa un servidor web local en lugar de abrir el archivo directamente.

### Estilos no se cargan
- Verifica que TailwindCSS se carga desde CDN
- Comprueba la conexión a internet
- Revisa la consola del navegador para errores

### Funcionalidades no funcionan
- Abre las herramientas de desarrollador (F12)
- Revisa la consola para errores de JavaScript
- Verifica que todos los archivos .js se cargan correctamente

## 📱 Responsive Design

La aplicación está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔒 Seguridad

⚠️ **Nota Importante**: Esta aplicación usa localStorage para simular un backend. En producción, implementa:
- Autenticación real con JWT
- Base de datos segura
- Validación server-side
- HTTPS obligatorio

## 📞 Soporte

Para problemas o preguntas:
- Revisa la consola del navegador
- Verifica que todos los archivos estén presentes
- Asegúrate de tener conexión a internet para CDNs

## 📄 Licencia

Proyecto educativo - Uso libre para aprendizaje y desarrollo.
