

export const cardComponents=(id,imagen,nombre,texto,precio)=>{
    return `
     <div class="col d-flex">
            <div class="card bg-card h-100 w-100 d-flex flex-column">
              <img src=${imagen} class="mx-auto d-block mt-3 img-productos" alt="${nombre}">
              <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${texto}</p>
              </div>
              <div class="card-footer">
                <div class="row text-center align-items-center">
                  <div class="col-5">
                    <p class="price">$${precio}</p>
                  </div>
                  <div class="col-4">
                    <input type="number" class="form-control input-cantidad w-100" min="0" max="5" placeholder="0" step="1">
                  </div>
                  <div class="col-3">
                    <button class="btn btn-comprar" data-id="${id}" data-nombre="${nombre}" data-texto="${texto}" data-imagen="${imagen}" data-precio="${precio}"><img src="/imgs/carrito.png" style="width:30px"></button>
                  </div>
                </div>           
              </div> 
            </div>  
        </div>
    `
    }

