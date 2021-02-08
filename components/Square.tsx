import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { getSquareColor } from "../lib/getSquareColor";
import { SquareContent } from "./types";

interface SquareProps {
  content: SquareContent;
  onPress: () => void;
  rank: number;
  file: number;
}

export const Square = ({ content, rank, file, onPress }: SquareProps) => {
  const squareStyle =
    getSquareColor(rank, file) === "white"
      ? styles.whiteSquare
      : styles.blackSquare;
  let pieceStyle;
  if (content) {
    pieceStyle =
      content.color === "white" ? styles.whitePiece : styles.blackPiece;
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.square, squareStyle]}>
      <Text style={[styles.piece, pieceStyle]}>
        {content ? content.piece[0] : ""}
      </Text>
    </TouchableOpacity>
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
