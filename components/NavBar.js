import { removeSessionItem, getSessionItem } from "/utils/sessionstorageController.js";
import { deleteData } from "/utils/localstorageController.js";

const userData = getSessionItem('userData');

const navElements = [
  { id: 'ropaHombre', title: 'Ropa de Hombre', link: '/pages/categorias/RopaHombre.html' },
  { id: 'ropaMujer', title: 'Ropa de Mujer', link: '/pages/categorias/RopaMujer.html' },
  { id: 'electronica', title: 'Electrónica', link: '/pages/categorias/Electronica.html' },
  { id: 'carrito', title: '<img src="/imgs/carrito.png" alt="Carrito" width="40" height="40" class="rounded-circle img-carrito">', link: "/pages/carrito/carrito.html" },
  { id: 'cerrarSesion', title: 'Cerrar Sesión', link: '/index.html' } 
];

export const NavBar = `
<nav class="navbar navbar-expand-lg bg-card">
  <div class="container-fluid">
    <a class="navbar-brand" href="/pages/inicio/principal.html">
      <img src="/imgs/logo.png" alt="Logo" width="75" height="75" class="rounded-circle bg-logo">
    </a>
    <button class="navbar-toggler bg-nav-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        ${
          navElements.map(e => `
            <li class="nav-item">
              <a id="${e.id}" class="nav-link active text-light" aria-current="page" href="${e.link}">${e.title}</a>
            </li>
          `).join('')
        }
      </ul>
      <span class="navbar-text text-white ms-auto text-end" style="line-height: 1.2;">
        Usuario:<br>
        <strong>${userData.nombre} ${userData.apellido}</strong>
      </span>
    </div>
  </div>
</nav>
`;

// Esperar que el DOM esté listo para agregar el listener
document.addEventListener('DOMContentLoaded', () => {
  const cerrarSesion = document.getElementById('cerrarSesion');
  if (cerrarSesion) {
    cerrarSesion.addEventListener('click', (e) => {
      e.preventDefault(); // Evitar que siga el link
      deleteData('carrito')
      removeSessionItem('userData'); // Remover solo la clave userData
      window.location.href = 'index.html'; // Redirigir al login o inicio
    });
  }
});
