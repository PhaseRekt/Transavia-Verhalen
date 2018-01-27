var email = document.getElementById("email")
var password = document.getElementById("password")
var button = document.querySelector("form button")

button.addEventListener("click", function (event) {
    if (email.validity.typeMismatch), (password.validity.typeMismatch) {
        button.classList.add('go')
    } else {
        button.classList.remove('go')
    }
})


//https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
