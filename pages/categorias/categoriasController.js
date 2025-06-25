import { NavBar } from "/AW1-pages/components/NavBar.js"
import { cardComponents } from "/AW1-pages/components/card.js"
import { removeSessionItem } from "/AW1-pages/utils/sessionstorageController.js"
import { getData,setData,deleteData } from "/AW1-pages/utils/localstorageController.js"

let cardContainer=document.getElementById('card-container')
let navContainer = document.querySelector('header')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')


window.addEventListener('load',() => {
    navContainer.innerHTML=NavBar

    const btnLogout = document.getElementById('cerrarSesion')
  if (btnLogout) {
    btnLogout.addEventListener('click', (e) => {
      e.preventDefault()
      deleteData('carrito')
      removeSessionItem('userData')  
      window.location.href = '/AW1-pages/index.html'
    })
  }

    title.textContent=pageName
    document.title=`${pageName} - Tu Rincon Online` 

    fetch('/AW1-pages/productos.json').then(res=>res.json()).then(data=>{
        const filtro=data.filter(e=>e.category===pageName) 
        const cards=filtro.map(e=>{
            return cardComponents(e.id,e.image,e.title,e.description,e.price)      
        }).join('')        
        cardContainer.innerHTML=cards
    })
})

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

