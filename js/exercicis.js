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
];
