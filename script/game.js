const containerVictory = document.querySelector('.container-victory')
const arraySpan = document.querySelectorAll('.table')
const playerName = document.querySelector('.player-name')

const player1 = localStorage.getItem('player1')
const player2 = localStorage.getItem('player2')
let player = 1
const victoryCondition = [
	/* horizontal condition*/
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],

	/* vertical condition*/
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],

	/* diagonal condition*/
	[0, 4, 8],
	[6, 4, 2],
]

const resetGame = () => {
	containerVictory.style.display = 'none'
	arraySpan.forEach((span) => {
		span.innerHTML = ''
	})
}

const endGame = () => {
	const buttomYes = document.querySelector('.yes')
	const buttomNo = document.querySelector('no')
	const winner = document.querySelector('.winner')
	winner.innerHTML = localStorage.getItem(`player${player}`)
	containerVictory.style.display = 'flex'

	buttomYes.addEventListener('click', resetGame)

	if (player == 1) {
		scorePlayer1.innerHTML++
		return
	}
	scorePlayer2.innerHTML++
}

const checkVictory = (move) => {
	victoryCondition.forEach((arrayCondition) => {
		let victory = 0

		arrayCondition.forEach((element) => {
			if (arraySpan[element].innerHTML == move) {
				console.log(element)
				victory++
				if (victory == 3) {
					endGame()
				}
			}
		})
	})
}

const playerCheck = ({ target }) => {
	if (target.innerHTML != '') {
		return
	}

	if (player === 1) {
		target.innerHTML = '❌'

		checkVictory('❌')
		player = 2
		playerName.innerHTML = player2
		return
	}

	target.innerHTML = '⭕'

	checkVictory('⭕')
	player = 1
	playerName.innerHTML = player1
}

const startGame = () => {
	pl1.innerHTML = 'felipe'
	pl2.innerHTML = 'ke'
	scorePlayer1.innerHTML = 0
	scorePlayer2.innerHTML = 0
	playerName.innerHTML = localStorage.getItem('player1')
	
	arraySpan.forEach((element) => {
		element.addEventListener('click', playerCheck)
	})
}

startGame()
