
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
    export function myName(n: string, s: string): void {
        basic.showString(n)
        basic.showString(s)
    }

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
    //% block="IR_Sensor Pin %myPin Value %value obstacle"
    //% weight=100 
    //% blockGap=20
    //% color="#87CEEB"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
   
    export function Ir_Sens(myPin:DigitalPin,value:enIR):boolean {

        pins.setPull(myPin, PinPullMode.PullUp);
        if (pins.digitalReadPin(myPin) == value) {
            return true;
        }
        else {
            return false;
        }

    }
     export enum enIR {
       
        Get = 0,
       
        NoGet = 1
    }
    
    //%blockId= Makebot block="IR_Send|pin %pin"
    //% weight=100
    //% blockGap=10
    //% color="#87CEEB"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function IR_Send(pin:DigitalPin): void {
        IR_Send(pin);

    }
/***********************************Line follower Sensor********************************************************* */
     //%block="Line Follower sensor %s detect %n"
    export function line(s:DigitalPin , n: string): void {
    let black , white
    n = black||white
    enum Linestate{
        white=1 ,
        black = 0
    }
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
    
}