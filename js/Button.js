/**
* @fileoverview clase que define los botones  
* @version 1
* @author  Matias Latina <contacto@matiaslatina.com.ar>
* @copyright matiaslatina.com.ar
* @extends Image
* History
* v1 – creación
*/

class Button extends Image{

    bitmap;

    /**
     * Creates an instance of Button.
     * @param {string} src
     * @param {number} inicialX
     * @param {number} inicialY
     * @param {number} scale
     * @memberof Button
     */
    constructor(src,inicialX,inicialY,scale) {
        super();
        this.src = src;
        this.scale=scale;
        this.inicialX = inicialX;
        this.inicialY = inicialY;
    }

    /**
     * @memberof Button
     */
    set bitmap(bitmap){        
        this.bitmap=bitmap;
        //this.bitmap.cursor="pointer";
    }
    /**
     * @memberof Button
     */
    get bitmap(){
        return this.bitmap;
    }

}