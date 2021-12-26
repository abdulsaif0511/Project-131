img="";
function preload() {
    img=loadImage("dog_cat.jpg");
}
function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw() {
    image(img,0,0,640,420);
    fill("#00FF0E");
    text("dog",60,60);
    noFill();
    stroke("#00FF0E");
    rect(45,50,285,370)
}