let storyText = [
    "A long time ago in a galaxy far,",
    "far away...",
    "",
    "EPISODE I",
    "THE BEGINNING",
    "",
    "It is a period of learning...",
    "Students have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
    "May the Code be with you!",

    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "im gay",
];

let ypos ;
let bgmusic;
let startAudio;

function preload(){
    bgmusic = loadSound("assets/star_wars_theme_8_bit.mp3")
}

function setup(){
    createCanvas(600,400);
    ypos = height
    startAudio = false;
}

function draw(){;
    background ('black')
    fill("yellow");
    textSize(16);
    textAlign(CENTER,CENTER);



    // text("Hello,world!",width/2,height/2);
    if (startAudio){
        for (let i = 0 ; i < storyText.length ; i++){

            let sentence = storyText[i];

            if (i===storyText.length-1){
                push();
                textSize(200);
                let sentence=storyText[i];
                text(sentence,300,ypos+i*20);
                pop();
            }

            text(sentence,width/2,ypos + i * 20);
        }

        ypos = ypos - 1;
    }
    else {
        text ("Click mouse to start Star Wars...",width/2,height/2);
    }
    console.log(ypos);

    if (ypos < -1050){
        ypos = height
    }
}

function mousePressed(){
    startAudio = !startAudio

    if (startAudio){
        bgmusic.loop();
    }
    else{
        bgmusic.stop();
        ypos = height;
    }
}

