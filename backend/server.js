const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const pool = require('./db'); // Asegúrate de que './db' apunta a tu archivo de configuración de PostgreSQL

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the backend server');
});

// Registro inicial del administrador
app.post('/register', async (req, res) => {
  const { email, fullName, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await pool.query(
      'INSERT INTO Usuarios (email, full_name, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, fullName, hashedPassword, 'admin']
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Crear nuevos usuarios por el administrador
app.post('/create-user', async (req, res) => {
  const { email, fullName, password, role, canCreate, canEdit, canDelete } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await pool.query(
      'INSERT INTO Usuarios (email, full_name, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, fullName, hashedPassword, role]
    );
    const userId = newUser.rows[0].id;

    await pool.query(
      'INSERT INTO RolesPermisos (user_id, can_create, can_edit, can_delete) VALUES ($1, $2, $3, $4)',
      [userId, canCreate, canEdit, canDelete]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Both email and password are required' });
  }

  try {
    const user = await pool.query('SELECT * FROM Usuarios WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      return res.status(400).json({ msg: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(400).json({ msg: 'Invalid password' });
    }

    res.json({
      msg: 'Login successful',
      user: {
        email: user.rows[0].email,
        fullName: user.rows[0].full_name,
        role: user.rows[0].role
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Crear ficha
app.post('/create-ficha', async (req, res) => {
  const { title, createdBy } = req.body;

  try {
    const newFicha = await pool.query(
      'INSERT INTO Fichas (title, created_by) VALUES ($1, $2) RETURNING *',
      [title, createdBy]
    );
    res.json(newFicha.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Añadir marcador a ficha
app.post('/add-marker', async (req, res) => {
  const {
    fichaId,
    title,
    latitude,
    longitude,
    description,
    color,
    icon,
    type,
    nap1_hilo_number,
    nap1_buffer_number,
    nap1_hilo_color,
    nap1_buffer_color,
    nap1_ports,
    nap2_hilo_number,
    nap2_buffer_number,
    nap2_hilo_color,
    nap2_buffer_color,
    nap2_ports
  } = req.body;

  try {
    const newMarker = await pool.query(
      `INSERT INTO Marcadores (
        ficha_id, title, latitude, longitude, description, color, icon, type, 
        nap1_hilo_number, nap1_buffer_number, nap1_hilo_color, nap1_buffer_color, nap1_ports,
        nap2_hilo_number, nap2_buffer_number, nap2_hilo_color, nap2_buffer_color, nap2_ports
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *`,
      [
        fichaId, title, latitude, longitude, description, color, icon, type, 
        nap1_hilo_number, nap1_buffer_number, nap1_hilo_color, nap1_buffer_color, nap1_ports,
        nap2_hilo_number, nap2_buffer_number, nap2_hilo_color, nap2_buffer_color, nap2_ports
      ]
    );
    res.json(newMarker.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

