let NumberofButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < NumberofButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;//'this' refers to the button that got clicked
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

    document.addEventListener("keypress", function (event) {
        makesound(event.key);
        buttonAnimation(event.key);
    });

function makesound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("Sounds/Assets_sounds_tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("Sounds/Assets_sounds_tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("Sounds/Assets_sounds_tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("Sounds/Assets_sounds_tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("Sounds/Assets_sounds_snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("Sounds/Assets_sounds_crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("Sounds/Assets_sounds_kick-bass.mp3");
            kick.play();
            break;
            
        default: console.log("key pressed is " + key);
    }
}

function buttonAnimation(key) {
    let activeButton = document.querySelector("#" + key);
    activeButton.classList.add("pressed"); //all classes of css can be added using classList
    setTimeout(function () { //to remove the class after some time
        activeButton.classList.remove("pressed");
    }, 100);//100 milliseconds
}

