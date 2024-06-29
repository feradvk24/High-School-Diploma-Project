//validirane
const form = document.querySelector("form[name='contact-form']");
const fnameInput = document.querySelector("input[name='firstname']");
const lnameInput = document.querySelector("input[name='lastname']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const subjectInput = document.querySelector("input[name='subject']");
const fromInput = document.querySelector("input[name='from']");
const messageInput = document.querySelector("textarea[name='message']");

fnameInput.isValid = () => fnameInput.value;
lnameInput.isValid = () => lnameInput.value;
fromInput.isValid = () => fromInput.value;
subjectInput.isValid = () => subjectInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => messageInput.value;

const inputFields = [fnameInput, , lnameInput, emailInput, phoneInput, fromInput, messageInput, subjectInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

var invalidChars = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

inputFields.forEach((input) => input.addEventListener("input", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}));

const validateInputs = () => {
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    inputFields.forEach((input) => {
    input.disabled = true;
    });
    document.getElementById('button').style.visibility = 'hidden';
    alert("Вашето запитване беше изпратено!");
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));

