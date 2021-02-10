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
}

export const Square = ({
  content,
  rank,
  file,
  onPress,
  disabled,
  greenHighlight,
}: SquareProps) => {
  let squareColor =
    getSquareColor(rank, file) === "white"
      ? styles.whiteSquare
      : styles.blackSquare;
  if (greenHighlight) {
    squareColor = styles.greenSquare;
  }

  let pieceStyle;
  if (content) {
    pieceStyle =
      content.color === "white" ? styles.whitePiece : styles.blackPiece;
  }

  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.square, squareColor]}
      disabled={disabled}
      underlayColor={"red"}
    >
      <Text style={[styles.piece, pieceStyle]}>
        {content ? content.piece : ""}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  blackSquare: {
    backgroundColor: "#4f4f4f",
  },
  whiteSquare: { backgroundColor: "#bdbdbd" },
  blueSquare: { backgroundColor: "#bdbdbd" },
  greenSquare: { backgroundColor: "green" },
  piece: {
    textTransform: "uppercase",
    fontWeight: "900",
    fontSize: 28,
    textShadowRadius: 5,
  },
  blackPiece: {
    color: "black",
    textShadowColor: "white",
  },
  whitePiece: {
    color: "white",
    textShadowColor: "black",
  },
});
