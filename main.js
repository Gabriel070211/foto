var objects=[];
var statusatual=false

function preload() {
    img=loadImage("maxresdefault (1).jpg")
}

function setup() {
    createCanvas( 800,600 )
    objectdetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="status:detectando objeto"
}

function draw(){
    image(img,0,0,800,600)
    
    if(statusatual){
        document.getElementById("status").innerHTML="objeto detectado"
        for(var i=0;i<objects.length;i++){
        porcentagem=objects[i].confidence
        porcentagem=floor(porcentagem*100)
        x=floor(objects[i].x)-200
        y=floor(objects[i].y)
        height=floor(objects[i].height)-100
        width=floor(objects[i].width)-200
        text(objects[i].label+" "+porcentagem+'%',x,y)
        stroke("#0000ff")
        noFill()
        rect(x,y,width,height)
        }
        
    }
    
    
}

function modelLoaded(){
    console.log("modelo carregado")
    objectdetector.detect(img,gotResult)
    statusatual=true
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        objects=results
    }
}

























































































