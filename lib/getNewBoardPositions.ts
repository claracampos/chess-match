import { Rank, SquareContent, File } from "../components/types";

export const getNewBoardPositions = (
  boardState: SquareContent[][],
  selectedPiece: [File, Rank],
  targetRank: Rank,
  targetFile: File
) => {
  let newBoard = [...boardState];
  const [pieceFile, pieceRank] = selectedPiece;
  const [piece] = newBoard[pieceRank].splice(pieceFile, 1, undefined);
  newBoard[targetRank][targetFile] = piece;
  return newBoard;
};
