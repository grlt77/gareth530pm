let displayname;
let inputname; 
let inputage;
let displayage;
let colourpicker;


function setup() {
    createCanvas(600,400)

    displayname = "your name";

    displayage = "your age";

    inputname = createInput();
    inputname.position(200,height- 100);
    inputname.input(updatename)

    inputage = createInput();
    inputage.position(200,height- 75);
    inputage.input(updateAge)

    colourpicker = createColorPicker('green');
    colourpicker.position(200,370);


}

function draw(){
    background(colourpicker.value());

    fill("white")
    rect(25,75,500,160,20)

    fill('red');
    textSize(24);
    textAlign(CENTER,CENTER);

    text(displayname,width/2,height-300);
    text(displayage,width/2,height-250);
    textSize(13)

    text("Enter Your Name (E.Y.N.):",101,height - 89)
    text("Enter Your Age (E.Y.A.):",100,height - 64)

    fill(0);
    textSize(16);
    textAlign(LEFT);
    text("pick a colour: ",50,370+15)
}

function updatename(){
    displayname = this.value();
}

function updateAge(){
    displayage = this.value();
}