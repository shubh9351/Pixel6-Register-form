// adding validation to name
function checkName() {
  var user = document.getElementById('fName').value;
  var wordCount = user.split(" ").length;
  if (user === " ") {
    document.getElementById('fullName').innerHTML = " ** Please fill the full name.";
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById('fullName').innerHTML = " ** only characters are allowed";
    return false;
  }
  if (user.length < 4) {
    document.getElementById('fullName').innerHTML = " ** Name length must be greater than 4 char";
    return false;
  }
  if (wordCount < 2) {
    document.getElementById('fullName').innerHTML = "** Field should contain min 2 words.";
  } else {
    document.getElementById('fullName').innerHTML = " ";
    return false;
  }
}

// adding validation to Email
function checkEmail() {
  var emails = document.getElementById('emailId').value;
  if (emails === " ") {
    document.getElementById('emails').innerHTML = " ** Please fill the email id ";
    return false;
  }
  if (emails.indexOf('@') <= 0) {
    document.getElementById('emails').innerHTML = " ** @ Invalid Position";
    return false;
  }
  if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
    document.getElementById('emails').innerHTML = " **  Invalid . Position";
    return false;
  } else {
    document.getElementById('emails').innerHTML = " ";
    return false;
  }
}

// adding validate to phone number

function checkPhone() {
  var mobileNumber = document.getElementById('phoneNum').value;
  var provider = mobileNumber.slice(0, 3);
  var state = mobileNumber.slice(3, 6);
  var remain = mobileNumber.slice(6, 10);
  var newNum = "(" + provider + ")-" + state + "-" + remain;
  if (mobileNumber === " ") {
    document.getElementById('phone').innerHTML = " ** Please fill the Phone number";
    return false;
  }
  if(isNaN(mobileNumber)) {
    document.getElementById('phone').innerHTML = " ** Special characters not allowed";
    return false;
  }
  if (mobileNumber.length != 10) {
    document.getElementById('phone').innerHTML = " ** Mobile Number must be 10 digits only";
    return false;
  } else if (provider > 621 && provider <= 800) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio, Maharashtra";
    document.getElementById('phoneNum').value = newNum;
    return false;
  }
  if (provider > 801 && provider <= 920) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Idea");
    document.getElementById('phone').innerHTML = "idea,Maharashtra";
    document.getElementById('phoneNum').value = newNum;
    return false;
  }
  if (provider > 921 && provider <= 999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Vodafone");
    document.getElementById('phone').innerHTML = "Vodafone ,Maharashtra";
    document.getElementById('phoneNum').value = newNum;
    return false;
  } else {
    document.getElementById('phone').innerHTML = "invalid";
    document.getElementById('phoneNum').value = newNum;
    return false;
  }
}
