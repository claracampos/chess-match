import { Color, Piece, Rank, SquareContent, File } from "../components/types";

export const findPieceLocation = (
  chessboard: SquareContent[][],
  piece: Piece,
  player: Color
) => {
  let fileIndex = 0;
  const rankIndex = chessboard.findIndex((file) => {
    const index = file.findIndex(
      (squareContent) =>
        squareContent &&
        squareContent.piece === piece &&
        squareContent.color === player
    );
    if (index >= 0) {
      fileIndex = index;
      return true;
    }
    return false;
  });

  return [fileIndex, rankIndex] as [File, Rank];
};
