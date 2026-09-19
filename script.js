let imagenesActuales = [];
let indiceImagenActual = 0;


/* ========================================
   MOSTRAR GALERÍA
======================================== */

function mostrarGaleria(categoria) {

    const galerias = document.querySelectorAll(".work-gallery");

    galerias.forEach(function(galeria) {
        galeria.classList.remove("active");
    });

    const galeriaSeleccionada = document.getElementById(categoria);

    if (galeriaSeleccionada) {

        galeriaSeleccionada.classList.add("active");

        galeriaSeleccionada.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}

/* ========================================
   CERRAR GALERÍA
======================================== */

function cerrarGaleria(categoria) {

    const galeria = document.getElementById(categoria);

    if (galeria) {
        galeria.classList.remove("active");
    }

}

/* ========================================
   ABRIR IMAGEN
======================================== */

function abrirImagen(imagen) {

    const modal = document.getElementById("imageModal");
    const imagenGrande = document.getElementById("imagenGrande");

    // Buscar las imágenes de la galería actualmente abierta
    const todasLasImagenes = document.querySelectorAll(".work-gallery.active img");

    imagenesActuales = Array.from(todasLasImagenes);

    // Buscar la imagen seleccionada
    indiceImagenActual = imagenesActuales.findIndex(function(img) {
        return img.src === imagen;
    });

    // Mostrar imagen
    imagenGrande.src = imagen;

    // Abrir visor
    modal.classList.add("active");
}


/* ========================================
   SIGUIENTE IMAGEN
======================================== */

function imagenSiguiente() {

    if (imagenesActuales.length === 0) return;

    indiceImagenActual++;

    if (indiceImagenActual >= imagenesActuales.length) {
        indiceImagenActual = 0;
    }

    document.getElementById("imagenGrande").src =
        imagenesActuales[indiceImagenActual].src;
}


/* ========================================
   IMAGEN ANTERIOR
======================================== */

function imagenAnterior() {

    if (imagenesActuales.length === 0) return;

    indiceImagenActual--;

    if (indiceImagenActual < 0) {
        indiceImagenActual = imagenesActuales.length - 1;
    }

    document.getElementById("imagenGrande").src =
        imagenesActuales[indiceImagenActual].src;
}


/* ========================================
   CERRAR IMAGEN
======================================== */

function cerrarImagen() {

    const modal = document.getElementById("imageModal");

    modal.classList.remove("active");
}


/* ========================================
   CERRAR AL HACER CLICK FUERA
======================================== */

document.getElementById("imageModal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {
            cerrarImagen();
        }

    }
);


/* ========================================
   CONTROLES DEL TECLADO
======================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        cerrarImagen();
    }

    if (event.key === "ArrowRight") {
        imagenSiguiente();
    }

    if (event.key === "ArrowLeft") {
        imagenAnterior();
    }

});

/* ========================================
   VISOR DE MADERAS
======================================== */

function abrirMadera(elemento) {

    const imagen =
        elemento.querySelector("img");

    const nombre =
        elemento.querySelector("span");

    const modal =
        document.getElementById("woodModal");

    const imagenGrande =
        document.getElementById("woodModalImage");

    const titulo =
        document.getElementById("woodModalTitle");


    imagenGrande.src = imagen.src;

    imagenGrande.alt = imagen.alt;

    titulo.textContent = nombre.textContent;

    modal.style.display = "flex";
}


function cerrarMadera() {

    const modal =
        document.getElementById("woodModal");

    modal.style.display = "none";
}


/* CERRAR AL HACER CLICK FUERA */

document.getElementById("woodModal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {

            cerrarMadera();

        }

    }
)

function mostrarTexto(elemento) {

    const contenedor = elemento.parentElement;
    const texto = contenedor.querySelector(".texto-oculto");

    texto.classList.toggle("active");
    elemento.classList.toggle("abierto");

    if (texto.classList.contains("active")) {
        elemento.textContent = "Ver menos...";
    } else {
        elemento.textContent = "Ver más...";
    }
}