import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native"

interface RouterProps {
  style: object

}

export const Router = ({ style }: RouterProps) => {


  return (<>
    <View style={style}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

    </View>

  </>)

};

