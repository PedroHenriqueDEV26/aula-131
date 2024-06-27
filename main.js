var img = ""



function preload(){
    img = loadImage("dog_cat.jpg")
}



function setup(){
 canvas = createCanvas(500, 500)
 canvas.center()
}



function draw(){
    image(img, 0,0, 500, 500) 
    fill("red")
    text("Cachorro", 100, 50)
    noFill()
    stroke("red")
    rect(70, 60, 300, 300) 
}