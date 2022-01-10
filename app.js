var angleOne = document.querySelector('#numberOne');
var angleTwo = document.querySelector('#numberTwo');
var angleThree = document.querySelector('#numberThree');
var triBtn = document.querySelector('.triangle-btn');
var isTriOutput = document.querySelector('.output-triangle');

var triangleChecker = () => {
    var sum = Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value);
    console.log(sum);
    if(sum === 180){
        isTriOutput.innerHTML = "The angles form traingle!";
    } else {
        isTriOutput.innerHTML = "The angles does not form triangle!";
    }
}

triBtn.addEventListener('click', triangleChecker);

// problem two
const quizForm = document.querySelector('#form-quiz')
const quizBtn = document.querySelector('.submit');
const quizOutput = document.querySelector('.output-quiz');

const correctAnswers = ['45°', 'a + b + c', 'no', '100°', 'one right angle'];

var calculateScore = (e) => {
	e.preventDefault();
	const data = new FormData(quizForm);
	let index = 0;
	let score = 0;
	for (let entry of data.values(quizForm)) {
		if (entry === correctAnswers[index]) {
			score++;
		}
		index++;
	}
	quizOutput.innerHTML = `Your score is ${score}`;
}

quizBtn.addEventListener('click', calculateScore);

// problem three
var firstSide = document.querySelector('#a');
var secondSide = document.querySelector('#b');
var hypoBtn = document.querySelector('#hypo-btn');
var hypOutput = document.querySelector('#hypo-output');

var calculateHypotenuse = () => {
    const sumOfSquares = firstSide.value * firstSide.value + secondSide.value * secondSide.value;
    // a * a + b * b
    console.log(sumOfSquares);
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
	console.log(lengthOfHypotenuse);
    hypOutput.innerText = `The length of the hypotenuse is ${lengthOfHypotenuse} cm`;
}
hypoBtn.addEventListener('click', calculateHypotenuse);

// prblem four area 
var base = document.querySelector('#base');
var height = document.querySelector('#height');
var areaBtn = document.querySelector('#area-btn');
var areaOutput = document.querySelector('#area-output');

var calculateArea = () => {
	//area = (base * height)/2
	const bxh = base.value * height.value;
    console.log(bxh);
	const area = bxh / 2;
	console.log({ area });
	areaOutput.innerText = `The area of the triangle is ${area} cm²`;
}

areaBtn.addEventListener('click', calculateArea);