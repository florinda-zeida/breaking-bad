const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

const answer = document.querySelector("#answer");
const answerError = document.querySelector("#answerError");
let messageAnswerHasError = false;

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const invalidEmailError = document.querySelector("#invalidEmailError");
let emailHasError = false;

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
let addressHasError = false;

form.addEventListener("submit", validateForm);

function validateForm() {
    event.preventDefault();
    const nameValue = name.value;

    if (validateLength(nameValue, 1) === true) {
        nameError.style.display = "none";
        nameHasError = false;
    } else {
        nameError.style.display = "block";
        nameHasError = true;
    }

    const answerValue = answer.value;

    if (validateLength(answerValue, 10) === true) {
        answerError.style.display = "none";
        messageAnswerHasError = false;
    } else {
        answerError.style.display = "block";
        messageAnswerHasError = true;
    }

    const addressValue = address.value;

    if (validateLength(addressValue, 15) === true) {
        addressError.style.display = "none";
        addressHasError = false;
    } else {
        addressError.style.display = "block";
        addressHasError = true;
    }

    const emailValue = email.value;

    if (!validateEmail(emailValue)) {
        if (emailValue !== "") {
            emailError.style.display = "none";
            invalidEmailError.style.display = "block";
        } else {
            emailError.style.display = "block";
            invalidEmailError.style.display = "none";
        }
        emailHasError = true;
    } else {
        invalidEmailError.style.display = "none";
        emailError.style.display = "none";
        emailHasError = false;
    }

    showMessageFinal(
        nameHasError,
        messageAnswerHasError,
        addressHasError,
        emailHasError
    );
}

function showMessageFinal(nameHasError, messageAnswerHasError, addressHasError, emailHasError) {
    if (nameHasError === false && messageAnswerHasError === false && addressHasError === false && emailHasError === false) {

        alert("Message Received\nThanks for sending us your message!");
    }
}

function validateLength(value, lengthToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lengthToCheck) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}