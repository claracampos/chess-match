import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { getRank } from "../lib/getRank";
import { Square } from "./Square";
import { Color, Rank, File, SquareContent } from "./types";

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
  const [target, setTarget] = useState<[File, Rank] | undefined>(undefined);

  const handlePress = (rank: Rank, file: File, piece?: SquareContent) => {
    if (piece && piece.color === player) {
      setSelectedPiece(piece);
    }
    if (selectedPiece) {
      setTarget([file, rank]);
    }
  };
  return (
    <View
      style={[
        styles.board,
        { flexDirection: player === "black" ? "column" : "column-reverse" },
      ]}
    >
      {boardState.map((rankArray, index) => {
        const rank = index + 1;
        return (
          <View style={styles.rank} key={`rank${rank}`}>
            {rankArray.map((square, squareIndex) => {
              const file = squareIndex + 1;
              return (
                <Square
                  content={square}
                  rank={rank}
                  file={file}
                  key={`rank${rank}-file${file}`}
                  onPress={() => handlePress(rank, file, square)}
                />
              );
            })}
          </View>
        );
      })}
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
