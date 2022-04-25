const decimal = document.getElementById("decimal");
const plus = document.getElementById("plus")
const divide = document.getElementById("divide")
const minus = document.getElementById("minus")
const multiply = document.getElementById("multiply")
const equal = document.getElementById("equal");
const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const allClear = document.getElementById("ac");
const numArr = [zero, one, two, three, four, five, six, seven, eight, nine];
const operationArr = [plus, divide, multiply];
let screenInput = document.getElementById("screen-input");
let screenOutput = document.getElementById("screen-output");
let count = 0;
let decimalCount = 0;
let operationCount = 0;
let minusCount = 0;
let negativeCount = 0;
let answer = 0;


// Resets the calculator
allClear.addEventListener("click", function() {
	screenInput.innerHTML = 0;
	screenOutput.innerHTML = 0;
	count = 0;
	decimalCount = 0;
	operationCount = 0;
});

// Input numbers on the screen 
for (let i = 0; i < numArr.length; i++) {
	numArr[i].addEventListener("click", function() {
		count++;
		if (count === 1) {
			screenInput.innerHTML = "";
		}
		operationCount = 0;
		minusCount = 0;
		screenInput.innerHTML += numArr.indexOf(numArr[i]);
		answer = screenInput.innerHTML;
		answer = answer.toString().split("");
		for (let i = 0; i < answer.length; i++) {
			if (answer[i] === "÷") {
				answer[i] = "/";
			}
			if (answer[i] === "×") {
				answer[i] = "*";
				console.log(true);
			}
			if (answer[i] === "/" && answer[i + 1] == "0") {
				return screenOutput.innerHTML = "Can't ÷ By 0";
			}
		}
		screenOutput.innerHTML = eval(answer.join(""));
	});
}

// Operation buttons excluding subtration 
for (let i = 0; i < operationArr.length; i++) {
	operationArr[i].addEventListener("click", function() {

		operationCount++;
		if (operationCount === 1) {
			screenInput.innerHTML += operationArr[i].innerHTML;
		}
		decimalCount = 0;

	});
}

// Subtraction
minus.addEventListener("click", function() {
	count++;
	if (count === 1) {
		screenInput.innerHTML = "";
	}
	minusCount++;
	if (minusCount === 1) {
		screenInput.innerHTML += minus.innerHTML;
	}
});


// Decimals
decimal.addEventListener("click", function() {
	count++;
	if (count === 1) {
		screenInput.innerHTML = "";
	}
	decimalCount++;
	if (decimalCount === 1) {
		screenInput.innerHTML += ".";
	}
});


// When clicking equals, display the evaluated equation on the output screen 
equal.addEventListener("click", function() {
	answer = screenInput.innerHTML;
	answer = answer.toString().split("");
	for (let i = 0; i < answer.length; i++) {
		if (answer[i] === "÷") {
			answer[i] = "/";
		}
		if (answer[i] === "×") {
			answer[i] = "*";
			console.log(true);
		}
		if (answer[i] === "/" && answer[i + 1] == "0") {
			return screenOutput.innerHTML = "Can't ÷ By 0";
		}
	}

	screenOutput.innerHTML = eval(answer.join(""));
})