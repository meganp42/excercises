//p5 sound library https://p5js.org/reference/#/libraries/p5.sound

let violet, iris, jasmine, heartBG, Layla;

//declare variable up at the top
let mySound1, mySound2, mySound3, mySound4, mySound5;

// var dragging = false; // Is the object being dragged?


//load sounds before you use them
function preload(){

  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/portal.wav');
  mySound2 = loadSound('audio/glow_heart.mp3');
  mySound3 = loadSound('audio/footsteps.wav');
  mySound4 = loadSound('audio/arrow.wav')
  mySound5 = loadSound('audio/arrow_impact.wav')
}


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

  //   //play sound when mouse is pressed on the canvas
  //   //cnv.mousePressed(toggleSound);

    violet = createImg("images/portal.jpg");
    violet.class('flower');
    violet.position(200, 300);

    iris = createImg("images/heart.jpg");
    iris.class('flower');
    iris.position(700, 300);

    jasmine = createImg("images/forest.jpg");
    jasmine.class('flower');
    jasmine.position(1200, 300);

    heartBG = createImg("images/heartBG.jpg");
    heartBG.class('flower');
    heartBG.position(400, 800);

    Layla = createImg("images/Layla.png");
    Layla.class('flower');
    Layla.position(900, 800);
    
  }
  
  function draw() {
    background(0);
    violet.mousePressed(makeViolet);
    iris.mousePressed(makeIris);
    jasmine.mousePressed(makeJasmine);
    heartBG.mousePressed(makeHeartBG);
    Layla.mousePressed(makeLayla);
  }

  function makeViolet() {
    if (mySound1.isPlaying()){
      mySound1.pause();
    } else {
      mySound1.play();
    }
  }

  function makeIris() {
    if (mySound2.isPlaying()){
      mySound2.pause();
    } else {
      mySound2.play();
    }
  }


  function makeJasmine() {
    if (mySound3.isPlaying()){
      mySound3.pause();
    } else {
      mySound3.play();
    }
  }

  function makeHeartBG() {
    if (mySound4.isPlaying()){
      mySound4.pause();
    } else {
      mySound4.play();
    }
  }

  function makeLayla() {
    if (mySound5.isPlaying()){
      mySound5.pause();
    } else {
      mySound5.play();
    }
  }

  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
