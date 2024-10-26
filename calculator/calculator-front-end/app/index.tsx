import { Text, View } from "react-native";
import Fraction from "@rlratcliffe/fraction-lib";


export default function Index() {
let fraction = new Fraction(1,2);


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Updated: 10/25 9:58</Text>
      <Text>Numerator: {fraction.getNumerator()}</Text>
    </View>
  );
}
