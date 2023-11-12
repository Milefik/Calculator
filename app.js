const resultElem = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const sub = document.getElementById('submit')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let action = '+'


plus.onclick = function () {
	action = '+'
}

minus.onclick = function () {
	action = '-'
}
 
sub.onclick = function () {
	if (action == '+') {
		resultElem.textContent = Number(input1.value) + Number(input2.value)
	} else if (action == '-') {
		resultElem.textContent = Number(input1.value) - Number(input2.value)
	}
}
