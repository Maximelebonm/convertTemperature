import { Text, TouchableOpacity } from "react-native";
import { styleConvertButton } from "./buttonConvert.style";

export const ButtonConvert = ({onPress,unit})=>{
    return (
        <TouchableOpacity onPress={onPress} style={styleConvertButton.button}>
            <Text style={styleConvertButton.text}>convertir en {unit}</Text>
        </TouchableOpacity>
    )
   
    
}