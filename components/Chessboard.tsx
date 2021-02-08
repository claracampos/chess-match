import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { getRank } from "../lib/getRank";
import { Square } from "./Square";
import { Color, SquareContent } from "./types";

interface ChessboardProps {
  player: Color;
}

export const Chessboard = ({ player }: ChessboardProps) => {
  const initialBoard = [
    getRank("initial", "white"),
    getRank("pawn", "white"),
    getRank("empty"),
    getRank("empty"),
    getRank("empty"),
    getRank("empty"),
    getRank("pawn", "black"),
    getRank("initial", "black"),
  ];

  const [boardState, setBoardState] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState<SquareContent>(undefined);
  const [target, setTarget] = useState<Array<number> | undefined>(undefined);

  const handlePress = (rank: number, file: number, piece?: SquareContent) => {
    if (piece && piece.color === player) {
      setSelectedPiece(piece);
    }
    if (selectedPiece) {
      setTarget([rank, file]);
    }
  };
  return (
    <View
      style={[
        styles.board,
        { flexDirection: player === "black" ? "column" : "column-reverse" },
      ]}
    >
      {boardState.map((rank, rankIndex) => (
        <View style={styles.rank} key={`rank${rankIndex}`}>
          {rank.map((square, squareIndex) => (
            <Square
              content={square}
              rank={rankIndex}
              file={squareIndex}
              key={`rank${rankIndex}-file${squareIndex}`}
              onPress={() => handlePress(rankIndex, squareIndex, square)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: { height: 400 },
  rank: {
    flexDirection: "row",
    width: 400,
    height: 50,
    flex: 1,
  },
});
