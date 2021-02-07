import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Chessboard } from "./Chessboard";
import { Color } from "./types";

interface StartScreenProps {
  player: Color;
}

export const ChessScreen = ({ player }: StartScreenProps) => {
  return (
    <View style={styles.container}>
      <Chessboard player={player} />
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
