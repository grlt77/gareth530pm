// let inputnoun,displaynoun

// let inputverb,displayverb

// let inputadjetive,displayadjetive

// let inputadverb
// let displayadverb
// let inputplace
// let displayplace

// // function setup(){
// //     createCanvas(600,600)
// // }

// // function draw(){
// //     background("grey")
// // }

// let colourpicker;
// let inputtext
// let diplaytext

// function setup(){
//     createCanvas(600,600)
//     background('green')
//     colourpicker = createColorPicker('grey')
//     colourpicker.position(300-50,300-50)

//     inputtext = createInput()
//     inputtext.position(300,300)
//     inputtext.input(displaytext)
// }

// function draw(){
//     fill(colourpicker.value)
//     textSize(50)
//     text(displaytext,300+50,300+50)
// }

// function userinput(){
//     displaytext = this.value
// }
let inputNoun, inputVerb, inputAdjective, inputAdverb, inputPlace; // input variables
let storytext,storyTemplate,ranstory
let btnGenStory;

function setup(){
    createCanvas(600, 600);

    // create the inputs
    inputNoun = createInput("e.g. cat");
    inputNoun.position(200, 100);

    inputVerb = createInput("e.g. swim");
    inputVerb.position(200, 150);

    inputAdjective = createInput("e.g. happy");
    inputAdjective.position(200, 200);

    inputAdverb = createInput("e.g. happily");
    inputAdverb.position(200, 250);

    inputPlace = createInput("e.g. Ang Mo Kio");
    inputPlace.position(200, 300);

    // add a button
    btnGenStory = createButton("Generate Story");
    btnGenStory.position(200, 350);
    btnGenStory.mousePressed(buttonStoryClicked) // calls a function

    storyTemplate = ["The {adjective} {noun} went {adverb} {verb} at the {place}.",
            "Once upon a time, a {adjective} {noun} {adverb} {verb} at {place}."
    ]

}

function draw(){
    background("teal");

    // Labels
    push();
    fill("white");
    textSize(18);
    textAlign(LEFT, TOP);
    textFont("CONSOLAS");
    text("Noun:", 50, 100);
    text("Verb:", 50, 150);
    text("Adjective:", 50, 200);
    text("Adverb", 50, 250);
    text("Place:", 50, 300);
    pop();

    textAlign(CENTER,CENTER)
    text(storytext,300,500)
}

// call this function when mouse is pressed
function buttonStoryClicked(){
    console.log("this button is being clicked.");

    ranstory = random(storyTemplate)

    storytext = ranstory.replace("{noun}",inputNoun.value());
    storytext = storytext.replace("{verb}",inputVerb.value());
    storytext = storytext.replace("{adjective}",inputAdjective.value());
    storytext = storytext.replace("{adverb}",inputAdverb.value());
    storytext = storytext.replace("{place}",inputPlace.value());


}