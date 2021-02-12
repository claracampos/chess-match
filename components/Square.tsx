import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { getSquareColor } from "../lib/getSquareColor";
import { SquareContent } from "./types";

interface SquareProps {
  content: SquareContent;
  onPress: () => void;
  rank: number;
  file: number;
  disabled?: boolean;
  greenHighlight?: boolean;
  blueHighlight?: boolean;
  highlightPiece?: boolean;
  greenUnderlay?: boolean;
}

export const Square = ({
  content,
  rank,
  file,
  onPress,
  disabled,
  greenHighlight,
  blueHighlight,
  highlightPiece,
  greenUnderlay,
}: SquareProps) => {
  const squareColor = getSquareColor(rank, file);
  let squareStyle =
    squareColor === "white" ? styles.whiteSquare : styles.blackSquare;
  if (blueHighlight) {
    squareStyle =
      squareColor === "white" ? styles.lightBlueSquare : styles.darkBlueSquare;
  }
  if (greenHighlight) {
    squareStyle = styles.greenSquare;
  }

  let pieceStyle =
    content && content.color === "white"
      ? styles.whitePiece
      : styles.blackPiece;
  if (highlightPiece) {
    pieceStyle = styles.yellowPiece;
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.square, squareStyle]}
      disabled={disabled}
      underlayColor={greenUnderlay ? "#99ffc0" : "#ff0a0a"}
    >
      <Text style={[styles.piece, pieceStyle]}>
        {content ? content.piece[0] : ""}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  blackSquare: {
    backgroundColor: "#4f4f4f",
  },
  whiteSquare: { backgroundColor: "#bdbdbd" },
  lightBlueSquare: { backgroundColor: "#198cff" },
  darkBlueSquare: { backgroundColor: "#0825ff" },
  greenSquare: { backgroundColor: "#05ff65" },
  piece: {
    textTransform: "uppercase",
    fontWeight: "900",
    fontSize: 24,
    textShadowRadius: 5,
  },
  blackPiece: {
    color: "#000",
    textShadowColor: "#fff",
  },
  whitePiece: {
    color: "#fff",
    textShadowColor: "#000",
  },
  yellowPiece: { color: "#fff708", textShadowColor: "#000" },
});
