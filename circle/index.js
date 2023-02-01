function calculateCircleArea() {
  const radius = parseInt(document.getElementById("radius").value);
  const area = Math.PI.toFixed(2) * radius ** 2;
  const perimeter = 2 * Math.PI.toFixed(2) * radius;
  document.getElementById("area").value = ` ${area.toFixed(2)} m²`;
  document.getElementById("perimeter").value = ` ${perimeter.toFixed(2)} m`;
}
