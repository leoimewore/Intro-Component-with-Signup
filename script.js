"use strict";
const submit = document.querySelector(".btn-class");
const firstName = document.querySelector(".firstname");
const lasttName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector(".form");
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lasttName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  ///First Name

  if (firstNameValue === "") {
    const formControl = firstName.parentElement;
    const errorFirstName = document.getElementById("error-firstname");
    errorFirstName.innerHTML = "First name cannot be empty";
    formControl.className = "form-control error";
    // showError(firstName,'First name cannot be empty')
  } else {
    showSuccess(firstName);
  }
  //Last Name

  if (lastNameValue === "") {
    // showError(lasttName,'Last name cannot be empty')
    const formControl = lasttName.parentElement;
    const errorLastName = document.getElementById("error-lastname");
    errorLastName.innerHTML = "Last name cannot be empty";
    formControl.className = "form-control error";
  } else {
    showSuccess(lasttName);
  }

  if (emailValue === "") {
    //   showError(email, "Looks like this is not an email")
    const formControl = email.parentElement;
    const errorEmail = document.getElementById("error-email");
    errorEmail.innerHTML = "Looks like this is not an email";
    formControl.className = "form-control error";
  } else if (!email.value.match(emailRegex)) {
    // showError(email, "Looks like this is not an email")
    const formControl = email.parentElement;
    const errorEmail = document.getElementById("error-email");
    errorEmail.innerHTML = "Looks like this is not an email";
    formControl.className = "form-control error";
  } else {
    showSuccess(email);
  }
  if (passwordValue === "") {
    // showError(password, "Password cannot be empty")
    const formControl = password.parentElement;
    const errorPassword = document.getElementById("error-password");
    errorPassword.innerHTML = "Password cannot be empty";
    formControl.className = "form-control error";
  } else if (passwordValue.length <= 3) {
    // showError(password, "Password must be more than 3 characters")
    const formControl = password.parentElement;
    const errorPassword = document.getElementById("error-password");
    errorPassword.innerHTML = "Password less than 3 characters";
    formControl.className = "form-control error";
  } else {
    showSuccess(password);


  }if (firstName.parentElement.className === 'form-control success' && lasttName.parentElement.className === 'form-control success'&&
       email.parentElement.className === 'form-control success' &&password.parentElement.className === 'form-control success'){
      alert(`Thank you ${firstName.value} for signing-up`);
  }
}








// Not able to debug issue with code

// const showError = function(input,message) {
//     const formControl =input.parentElement;
//     const msgs = document.querySelector('.msg');
//     msgs.innerHTML = message;
//     formControl.className = "form-control error";
// }

const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};
