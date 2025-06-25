import { NavBar } from "../../components/NavBar.js"
import { removeSessionItem } from "../../utils/sessionstorageController.js"
import { cardCarrito } from "../../components/cardCarrito.js"
import { setData, getData, deleteData } from "../../utils/localstorageController.js"


let navContainer = document.querySelector('header')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')
let cardContainer=document.getElementById('card-container')
const totalContainer = document.getElementById("total-carrito")

const prod=[{
      "id": 1,
      "title": "Campera de algodón para hombre",
      "price": 55.99,
      "description": "Campera de algodón ideal para el invierno.",
      "category": "Ropa de Hombre",
      "image": "https://m.media-amazon.com/images/I/71li-ujtlUL._AC_UX679_.jpg",
      "rating": { "rate": 4.7, "count": 500 }
    },
    {
      "id": 2,
      "title": "Remera ajustada premium",
      "price": 22.3,
      "description": "Remera de algodón ajustada de alta calidad.",
      "category": "Ropa de Hombre",
      "image": "https://m.media-amazon.com/images/I/71YXzeOuslL._AC_UY879_.jpg",
      "rating": { "rate": 4.1, "count": 430 }
    }
  ]



window.addEventListener('load',() => {
    navContainer.innerHTML=NavBar

  const btnLogout = document.getElementById('cerrarSesion')
  if (btnLogout) {
    btnLogout.addEventListener('click', (e) => {
      e.preventDefault()
      removeSessionItem('userData')  
      deleteData('carrito')
      window.location.href = '../../index.html'
    })
  }

    title.textContent=pageName
    document.title=`${pageName} - Tu Rincon Online`  
    const prod=getData('carrito') || []
    const cards=prod.map(e=>{
            return cardCarrito(e.id,e.imagen,e.nombre,e.texto,e.precio,e.cantidad)      
}).join('')

    cardContainer.innerHTML=cards

const total = prod.reduce((acum, item) => {
    return acum + (item.precio * item.cantidad)
  }, 0)

  totalContainer.textContent = total.toFixed(2)

    configurarBotonesEliminar()

    
})

function configurarBotonesEliminar() {
  const botones = document.querySelectorAll('.btn-eliminar-producto');

  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const idProducto = btn.dataset.id;

      let carrito = getData('carrito') || [];

      // Filtrar el producto por id
      carrito = carrito.filter(producto => producto.id != idProducto);

      setData('carrito', carrito);

      // Volver a renderizar
      location.reload(); // o una función para re-render sin recargar
    });
  });
}