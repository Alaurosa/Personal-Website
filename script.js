// document.getElementById("WhoIAm").innerHTML = "Hello JavaScript!";

var whoIAm = document.getElementById("WhoIAm");
var text = ["Ashley Kim", "a daughter", "a sister", "a coder", "a game developer", "asian", "Korean", "Chinese", "a gamer", "a Kpop fan", "a Kdrama fan", "17", "a woman", "an athlete"]
var i = 0;

setInterval(
  function(){
  $('#WhoIAm').fadeOut(function(){
            $(this).html(text[(i = (i + 1) % text.length)]).fadeIn();
          }); }, 3000)
