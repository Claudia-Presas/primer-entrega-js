function ingresarContrasena() {
  let intento = 0;
  const intentosMaximos = 3;
  let contrasenaCorrecta = false;

  do {
    intento++;
    let contrasena = prompt("Ingrese una contraseña");
    let confirmarContrasena = prompt("Repita la contraseña");

    if (contrasena === confirmarContrasena) {
      alert("La contraseña se ha guardado con éxito");
      contrasenaCorrecta = true;
      alert("Hola " + nombre + ". Ya puedes comenzar con tu compra");
    } else {
      alert("Las contraseñas no coinciden, vuelve a intentarlo");
    }
  } while (!contrasenaCorrecta && intento < intentosMaximos);
  if (!contrasenaCorrecta) {
    alert("Has agotado los intentos, vuelve a iniciar el proceso");
  }
  return contrasenaCorrecta;
}

function realizarCompra() {
  let tipoDeCompra = prompt(
    "Indique qué tipo de compra vas a realizar: \n1 - Minorista. \n2 - Mayorista."
  );

  if (tipoDeCompra == "1") {
    alert("Has seleccionado compra Minorista. Disfrute su compra!");
  } else if (tipoDeCompra == "2") {
    alert("Has seleccionado compra Mayorista. Disfrute su compra!");
  } else {
    alert("Opción inválida");
  }
}

alert("Bienvenido a Arte Vivo");
let nombre = prompt("Ingresa tu nombre");

if (ingresarContrasena()) {
  realizarCompra();
}
