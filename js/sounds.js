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

export function registrerAllSounds(){
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.registerSound({src:"assets/sounds/traffic.mp3", id:"traffic"});
    createjs.Sound.registerSound({src:"assets/sounds/claxon.mp3", id:"claxon"});
    createjs.Sound.registerSound({src:"assets/sounds/airplane.mp3", id:"airplane"});
    createjs.Sound.registerSound({src:"assets/sounds/dog.mp3", id:"dog"});
}

export function claxonPlaySound(){
    
    createjs.Sound.play("claxon");
}

export function airplanePlayFlySound(){
    
    createjs.Sound.play("airplane");
}

export function trafficPlaySound(){    
    
    createjs.Sound.play("traffic");
}

export function dogPlaySound(){
    
    createjs.Sound.play("dog");
}

