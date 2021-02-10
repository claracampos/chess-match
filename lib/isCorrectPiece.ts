import { Color, Move, SquareContent } from "../components/types";

export const isCorrectPiece = (
  player: Color,
  piece: SquareContent,
  move: Move
) => {
  return piece && piece.color === player && piece.piece === move[0];
};
