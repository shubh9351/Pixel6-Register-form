// creating function for otp grneration and which will validate form also,
// if user submit without entring important filled
function otpGeneration(num) {
  var name = localStorage.getItem("Name");
  var phone = localStorage.getItem("Number");
  var otpVal = Math.floor(Math.random() * 1000 + 1000);
  localStorage.setItem("otpVal", otpVal);
  console.log(otpVal);
  document.getElementById("userMsg").innerHTML = "Dear " + name + ", Thank you for your enquiry.";
  document.getElementById("pinMsg").innerHTML = "A 4 digit verification number has been sent to your phone number: " + phone;
  return;
}

// ceating function for otp validation , checking for 3 Attempts
// if Successfull redirecting user to pixel6 website

function otpValidation() {
  var userOtp = document.getElementById("otpGen").value;
  var genOtp = localStorage.getItem("otpVal");
  console.log(userOtp);
  if (userOtp != genOtp){
    document.getElementById("valFailure").innerHTML = " **Invalid OTP,Please enter again (only 3 Attempts left).";
    document.getElementById("valFailure").classList.add("valSuccess");
    var count = 0;
    var countButton = document.getElementById("countButton");
    countButton.onclick = function() {
      count++;
      var newCount = count;
      if (newCount === 1) {
        document.getElementById("valFailure").innerHTML = " **Invalid OTP,Please enter again (only 2 Attempts left).";
      }else if(newCount === 2 && userOtp!=genOtp){
        document.getElementById("valFailure").innerHTML = " **Invalid OTP,Please enter again (only 1 Attempts left).";
      }else if(newCount === 3 && userOtp!=genOtp){
        location.replace("failure.html");
      }else{
        document.getElementById("valFailure").innerHTML = " Validation Successfull";
        document.getElementById("valFailure").classList.add("valSuccess");
        location.replace("http://pixel6.co/");
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
