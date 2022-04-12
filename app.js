const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const squares = 81
const submission = []

for (let i = 0; i < squares; i++) {
	const inputElement = document.createElement('input')
	inputElement.setAttribute('type', 'number')
	inputElement.setAttribute('min', '1')
	inputElement.setAttribute('max', '9')
	puzzleBoard.appendChild(inputElement)
}

const joinValues = () => {
	const inputs = document.querySelectorAll('input')
	inputs.forEach(input => {
		if (input.value) {
			submission.push(input.value)
		} else {
			submission.push('.')
		}
	})

	console.log(submission)
}

const solve = () => {
	joinValues()
	const data = submission.join('')
	console.log('data', data)

	const options = {
		method: 'POST',
		url: 'https://solve-sudoku.p.rapidapi.com/',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com',
			'X-RapidAPI-Key': '8a53535337mshf9bc4891df7b1b1p196d8bjsn5b06c22f6b1e',
		},
		data: { puzzle: data },
	}

	axios
		.request(options)
		.then(response => {
			console.log(response.data)
		})
		.catch(error => {
			console.error(error)
		})
}

solveButton.addEventListener('click', solve)

// 19:19
