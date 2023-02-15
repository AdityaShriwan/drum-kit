
//  make sound by button on html

$(".drum").on("click", function () {
var buttonPressed=this.innerHTML;
$("h1").slidetoggle();

setTimeout(function(){$("body").removeClass("newColor");}, 2000);
makeSound(buttonPressed);
buttonAnimation(buttonPressed);

});


// make sound by keyboard key
$(document).on("keydown", function(e){
  var keyName=e.key;

  setTimeout(function(){$("body").addClass("newColor");}, 1000);
  makeSound(keyName);
  buttonAnimation(keyName);
});


// Make sound function
function makeSound(buttonKey){
  switch (buttonKey) {
    case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
    case "a":
          var tom2  = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
    case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
    case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
    case "j":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;
    case "k":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;
  case "l":
         var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();

      break;
    default:console.log(buttonKey);

  }
}

function buttonAnimation(keyValue){
  var keyButton="."+keyValue;
$(keyButton).addClass("pressed");
  setTimeout(function(){$(keyButton).removeClass("pressed");}, 100);

}
