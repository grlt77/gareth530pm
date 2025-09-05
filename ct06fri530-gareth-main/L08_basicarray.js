let sw;
let bf;
let favgame;
function preload(){
    sw = loadSound("assets/star_wars_theme_8_bit.mp3");
}

function setup(){
    createCanvas(600,700);
    background('black');

    bf = false;

    fill ('green')
    textSize (32);
    textAlign(CENTER, CENTER);
    // text("HE110, MY NAME I5 6ARETH",width/2,100);
    // text("MY A6E I5 12",width/2,200);
    // text("MY FAV0UR1TE ACT1V1TY I5 6AM1N6",width/2,300);
    // text ("---8 COCK 8---",width/2,height/2)

    favgame = ["NIC","99 NIAF","GAG","AA","BF","STD","PTD"]
    console.log(favgame[0])
text ("My Favourite Games: ",width/2,50);
    for (let i = 1;i < favgame.length;i++){

        text (i + "."+favgame[i-1],width/2,i*100);
    }
}

function draw(){
    
}

function mousePressed(){
    if (bf){
sw.play();
    }
    else{
          sw.stop();
    }
    bf = !bf;
    
}

// function mouseReleased(){
//     sw.stop();
// }

// function mouseDragged(){
//     sw.play();
// }