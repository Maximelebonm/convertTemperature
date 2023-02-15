import { UNITS } from "../constant/constant";
import { Text } from "react-native";

export function getOpositeUnit(unit){
    return unit == UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

export function convertTemperatureTo(value, unit){
    if(unit== UNITS.celcius){
        return (value-32)/1.8
    }else{
        return value * 1.8 + 32
    }

}

export function isIceTemperature(value, unit){
    if(unit== UNITS.celcius){
        return value <= 0
    }else {
        return value <= 32
    }
}