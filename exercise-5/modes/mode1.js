let forrestBg1;
function forrest1(){
    forrestBg1 = createImg('images/forrest1.jpeg');
    forrestBg1.position(0, 0);
    forrestBg1.size(width, height);
}

function displayCat(){
    removeElements();
      // //lets manipulate the DOM and make our cat move with the arrow keys
      // //create an image element in html
      let cat = createImg("images/cat.png");
      // //select size of image
      cat.size(200,200);
      //  // give it an id
       cat.id('cat');
  }

  function draw() {

    if (mode=1){
      displayCat();
    }

    removeElements();
    // //lets manipulate the DOM and make our cat move with the arrow keys
    // //create an image element in html
    let cat = createImg("images/cat.png");
    // //select size of image
    cat.size(200,200);
    //  // give it an id
     cat.id('cat');

    // //set the position
    // //create arithmetic for x and y position. this lets us read out the position
    xpos = width/2-100+x;
    ypos = height/2-100+y;

  
    // //position the cat based on the arrow keys
    cat.position(xpos, ypos);
  


//controls using arrow keys
    if (keyIsPressed){
        if(keyCode == UP_ARROW){

            //minus 5 in the y direction means up
            y-=5;
            
          } 
          
          if(keyCode == RIGHT_ARROW) {
    
            //plus 5 in the x direction means right
            x+=5;
          }
    
          if(keyCode == DOWN_ARROW) {
    
            //plus 5 in the y direction means down
            y+=5;
          }
    
          if(keyCode == LEFT_ARROW) {
    
            //minus 5 in the x direction means left
            x-=5;
          }
        }
    }