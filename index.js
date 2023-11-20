const cartas = document.querySelectorAll(".cartas");
let primeraCarta = null;
let bloquearClics = false;

cartas.forEach((carta) => {
  carta.addEventListener("click", handleClick);
});

function handleClick() {
  const carta = this;
  const imagen = carta.querySelector(".imagenes");
  const h1 = carta.querySelector("#perros");

  if (
    bloquearClics ||
    carta.classList.contains("encontrada") ||
    carta.classList.contains("seleccionada")
  ) {
    return;
  }

  h1.style.display = "block";

  carta.classList.add("seleccionada");

  imagen.classList.add("voltear");

  if (primeraCarta === null) {
    primeraCarta = carta;
  } else {
    const primeraImagen = primeraCarta.querySelector(".imagenes");
    bloquearClics = true;

    setTimeout(() => {
      if (
        imagen.getAttribute("data-value") !==
        primeraImagen.getAttribute("data-value")
      ) {
        primeraCarta.querySelector("#perros").style.display = "none";
        h1.style.display = "none";
      }

      setTimeout(() => {
        if (
          imagen.getAttribute("data-value") !==
          primeraImagen.getAttribute("data-value")
        ) {
          carta.classList.remove("seleccionada");
          primeraCarta.classList.remove("seleccionada");

          imagen.classList.remove("voltear");
          primeraImagen.classList.remove("voltear");

          primeraCarta.querySelector("#perros").style.display = "none";
          h1.style.display = "none"; 

          bloquearClics = false;
        } else {
          carta.classList.add("encontrada");
          primeraCarta.classList.add("encontrada");
        }

        setTimeout(() => {
          carta.classList.remove("seleccionada");
          primeraCarta.classList.remove("seleccionada");

          imagen.classList.remove("voltear");
          primeraImagen.classList.remove("voltear");

          bloquearClics = false;
          primeraCarta = null;
        }, 500);
      }, 500);
    }, 1000);
  }
}


const boton = document.querySelector("#reinicio");
boton.addEventListener("click", reiniciarJuego);

function reiniciarJuego() {
  const cartas = document.querySelectorAll(".cartas");

  cartas.forEach((carta) => {
    carta.classList.remove("encontrada");
    carta.classList.remove("seleccionada");
    carta.classList.remove("voltear");
  });

  const perros = document.querySelectorAll("#perros");
  perros.forEach((perro) => {
    perro.style.display = "none";
  });

  primeraCarta = null;
  bloquearClics = false;

  setTimeout(() => {
    cartas.forEach((carta) => {
      carta.classList.remove("encontrada");
      carta.classList.remove("seleccionada");
      carta.classList.remove("voltear");
    });
  }, 500);
}