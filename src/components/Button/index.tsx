import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { buttonStyles } from "./styles";

type Props = TouchableOpacityProps & {
  text: string,
  style: any,
  textStyle: any
}

function Button({ text, style = buttonStyles.button, textStyle = buttonStyles.text,...rest}: Props) {
  return (
   <TouchableOpacity activeOpacity={0.8} {...rest} style={[buttonStyles.button, style]}>
    <Text style={[buttonStyles.text, textStyle]}>{text}</Text>
   </TouchableOpacity>
  )
}

export default Button;
