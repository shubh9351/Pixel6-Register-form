// adding validation to name
function checkName() {
  var user = document.getElementById('fName').value;
  var wordCount = user.split(" ").length;
  var pattern =/^[a-zA-z ]+$/ ;

  if (user.length === 0) {
    document.getElementById('fullName').innerHTML = " ** Please fill the full name.";
    return false;
  }
  if(!user.match(pattern)){
    document.getElementById('fullName').innerHTML = " ** No special characters are allowed";
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
  if (emails.length === 0) {
    document.getElementById('emails').innerHTML = " ** Please fill the Email id ";
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
  var firstNum=mobileNumber.slice(1,2);
  var provider1= "("+provider +")";
  var state1="-"+state;
  var remain1= "-"+remain;


  if (provider > 621 && provider <= 800 && state>000 && state<=100 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Andra Pradesh."
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 621 && provider <= 800 && state>101 && state<=150 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Assam."
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 621 && provider <= 800 && state>151 && state<=200 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Arunachal Pradesh."
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 621 && provider <= 800 && state>201 && state<=250 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Assam."
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 621 && provider <= 800 && state>251 && state<=300 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Bihar";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 621 && provider <= 800 && state>301 && state<=350 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Chattisgarh";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 621 && provider <= 800 && state>351 && state<=400 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Goa";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }if (provider > 621 && provider <= 800 && state>401 && state<=450 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Gujarat";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 621 && provider <= 800 && state>851 && state<=900 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Haryana";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 621 && provider <= 800 && state>901 && state<=950 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Goa";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }

  if (provider > 621 && provider <= 800 && state>450 && state<=850 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Maharashtra."
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 621 && provider <= 800 && state>950 && state<=999 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Jio");
    document.getElementById('phone').innerHTML = "Reliance Jio,";
    document.getElementById("state").innerHTML="Jharkhand";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 801 && provider <= 920 && state>000 && state<=050 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Idea");
    document.getElementById('phone').innerHTML = "Idea,";
    document.getElementById("state").innerHTML="kerala";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 801 && provider <= 920 && state>051 && state<=150 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Idea");
    document.getElementById('phone').innerHTML = "Idea,";
    document.getElementById("state").innerHTML="Delhi";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 801 && provider <= 920 && state>150 && state<=250 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Idea");
    document.getElementById('phone').innerHTML = "Idea,";
    document.getElementById("state").innerHTML="Rajastan";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 801 && provider <= 920 && state>251 && state<=300 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Idea");
    document.getElementById('phone').innerHTML = "Idea,";
    document.getElementById("state").innerHTML="Jharkhand";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 801 && provider <= 920 && state>450 && state<=750 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Idea");
    document.getElementById('phone').innerHTML = "Idea,";
    document.getElementById("state").innerHTML="Maharashtra";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 801 && provider <= 920 && state>751 && state<=900 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Idea");
    document.getElementById('phone').innerHTML = "Idea,";
    document.getElementById("state").innerHTML="Uttar Pradesh";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 801 && provider <= 920 && state>301 && state<=350 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Idea");
    document.getElementById('phone').innerHTML = "idea,";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    document.getElementById("state").innerHTML="West-Bengal";
    return false;
  }
  if (provider > 801 && provider <= 920 && state>351 && state<=400 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Idea");
    document.getElementById('phone').innerHTML = "idea,";
    document.getElementById("state").innerHTML="Jharkhand";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 801 && provider <= 920 && state>400 && state<=450 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Idea");
    document.getElementById('phone').innerHTML = "idea,";
    document.getElementById("state").innerHTML="Chandigarh";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 801 && provider <= 920 && state>450 && state<=850 && remain>0000 && remain<=9999) {
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Idea");
    document.getElementById('phone').innerHTML = "idea,";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if(provider > 921 && provider <= 999 && state>000 && state<=100 && remain>0000 && remain<=9999){
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Vodafone");
    document.getElementById('phone').innerHTML = "Vodafone,";
    document.getElementById("state").innerHTML="Delhi"
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if(provider > 921 && provider <= 999 && state>100 && state<=200 && remain>0000 && remain<=9999){
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Vodafone");
    document.getElementById('phone').innerHTML = "Vodafone,";
    document.getElementById("state").innerHTML="Haryana"
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if(provider > 921 && provider <= 999 && state>201 && state<=250 && remain>0000 && remain<=9999){
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Vodafone");
    document.getElementById('phone').innerHTML = "Vodafone,";
    document.getElementById("state").innerHTML="Panjab"
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
    }
    if(provider > 921 && provider <= 999 && state>251 && state<=350 && remain>0000 && remain<=9999){
      document.getElementById('phone').classList.remove("warning");
      document.getElementById('phone').classList.add("Vodafone");
      document.getElementById('phone').innerHTML = "Vodafone,";
      document.getElementById("state").innerHTML="TamilNadu"
      document.getElementById('phoneNum').value = provider1+state1+remain1;
      return false;
      }
      if(provider > 921 && provider <= 999 && state>351 && state<=450 && remain>0000 && remain<=9999){
        document.getElementById('phone').classList.remove("warning");
        document.getElementById('phone').classList.add("Vodafone");
        document.getElementById('phone').innerHTML = "Vodafone,";
        document.getElementById("state").innerHTML="Goa"
        document.getElementById('phoneNum').value = provider1+state1+remain1;
        return false;
        }
        if(provider > 921 && provider <= 999 && state>450 && state<=750 && remain>0000 && remain<=9999){
          document.getElementById('phone').classList.remove("warning");
          document.getElementById('phone').classList.add("Vodafone");
          document.getElementById('phone').innerHTML = "Vodafone,";
          document.getElementById("state").innerHTML="Maharashtra"
          document.getElementById('phoneNum').value = provider1+state1+remain1;
          return false;
          }
          if(provider > 921 && provider <= 999 && state>750 && state<=800 && remain>0000 && remain<=9999){
            document.getElementById('phone').classList.remove("warning");
            document.getElementById('phone').classList.add("Vodafone");
            document.getElementById('phone').innerHTML = "Vodafone,";
            document.getElementById("state").innerHTML="Madhya Pradesh";
            document.getElementById('phoneNum').value = provider1+state1+remain1;
            return false;
            }
            if(provider > 921 && provider <= 999 && state>801 && state<=900 && remain>0000 && remain<=9999){
              document.getElementById('phone').classList.remove("warning");
              document.getElementById('phone').classList.add("Vodafone");
              document.getElementById('phone').innerHTML = "Vodafone,";
              document.getElementById("state").innerHTML="Maharashtra";
              document.getElementById('phoneNum').value = provider1+state1+remain1;
              return false;
              }
  if(provider > 921 && provider <= 999 && state>901 && state<=999 && remain>0000 && remain<=9999){
    document.getElementById('phone').classList.remove("warning");
    document.getElementById('phone').classList.add("Vodafone");
    document.getElementById('phone').innerHTML = "Vodafone,";
    document.getElementById("state").innerHTML="Telengana";
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
    }
  if (mobileNumber.length != 14){
    document.getElementById('errMsg').innerHTML = " ** Mobile Number must be 10 digits only";
    return false;
  }
  if(firstNum!=9 && firstNum!=8 && firstNum!=7 && firstNum!=6){
      document.getElementById('errMsg').innerHTML = "** Invalid number";
      return false;
  }
else{
    document.getElementById('errMsg').innerHTML = " ";
    return false;
    }
}

function restrictAlphabets(e){
       var x = e.which || e.keycode;
   	if((x>=48 && x<=57)){
   		return true;
   	}else{
   		return false;
    }
  }
