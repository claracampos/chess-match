import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { getNewBoardPositions } from "../lib/getNewBoardPositions";
import { initialChessboard } from "../lib/initialChessboard";
import { isCorrectPiece } from "../lib/isCorrectPiece";
import { isCorrectTarget } from "../lib/isCorrectTarget";
import { useComputersTurn } from "../lib/useComputersTurn";
import { Square } from "./Square";
import { Color, Rank, File, SquareContent, Move } from "./types";

interface ChessboardProps {
  activePlayer: Color;
  playersView: Color;
  currentMove?: Move;
  playersTurn: boolean;
  setPlayersTurn: React.Dispatch<React.SetStateAction<boolean>>;
  rankTip?: boolean;
  fileTip?: boolean;
  pieceTip: boolean;
}

export const Chessboard = ({
  activePlayer,
  playersView,
  currentMove,
  playersTurn,
  setPlayersTurn,
  rankTip,
  fileTip,
  pieceTip,
}: ChessboardProps) => {
  const [boardState, setBoardState] = useState(initialChessboard);
  const [selectedPiece, setSelectedPiece] = useState<[File, Rank] | undefined>(
    undefined
  );
  const highlightRank =
    playersTurn && currentMove && rankTip ? currentMove[2] : undefined;
  const highlightFile =
    playersTurn && currentMove && fileTip ? currentMove[1] : undefined;

  const makeAMove = (newBoardState: SquareContent[][]) => {
    setSelectedPiece(undefined);
    setBoardState(newBoardState);
    setPlayersTurn(!playersTurn);
  };

  const handlePress = (rank: Rank, file: File, piece?: SquareContent) => {
    if (!selectedPiece) {
      if (isCorrectPiece(activePlayer, piece, currentMove)) {
        setSelectedPiece([file, rank]);
      }
    } else {
      if (currentMove && isCorrectTarget(file, rank, currentMove)) {
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

  useComputersTurn(
    activePlayer,
    playersTurn,
    boardState,
    makeAMove,
    currentMove
  );

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
              const correctPiece = isCorrectPiece(
                activePlayer,
                square,
                currentMove
              );
              const greenHighlight = Boolean(
                (correctPiece && !playersTurn) ||
                  (correctPiece && selectedPiece)
              );
              const greenUnderlay =
                correctPiece ||
                (selectedPiece && isCorrectTarget(file, rank, currentMove));
              return (
                <Square
                  content={square}
                  rank={rank}
                  file={file}
                  key={`rank${rank}-file${file}`}
                  onPress={() => handlePress(rank, file, square)}
                  greenHighlight={greenHighlight}
                  blueHighlight={
                    rank === highlightRank || file === highlightFile
                  }
                  highlightPiece={playersTurn && pieceTip && correctPiece}
                  disabled={!playersTurn || !currentMove}
                  greenUnderlay={greenUnderlay}
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
  board: { height: 320 },
  rank: {
    flexDirection: "row",
    width: 320,
    height: 40,
    flex: 1,
  },
});
