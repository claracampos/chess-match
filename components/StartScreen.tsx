import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Color } from "./types";

interface StartScreenProps {
  setPlayer: React.Dispatch<React.SetStateAction<Color | undefined>>;
}

export const StartScreen = ({ setPlayer }: StartScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Moscow 1925</Text>
      <Text>Pick your player</Text>
      <Button onPress={() => setPlayer("white")} title="Capablanca" />
      <Button onPress={() => setPlayer("black")} title="Bogoljubov" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
