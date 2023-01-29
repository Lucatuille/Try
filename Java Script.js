// JavaScript
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.target.innerHTML = "Added to Cart";
    event.target.disabled = true;
  });
});