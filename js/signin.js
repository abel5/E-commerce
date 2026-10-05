
const signUpFormContainer = document.getElementById("sign-up-form-container");
const signInFormContainer = document.getElementById("sign-in-form-container")
const signUpForm = document.getElementById("sign-up-form");
const signInForm = document.getElementById("sign-in-form")
const goToSignUp = document.querySelector(".go-to-sign-up");
const goToSignIn = document.querySelector(".go-to-sign-in");
const signInBtn = document.getElementById("sign-in-btn");
const createAccountBtn = document.getElementById("create-account-btn");
const rememberMe = document.getElementById("remember-me");

if (localStorage.getItem("rememberMe") === "true") {
    rememberMe.checked = true;
}

function showForm(form) {
    [signInFormContainer, signUpFormContainer].forEach(item => {
        item.style.display = "none";
    })
    form.style.display = "flex";
}




goToSignIn.addEventListener("click", () => {
    showForm(signInFormContainer);
})
goToSignUp.addEventListener("click", () => {
    showForm(signUpFormContainer);
})

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (signInForm.checkValidity()) {

        if (rememberMe.checked) {

            localStorage.setItem("rememberMe", "true");

        } else {

            localStorage.removeItem("rememberMe");
        }
        window.location.href = "e-commerce.html";
        
    } else {
        signInForm.reportValidity();
    }
})


createAccountBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (signUpForm.checkValidity()) {
        showForm(signInFormContainer)
    } else {
        signUpForm.reportValidity();
    }
})



