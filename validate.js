
 function myFun(){
  var name = localStorage.getItem("Name");
  var phone = localStorage.getItem("Number");
  var oneTimePass=localStorage.getItem("otpVal");
  document.getElementById("userMsg").innerHTML =  name ;
  document.getElementById("pinMsg").innerHTML =  phone;
  document.getElementById("otpVal").innerHTML = oneTimePass ;
  return;
}

document.getElementById("otpGen").addEventListener("keyup",function otpValidation(){
  var userOtp = document.getElementById("otpGen").value;
  var pattern= /[0-9]/g;
if(userOtp.length<4){
  document.getElementById("countButton").disabled=true;
  document.getElementById("otpErr").innerHTML="**Enter 4 digits";
  return false;
}else if(!userOtp.match(pattern)){
  document.getElementById("countButton").disabled=true;
  document.getElementById("otpErr").innerHTML="**Enter Valid Otp";
  return false;
}else{
  document.getElementById("countButton").disabled=false;
  document.getElementById("otpErr").innerHTML="";
  return true;
}
});

// ceating function for otp Submission , checking for 3 Attempts
// if Successfull redirecting user to pixel6 website
var count=0;
document.getElementById("countButton").addEventListener("click",function otpSubmit(){
  var newOtp = document.getElementById("otpGen").value;
  var genOtp = localStorage.getItem("otpVal");
  count++;
  var newCount =count;
  if(newCount==1 && newOtp == genOtp){
    document.getElementById("valFailure").innerHTML = "Validation Successfull";
    location.replace("http://pixel6.co/");
    return false;
  }else if(newCount==1 && newOtp != genOtp){
    document.getElementById("valFailure").innerHTML = " **Invalid OTP,Please enter again (" + (newCount+2) + " Attempts left).";
    return false;
  }else if(newCount==2 && newOtp == genOtp){
       document.getElementById("valFailure").innerHTML = "Validation Successfull";
       document.getElementById("valFailure").classList.add("valSuccess");
       location.replace("http://pixel6.co/");
       return false;
  }else if(newCount==2 && newOtp!= genOtp){
         document.getElementById("valFailure").innerHTML = " **Invalid OTP,Please enter again (2 Attempts left).";
         return false;
  }else if(newCount == 3 && newOtp == genOtp){
        document.getElementById("valFailure").innerHTML = "Validation Successfull";
        location.replace("http://pixel6.co/");
        return false;
  }else if(newCount==3 && newOtp != genOtp){
          document.getElementById("valFailure").innerHTML = " **Invalid OTP,Please enter again (1 Attempt left).";
          return false;
  }else if(newCount == 4 && newOtp == genOtp){
        document.getElementById("valFailure").innerHTML = " Validation Successfull";
        location.replace("http://pixel6.co/");
        return false;
  }else if(newCount == 4 && newOtp != genOtp){
        document.getElementById("valFailure").innerHTML = " **Invalid OTP( 0 Attempts left).";
        location.replace("http://pixel6.co/Failure");
        return false;
      }
});
