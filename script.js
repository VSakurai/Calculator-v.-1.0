let op

// Функция для вычисления результата на основе выбранного оператора
function calculate() {
	let result
	// Получаем первое и второе числа
	const num1 = Number(document.getElementById('num1').value)
	const num2 = Number(document.getElementById('num2').value)
	// Получить выбранного оператора
	const operator = document.getElementById('operator').value

	// Выполнить расчет на основе выбранного оператора
	switch (operator) {
		case '+':
			result = num1 + num2
			break
		case '-':
			result = num1 - num2
			break
		case '*':
			result = num1 * num2
			break
		case '/':
			result = num1 / num2
			break
		default:
			result = 'Invalid operator'
	}
	// Отображение результата
	document.getElementById('result').textContent = result
}

// Прослушивает событие для кнопки расчета
document.getElementById('calculateBtn').addEventListener('click', calculate)
