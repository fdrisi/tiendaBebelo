function fnBuscarAperitivos(){
    let buscarAperitivos = productos.filter(producto=>producto.tipo.aperitivo)
    renderizarProductos(buscarAperitivos)
}
function fnBuscarLicor(){
    let buscarLicor = productos.filter(producto=>producto.tipo.licor)
    renderizarProductos(buscarLicor)
}
function fnBuscarCerveza(){
    let buscarCerveza = productos.filter(producto=>producto.tipo.cerveza)
    renderizarProductos(buscarCerveza)
}
function fnBuscarEnergizante(){
    let buscarEnergizante = productos.filter(producto=>producto.tipo.energizante)
    renderizarProductos(buscarEnergizante)
}
function fnBuscarGaseosa(){
    let buscarGaseosa = productos.filter(producto=>producto.tipo.gaseosa)
    renderizarProductos(buscarGaseosa)
}
function fnBuscarJugo(){
    let buscarJugo = productos.filter(producto=>producto.tipo.jugo)
    renderizarProductos(buscarJugo)
}
function fnBuscarGin(){
    let buscarGin = productos.filter(producto=>producto.tipo.gin)
    renderizarProductos(buscarGin)
}
function fnBuscarWhisky(){
    let buscarWhisky = productos.filter(producto=>producto.tipo.whisky)
    renderizarProductos(buscarWhisky)
}
function fnBuscarVodka(){
    let buscarVodka = productos.filter(producto=>producto.tipo.vodka)
    renderizarProductos(buscarVodka)
}
function fnBuscarRon(){
    let buscarRon = productos.filter(producto=>producto.tipo.ron)
    renderizarProductos(buscarRon)
}
function fnBuscarVino(){
    let buscarVino = productos.filter(producto=>producto.tipo.vino)
    renderizarProductos(buscarVino)
}
let botonesBusqueda = document.getElementById("botonAperitivos")
botonAperitivos.addEventListener("button", fnBuscarAperitivos)