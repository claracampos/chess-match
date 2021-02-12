import { useEffect, useState } from "react";
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
  const [pause, setPause] = useState(false);
  useEffect(() => {
    if (!playersTurn && currentMove) {
      if (!pause) {
        const timer = setTimeout(() => {
          setPause(true);
        }, [1000]);
        return () => {
          clearTimeout(timer);
        };
      } else {
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
        setPause(false);
      }
    }
  }, [playersTurn, currentMove, pause]);
};
