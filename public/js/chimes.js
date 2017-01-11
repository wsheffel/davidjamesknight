const chimes = document.querySelectorAll(".chimes");
const controls = document.getElementById("controls");
const keycodes = [67, 72, 73, 77, 69, 83, 190];
let press_play;

function letterGlow(){  
    chimes.forEach(function(x){
        x.classList.remove("glowing")
    });
    let this_keycode = keycodes[Math.floor(Math.random() * keycodes.length)];
    let letter = document.querySelector(`.chimes[data-key="${this_keycode}"]`);
    if (press_play == true){ 
        letter.classList.add("glowing");
        playSound(this_keycode);
        setTimeout(letterGlow, Math.floor((Math.random() * 10000) +1 ));
    } else {
        letter.classList.remove("glowing");
    }
}

function playSound(this_keycode){
    let audio = document.querySelector(`audio[data-key="${this_keycode}"]`);
    audio.currentTime = 0; // reset .mp3
    audio.play();
}
    
controls.onclick = function(){
    if (this.className == "fa fa-play"){   
        this.classList.remove("fa-play");
        this.classList.add("fa-stop");
        press_play = true;
    } else {   
        this.classList.remove("fa-stop");
        this.classList.add("fa-play");
        press_play = false
    };
    letterGlow();
}