$(document).ready(function(){
$("#submit").on('click', function(){
  event.preventDefault();
  var firstName = $("#first-name").val()
  var secondName = $("#second-name").val()
  var message = $("#message").val()
  if (firstName ==''||secondName==''||message=='') {
      alert("Please fill in your first name");
  } 
  else {
      alert("We have received your message dear " + firstName + " and we will get back to you");
  };
})
})



