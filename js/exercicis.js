export const exercicis = [
	{
		exercici: 11,
		enunciat: `Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.`,
		solucio: `const add = (a, b) => a + b;`,
	},
	{
		exercici: 12,
		enunciat: `Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.`,
		solucio: `const randomNumber = () => parseInt(Math.random() * 101);`
	},
	{
		exercici: 13,
		enunciat: `Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, \${this.name});.`,
		solucio: `<pre>class Person {
  constructor(name) {
    this._name = name;
  }
		
  get name() {
    return this._name;
  }
		
  greet = () => console.log(this.name);
}</pre>`
	},
	{
		exercici: 14,
		enunciat: `Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.`,
		solucio: `<pre>const printNumbers = (arrayNumeros) => {
  for (let i = 0; i < arrayNumeros.length; i++) {
    console.log(arrayNumeros[i]);
  }
};</pre>`
	},
	{
		exercici: 15,
		enunciat: `Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.`,
		solucio: `<pre>const message = () => {
  setTimeout(() => {
    console.log('Missatge');
  }, 3000);
};</pre>`
	},
	{
		exercici: 21,
		enunciat: `Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.`,
		solucio: `const potConduir = (edat) => (edat >= 18 ? 'Pots conduir' : 'No pots conduir');`
	},
	{
		exercici: 22,
		enunciat: `Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.`,
		solucio: `<pre>const mesGran = (num1, num2) =>
  num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';</pre>`
	},
	{
		exercici: 23,
		enunciat: `Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.<br>
		Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.`,
		solucio: `<pre>
const exercici3 = (num) =>
  num >= 0 ? (num == 0 ? 'Es zero' : 'Es positivo') : 'Es negativo';
  const trobarMaxim = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c);</pre>`
	},
	{
		exercici: 24,
		enunciat: `Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.`,
		solucio: `<pre>
const parOImpar = (array) => {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results[i] = array[i] % 2 == 0 ? true : false;
  }
  return results;
};</pre>`
	},
	{
		exercici: 31,
		enunciat: `Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.`,
		solucio: `<pre>
const processar = (num, callbackFunction) => callbackFunction(num);
const comprovar = (num) => \`El numero és \${num}\`;</pre>`
	},
	{
		exercici: 32,
		enunciat: `Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.`,
		solucio: `<pre>
const calculadora = (num1, num2, operador) => operador(num1, num2);
const sumar = (num1, num2) => num1 + num2;</pre>`
	},
	{
		exercici: 33,
		enunciat: `Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.`,
		solucio: `<pre>
const esperarISaludar = (name, salutacio) => {
  setTimeout(() => {
    salutacio(name);
  }, 2000);
};
const saludar = (name) => console.log(\`Hola, \${name}!\`);</pre>`
	},
	{
		exercici: 34,
		enunciat: `Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.`,
		solucio: `<pre>
const processarElements = (array, processar) => {
  for (let i = 0; i < array.length; i++) {
    processar(i);
  }
};
const contadorProces = (num) => console.log(\`Contador: \${num + 1}\`);</pre>`
	},
	{
		exercici: 35,
		enunciat: `Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.`,
		solucio: `<pre>
const processarCadena = (cadena, mostrar) => {
  mostrar(cadena.toUpperCase());
};
const mostrar = (item) => console.log(item);</pre>`
	},
	{
		exercici: 41,
		enunciat: `Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.`,
		solucio: `<pre>
const exercici141 = () => {
  const array1 = [1, 2, 3, 4];
  const array2 = [5, 6, 7, 8];
  const array3 = [...array1, ...array2];
  return array3;
};</pre>`
	},
	{
		exercici: 42,
		enunciat: `Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.`,
		solucio: `<pre>
const suma = (...numbers) => {
  let result = 0;
  numbers.forEach((number) => {
    result += number;
  });
  return result;
};</pre>`
	},
	{
		exercici: 43,
		enunciat: `Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.`,
		solucio: `<pre>
const obj1 = {
  nom: 'Oriol',
  cognom: 'Pujade',
  edat: 27,
  isObj1: true,
};
		
const obj2 = { ...obj1 };
obj2.isObj1 = false;

console.log(obj1, obj2);</pre>`
	},
	{
		exercici: 44,
		enunciat: `Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.`,
		solucio: `<pre>
const exercici144 = () => {
  const array1 = [1, 2, 3, 4, 5];
  let a, b, rest;
  [a, b, ...rest] = array1;
};</pre>`
	},
	{
		exercici: 45,
		enunciat: `Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.`,
		solucio: `<pre>
const exercici145 = (a, b, c) => {
  return \`Element 1: \${a}, element 2: \${b}, element 3: \${c}.\`;
};
const arrayExercici145 = [1, 2, 3];
exercici145(...arrayExercici145);
</pre>`
	},
	{
		exercici: 46,
		enunciat: `Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.`,
		solucio: `<pre>
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
</pre>`
	},
	{
		exercici: 51,
		enunciat: `Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.`,
		solucio: `<pre>
const array1 = [1, 2, 3, 4];
const array2 = array1.map((num) => num ** 2);
console.log(array2);
</pre>`
	},
	{
		exercici: 52,
		enunciat: `Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.`,
		solucio: `<pre>
const array1 = [1, 2, 3, 4];
const array2 = array1.map((num) => num ** 2);
console.log(array2);
</pre>`
	},
	{
		exercici: 53,
		enunciat: `Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.`,
		solucio: `<pre>
const array1 = [1, 10, 8, 11];
const primerMajor = array1.find((num) => num > 10);
console.log(primerMajor);
</pre>`
	},
	{
		exercici: 54,
		enunciat: `Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.`,
		solucio: `<pre>
const array1 = [13, 7, 8, 21];
const result = array1.reduce((total, num) => total + num);
console.log(result);
</pre>`
	},
	{
		exercici: 55,
		enunciat: `Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

		<br>- Filtra els nombres majors o iguals a 10.
		
		<br>- Multiplica cada nombre filtrat per 2.
		
		<br>- Calcula la suma dels nombres filtrats i multiplicats per 2.
		
		<br>- La funció ha de retornar el resultat de la suma.`,
		solucio: `<pre>
const arrayExercici155 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const exercici155 = (array) => {
  return array
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((total, num) => total + num);
};
</pre>`
	},
	{
		exercici: 56,
		enunciat: `Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament`,
		solucio: `<pre>
const exercici156 = () => {
  const array = [11, 12, 13, 14];
  console.log(\`Tots son més grans que 10: \${array.every((num) => num > 10)}\`);
  console.log(\`Algun és més gran que 10: \${array.some((num) => num > 10)}\`);
};
</pre>`
	},
	{
		exercici: 61,
		enunciat: `forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];`,
		solucio: `<pre>
const exercici161 = () => {
	const noms = ['Anna', 'Bernat', 'Clara'];
	noms.forEach((nom) => {
		console.log(nom);
	});
};
</pre>`
	},
	{
		exercici: 62,
		enunciat: `for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];`,
		solucio: `<pre>
const exercici162 = () => {
	const noms = ['Anna', 'Bernat', 'Clara'];
	for (let nom of noms) {
		console.log(nom);
	}
};
</pre>`
	},
	{
		exercici: 63,
		enunciat: `filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];`,
		solucio: `<pre>
const exercici163 = () => {
	const numeros = [1, 2, 3, 4, 5, 6];
	const parells = numeros.filter((num) => num % 2 == 0);
	console.log(parells);
};
</pre>`
	},
	{
		exercici: 64,
		enunciat: `for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.`,
		solucio: `<pre>
const exercici164 = () => {
const obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };
for (let property in obj) {
		console.log(property + ': ' + obj[property]);
	}
};
</pre>`
	},
	{
		exercici: 65,
		enunciat: `for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];`,
		solucio: `<pre>
const exercici165 = () => {
	const numeros = [1, 2, 3, 4, 5, 6];
	for (let numero of numeros) {
		if (numero > 5) break;
		console.log(numero);
	}
};
</pre>`
	},
	{
		exercici: 66,
		enunciat: `for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']`,
		solucio: `<pre>
const exercici166 = () => {
	const noms = ['Anna', 'Bernat', 'Clara'];
	for (let nom of noms) {
		console.log(noms.indexOf(nom) + ': ' + nom);
	}
};
</pre>`
	},
	{
		exercici: 71,
		enunciat: `Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.`,
		solucio: `<pre>
let promise1 = new Promise((resolve) => {
	setTimeout(() => {
		resolve('Hola, món');
	}, 2000);
});

promise1.then((salutacio) => console.log(salutacio));
</pre>`
	},
	{
		exercici: 73,
		enunciat: `Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.`,
		solucio: `<pre>
let promise2 = new Promise((resolve, reject) => {
	let input = 'Hola';
	setTimeout(() => {
		if (input === 'Hola') {
			resolve('Resolt');
		} else {
			reject(new Error('No resolt'));
		}
	}, 2000);
});
promise2.then(
	(value) => console.log(value),
	(error) => console.log(error)
);
</pre>`
	},
	{
		exercici: 74,
		enunciat: `Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.`,
		solucio: `<pre>
let promise1 = new Promise((resolve) => {
	setTimeout(() => {
		resolve('Hola, món');
	}, 2000);
});
	
async function myFunction() {
	console.log(await promise1);
}
myFunction();
</pre>`
	},
	{
		exercici: 75,
		enunciat: `Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.`,
		solucio: `<pre>
const exercici175 = () => {
	let promise1 = new Promise((resolve) => {
		setTimeout(() => {
			resolve('Hola, món');
		}, 2000);
	});
		
	async function myFunction() {
		try {
			console.log(await promise1);
		} catch (error) {
			console.log(error);
		}
	}
	myFunction();
};
</pre>`
	},
	{
		exercici: 76,
		enunciat: `Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.`,
		solucio: `<pre>
const promise2Sec = new Promise((resolve, reject) => {
	const input = 'Hola';
	if (input === 'Hola'){
		setTimeout(() => {
			resolve('Han passat 2 segons.');
		}, 2000);
	} else {
		reject(new Error('Error al primer promise.'));
	}
});
const promise3Sec = new Promise((resolve, reject) => {
	const input = 'Adéu';
	if (input === 'Adéu'){
		setTimeout(() => {
			resolve('Han passat 3 segons.');
		}, 3000);
	} else {
		reject(new Error('Error al segon promise.'));
	}
});

Promise.all([promise2Sec, promise3Sec]).then((results) => {
	console.log(results);
})
</pre>`
	},
];
