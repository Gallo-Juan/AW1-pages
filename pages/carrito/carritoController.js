import { NavBar } from "../../components/NavBar.js"
import { removeSessionItem } from "../../utils/sessionstorageController.js"
import { cardCarrito } from "../../components/cardCarrito.js"
import { setData, getData, deleteData } from "../../utils/localstorageController.js"


let navContainer = document.querySelector('header')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')
let cardContainer=document.getElementById('card-container')
const totalContainer = document.getElementById("total-carrito")
const btnFinalizar = document.getElementById('btn-finalizar-compra');





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

btnFinalizar.addEventListener('click', () => {
    // Vaciar el carrito
    deleteData('carrito');

    // Mostrar mensaje (opcional)
    alert('¡Gracias por tu compra!');

    // Recargar la página para actualizar vista
    location.reload();
  });