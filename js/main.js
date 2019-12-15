/**
* @fileoverview archivo principal  
* @version 1
* @author  Matias Latina <contacto@matiaslatina.com.ar>
* @copyright matiaslatina.com.ar
* @extends Image
* History
* v1 – creación
*/

window.addEventListener("load",function(){
    context = new AudioContext();
    main();
},false);

var context;
var canvas;
var stage;

// los vehículos a instanciar
var car1;
var car2;
var car3;
var airplane;

// los botones a instanciar
var buttonPlayClaxon;
var buttonPlayCars;
var buttonPlayAirplane;
var buttonPlayDog;

var imageDog;

var start=false;

function main(){
    canvas=document.getElementById("miJuego");
    stage=new createjs.Stage(canvas);
    stage.enableMouseOver(10);

    //objetos para los autos y aviones 
    car1= new Vehicle("assets/img/grua.png",150,stage.canvas.height - 180, 0.3);
    car1.onload = handleImageLoadCars1;
    car2= new Vehicle("assets/img/racing.png",250,stage.canvas.height - 110, 0.3);
    car2.onload = handleImageLoadCars2;
    car3= new Vehicle("assets/img/turistico.png",10,stage.canvas.height - 118, 0.3);
    car3.onload = handleImageLoadCars3;
    airplane= new Vehicle("assets/img/aeroplano.png",stage.canvas.width,40, 0.23);
    airplane.onload = handleImageLoadAirplane;

    //botones de interacción con el usuario
    buttonPlayClaxon = new Button("assets/img/bocina.png",10,10,0.1);
    buttonPlayClaxon.onload = handleButtonLoadClaxon;
    buttonPlayCars = new Button("assets/img/volante.png",70,10,0.1);
    buttonPlayCars.onload = handleButtonLoadCars;
    buttonPlayAirplane = new Button("assets/img/sombrero.png",130,10,0.1);
    buttonPlayAirplane.onload = handleButtonLoadAirplane;
    buttonPlayDog = new Button("assets/img/perrito.png",190,10,0.1);
    buttonPlayDog.onload = handleButtonLoadDog;

    imageDog = new Image();
    imageDog.src = "assets/img/perro.png";
    imageDog.onload = handleImageLoadDog;

    registrerAllSounds();

    createjs.Ticker.addEventListener('tick', iniciarTrafico);
 
}

function handleImageLoadCars1(event) {
    var image = event.target;
    car1.bitmap = createBitmap(image);
}

function handleImageLoadCars2(event) {
    var image = event.target;
    car2.bitmap = createBitmap(image);
}

function handleImageLoadCars3(event) {
    var image = event.target;
    car3.bitmap = createBitmap(image);
}

function handleImageLoadAirplane(event) {
    var image = event.target;
    airplane.bitmap = createBitmap(image);
}

function createBitmap(image){
    var bitmap = new createjs.Bitmap(image);
    bitmap.scale= image.scale;
    bitmap.x = image.inicialX;
    bitmap.y = image.inicialY;
    return bitmap;
}

function handleButtonLoadClaxon(event) {
    var image = event.target;
    buttonPlayClaxon.bitmap = createBitmap(image);
    buttonPlayClaxon.bitmap.cursor = "pointer";
    buttonPlayClaxon.bitmap.addEventListener('click', claxonPlaySound);
}

function handleButtonLoadCars(event) {
    var image = event.target;
    buttonPlayCars.bitmap = createBitmap(image);
    buttonPlayCars.bitmap.cursor = "pointer";
    buttonPlayCars.bitmap.addEventListener('click', trafficPlaySound);
}

function handleButtonLoadAirplane(event) {
    var image = event.target;
    buttonPlayAirplane.bitmap = createBitmap(image);
    buttonPlayAirplane.bitmap.cursor = "pointer";
    buttonPlayAirplane.bitmap.addEventListener('click', airplanePlayFlySound);
}

function handleButtonLoadDog(event) {
    var image = event.target;
    buttonPlayDog.bitmap = createBitmap(image);
    buttonPlayDog.bitmap.cursor = "pointer";
    buttonPlayDog.bitmap.addEventListener('click', dogPlaySound);
}

function handleImageLoadDog(event) {
    var image = event.target;
    bitmap6 = new createjs.Bitmap(image);
    bitmap6.scale= 0.08;
    bitmap6.x = 589;
    bitmap6.y = 172;
    stage.addChild(bitmap6);
    stage.update();
}

function iniciarTrafico(){
    if(!start){
        stage.addChild(car1.bitmap,car2.bitmap,car3.bitmap,airplane.bitmap);
        stage.addChild(buttonPlayClaxon.bitmap,buttonPlayAirplane.bitmap,buttonPlayCars.bitmap,buttonPlayDog.bitmap);
        stage.update();
        start=true;
    }
    car1.going(10,-1000,stage);
    car2.going(15,-120,stage);
    car3.going(15,-120, stage);
    airplane.flying(4,-100,stage);
    stage.update();
}

