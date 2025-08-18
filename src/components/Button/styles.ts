import { colors } from "@/src/constants/colors";
import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: colors.buttonPrimary,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 400,
  },
});
