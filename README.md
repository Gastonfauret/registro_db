📖 Registro DB
Registro DB es una aplicación Node.js + Express que permite recibir datos de un formulario en formato JSON y almacenarlos en una base de datos MySQL.
Está pensada como ejemplo simple de backend para prácticas de integración frontend ↔ backend.

⚙️ Tecnologías utilizadas <br>
Node.js <br>
 – entorno de ejecución <br>
Express <br>
 – framework para servidor web <br>
MySQL2 <br>
 – cliente MySQL para Node.js <br>
CORS <br>
 – manejo de políticas de acceso cross-origin <br>

📂 Estructura del proyecto <br>
registro_db/ <br>
│── index.js         # Código principal de la aplicación
│── package.json     # Dependencias y configuración
└── README.md        # Documentación

🗄️ Estructura de la base de datos <br>
Crear la base de datos: <br>
CREATE DATABASE registros_db;

Crear la tabla usuarios: <br>
CREATE TABLE usuarios ( <br>
  id INT AUTO_INCREMENT PRIMARY KEY, <br>
  nombre VARCHAR(100) NOT NULL, <br>
  apellido VARCHAR(100) NOT NULL, <br>
  dni VARCHAR(50) NOT NULL, <br>
  fecha_nacimiento DATE NOT NULL, <br>
  url_pdf1 VARCHAR(255), <br>
  url_pdf2 VARCHAR(255) <br>
); <br>

🔧 Instalación y configuración <br>
Clonar el repositorio: <br>
git clone https://github.com/Gastonfauret/registro_db.git <br>
cd registro_db

Instalar dependencias: <br>
npm install

Configurar conexión a MySQL <br>
Editar el archivo index.js si usás credenciales distintas: <br>
const db = mysql.createConnection({ <br>
  host: 'localhost', <br>
  user: 'root', <br>
  password: 'root', <br>
  database: 'registros_db' <br>
}); <br>

Ejecutar la aplicación: <br>
node index.js

El servidor estará disponible en: <br>
👉 http://localhost:3000

🚀 Uso de la API <br>
Endpoint disponible <br>
POST /registrar <br>
Guarda un nuevo usuario en la base de datos. <br>
URL: http://localhost:3000/registrar <br>
Método: POST <br>
Headers: <br>
Content-Type: application/json <br>
Cuerpo esperado (JSON): <br>
{ <br>
  "nombre": "Juan", <br>
  "apellido": "Pérez", <br>
  "dni": "12345678", <br>
  "fecha_nacimiento": "17/05/1990", <br>
  "url_pdf1": "https://ejemplo.com/archivo1.pdf", <br>
  "url_pdf2": "https://ejemplo.com/archivo2.pdf" <br>
} <br>

⚠️ El campo fecha_nacimiento debe enviarse en formato DD/MM/YYYY. <br>
El servidor lo convertirá automáticamente a YYYY-MM-DD para MySQL. <br>
Respuesta exitosa (200): <br>
{ <br>
  "success": true, <br>
  "message": "Datos recibidos y guardados correctamente." <br>
} <br>

Respuesta en caso de error (500): <br>
{ <br>
  "success": false, <br>
  "message": "Error en el servidor al guardar los datos." <br>
} <br>

📌 Consideraciones y supuestos <br>
El proyecto asume que existe una base de datos registros_db y la tabla usuarios.<br>
Los datos no se validan en profundidad (ejemplo: formato de URL, integridad del DNI).<br>
La conexión a MySQL está hardcodeada con usuario y contraseña root.<br>
Cualquier cliente puede acceder al endpoint /registrar (no hay autenticación).<br>

👨‍💻 Autor <br>
Gaston Fauret <br>
Frontend y Movil Developer at Gula|devs. <br>
<a href="https://www.linkedin.com/in/gastonfauret/">LinkedIn</a> | <a href="https://github.com/Gastonfauret">GitHub</a> | <a href="https://wa.me/542281595799">Whatsapp</a>


