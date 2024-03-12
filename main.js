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
		console.log('Missatge');
	}, 3000);
};

// Exercici 1.2. Operador ternari
// Exercici 1
const potConduir = (edat) => (edat >= 18 ? 'Pots conduir' : 'No pots conduir');

// Exercici 2
const mesGran = (num1, num2) =>
	num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';

// Exercici 3
const exercici3 = (num) =>
	num >= 0 ? (num == 0 ? 'Es zero' : 'Es positivo') : 'Es negativo';

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

// Exercici 5
const processarCadena = (cadena, mostrar) => {
	mostrar(cadena.toUpperCase());
};
const mostrar = (item) => console.log(item);

// Exercici 1.4: Rest & Spread operators
// Exercici 1
const exercici141 = () => {
	const array1 = [1, 2, 3, 4];
	const array2 = [5, 6, 7, 8];
	const array3 = [...array1, ...array2];
	return array3;
};

// Exercici 2
const suma = (...numbers) => {
	let result = 0;
	numbers.forEach((number) => {
		result += number;
	});
	return result;
};

// Exercici 3
const exercici143 = () => {
	const obj1 = {
		nom: 'Oriol',
		cognom: 'Pujade',
		edat: 27,
		isObj1: true,
	};

	const obj2 = { ...obj1 };
	obj2.isObj1 = false;
	console.log(obj1, obj2);
};

// Exercici 4
const exercici144 = () => {
	const array1 = [1, 2, 3, 4, 5];
	let a, b, rest;
	[a, b, ...rest] = array1;
};

// Exercici 5
const exercici145 = (a, b, c) => {
	return `Element 1: ${a}, element 2: ${b}, element 3: ${c}.`;
};
const arrayExercici145 = [1, 2, 3];
exercici145(...arrayExercici145);

// Exercici 6
const exercici146 = () => {
	const obj1 = {
		nom: 'Oriol',
		cognom: 'Pujade',
	};
	const obj2 = {
		edat: 27,
		especialitat: 'JavaScript',
	};
	const obj3 = { ...obj1, ...obj2 };
	console.log(obj3);
};

// Exercici 1.5: Array transformations
// Exercici 1
const exercici151 = () => {
	const array1 = [1, 2, 3, 4];
	const array2 = array1.map((num) => num ** 2);
	console.log(array2);
};

// Exercici 2
const exercici152 = () => {
	const array1 = [1, 2, 3, 4];
	const array2 = array1.filter((num) => num % 2 == 0);
	console.log(array2);
};

// Exercici 3
const exercici153 = () => {
	const array1 = [1, 10, 8, 11];
	const primerMajor = array1.find((num) => num > 10);
	console.log(primerMajor);
};

// Exercici 4
const exercici154 = () => {
	const array1 = [13, 7, 8, 21];
	const result = array1.reduce((total, num) => total + num);
	console.log(result);
};

// Exercici 5
const arrayExercici155 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const exercici155 = (array) => {
	return array
		.filter((num) => num >= 10)
		.map((num) => num * 2)
		.reduce((total, num) => total + num);
};

// Exercici 6
const exercici156 = () => {
	const array = [11, 12, 13, 14];
	console.log(`Tots son més grans que 10: ${array.every((num) => num > 10)}`);
	console.log(`Algun és més gran que 10: ${array.some((num) => num > 10)}`);
};

// Exercici 1.6: Array loops
// Exercici 1
const exercici161 = () => {
	const noms = ['Anna', 'Bernat', 'Clara'];
	noms.forEach((nom) => {
		console.log(nom);
	});
};

// Exercici 2
const exercici162 = () => {
	const noms = ['Anna', 'Bernat', 'Clara'];
	for (let nom of noms) {
		console.log(nom);
	}
};

// Exercici 3
const exercici163 = () => {
	const numeros = [1, 2, 3, 4, 5, 6];
    const parells = numeros.filter((num) => num % 2 == 0);
    console.log(parells);
};