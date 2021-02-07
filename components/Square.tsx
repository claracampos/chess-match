import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { getSquareColor } from "../lib/getSquareColor";
import { SquareContent } from "./types";

interface SquareProps {
  onPress: () => void;
  rank: number;
  file: number;

  content?: SquareContent;
}

export const Square = ({ content, rank, file, onPress }: SquareProps) => {
  const squareStyle =
    getSquareColor(rank, file) === "white"
      ? styles.whiteSquare
      : styles.blackSquare;
  let pieceStyle;
  if (content) {
    content.color === "white"
      ? (pieceStyle = styles.whitePiece)
      : styles.blackPiece;
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.square, squareStyle]}>
      <Text style={pieceStyle}>{content ? content.piece[0] : ""}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: { flex: 1, height: 50 },
  blackSquare: {
    backgroundColor: "red",
  },
  whiteSquare: { backgroundColor: "yellow" },
  blackPiece: { color: "black" },
  whitePiece: { color: "white" },
});
