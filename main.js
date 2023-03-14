//Función para restar el total de los productos con el monto ingresado
const resta = (a, b) => a - b;
// Constructor para los productos
class Producto {
	constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;
	}
}

// Objetos (tienda)
const sombrilla = new Producto("Sombrilla de playa", 8000);
const short = new Producto("Short de baño", 3000);
const piloto = new Producto("Piloto de lluvia", 2000);
const carpa = new Producto("Carpa para 2 personas", 15000);
const campera = new Producto("Campera de abrigo", 5000);
const buzo = new Producto("Buzo de abrigo", 5000);

// Variable para llevar el registro de los productos seleccionados
let carrito = [];

// Array para guardar los objetos
const prod = [sombrilla, short, piloto, carpa, campera, buzo];

// Variable para llevar la cuenta del total
let total = 0;

// Variable inicializada en true para que el bucle inicie
let continuar = true;

// Mensaje de bienvenida
alert(`Bienvenido! que disfrute su recorrido!`);

while (continuar) {
	// Pedir al usuario que seleccione una opción
	let entrada = parseFloat(
		prompt(
			"Ingrese el número correspondiente para continuar:\n1: Calculadora de grados Celsius a grados Fahrenheit.\n2: Clima.\n3: Tienda."
		)
	);

	// Si el usuario selecciona la opción 1
	if (entrada === 1) {
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
	else if (entrada === 2) {
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
					alert("Está para el terere.");
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
	//Si el usuario selecciona la opción 3
	else if (entrada === 3) {
		let continuarCarrito = true;
		while (continuarCarrito) {
			let opcionTienda = parseFloat(
				prompt(
					"Ingrese el número correspondiente para continuar:\n1: Ver productos\n2: Agregar producto al carrito\n3: Ver carrito y finalizar compra\n\n4: Salir de la tienda"
				)
			);

			//Variable para almacenar los productos
			let listaProductos = "";
			// Variable i para que ponga a modo de lista los productos
			let i = 1;
			// Función de orden superior forEach para recorrer el array de los productos y ponerlos en forma de lista
			prod.forEach((producto) => {
				listaProductos += `${i} - ${producto.nombre} $${producto.precio}\n`;
				i++;
			});

			// Si el usuario selecciona la opción 1, mostrar la lista de productos
			if (opcionTienda === 1) {
				alert(`Estos son los productos disponibles: \n${listaProductos}`);
			}

			// Si el usuario selecciona la opción 2, agregar un producto al carrito
			else if (opcionTienda === 2) {
				let agregarMas = true;
				while (agregarMas) {
					let productoSeleccionado = parseInt(
						prompt(
							`Ingrese el número correspondiente al producto que desea agregar al carrito: \n${listaProductos}7 - Finalizar`
						)
					);

					switch (productoSeleccionado) {
						case 1:
							carrito.push(sombrilla);
							break;
						case 2:
							carrito.push(short);
							break;
						case 3:
							carrito.push(piloto);
							break;
						case 4:
							carrito.push(carpa);
							break;
						case 5:
							carrito.push(campera);
							break;
						case 6:
							carrito.push(buzo);
							break;
						case 7:
							agregarMas = false;
							break;
						default:
							alert(
								"Opción inválida. Por favor, seleccione un número del 1 al 7."
							);
							break;
					}
				}
			}
			// Si el usuario selecciona la opción 3, mostrar el carrito y calcular el total
			else if (opcionTienda === 3) {
				// Mostrar el contenido del carrito
				// Función de orden superior sort() para ordenar los productos del carrito de menor a mayor
				carrito.sort((a, b) => b.precio - a.precio);
				let mensaje = "Carrito:\n";
				// Función de orden superior forEach para recorrer los productos agregados al carrito y mostrarlos en forma de lista, ordenados de mayor a menor
				carrito.forEach((producto) => {
					mensaje += `${producto.nombre} - $${producto.precio}\n`;
					// Sumar el precio del producto al total
					total += producto.precio;
				});

				// Pagar el total de la compra
				mensaje += `Total: $${total}`;
				let monto = parseFloat(prompt(mensaje));

				// Si alcanza para pagar
				if (monto >= total) {
					alert(`Su vuelto es $${resta(monto, total)}`);
					// Reinicio de carrito y total
					carrito = [];
					total = 0;
				}
				while (monto < total) {
					alert("Saldo insuficiente, intente nuevamente");
					monto = parseFloat(prompt(mensaje));
					if (monto >= total) {
						alert(`Su vuelto es $${resta(monto, total)}`);
					}
				}
				// Reinicio del carrito y total
				carrito = [];
				total = 0;
				// Salir del bucle del carrito
			} else if (opcionTienda === 4) {
				continuarCarrito = false;
			} else {
				alert("Ingrese una opcion valida");
			}
		}
		//solicita al usuario la opción
	}
	// Si el usuario no selecciona una opción válida, mostrar un mensaje de error
	else {
		alert("Opción inválida. Por favor, seleccione 1, 2 o 3.");
	}

	// Preguntar al usuario si desea continuar o salir del programa
	continuar = confirm(
		"¿Desea continuar? Presione Aceptar para volver al inicio o Cancelar para salir del programa."
	);
}
// Alert de agradecimiento
alert("¡Gracias por usar nuestro programa! ¡Hasta pronto!");
