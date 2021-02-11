import { Rank, SquareContent, File, Move, Color } from "../components/types";
import { movePieces } from "./movePieces";
import { castle } from "./castle";

export const getNewBoardPositions = (
  boardState: SquareContent[][],
  selectedPiece: [File, Rank],
  currentMove: Move,
  player: Color
) => {
  const targetFile = currentMove[1];
  const targetRank = currentMove[2];
  const castleMove = currentMove[3];
  let newBoardPositions = movePieces(
    boardState,
    selectedPiece,
    targetRank,
    targetFile
  );
  if (castleMove) {
    newBoardPositions = castle(boardState, castleMove, player);
  }
  return newBoardPositions;
};
