// ===========================================================
// AROMA ANDINO - PC1 JAVASCRIPT AVANZADO 2026-2
// ===========================================================

// FUNCIONALIDAD 8:
// Barra de notificaciones con mensajes aleatorios mediante JavaScript.
const notificaciones = [
  "☕ Café Andino del día: pregunta por nuestra recomendación.",
  "🥐 Combina tu bebida con un acompañamiento.",
  "🌿 Prueba nuestro tradicional Mate de Muña.",
  "🎉 Los pedidos grandes reciben una galleta de cortesía.",
  "🛍️ Puedes elegir atención en local, recojo o delivery."
];

function mostrarNotificacionAleatoria() {
  const posicion = Math.floor(Math.random() * notificaciones.length);

  document.getElementById("barra-notificacion").textContent =
    notificaciones[posicion];
}

// Mostrar una notificación al cargar la página.
mostrarNotificacionAleatoria();

// Cambiar la notificación cada 5 segundos.
setInterval(mostrarNotificacionAleatoria, 5000);


// FUNCIONALIDAD 4:
// Mostrar el campo dirección solamente cuando se seleccione delivery.
function mostrarCampoDireccion() {
  const atencion = document.getElementById("atencion").value;
  const grupoDireccion = document.getElementById("grupo-direccion");

  if (atencion === "delivery") {
    grupoDireccion.classList.remove("oculto");
  } else {
    grupoDireccion.classList.add("oculto");
    document.getElementById("direccion").value = "";
  }
}


// FUNCIONALIDADES 1, 2, 3, 4, 5, 6 y 7:
// Formulario + .value + variables/constantes + operadores +
// condicionales + función + onclick + alert + interpolación ${}.
function procesarPedido() {

  // 1. OBTENER INFORMACIÓN MEDIANTE .value
  const nombre = document.getElementById("nombre").value.trim();
  const producto = document.getElementById("producto").value;
  const tamano = document.getElementById("tamano").value;
  const atencion = document.getElementById("atencion").value;
  const direccion = document.getElementById("direccion").value.trim();

  // 2. VALIDAR DATOS OBLIGATORIOS
  // Operador lógico OR: ||
  if (
    nombre === "" ||
    producto === "" ||
    tamano === "" ||
    atencion === ""
  ) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  // 3. EVALUAR LA INFORMACIÓN
  // Si es delivery, se debe ingresar dirección.
  // Operador lógico AND: &&
  if (atencion === "delivery" && direccion === "") {
    alert(`Hola, ${nombre}. Para solicitar delivery debes ingresar una dirección.`);
    return;
  }

  // Convertir el valor interno en un texto más amigable.
  let textoAtencion = "";

  if (atencion === "local") {
    textoAtencion = "atención en local";
  } else if (atencion === "recojo") {
    textoAtencion = "recojo en tienda";
  } else {
    textoAtencion = `delivery a ${direccion}`;
  }

  // 4. GENERAR MENSAJE PERSONALIZADO CON ${}
  let mensaje = `
Hola, ${nombre}.
Has seleccionado ${producto} en tamaño ${tamano}.
Tipo de atención: ${textoAtencion}.
`;

  // Condición adicional relacionada con el emprendimiento.
  if (tamano === "grande") {
    mensaje += `
¡Tu pedido grande recibe una galleta de cortesía! 🍪`;
  } else {
    mensaje += `
Tu pedido fue registrado correctamente.`;
  }

  mensaje += `
¡Gracias por elegir Cafetería Aroma Andino! ☕`;

  // 5. MOSTRAR SALIDA MEDIANTE alert()
  alert(mensaje);
}


// FUNCIONALIDAD 9:
// Mostrar productos por categoría.
function mostrarCategoria(categoria) {
  const productos = document.querySelectorAll(".producto");

  productos.forEach(function(producto) {
    if (
      categoria === "todos" ||
      producto.classList.contains(categoria)
    ) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
}


// FUNCIONALIDAD 10:
// Limpiar los campos del formulario.
function limpiarFormulario() {
  document.getElementById("formulario-pedido").reset();
  document.getElementById("grupo-direccion").classList.add("oculto");

  alert("El formulario fue limpiado correctamente.");
}
