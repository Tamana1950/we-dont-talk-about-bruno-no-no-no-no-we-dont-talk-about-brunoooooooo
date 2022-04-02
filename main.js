img = "";


function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
}

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
image(img,0,0,600,500);
fill("#03f7ff");
text("dog",45,75);
noFill();
stroke("#03f7ff");
rect(30,60,450,350);
}
