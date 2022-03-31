var menu = document.querySelector("#menu")

menu.innerHTML = this.showMenu()

function showMenu(){
    return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Compartir</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./galeria.html">Galeria</a>
        </li>
        <li class="nav-item dropdown">

            <a class="nav-link " href="./contacto.html">Contacto</a> 
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./nosotros.html">Nosotros</a> 
        </li>
        </ul>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    </div>
</nav>
    `
}