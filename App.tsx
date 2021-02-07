import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChessScreen } from "./components/ChessScreen";
import { StartScreen } from "./components/StartScreen";
import { Color } from "./components/types";

export default function App() {
  const [player, setPlayer] = useState<Color | undefined>(undefined);

  return (
    <View style={styles.container}>
      {player ? (
        <ChessScreen player={player} />
      ) : (
        <StartScreen setPlayer={setPlayer} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
