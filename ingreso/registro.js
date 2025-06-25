const getData = (key) => JSON.parse(localStorage.getItem(key));
const setData = (key, value) => localStorage.setItem(key, JSON.stringify(value));
// Función para agregar usuario
const addUser = (nuevoUsuario) => {
  const usuarios = getData('usuarios') || []

  // Verificar si el correo ya existe
  const yaExiste = usuarios.some(u => u.email === nuevoUsuario.email)
  if (yaExiste) {
    throw new Error('El correo ya está registrado')
  }

  usuarios.push(nuevoUsuario)
  setData('usuarios', usuarios)
}

// Manejo del formulario
const form = document.getElementById('registroForm')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const nuevoUsuario = {
    nombre: document.getElementById('Nombre').value.trim(),
  apellido: document.getElementById('Apellido').value.trim(),
  email: document.getElementById('email').value.trim().toLowerCase(),
  password: document.getElementById('password').value,
  fechaNacimiento: document.getElementById('fechaNac').value
  }

  try {
    addUser(nuevoUsuario)
    alert('Usuario registrado con éxito')
    form.reset()
    window.location.href = '/AW1-pages/index.html' 
  } catch (error) {
    alert(error.message)
  }
})