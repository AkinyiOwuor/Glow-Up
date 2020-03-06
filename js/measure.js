$(document).ready(function(){
    $("#submit").on('click', function() {
        event.preventDefault();
        var name=$("#name").val();
        var chest=$("#chest").val();
        var waist=$("#waist");
        var hip=$("#hip");
        var innerLeg=$('#inner-leg')
        var clothType=$('#cloth-type')
        if(name ==''||chest ==''||waist ==''||hip ==''||innerLeg =='' ||clothType ==''){
           alert("Please ensure you fill in all the fields!");
       }
        else{
            alert(" Thank you " + name + " we have received your details.")
       }
    })
     var myIndex = 0;
          carousel();
          function carousel() {
           var i;
            var x = document.getElementsByClassName("mySlides");
             for (i = 0; i < x.length; i++) {
               x[i].style.display = "none";
             }
             myIndex++;
             if (myIndex > x.length) { myIndex = 1 }
             x[myIndex - 1].style.display = "block";
             setTimeout(carousel, 3000);
           }
 })