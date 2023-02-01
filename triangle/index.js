function calculateTriangleArea() {
  const base = parseInt(document.getElementById("base").value);
  const height = parseInt(document.getElementById("height").value);
  const area = (base * height) / 2;
  document.getElementById("area").value = area + " m²";
}
