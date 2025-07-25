let g = 1029;
let b = 2039;
let c =g+b+3049;
console.log(c+" hi bee u");

function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }

function draw() {
  // Recap 1: Repeating Circles
for (let rep = 100; rep < 500; rep){
  if (rep % 2 ===0){
    fill(0)
  }
  else{
    fill(255)
  }
  ellipse (rep,100,100,100)
}
// for (let rep = 100; rep < 400; rep=rep+10){
//   if (rep % 2 ===0){
//     fill(0)
//   }
//   else{
//     fill(255)
//   }
//   ellipse (500,rep,100,100)
// }
// for (let rep = 475; rep > 100; rep=rep-10){
//   if (rep % 2 ===0){
//     fill(0)
//   }
//   else{
//     fill(255)
//   }
//   ellipse (rep,375,100,100)
// }
// for (let rep = 375; rep > 100; rep=rep-10){
//   if (rep % 2 ===0){
//     fill(0)
//   }
//   else{
//     fill(255)
//   }
//   ellipse (100,rep,100,100)
// }
  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}