let blx=750;
let bly=350;
let blxspd=7;
let blyspd=7;
let blwdt=30

function setup() {
    createCanvas(1500, 700);
    background(235);
}

function draw(){

    noStroke();

    blx = blx + blxspd;
    if (blx + blwdt / 2 >= width || blx - blwdt / 2 <= 0){
        blxspd = blxspd * -1;
            fill (random(1,254),random(1,254),random(1,254));
            blwdt = blwdt + 1
    }
    bly = bly + blyspd;
    if (bly + blwdt / 2 >= height || bly - blwdt / 2 <= 0){
            blyspd = blyspd * -1;
                fill (random(1,254),random(1,254),random(1,254));
                blwdt = blwdt + 1
    }
    circle(blx,bly,blwdt);
}