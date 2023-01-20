function checkAge() {
    var age = document.getElementById("age").value;
    if (age >= 18) {
      document.getElementById("result").innerHTML = "You are over 18!";
    } else {
      document.getElementById("result").innerHTML = "You are not over 18!";
    }
  }
  