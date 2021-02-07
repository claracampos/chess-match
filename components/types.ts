export type Color = "white" | "black";

export interface ChessPiece {
  piece: string;
  color: Color;
}

export type SquareContent = ChessPiece | undefined;
