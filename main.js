let continuar = true;

while (continuar) {
	// Pedir al usuario que seleccione una opción
	let entrada = prompt(
		"Ingrese el número correspondiente para continuar:\n1: Calculadora de grados Celsius a grados Fahrenheit.\n2: Clima."
	);

	// Si el usuario selecciona la opción 1
	if (entrada === "1") {
		// Definir una función para convertir grados Celsius a grados Fahrenheit
		function celsiusAFahrenheit(celsius) {
			return (celsius * 9) / 5 + 32;
		}

		// Pedir al usuario que ingrese los grados Celsius a convertir
		let celsius = parseFloat(
			prompt(
				"Ingrese los grados Celsius que desea convertir a grados Fahrenheit:"
			)
		);

		// Mostrar el resultado de la conversión
		alert(
			celsius +
				" grados Celsius son " +
				celsiusAFahrenheit(celsius) +
				" grados Fahrenheit."
		);
	}

	// Si el usuario selecciona la opción 2
	else if (entrada === "2") {
		// Pedir al usuario que seleccione una opción del clima
		let clima = 0;
		let intentos = 0;
		while (!(clima >= 1 && clima <= 5) && intentos < 3) {
			clima = parseInt(
				prompt(
					"Ingrese el número correspondiente al clima en su zona:\n1: Soleado\n2: Nublado\n3: Cielo cubierto\n4: Lluvioso\n5: Tormenta"
				)
			);

			// Mostrar un mensaje según la opción seleccionada
			switch (clima) {
				case 1:
					alert("Está para el tereré.");
					break;
				case 2:
					alert("Está para tomar mates.");
					break;
				case 3:
					alert("Está para mirar Netflix.");
					break;
				case 4:
					alert("Está para dormir todo el día.");
					break;
				case 5:
					alert("Se vuelan los techos!!");
					break;
				default:
					// Si el usuario no selecciona una opción válida, pedirles que lo intenten de nuevo
					intentos++;
					alert("El número " + clima + " no está en la lista.");
					if (intentos >= 3) {
						alert("Demasiados intentos fallidos. Intente nuevamente.");
					}
			}
		}
	}

	// Si el usuario no selecciona una opción válida, mostrar un mensaje de error
	else {
		alert("Opción inválida. Por favor, seleccione 1 o 2.");
	}

	// Preguntar al usuario si desea continuar o salir del programa
	continuar = confirm(
		"¿Desea continuar? Presione Aceptar para volver al inicio o Cancelar para salir del programa."
	);
}

alert("¡Gracias por usar nuestro programa! ¡Hasta pronto!");
