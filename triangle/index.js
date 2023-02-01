const triangleForm = document.getElementById("triangle-form");

triangleForm.addEventListener("submit", (event) => {
  event.preventDefault();

  calculateTriangleAreaAndPerimeter();
});

function calculateTriangleAreaAndPerimeter() {
  const base = parseInt(document.getElementById("base").value);
  const height = parseInt(document.getElementById("height").value);
  const area = (base * height) / 2;
  const perimeter = base * 3;

  document.getElementById("area").value = area + " m²";
  document.getElementById("perimeter").value = perimeter + " m";
}
