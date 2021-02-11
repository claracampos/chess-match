import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { findPieceLocation } from "../lib/findPieceLocation";
import { getNewBoardPositions } from "../lib/getNewBoardPositions";
import { initialChessboard } from "../lib/initialChessboard";
import { isCorrectPiece } from "../lib/isCorrectPiece";
import { isCorrectTarget } from "../lib/isCorrectTarget";
import { Square } from "./Square";
import { Color, Rank, File, SquareContent, Move } from "./types";

interface ChessboardProps {
  activePlayer: Color;
  playersView: Color;
  currentMove: Move;
  playersTurn: boolean;
  setPlayersTurn: React.Dispatch<React.SetStateAction<boolean>>;
  highlightRank?: Rank;
  highlightFile?: File;
}

export const Chessboard = ({
  activePlayer,
  playersView,
  currentMove,
  playersTurn,
  setPlayersTurn,
  highlightFile,
  highlightRank,
}: ChessboardProps) => {
  const [boardState, setBoardState] = useState(initialChessboard);
  const [selectedPiece, setSelectedPiece] = useState<[File, Rank] | undefined>(
    undefined
  );

  const makeAMove = (newBoardState: SquareContent[][]) => {
    setSelectedPiece(undefined);
    setBoardState(newBoardState);
    setPlayersTurn(!playersTurn);
  };

  useEffect(() => {
    if (!playersTurn) {
      if (!selectedPiece) {
        const [file, rank] = findPieceLocation(
          boardState,
          currentMove[0],
          activePlayer
        );
        setSelectedPiece([file, rank]);
      } else {
        const newPositions = getNewBoardPositions(
          boardState,
          selectedPiece,
          currentMove,
          activePlayer
        );
        setTimeout(() => {
          makeAMove(newPositions);
        }, [1000]);
      }
    }
  }, [playersTurn, selectedPiece, currentMove]);

  const handlePress = (rank: Rank, file: File, piece?: SquareContent) => {
    if (!selectedPiece) {
      const correctPieceSelected = piece
        ? isCorrectPiece(activePlayer, piece, currentMove)
        : false;
      if (correctPieceSelected) {
        setSelectedPiece([file, rank]);
      }
    } else {
      if (isCorrectTarget(file, rank, currentMove)) {
        const newPositions = getNewBoardPositions(
          boardState,
          selectedPiece,
          currentMove,
          activePlayer
        );
        makeAMove(newPositions);
      }
    }
  };

  return (
    <View
      style={[
        styles.board,
        {
          flexDirection: playersView === "black" ? "column" : "column-reverse",
        },
      ]}
    >
      {boardState.map((rankArray, index) => {
        const rank = index;
        return (
          <View style={styles.rank} key={`rank${rank}`}>
            {rankArray.map((square, squareIndex) => {
              const file = squareIndex;
              const correct =
                selectedPiece &&
                rank === selectedPiece[1] &&
                file === selectedPiece[0];
              return (
                <Square
                  content={square}
                  rank={rank}
                  file={file}
                  key={`rank${rank}-file${file}`}
                  onPress={() => handlePress(rank, file, square)}
                  greenHighlight={correct}
                  disabled={!playersTurn}
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
