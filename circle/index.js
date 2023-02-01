function calculateCircleArea() {
  const radius = parseInt(document.getElementById("radius").value);
  const area = Math.PI.toFixed(2) * radius ** 2;
  document.getElementById("area").value = ` ${area.toFixed(2)} m²`;
}
