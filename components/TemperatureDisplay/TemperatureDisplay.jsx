import { Text } from "react-native";
import { styleTemperature } from "./TemperatureDisplay.style";

export const TemperatureDisplay = ({value, unit}) => {
    return <>
    <Text style={styleTemperature.text}>{value} {unit}</Text>
    </>
}