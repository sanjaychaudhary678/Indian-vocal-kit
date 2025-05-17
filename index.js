// Detecting click press
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonKey = this.classList[0]; // Gets 'a', 's', etc.
        makeSound(buttonKey);
        quickButtonAnimation(buttonKey);
    });
}

// Detecting keyboard press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    quickButtonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case 'a':
            new Audio('./sounds/sa.mp3').play();
            break;
        case 's':
            new Audio('./sounds/re.mp3').play();
            break;
        case 'd':
            new Audio('./sounds/ga.mp3').play();
            break;
        case 'f':
            new Audio('./sounds/ma.mp3').play();
            break;
        case 'g':
            new Audio('./sounds/pa.mp3').play();
            break;
        case 'h':
            new Audio('./sounds/dha.mp3').play();
            break;
        case 'j':
            new Audio('./sounds/ni.mp3').play();
            break;
        default:
            console.log("Unrecognized key: " + key);
    }
}

function quickButtonAnimation(currentKey) {
    var button = document.querySelector("." + currentKey);
    if (button) {
        button.classList.add("pressed");
        setTimeout(function() {
            button.classList.remove("pressed");
        }, 100);
    }
}
