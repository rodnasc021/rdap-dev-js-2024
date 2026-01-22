const emailInput = document.querySelector("#emailInput");
const resultMessage = document.querySelector("#resultMessage");
const emailForm = document.querySelector("#emailForm");

emailForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const email = emailInput.value;
	const isValid = validateEmail(email);
	if(isValid) {
		resultMessage.textContent = "Email válido";
		resultMessage.style.color = "green";
	} else {
		resultMessage.textContent = "Email inválido";
		resultMessage.style.color = "red";
	}
});

const validateEmail = (email) => {
	const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
	return regex.test(email);
};

