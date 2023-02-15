import { TextInput, Text, View } from "react-native"
import { styleInput } from "./InputTemperature.style"

export const InputTemperature = ({defaultValue, onChangeText, unit})=>{
    return <View style={styleInput.container}>
    <TextInput 
        placeholder="Ecrit une temperature" 
        style={styleInput.input} 
        keyboardType="numeric"
        maxLength={4} 
        defaultValue={defaultValue}
        onChangeText={onChangeText}
    />
    <Text style={styleInput.unit}>{unit}</Text>
    </View>
}