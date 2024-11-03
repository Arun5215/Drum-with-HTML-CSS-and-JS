var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
   var button = this.innerHTML;
   makeSound(button);
   animation(button);

    }
    );
    
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animation(event.key);
});
function makeSound(key){
   
switch (key) {
    case "w":
        var audio = new Audio('./sounds/tom-1.mp3');
audio.play()
        break;

        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
audio.play()
break;
case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
audio.play()
break;
case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
audio.play()
break;
case "j":
            var audio = new Audio('./sounds/snare.mp3');
audio.play()
break;
case "k":
            var audio = new Audio('./sounds/kick-bass.mp3');
audio.play()
break;
case "l":
            var audio = new Audio('./sounds/crash.mp3');
audio.play()
break;

    default:(innerHTML)
        break;
}

   
   
}

function animation(checker){
   var d = document.querySelector("." + checker);
   d.classList.add("pressed");
   // This will display "Hello, World!" in the console after 2 seconds
setTimeout(function () {
   d.classList.remove("pressed")
}, 200);

}











