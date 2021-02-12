import { useEffect } from "react";
import { Color, Move, SquareContent } from "../components/types";
import { findPieceLocation } from "./findPieceLocation";
import { getNewBoardPositions } from "./getNewBoardPositions";

export const useComputersTurn = (
  activePlayer: Color,
  playersTurn: boolean,
  boardState: SquareContent[][],
  makeAMove: (board: SquareContent[][]) => void,
  currentMove?: Move
) => {
  useEffect(() => {
    if (!playersTurn && currentMove) {
      setTimeout(() => {
        const chosenPiece = findPieceLocation(
          boardState,
          currentMove[0],
          activePlayer
        );
        const newPositions = getNewBoardPositions(
          boardState,
          chosenPiece,
          currentMove,
          activePlayer
        );
        makeAMove(newPositions);
      }, 1000);
    }
  }, [playersTurn, currentMove]);
};
