//function is the name of a set of commands, canvas is pagesize

// let timer = 0
// let increment = 1

// function preload(){
//   bubbleImage = loadImage("bubble.png")
// }



function setup() {
//   bubbleX = windowWidth/2
//   bubbleY = windowHeight/2

  createCanvas(windowWidth, windowHeight);
  background(0)
}

//this draw function runs 60 times a second

function draw() {
  // timer = timer + increment
  //  image(bubbleImage, 200, timer, 200, 200)

  // circle(john, sarah, shapeSize)
  // john = john + 1
  // sarah = sarah + 1

  background(212, 212, 212);
      // 
      // stroke (255, 255, 0)
      // rect( 300, 400, 300, 200) //rectMode (CENTER)

  
      //the 1st triangle
  let x11 = windowWidth * 0.05;
  let y11 = windowHeight * 0.07;
    
  let x12 = windowWidth * 0.6;
  let y12= windowHeight * 1.05;
    
  let x13 = windowWidth * -0.5;
  let y13 = windowHeight * 1.05;

      //the 2nd triangle
  let x1 = windowWidth * 0.35;
  let y1 = windowHeight * 0.33;

  let x2 = windowWidth * 0.75;
  let y2 = windowHeight * 1.05;

  let x3 = windowWidth * -0.1;
  let y3 = windowHeight * 1.05;

      //the 3rd triangle
  let x7 = windowWidth * 0.9;
  let y7 = windowHeight * 0.2
       
  let x8 = windowWidth * 1.2;
  let y8 = windowHeight * 1.05;
       
  let x9 = windowWidth * 0.533
  let y9 = windowHeight * 1.05;

      //the 4th triangle
  let x4 = windowWidth * 0.7;
  let y4 = windowHeight * 0.5;

  let x5 = windowWidth * 0.9;
  let y5 = windowHeight * 1.05;

  let x6 = windowWidth * 0.433;
  let y6 = windowHeight * 1.05;


      //COLOUR EDIT
      // Clamp mouseX to stay within the canvas bounds
  let mX = constrain(mouseX, 0, width);

    let r = map(mX, 0, width, 198, 254);
    let g = map(mX, 0, width, 140, 254);
    let b = map(mX, 0, width, 77, 254);
    //circle

    let r1 = map(mX, 0, width, 123, 179);
    let g1 = map(mX, 0, width, 142, 184);
    let b1 = map(mX, 0, width, 110, 188);
    // triangle 1?

    let r2 = map(mX, 0, width, 43, 44);
    let g2 = map(mX, 0, width, 59, 86);
    let b2 = map(mX, 0, width, 49, 108);
    // triangle 2?
  
    let r3 = map(mX, 0, width, 71, 112);
    let g3 = map(mX, 0, width, 105, 140);
    let b3= map(mX, 0, width, 73, 153);
    // triangle 3?

    let r4 = map(mX, 0, width, 26, 68);
    let g4 = map(mX, 0, width, 37, 56);
    let b4 = map(mX, 0, width, 31, 78);
    //mini triangle

    // Map mouseY (from 0 to height) to circle Y position (from windowHeight/2 to windowHeight/2 + 300)
let circleY = map(mouseY, 0, height, windowHeight / 2, windowHeight / 2 -300 );
    
    //SHAPES

      fill (r, g, b)
      //(254, 254, 254)
      stroke (r, g, b)
     // circle(500, 500, 250)
      // circle(windowWidth / 2, windowHeight / 2, 300, 300);
      circle(windowWidth / 2, circleY, 300);
  
      fill (r1, g1, b1)
      stroke (r1, g1, b1)
      triangle (x11, y11, x12, y12, x13, y13);
      // triangle 1? //done // triangle (300, 400, 900, 1100, -60, 1100)

      fill (r2, g2, b2)
      stroke (r2, g2, b2)
      triangle (x1, y1, x2, y2, x3, y3);
      // triangle 2? //done // triangle (300, 400, 900, 1100, -60, 1100)

      fill (r3, g3, b3)
      stroke (112, 140, 153)
      triangle (x7, y7, x8, y8, x9, y9);
      //triangle 3? // > not used(1200, 600, 1700, 1100, 800, 1100)

      fill (r4, g4, b4);
      (68, 56, 78)
      stroke (68, 56, 78)
      triangle (x4, y4, x5, y5, x6, y6);
      //mini triangle 3 // (1200, 600, 1700, 1100, 800, 1100)

      // fill (245, 109, 47)
      // stroke (255, 255, 0)
      // triangle (x7, y7, x8, y8, x9, y9);
      // //triangle 2? // > not used(1200, 600, 1700, 1100, 800, 1100)


      
      //small// circle(500, 200, 50)

      // line (windowWidth/2, windowHeight/2, mouseX, mouseY)
            // cordenetsToStickToAPointAndThenFollow// 
            // triangle (0, 0, mouseX, mouseY, 400, 600)
      // fill (245, 109, 47) 
   
}

// function mousePressed (){
//     shapeSize = shapeSize +50
// }

// let images = [];

// function preload() {
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(0);

//   // Change image based on horizontal mouse position (X-axis)
//   let index = floor(map(mouseX, 0, width, 0, images.length));
//   index = constrain(index, 0, images.length - 1);

//   image(images[index], 0, 0, width, height);
// }