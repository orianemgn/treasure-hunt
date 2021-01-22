class Game {

  constructor(){
    this.player = new Player();
  }

   preload(){
    this.imageDown = loadImage('assets/character-down.png');
  }

   draw(){
     image(
       this.image, 
       this.row*SQUARE_SIDE,
       this.col*SQUARE_SIDE,
       50,
       50
     )
   }

  
  
  

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    //stroke(100);
    //fill(120);
    //for (let i =0; i<WIDTH;i++){
      //line(i*SQUARE_SIDE,0,i*SQUARE_SIDE,HEIGHT)
      //line(0,i*SQUARE_SIDE,WIDTH,i*SQUARE_SIDE)
    //} 
    

    for (let x =0; x<WIDTH;x++){
      line(x*SQUARE_SIDE,0,x*SQUARE_SIDE,HEIGHT)
    } 

    for (let y =0; y<WIDTH;y++){
      line(0,y*SQUARE_SIDE,WIDTH,y*SQUARE_SIDE)
    } 
    //line(SQUARE_SIDE,0,SQUARE_SIDE,HEIGHT)
    //line(2*SQUARE_SIDE,0,2*SQUARE_SIDE,HEIGHT)

    // line(0,SQUARE_SIDE,WIDTH,SQUARE_SIDE)
    //line(0,2*SQUARE_SIDE,WIDTH,2*SQUARE_SIDE)
  }
  
}

class Player {
  constructor(){
    this.col = 0;
    this.row = 0;
    this.imageDown; 
  }

  moveUp() {
    this.row -= 50;
  }
  moveDown() {
    this.row += 50;
  }
  moveLeft() {
    this.col -= 50;
  }
  moveRight() {
    this.col += 50;
  }
  draw() {
    this.row = constrain(this.row, 0, 500)
    this.col = constrain(this.col, 0, 500)
    image(this.image, this.x, this.y, 100, 100)
  }

 


}