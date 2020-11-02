// Selezione i box
const firstBox = document.querySelector("#first-box");
const secondBox = document.querySelector("#second-box");
const thirdBox = document.querySelector("#third-box");
const fourthBox = document.querySelector("#fourth-box");

// Cambio i colori quando clicco sul terzo box
thirdBox.addEventListener("click", () => {
  console.log("Third box clicked");
  firstBox.classList.toggle("bg-success");
  firstBox.classList.toggle("bg-danger");
  secondBox.classList.toggle("bg-secondary");
  secondBox.classList.toggle("bg-warning");
  thirdBox.classList.toggle("bg-danger");
  thirdBox.classList.toggle("bg-primary");
});

// Aggiungo il quarto box quando clicco sul primo
firstBox.addEventListener("click", () => {
  console.log("First box clicked");
  fourthBox.classList.toggle("d-none");
});
