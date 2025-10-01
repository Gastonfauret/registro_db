📖 Registro DB
Registro DB es una aplicación Node.js + Express que permite recibir datos de un formulario en formato JSON y almacenarlos en una base de datos MySQL.
Está pensada como ejemplo simple de backend para prácticas de integración frontend ↔ backend.

⚙️ Tecnologías utilizadas
Node.js
 – entorno de ejecución
Express
 – framework para servidor web
MySQL2
 – cliente MySQL para Node.js
CORS
 – manejo de políticas de acceso cross-origin

📂 Estructura del proyecto
registro_db/
│── index.js         # Código principal de la aplicación
│── package.json     # Dependencias y configuración
└── README.md        # Documentación

🗄️ Estructura de la base de datos
Crear la base de datos:
CREATE DATABASE registros_db;

Crear la tabla usuarios:
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  dni VARCHAR(50) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  url_pdf1 VARCHAR(255),
  url_pdf2 VARCHAR(255)
);

🔧 Instalación y configuración
Clonar el repositorio:
git clone https://github.com/Gastonfauret/registro_db.git
cd registro_db

Instalar dependencias:
npm install

Configurar conexión a MySQL
Editar el archivo index.js si usás credenciales distintas:
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'registros_db'
});

Ejecutar la aplicación:
node index.js

El servidor estará disponible en:
👉 http://localhost:3000

🚀 Uso de la API
Endpoint disponible
POST /registrar
Guarda un nuevo usuario en la base de datos.
URL: http://localhost:3000/registrar
Método: POST
Headers:
Content-Type: application/json
Cuerpo esperado (JSON):
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "dni": "12345678",
  "fecha_nacimiento": "17/05/1990",
  "url_pdf1": "https://ejemplo.com/archivo1.pdf",
  "url_pdf2": "https://ejemplo.com/archivo2.pdf"
}

⚠️ El campo fecha_nacimiento debe enviarse en formato DD/MM/YYYY.
El servidor lo convertirá automáticamente a YYYY-MM-DD para MySQL.
Respuesta exitosa (200):
{
  "success": true,
  "message": "Datos recibidos y guardados correctamente."
}

Respuesta en caso de error (500):
{
  "success": false,
  "message": "Error en el servidor al guardar los datos."
}

📌 Consideraciones y supuestos
El proyecto asume que existe una base de datos registros_db y la tabla usuarios.
Los datos no se validan en profundidad (ejemplo: formato de URL, integridad del DNI).
La conexión a MySQL está hardcodeada con usuario y contraseña root.
Cualquier cliente puede acceder al endpoint /registrar (no hay autenticación).

👨‍💻 Autor
Gaston Fauret
Frontend y Movil Developer at Gula|devs.
<a href="https://www.linkedin.com/in/gastonfauret/">LinkedIn</a> | <a href="https://github.com/Gastonfauret">GitHub</a> | <a href="https://wa.me/542281595799">Whatsapp</a>


