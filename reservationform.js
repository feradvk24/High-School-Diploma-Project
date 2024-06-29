//skrivane na poleto za vuvejdane na broi deca
$('input[type="radio"][name="yes/no"]').on('change', function () {
  var display = $(this);
  if (display.val() == "yes") {
    // when user select yes
    $('#display-kids').fadeIn();
  } else {
    // when user select no
    $('#display-kids').fadeOut();
  }
});

//validirane na data 
//minimalnata data e dnes
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + (dd + 1);
document.getElementById("firstdate").setAttribute("min", today);

//datata na otputuvane e disabled. pri izbor na purva data tq stava enabled i minimalnata i stoinost stava izbranata data
  document.getElementById("firstdate").oninput = function () {
  document.getElementById("lastdate").disabled = false;
  document.getElementById("lastdate").setAttribute("min", document.getElementById("firstdate").value);
}

//validirane na inputi
const form = document.querySelector("form[name='contact-form']");
const fnameInput = document.querySelector("input[name='firstname']");
const lnameInput = document.querySelector("input[name='lastname']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const peopleInput = document.querySelector("input[name='people']");
const fdateInput = document.querySelector("input[name=fdate]");
const ldateInput = document.querySelector("input[name=ldate]");

fnameInput.isValid = () => fnameInput.value;
lnameInput.isValid = () => lnameInput.value;
peopleInput.isValid = () => peopleInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
fdateInput.isValid = () => fdateInput.value;
ldateInput.isValid = () => ldateInput.value;

const inputFields = [fnameInput, , lnameInput, emailInput, phoneInput, peopleInput, fdateInput, ldateInput];

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
    alert("Вашето запитване беше изпратено!");
    document.getElementById('button').style.visibility = 'hidden';   
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));


function letterValidator(id) {
  var inputtxt = document.getElementById(id);
  var letters = /^[А-Яа-яA-Za-z\s\.]+$/;
  if (inputtxt.value.match(letters)) {
    return true;
  }
  else {
    inputtxt.value = inputtxt.value.slice(0, -1);
    return false;
  }
}