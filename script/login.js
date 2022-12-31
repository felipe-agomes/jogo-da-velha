const form = document.querySelector('form')

const saveName = ({ target }) => {
	localStorage.setItem(target.id, target.value)
}

const loginSubmit = (event) => {
  event.preventDefault()

  window.location = 'pages/game.htm'
}

player1.addEventListener('input', saveName)
player2.addEventListener('input', saveName)
form.addEventListener('submit', loginSubmit)
