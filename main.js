// Exercici 1.1. Arrow Functions
// Exercici 1
const add = (a, b) => a + b;

// Exercici 2
const randomNumber = () => parseInt(Math.random() * 101);

// Exercici 3
class Person {
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	greet = () => console.log(this.name);
}

// Exercici 4
const printNumbers = (arrayNumeros) => {
	for (let i = 0; i < arrayNumeros.length; i++) {
		console.log(arrayNumeros[i]);
	}
};

// Exercici 5
const message = () => {
	setTimeout(() => {
		console.log("Missatge");
	}, 3000);
};

// Exercici 1.2. Operador ternari
// Exercici 1
const potConduir = (edat) => (edat >= 18 ? "Pots conduir" : "No pots conduir");

// Exercici 2
const mesGran = (num1, num2) =>
	num1 > num2 ? "num1 és més gran" : "num2 és més gran";

// Exercici 3
const exercici3 = (num) =>
	num >= 0 ? (num == 0 ? "Es zero" : "Es positivo") : "Es negativo";

const trobarMaxim = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c);

// Exercici 4
const parOImpar = (array) => {
	const results = [];
	for (let i = 0; i < array.length; i++) {
		results[i] = array[i] % 2 == 0 ? true : false;
	}
	return results;
};

// Exercici 1.3. Callbacks
// Exercici 1
const processar = (num, callbackFunction) => callbackFunction(num);
const comprovar = (num) => `El numero és ${num}`;

// Exercici 2
const calculadora = (num1, num2, operador) => operador(num1, num2);
const sumar = (num1, num2) => num1 + num2;

// Exercici 3
const esperarISaludar = (name, salutacio) => {
	setTimeout(() => {
		salutacio(name);
	}, 2000);
};
const saludar = (name) => console.log(`Hola, ${name}!`);

// Exercici 4
const processarElements = (array, processar) => {
	for (let i = 0; i < array.length; i++) {
		processar(i);
	}
};
const contadorProces = (num) => console.log(`Contador: ${num + 1}`);