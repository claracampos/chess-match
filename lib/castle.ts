import { Color, Rank, File, SquareContent } from "../components/types";
import { findPieceLocation } from "./findPieceLocation";
import { movePieces } from "./movePieces";

export const castle = (
  chessboard: SquareContent[][],
  rookMove: ["r1" | "r2", File, Rank],
  player: Color
) => {
  const [rook, targetFile, targetRank] = rookMove;
  const rookLocation = findPieceLocation(chessboard, rook, player);
  const newPositions = movePieces(
    chessboard,
    rookLocation,
    targetRank,
    targetFile
  );
  return newPositions;
};
