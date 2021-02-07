export const getSquareColor = (rank: number, file: number) => {
  if (rank % 2 === 0) {
    return file % 2 === 0 ? "black" : "white";
  }
  return file % 2 === 0 ? "white" : "black";
};
