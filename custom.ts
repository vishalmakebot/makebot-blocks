
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */



/**
 * Makebot blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Makebot {
    /**
     * TODO: describe your function here
     * @param n describe parameter here Name 
     * @param s describe parameter here Surname
     */
    //% block="My Name is %n Surname %s"
    //% weight=100 color=#FC0A0A
    export function myName(n: string, s: string): void {
        basic.showString(n)
        basic.showString(s)
    }
/***************************Ultrasonic Sensor ************************************************** */
    
    
    //% blockId=Makebot block="Ultrasonic|Trig %Trig|Echo %Echo"
    //% color="#0fbc11 "
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Ultrasonic(Trig: DigitalPin, Echo: DigitalPin): number{

    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 0)

    let distance = pins.pulseIn(Echo, PulseValue.High)
    return Math.floor(distance/58);
    basic.pause(100)
    }

/*****************************************************************************************
 **********************************IR SENSOR***************************************************/
    //% block="IR_Sensor Pin %myPin Value %value"
    //% weight=100 
    //% blockGap=20
    //% color="#87CEEB"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
   
    export function Ir_Sens(myPin:DigitalPin,value:IRstate):boolean {

        pins.setPull(myPin, PinPullMode.PullUp);
        if (pins.digitalReadPin(myPin) == value) {
            return true;
        }
        else {
            return false;
        }

    }
     export enum IRstate {
       
        Get = 0,
       
        NoGet = 1
    }
    
    //%blockId= Makebot block="IR|pin %pin"
    //% weight=100
    //% blockGap=10
    //% color="#87CEEB"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function IR(pin:DigitalPin): void {
        IR(pin);

    }

/***********************************Line follower Sensor********************************************************* */
    
    
    //%block="Line Follower sensor %s detect %n"
    //% weight=100
    //% blockGap=10
    //% color="#F7664D"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function line(s:DigitalPin ,n: linestate): void {
    let black , white
    n = black||white
    let sens1 :AnalogPin , speed , m1:DigitalPin , m2:DigitalPin
    if(sens1=1)
    {
        speed =0 , m1=0,m2=0
    }
    if(sens1=0){
        speed=255 , m1=1,m2=0
    }
    if(sens1=1){
        speed=255,m1=0,m2=1
    }
    else{
        speed=255
        m1=0
        m2=0
    }

    }
    export enum linestate {
        white=1 ,
        black = 0
    }

/*****************************RGB Lights***************************************************** */

    //% block="RGB Lights connected to pin %pin Value %value"
    //% weight=100
    //% blockGap=10
    //% color="#27D9F7"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Lights(pin:DigitalPin): void {
    enum Colors {
    
    Red = 0xFF0000,
   
    Orange = 0xFFA500,
    
    Yellow = 0xFFFF00,
    
    Green = 0x00FF00,
    
    Blue = 0x0000FF,
    
    Indigo = 0x4b0082,
    
    Violet = 0x8a2be2,
    
    Purple = 0xFF00FF,
    
    White = 0xFFFFFF,
    
    Black = 0x000000
}
}
}