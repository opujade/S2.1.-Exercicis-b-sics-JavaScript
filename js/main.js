import { exercicis } from './exercicis.js';

const divButtons1 = document.getElementById('buttons1');
const divButtons2 = document.getElementById('buttons2');
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

exercici1();
exercici2();