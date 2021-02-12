import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  dark?: boolean;
  disabled?: boolean;
}

export const Button = ({ title, onPress, disabled, dark }: ButtonProps) => {
  const buttonStyle = dark ? [styles.button, styles.darkButton] : styles.button;
  const textStyle = dark
    ? [styles.buttonText, styles.whiteText]
    : styles.buttonText;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 2,
    margin: 5,
    minWidth: 64,
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#000",
  },
  buttonText: { fontWeight: "600", fontSize: 16, paddingBottom: 2 },
  darkButton: { backgroundColor: "#292929", color: "#fff" },
  whiteText: { color: "#fff" },
});
