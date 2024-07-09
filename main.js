var img = ""
var status = ""


function preload(){
    img = loadImage("setup.jpg")
}



function setup(){
 canvas = createCanvas(500, 500)
 canvas.center()
 objDetector = ml5.objectDetector("cocossd", modelLoaded)
}

function modelLoaded(){
    console.log("modelo carregado!")
    status = true;
    objDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error)
    }
    console.log(results)
}

function draw(){
    image(img, 0,0, 500, 500) 
    fill("red")
    text("Cachorro", 100, 50)
    noFill()
    stroke("red")
    rect(70, 60, 300, 300) 

    fill("blue")
    text("Gato", 330, 95)
    noFill()
    stroke("blue")
    rect(230, 100, 250, 350)
}