const game = new Game();

function preload(){
 imageDown = loadImage('assets/character-down.png');
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  //imageDown(image, 0, 0, 50,50)
  
}

function draw() {
  game.drawGrid();
  
}