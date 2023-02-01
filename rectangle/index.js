function calculateRectangleAreaAndPerimeter() {
  const length = parseInt(document.getElementById("length").value);
  const width = parseInt(document.getElementById("width").value);
  const area = length * width;
  const perimeter = 2 * (length + width);
  document.getElementById("area").value = area + " m²";
  document.getElementById("perimeter").value = perimeter + " m";
}
