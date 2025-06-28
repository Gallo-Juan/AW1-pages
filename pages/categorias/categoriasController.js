import { NavBar } from "/AW1-pages/components/NavBar.js"
import { cardComponents } from "/AW1-pages/components/card.js"
import { removeSessionItem } from "/AW1-pages/utils/sessionstorageController.js"
import { getData,setData,deleteData } from "/AW1-pages/utils/localstorageController.js"

let cardContainer=document.getElementById('card-container')
let navContainer = document.querySelector('header')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')
let productosFiltrados = []

function mostrarProductos(lista) {
  const cards = lista.map(e =>
    cardComponents(e.id, e.image, e.title, e.description, e.price)
  ).join('')
  cardContainer.innerHTML = cards
}


window.addEventListener('load',() => {
    navContainer.innerHTML=NavBar

    const btnLogout = document.getElementById('cerrarSesion')
  if (btnLogout) {
    btnLogout.addEventListener('click', (e) => {
      e.preventDefault()
      deleteData('carrito')
      removeSessionItem('userData')  
<<<<<<< HEAD
      window.location.href = '../../index.html'
=======
      window.location.href = '/AW1-pages/index.html'
>>>>>>> b86c330538ebd8decf433a7c06970c2d72137f73
    })
  }

    title.textContent=pageName
    document.title=`${pageName} - Tu Rincon Online` 

<<<<<<< HEAD
    fetch('../../productos.json').then(res => res.json()).then(data => {
  productosFiltrados = data.filter(e => e.category === pageName)
  mostrarProductos(productosFiltrados)

  const ordenPrecio = document.getElementById('ordenPrecio')
  ordenPrecio.addEventListener('change', () => {
    const orden = ordenPrecio.value
    let copia = [...productosFiltrados]

    if (orden === 'asc') {
      copia.sort((a, b) => a.price - b.price)
    } else if (orden === 'desc') {
      copia.sort((a, b) => b.price - a.price)
    }

    mostrarProductos(copia)
  })
=======
    fetch('/AW1-pages/productos.json').then(res=>res.json()).then(data=>{
        const filtro=data.filter(e=>e.category===pageName) 
        const cards=filtro.map(e=>{
            return cardComponents(e.id,e.image,e.title,e.description,e.price)      
        }).join('')        
        cardContainer.innerHTML=cards
    })
>>>>>>> b86c330538ebd8decf433a7c06970c2d72137f73
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

