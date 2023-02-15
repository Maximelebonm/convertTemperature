import { useState, useEffect } from "react";
import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import hot from "./assets/hot.png";
import cold from "./assets/cold.png";
import { UNITS, DEFAULT_TEMPERATURE, DEFAULT_UNITS } from "./constant/constant";
import { InputTemperature } from "./components/InputTemperatire/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { getOpositeUnit } from "./service/Temperature.service";
import { convertTemperatureTo } from "./service/Temperature.service";
import { ButtonConvert } from "./components/buttonConvert/ButtonConvert";
import { isIceTemperature } from "./service/Temperature.service";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNITS);
  const [currentBackground, setCurrentBackground] = useState();

  const opositeUnite = getOpositeUnit(currentUnit);

  useEffect(() => {
    const TemperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(TemperatureAsFloat)) {
      const isColdBackground = isIceTemperature(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? cold : hot);
    }
  }, [inputValue]);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputValue);
    console.log(valueAsFloat);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(valueAsFloat, opositeUnite).toFixed(1);
  }
  return (
    <>
      <ImageBackground source={currentBackground} style={s.container}>
        <View style={s.worksSpace}>
          <View>
            <TemperatureDisplay
              value={getConvertedTemperature()}
              unit={opositeUnite}
            />
          </View>
          <InputTemperature
            onChangeText={setInputValue}
            defaultValue={DEFAULT_TEMPERATURE}
            unit={currentUnit}
          />

          <ButtonConvert
            onPress={() => {
              setCurrentUnit(opositeUnite);
            }}
            unit={currentUnit}
          />
        </View>
      </ImageBackground>
    </>
  );
}
