
// adding validation to name in real time
document.getElementById("fName").addEventListener("keyup",function checkName(){
  var user = document.getElementById('fName').value;
  var wordCount = user.split(" ").length;
  var pattern= /^[a-zA-Z]+( [a-zA-Z]+)*$/;
  if (user.length === 0) {
    document.getElementById('fullName').innerHTML = " ** Please fill the full name.";
    document.getElementById("submit").disabled = true;
    return false;
  }
  if(!user.match(pattern)){
    document.getElementById('fullName').innerHTML = " ** No special characters are allowed";
    document.getElementById("submit").disabled = true;
    return false;
  }
  if (user.length < 4) {
    document.getElementById('fullName').innerHTML = " ** Name length must be greater than 4 char";
    document.getElementById("submit").disabled = true;
    return false;
  }
  if (wordCount < 2) {
    document.getElementById('fullName').innerHTML = "** Field should contain min 2 words.";
    document.getElementById("submit").disabled = true;
    return false;
  } else {
    document.getElementById('fullName').innerHTML = " ";
    document.getElementById("submit").disabled = false;
    return false;
  }
});


// adding validation to Email
document.getElementById("emailId").addEventListener("keyup",function checkEmail(){
  var emails = document.getElementById('emailId').value;
  if (emails.length === 0) {
    document.getElementById('emails').innerHTML = " ** Please fill the Email id ";
    document.getElementById("submit").disabled =true;
    return true;
  }
  if (emails.indexOf('@') <= 0) {
    document.getElementById('emails').innerHTML = " ** @ Invalid Position";
    document.getElementById("submit").disabled = true;
    return true;
  }
  if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
    document.getElementById('emails').innerHTML = " **  Invalid . Position";
    document.getElementById("submit").disabled = true;
    return true;
  } else {
    document.getElementById('emails').innerHTML = " ";
    document.getElementById("submit").disabled = false;
    return false;
  }
});

let stateName = ["","","","","","","","","","","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
              "Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala",
              "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha",
              "Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand",
              "Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli",
              "Daman and Diu","Delhi","Lakshadweep","Puducherry"];
// adding validation to phone number

document.getElementById("phoneNum").addEventListener("keyup",function checkPhone(){
  var mobileNumber = document.getElementById('phoneNum').value;
  var provider = mobileNumber.slice(0, 3);
  var state = mobileNumber.slice(3, 6);
  var remain = mobileNumber.slice(6,);
  var firstNum=mobileNumber.slice(0,1);
  var provider1= "("+provider +")";
  var state1="-"+state;
  var remain1= "-"+remain;
  var stateNum = state.slice(1,3);
  if(firstNum!=9 && firstNum!=8 && firstNum!="("  && firstNum!=7 && firstNum!=6 ){
    document.getElementById('errMsg').innerHTML = "** Invalid number";
    document.getElementById("state").innerHTML=" ";
    document.getElementById("submit").disabled = true;
    document.querySelector(".logo").setAttribute("src"," ");
    return false;
  }
  if(mobileNumber.length===0){
    document.getElementById('errMsg').innerHTML = "**Phone Number can not be empty.";
    document.querySelector(".logo").setAttribute("src"," ");
    document.getElementById("state").innerHTML=" ";
    document.getElementById("submit").disabled = true;
    return false;
  }
  if (provider > 621 && provider <= 800 && state>101 && state<=999) {
    document.querySelector(".logo").setAttribute("src","jio.png");
    document.getElementById("state").innerHTML= stateName[stateNum];
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (provider > 801 && provider <= 920 && state>101 && state<=999){
    document.querySelector(".logo").setAttribute("src","idea.png");
    document.getElementById("state").innerHTML=stateName[stateNum];
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if(provider > 921 && provider <=999 && state>101 && state<=999){
    document.querySelector(".logo").setAttribute("src","vodafone.png");
    document.getElementById("state").innerHTML=stateName[stateNum];
    document.getElementById('phoneNum').value = provider1+state1+remain1;
    return false;
  }
  if (mobileNumber.length != 14){
    document.getElementById('errMsg').innerHTML = " ** Mobile Number must be 10 digits only";
    document.getElementById("submit").disabled = true;
    return false;
    }
  else{
    document.getElementById('errMsg').innerHTML =" ";
    document.getElementById("submit").disabled =false;
    return false;
    }
});

function restrictAlphabets(e){
       var x = e.which || e.keycode;
   	if((x>=48 && x<=57)){
   		return true;
   	}else{
   		return false;
    }
  }

  // creating function which will revalidate complete form when user press submit button
  document.getElementById("submit").addEventListener("click" ,function validForm(){
    var user = document.getElementById("fName").value.toUpperCase();
    var mobileNumber = document.getElementById("phoneNum").value;
    var wordCount = user.split(" ").length;
    var emails = document.getElementById('emailId').value;
    console.log(mobileNumber.length);
    var firstNum= mobileNumber.slice(1,2);
    var pattern =/^[a-zA-Z]+( [a-zA-Z]+)*$/;
    localStorage.setItem("Name", user);
    localStorage.setItem("Number", mobileNumber);

    if (user.length ===0){
      document.getElementById('fullName').innerHTML = "** Name Field can not be empty.";
      return false;
    }else if(!user.match(pattern)){
      document.getElementById('fullName').innerHTML = " ** only Alphabets are allowed.";
      return false;
      }else if (user.length < 4) {
      document.getElementById('fullName').innerHTML = " ** Name length must be greater than 4 char";
      return false;
    }else if (wordCount < 2) {
      document.getElementById('fullName').innerHTML = "** Field should contain min 2 words.";
      return false;
    }else if(emails.length === 0){
      document.getElementById('emails').innerHTML = "** Email Field can not be empty.";
      return false;
    }else if (emails.indexOf('@') <= 0){
      document.getElementById('errMsg').innerHTML = " ** Invalid @ Position";
      return false;
    }else if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
      document.getElementById('emails').innerHTML = " **  Invalid . Position";
      return false;
    }else if( mobileNumber.length===0){
      document.getElementById('errMsg').innerHTML = "**Phone Number can not be empty.";
      return false;
    }else if(mobileNumber.length != 14){
      document.getElementById('errMsg').innerHTML = "** Mobile Number must be of 10 digits.  ";
      return false;
    }else if(firstNum!=9 && firstNum!=8 && firstNum!=7 && firstNum!=6){
      document.getElementById('errMsg').innerHTML = "** Invalid number";
      return false;
    }else {
        document.getElementById('fullName').innerHTML = " ";
        var otpVal = Math.floor(Math.random() * 1000 + 1000);
        localStorage.setItem("otpVal", otpVal);
        console.log(otpVal);
        location.replace("validate.html");
        return true;
  }
});
