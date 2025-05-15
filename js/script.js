document.getElementById("confirmarCita").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  if (nombre && fecha) {
    alert("¡Hola " + nombre + "Felicidades tu cita ha sido agendada para el " + fecha + ".");
    document.getElementById("formCita").reset();
  } else {
    alert("Por favor llenar todos los campos.");
  }
});
