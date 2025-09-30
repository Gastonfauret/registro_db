// 1. Importar las dependencias que instalamos
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// 2. Crear la aplicación de Express
const app = express();

// 3. Configurar Middlewares
app.use(cors()); // Permite las solicitudes desde otros orígenes (como Google)
app.use(express.json()); // Permite al servidor entender el formato JSON

// 4. Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',      // La dirección de tu servidor de BD
  user: 'root',           // Tu usuario de BD
  password: 'root', // La contraseña que estableciste para 'root' al instalar MySQL
  database: 'registros_db' // El nombre de la base de datos que creamos
});

// Conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado exitosamente a la base de datos MySQL.');
});

// 5. Crear la ruta (Endpoint) para recibir los datos del formulario
app.post('/registrar', (req, res) => {
  console.log('Datos recibidos:', req.body);

  // Extraemos los datos del cuerpo (body) de la solicitud
  const { nombre, apellido, dni, fecha_nacimiento, url_pdf1, url_pdf2 } = req.body;

  // Transformamos la fecha del formato D/M/AAAA a AAAA-MM-DD
  const partesFecha = fecha_nacimiento.split('/'); // Divide '3/12/1997' en ['3', '12', '1997']
  const fechaParaMySQL = `${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`; // Une las partes en '1997-12-3'
  
  // Creamos la consulta SQL para insertar los datos
  const sql = 'INSERT INTO usuarios (nombre, apellido, dni, fecha_nacimiento, url_pdf1, url_pdf2) VALUES (?, ?, ?, ?, ?, ?)';

  // Usamos la fecha ya formateada en los valores a insertar
  const values = [nombre, apellido, dni, fechaParaMySQL, url_pdf1, url_pdf2];

  // Ejecutamos la consulta
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar en la base de datos:', err);
      // Enviamos una respuesta de error al script de Google
      return res.status(500).json({ success: false, message: 'Error en el servidor al guardar los datos.' });
    }

    console.log('¡Nuevo usuario registrado con éxito!');
    // Enviamos una respuesta de éxito al script de Google
    res.status(200).json({ success: true, message: 'Datos recibidos y guardados correctamente.' });
  });
});

// 6. Iniciar el servidor
const PORT = 3000; // El puerto en el que se ejecutará nuestro servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
