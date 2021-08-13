const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
//Esto de abajo hace que las slides pasen de estar apiladas una encima de otra a estar en una línea horizontal.
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

//Lo que las hace mover.
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  //Aquí en slides.length - 1, el -1 sirve para que la última imagen no se desplace cuando ya no sigue ninguna -se motraría con un espacio blanco a la derecha.
  if (counter === slides.length - 1) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 2;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
