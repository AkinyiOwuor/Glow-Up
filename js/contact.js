function validate() {

  var firstName = document.getElementById("firstName").value;
  var secondName = document.getElementById("secondName").value;
  var city = document.getElementById("city").value;
  var subject =  document.getElementById("subject").value;
  if (firstName === "") {
      alert("Please fill in your first name");
      return false;

  } else if (secondName=== "") {
      alert("Please insert your second name!");
      return false;

  } else if (city === "") {

      alert("Please select your city!");

  } else if (subject=== "") {

    alert("Please leave us a message!");


  } else {

      alert("We have recieved your message dear " + name + " and we will get back to you");


  };
};

