// write your codes here
let counter = 5
let bgmu;
let bgcolor = 220 
let objectid;    
function preload(){
    bgmu = loadSound('assets/bossaNova.mp3');
}

function setup() {
    createCanvas(400,400);
}

function draw(){


        background(bgcolor)

    let hournumber = hour();
    hournumber = nf(hournumber,2);

    let minutenumber = minute();
    minutenumber = nf(minutenumber,2);

    let secondnumber = second();
    secondnumber = nf(secondnumber,2);

    let timenow = hournumber + ":" + minutenumber + ":" + secondnumber

    textAlign (CENTER,CENTER);
    textSize(48);
    fill (random(0,255),random(0,255),random(0,255));
    text (timenow,width/2,height/2 - 50);

    textSize(36);
    text ('Countdown Timer:',width/2,height/2 + 50);

       textSize(24);
    text (counter,width/2,height/2 + 100);

    textSize(12);
    text ('Click me to start!',width/2,height/2 + 175);

    if (keyIsDown(32)){
        bgmu.play();
    }
    else if(keyIsDown(DOWN_ARROW)){
        bgmu.stop();
    }
}

// function keyPressed(){
//     if (keyCode === UP_ARROW){
//         bgcolor = color(random(0,255),random(0,255),random(0,255));
//     }
//     else if (keyCode === 49){
        
//         counter --;
//         counter = constrain(counter,0,5);
//     }
// }

function mousePressed(){
        objectid = setInterval(doSomething,1000);

    //clearInterval(objectid)
}

function doSomething(){
           counter --;
        counter = constrain(counter,0,5);

        if (counter === 0 ){
            clearInterval(objectid)
                bgmu.play();
            for (let i = 0;i<10;index++){
                bgcolor = color(random(0,255),random(0,255),random(0,255));
            }
        }
} 