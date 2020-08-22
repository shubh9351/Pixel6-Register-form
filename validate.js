
 function myFun(){
  var name = localStorage.getItem("Name");
  var phone = localStorage.getItem("Number");
  var oneTimePass=localStorage.getItem("otpVal");
  document.getElementById("userMsg").innerHTML =  name ;
  document.getElementById("pinMsg").innerHTML =  phone;
  document.getElementById("otpVal").innerHTML = oneTimePass ;
  return;
}

// ceating function for otp validation , checking for 3 Attempts
// if Successfull redirecting user to pixel6 website

function otpValidation() {
  var userOtp = document.getElementById("otpGen").value;
  var genOtp = localStorage.getItem("otpVal");
  console.log(genOtp);
  if(userOtp != genOtp){
    document.getElementById("valFailure").innerHTML = " **Invalid OTP,Please enter again (only 3 Attempts left).";
    document.getElementById("valFailure").classList.add("valSuccess");
    var count = 0;
    var countButton = document.getElementById("countButton");
    countButton.onclick = function(){
      count++;
      var newCount = count;
      var newOtp = document.getElementById("otpGen").value;
      console.log(newCount);
      console.log(newOtp);
      if(newCount == 1 && newOtp == genOtp){
        document.getElementById("valFailure").innerHTML = " Validation Successfull";
        document.getElementById("valFailure").classList.add("valSuccess");
        location.replace("http://pixel6.co/");
        return false;
      }
      if(newCount== 1 && newOtp != genOtp){
          document.getElementById("valFailure").innerHTML = " **Invalid OTP,Please enter again (only 2 Attempts left).";
          return false;
      }
      if(newCount == 2 && newOtp == genOtp){
        document.getElementById("valFailure").innerHTML = " Validation Successfull";
        document.getElementById("valFailure").classList.add("valSuccess");
        location.replace("http://pixel6.co/");
        return false;
      }
      if( newCount==2 && newOtp!=genOtp){
        document.getElementById("valFailure").innerHTML = " **Invalid OTP,Please enter again (only 1 Attempts left).";
        return false;
      }
      if(newCount == 3 && newOtp == genOtp){
         document.getElementById("valFailure").innerHTML = " Validation Successfull";
         document.getElementById("valFailure").classList.add("valSuccess");
         location.replace("http://pixel6.co/");
         return false;
       }
      if(newCount ==3 && newOtp != genOtp){
        location.replace("http://pixel6.co/failur");
        return false;
      }
  }

  }else{
    document.getElementById("valFailure").innerHTML = " Validation Successfull";
    document.getElementById("valFailure").classList.add("valSuccess");
    location.replace("http://pixel6.co/");
    return false;
  }
}
