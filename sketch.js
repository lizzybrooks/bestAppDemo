
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);


  button = createButton('click me');
  button.position(width/2-20, height/6);
  button.center();
  button.style('background-color', "pink");
  button.style('border','none');
  button.style('padding','15px');
  button.style('font-size','36px');
  button.style('border-radius', '12px')



  button.mousePressed(changeBG);
}

function draw() {

  fill("teal");
  noStroke();
  textFont("Helvetica");
  textAlign(CENTER);
  textSize(53)
  text("BEST APP",width/2,height/4)

}

function changeBG() {
  let val = random(255);
  background(val);
}
