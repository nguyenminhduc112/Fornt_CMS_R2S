const form = document.getElementById('login-form')

form.addEventListener('submit', (event) => {
	event.preventDefault()
	window.location.replace('edit-profile.html')
	return false
})
