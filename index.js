//adding event listener to all drum buttons
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
});

// adding event listers for keypresses in the whole document
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Takes in a key as an input , and plays the sound associated with the key
function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break; 
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break; 
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break; 
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break; 
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break; 
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break; 
        case "l":
            var bass = new Audio('sounds/kick-bass.mp3');
            bass.play();
            break; 
        default:
            break;
        }
    }
}

// adds the class .pressed to the button pressed for 0.1 second to portray an animation 
function buttonAnimation(key){
    var button = document.querySelector("."+ key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed");
    }, 100);
}