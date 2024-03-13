import { exercicis } from './exercicis.js';

const divButtons1 = document.getElementById('buttons1');
const divButtons2 = document.getElementById('buttons2');
const divButtons3 = document.getElementById('buttons3');
const divButtons4 = document.getElementById('buttons4');
const divButtons5 = document.getElementById('buttons5');
const divButtons6 = document.getElementById('buttons6');
const divButtons7 = document.getElementById('buttons7');
const divEnunciats = document.getElementById('enunciat');
const divCode = document.getElementById('code');

const createButton = (buttonId) => {
	let btn = document.createElement('button');
	btn.type = 'button';
	btn.id = buttonId;
	btn.classList = 'btn btn-outline-primary';
	btn.innerHTML = `Exercici ${buttonId % 10}`;
	btn.addEventListener('click', () => mostrarExercici(buttonId));

	return btn;
};

const mostrarExercici = (exercici) => {
	const indexExercici = exercicis.findIndex((ex) => ex.exercici == exercici);
	divEnunciats.innerHTML = exercicis[indexExercici].enunciat;
	divCode.innerHTML = exercicis[indexExercici].solucio;
	document.getElementById('header-enunciat').innerHTML = `Exercici ${exercici % 10}`;
}

const createButtonExercises = (exercise, exercisesQtt, divButtons) => {
    for (let i = 0; i < exercisesQtt; i++) {
        divButtons.appendChild(createButton(exercise + i));
    }
}

const exercici1 = () => {
	createButtonExercises(11, 5, divButtons1);
}
const exercici2 = () => {
	createButtonExercises(21, 4, divButtons2);
}
const exercici3 = () => {
	createButtonExercises(31, 5, divButtons3);
}
const exercici4 = () => {
	createButtonExercises(41, 6, divButtons4);
}
const exercici5 = () => {
	createButtonExercises(51, 6, divButtons5);
}
const exercici6 = () => {
	createButtonExercises(61, 6, divButtons6);
}
const exercici7 = () => {
	createButtonExercises(71, 5, divButtons7);
}

exercici1();
exercici2();
exercici3();
exercici4();
exercici5();
exercici6();
exercici7();