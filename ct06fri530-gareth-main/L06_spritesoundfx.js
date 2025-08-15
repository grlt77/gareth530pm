let picoimg,bgmu,soundpop;
let y=200;
let x=200;
function preload(){
    picoimg = loadImage('assets/pico-a.png');
    bgmu= loadSound('assets/star_wars_theme_8_bit.mp3');
    soundpop=loadSound('assets/pop.mp3');


}
function setup() {
    createCanvas(1500, 700);
background('lightblue');
bgmu.loop();
}
function draw(){
background('lightblue');
    image(picoimg,x,y,110,133);
    if (keyIsDown (87)){
         y = y - 5;

     }
    if (keyIsDown (65)){
         x = x - 5;
     }
     if (keyIsDown (83)){
         y = y + 5;
     }
     if (keyIsDown (68)){
         x = x + 5;
     }
    x = constrain(x,0,width - 110);
    y = constrain(y,0,height - 133);
    //  if (x = 0){
    //     //background ('red')
    //     soundpop.play();
    // }
    // else if (x = width-110){
    //     //background ('red')
    //     soundpop.play();
    // }
    // else if (y = 0){
    //    // background ('red')
    //     soundpop.play();
    // }
    // else if (y = height-133){
    //    // background ('red')
    //     soundpop.play();
    // }
}

function keyPressed(){
soundpop.play();
}

function mousePressed(){
    soundpop.play();
}