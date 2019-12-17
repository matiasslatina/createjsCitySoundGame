/**
* @fileoverview clase que define los vehículos con movimieto sobre el stage
* @version 1
* @author  Matias Latina <contacto@matiaslatina.com.ar>
* @copyright matiaslatina.com.ar
* @extends Image
* History
* v1 – creación
*/

/**
 *
 *
 * @class Vehicle
 * @extends {Image}
 */
export default class Vehicle extends Image{

    bitmap;
    
    /**
     * Creates an instance of Vehicle.
     * @param {string} src
     * @param {number} inicialX
     * @param {number} inicialY
     * @param {number} scale
     * @memberof Vehicle
     */
    constructor(src,inicialX,inicialY,scale) {
        super();
        this.src = src;
        this.scale=scale;
        this.inicialX = inicialX;
        this.inicialY = inicialY;
    }

    /**
     *
     *
     * @memberof Vehicle
     */
    set bitmap(bitmap){
        this.bitmap=bitmap;
    }

    /**
     *
     *
     * @memberof Vehicle
     */
    get bitmap(){
        return this.bitmap;
    }

    /** 
     * @param {number} velocity
     * @param {number} resetPosition
     * @param {createjs.Stage} stage
     * @memberof Vehicle
     */
    going(velocity, resetPosition, stage){
        this.bitmap.x += velocity;
        if (this.bitmap.x > stage.canvas.width) { this.bitmap.x = resetPosition; }
    }
    
    /**
     * @param {number} velocity
     * @param {number} limit
     * @param {createjs.Stage} stage
     * @memberof Vehicle
     */
    flying(velocity, limit, stage){
        this.bitmap.x -= velocity;
        this.bitmap.y -= 0.6;
        if (this.bitmap.x < limit) { 
            
            this.bitmap.x = stage.canvas.width; 
            this.bitmap.y = this.inicialY; 
        }
    }

}