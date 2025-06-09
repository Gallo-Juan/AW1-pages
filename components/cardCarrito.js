
export const cardCarrito=(id,imagen,nombre,texto,precio,cantidad)=>{
    return `
<div class="col-12">
  <div class="card bg-card w-100 p-2 d-flex flex-row align-items-center" style="height: 120px;">
    
    <!-- Imagen a la izquierda -->
    <img src=${imagen}
         alt=${nombre} 
         class="img-thumbnail me-3" 
         style="height: 100%; width: auto; max-width: 100px; object-fit: cover;">

    <!-- Título y descripción -->
    <div class="flex-grow-1 me-3">
      <h5 class="mb-1">${nombre} </h5>
      <p class="mb-0 ">${texto} </p>
    </div>
    <div class="text-center mx-5">
      <p class="mb-0 fw-bold ">Cantidad: ${cantidad}</p>
    </div>
    <!-- Precio -->
    <div class="text-center me-3">
    <div class="flex-grow-1 me-3">
      <h5 class="mb-1">Precio unidad: </h5>
      <p class="mb-0 fw-bold">$${precio}</p>
    </div>
      
    </div>

    <!-- Botón eliminar -->
    <button class="btn btn-danger btn-eliminar-producto" data-id="${id}">
      <i class="bi bi-trash"></i> <!-- Usa Bootstrap Icons, o podés poner una imagen -->
    </button>
  </div>
</div>
`}