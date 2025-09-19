let blx=350;
let bly=350;
let blxspd=7;
let blyspd=7;
let blwdt=30

function setup(){
    createCanvas(700,700);
        fill ('green')
    textSize (32);
    textAlign(RIGHT, CENTER);
            text (" Bounce! ",blx,350);
                            bly = 700
}


function draw(){
    background (240)
    if ( blx <= 700 ) {
            textAlign(RIGHT, CENTER);
        blx = blx + 5
        text (" Bounce! ",blx,350);
}

else if (bly >= 0 ){

        bly = bly - 5
        text (" Bounce! ",bly,350);
}

else if (bly <= 0){
    textAlign(LEFT, CENTER);
        bly = bly + 5
        text (" Bounce! ",bly,350);
}
}

