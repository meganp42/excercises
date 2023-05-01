let days = [];

let place, person, heart;

let enter, entered;

let body = document.getElementById('html-body');

let spacex = 0;
let spacey = 0;

function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter')
  entered = document.getElementById('enter');
  body.appendChild(entered);
  enter.mousePressed(add);

  background(0);

}

function draw() {

  place = document.getElementById('weather').value;
  person = document.getElementById('mood').value;
  heart = document.getElementById('desire').value;

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function glyph(){
  if (place == "city"){
    fill(235, 219, 52)
  } else if ( place == "forest"){
    fill(64, 59, 156)
  }
  noStroke();
  rect(350+spacex, 400+spacey, 100, 100)
  if (person == 'Layla'){
    fill(255, 0, 247)
  } else if (person == 'Princess'){
    fill(31, 96, 181)
  }
  noStroke();
  ellipse(300+spacex, 400+spacey, 100, 100)
  if(heart == "yes"){
    stroke(87, 112, 250)
  }else if (desire == "no"){
    stroke(17, 6, 145)
  }

  strokeWeight(10);
  line(250+spacex, 300+spacey, 450+spacex, 500+spacey)
  
  spacex += 200;
  if(spacex > 1000){
    spacex = 0;
    spacey += 200;
  }



}

function add() {
  days.push({
    date: Date(),
    place: place,
    person: person,
    heart: heart
  })
  console.log(days);
  console.log("day submitted")

  glyph();
}