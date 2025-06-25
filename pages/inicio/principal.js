import { cardComponents } from "/AW1-pages/components/card.js"
import { NavBar } from "/AW1-pages/components/NavBar.js"
import { removeSessionItem } from "/AW1-pages/utils/sessionstorageController.js"
import { getData,setData,deleteData } from "/AW1-pages/utils/localstorageController.js"

let cardContainer=document.getElementById('card-container')
let navContainer = document.querySelector('header')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')


window.addEventListener('load', () => {
  navContainer.innerHTML = NavBar;

  const btnLogout = navContainer.querySelector('#cerrarSesion');
  if (btnLogout) {
    btnLogout.addEventListener('click', (e) => {
      e.preventDefault();
      removeSessionItem('userData');
      deleteData('carrito');
      window.location.href = '/AW1-pages/index.html';
    });
  }

  title.textContent = `Bienvenido a ${pageName}`;
  document.title = pageName;

  fetch('/AW1-pages/productos.json').then(res => res.json()).then(data => {
    function obtenerAleatorios(arr, cantidad) {
      return arr.sort(() => 0.5 - Math.random()).slice(0, cantidad);
    }

    const categoria1 = data.filter(p => p.category === 'Ropa de Hombre');
    const categoria2 = data.filter(p => p.category === 'Ropa de Mujer');
    const categoria3 = data.filter(p => p.category === 'Electrónica');

    const seleccionados = [
      ...obtenerAleatorios(categoria1, 4),
      ...obtenerAleatorios(categoria2, 4),
      ...obtenerAleatorios(categoria3, 4)
    ];

    const mezclados = seleccionados.sort(() => 0.5 - Math.random());

    const cards = mezclados.map(e =>
      cardComponents(e.id, e.image, e.title, e.description, e.price)
    ).join('');

    cardContainer.innerHTML = cards;
  });
});

cardContainer.addEventListener('click', (e) => {
  const boton = e.target.closest('.btn-comprar')
  if (!boton) return

  const id = boton.dataset.id
  const nombre = boton.dataset.nombre
  const imagen = boton.dataset.imagen
  const texto=boton.dataset.texto
  const precio = parseFloat(boton.dataset.precio)

  const inputCantidad = boton.closest('.row').querySelector('.input-cantidad')
  const cantidad = parseInt(inputCantidad.value) || 1

  const producto = { id, nombre, imagen, texto, precio, cantidad }
  agregarAlCarrito(producto)
})

function agregarAlCarrito(producto) {
  let carrito = getData('carrito') || []

  const index = carrito.findIndex(p => p.id === producto.id)
  if (index !== -1) {
    carrito[index].cantidad += producto.cantidad
  } else {
    carrito.push(producto)
  }

  setData('carrito', carrito)
  console.log('Producto agregado al carrito:', producto)
}

