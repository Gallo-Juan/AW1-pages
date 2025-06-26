
export const cardCarrito=(id,imagen,nombre,texto,precio,cantidad)=>{
    return `
<div class="col-12">
  <div class="card bg-card w-100 p-2 d-flex flex-column flex-md-row align-items-center gap-3" style="min-height: 120px;">
    
    <!-- Imagen -->
    <img src="${imagen}"
         alt="${nombre}" 
         class="img-thumbnail img-fluid"
         style="max-width: 100px; object-fit: cover;">

    <!-- Info principal -->
    <div class="flex-grow-1 w-100 text-center text-md-start">
      <h5 class="mb-1">${nombre}</h5>
      <p class="mb-0">${texto}</p>
    </div>

    <!-- Cantidad -->
    <div class="text-center">
      <p class="mb-0 fw-bold">Cantidad: ${cantidad}</p>
    </div>

    <!-- Precio -->
    <div class="text-center">
      <h6 class="mb-1">Precio unidad:</h6>
      <p class="mb-0 fw-bold">$${precio}</p>
    </div>

    <!-- Botón -->
    <div>
      <button class="btn btn-danger btn-eliminar-producto" data-id="${id}">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
</div>

`}