# 🚀 Guía de Instalación - Comics City

## Métodos de Instalación

### 🔥 Método Rápido (Recomendado)

#### 1. Descargar el Proyecto
bash
# Opción A: Clonar repositorio
git clone [url-del-repositorio]
cd comics-city

# Opción B: Descargar ZIP y extraer
# Descargar desde GitHub → Extraer → Abrir carpeta


#### 2. Ejecutar Servidor Local

**Con Python (más común):**
bash
# Verificar si Python está instalado
python --version

# Python 3.x (recomendado)
python -m http.server 8000

# Python 2.x (si es necesario)
python -m SimpleHTTPServer 8000


**Con Node.js:**
bash
# Instalar servidor HTTP global
npm install -g http-server

# Ejecutar en el directorio del proyecto
http-server -p 8000


**Con PHP:**
bash
# Verificar PHP
php --version

# Ejecutar servidor
php -S localhost:8000


#### 3. Abrir en Navegador

http://localhost:8000


### 🛠️ Método con VS Code

1. **Instalar VS Code** (si no lo tienes)
2. **Instalar extensión "Live Server"**
3. **Abrir carpeta del proyecto en VS Code**
4. **Clic derecho en `index.html` → "Open with Live Server"**

### ⚡ Método Directo (Limitado)

**Solo para pruebas rápidas:**
1. Abrir `index.html` directamente en el navegador
2. ⚠️ Puede fallar por restricciones CORS

## 🔧 Configuración Avanzada

### Usando NPM Scripts

bash
# Instalar dependencias de desarrollo (opcional)
npm install

# Ejecutar servidor con Python
npm run start

# Ejecutar con http-server
npm run serve

# Ejecutar con live-server
npm run dev


### Variables de Entorno

No se requieren variables de entorno. Todo funciona con archivos estáticos.

## 🌐 Puertos Disponibles

- **Puerto por defecto**: 8000
- **Alternativas**: 3000, 5000, 8080

bash
# Cambiar puerto
python -m http.server 3000
http-server -p 5000


## 📱 Acceso desde Dispositivos Móviles

bash
# Encontrar tu IP local
# Windows
ipconfig

# Mac/Linux
ifconfig

# Acceder desde móvil
http://TU-IP-LOCAL:8000


## ✅ Verificación de Instalación

### Checklist de Funcionamiento:
- [ ] Página principal carga correctamente
- [ ] Navegación entre secciones funciona
- [ ] Estilos de TailwindCSS se aplican
- [ ] Íconos de Font Awesome aparecen
- [ ] Consola del navegador sin errores críticos
- [ ] Login/registro funcional
- [ ] Carrito agrega productos
- [ ] LocalStorage guarda datos

### Comandos de Verificación:
bash
# Verificar que el servidor está corriendo
curl http://localhost:8000

# Ver logs del servidor
# (Los logs aparecen en la terminal donde ejecutaste el servidor)


## 🐛 Solución de Problemas Comunes

### Error: "Puerto ya en uso"
bash
# Cambiar puerto
python -m http.server 8001


### Error: "Python no reconocido"
bash
# Windows: Instalar Python desde python.org
# Mac: brew install python
# Linux: sudo apt install python3


### Error: "npm no reconocido"
bash
# Instalar Node.js desde nodejs.org


### Error de CORS

Access to script blocked by CORS policy

**Solución**: Usar servidor local, no abrir archivo directamente.

### Estilos no cargan
- Verificar conexión a internet (CDNs)
- Revisar consola del navegador (F12)
- Comprobar que `styles.css` existe

## 🔄 Actualización del Proyecto

bash
# Si usas Git
git pull origin main

# Si descargaste ZIP
# Descargar nueva versión y reemplazar archivos


## 📋 Requisitos del Sistema

### Mínimos:
- Navegador moderno (Chrome 80+, Firefox 75+, Safari 13+)
- 50 MB de espacio libre
- Conexión a internet (para CDNs)

### Recomendados:
- Navegador actualizado
- Python 3.6+ o Node.js 14+
- Editor de código (VS Code, Sublime, etc.)

## 🎯 Próximos Pasos

Una vez instalado:
1. **Explorar la aplicación**
2. **Probar funcionalidades**
3. **Revisar código fuente**
4. **Personalizar según necesidades**

## 📞 Ayuda Adicional

Si tienes problemas:
1. **Revisar logs en terminal**
2. **Abrir DevTools (F12) en navegador**
3. **Verificar todos los archivos están presentes**
4. **Probar con otro navegador**
