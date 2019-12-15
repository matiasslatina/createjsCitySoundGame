/**
* @fileoverview Contiene la funcion llamada en el main que registra los archvos de sonido  
* @version 1
* @author  Matias Lstina <contacto@matiaslatina.com.ar>
* @copyright matiaslatina.com.ar
* History
* v1 – creación
*/

/**
 * Registra los archivos desonido mediante createjs.Sound.registerSound
 *
 */
function registrerAllSounds(){
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.registerSound({src:"assets/sounds/traffic.mp3", id:"traffic"});
    createjs.Sound.registerSound({src:"assets/sounds/claxon.mp3", id:"claxon"});
    createjs.Sound.registerSound({src:"assets/sounds/airplane.mp3", id:"airplane"});
    createjs.Sound.registerSound({src:"assets/sounds/dog.mp3", id:"dog"});
}

function claxonPlaySound(){
    context.resume();
    createjs.Sound.play("claxon");
}

function airplanePlayFlySound(){
    context.resume();
    createjs.Sound.play("airplane");
}

function trafficPlaySound(){    
    context.resume();
    createjs.Sound.play("traffic");
}

function dogPlaySound(){
    context.resume();
    createjs.Sound.play("dog");
}