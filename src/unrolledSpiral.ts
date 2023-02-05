export const spiral = (arr: number[][]) => {
  if (!arr[0]) return [];
  let startCol = 0;
  let endCol = arr[0].length - 1;
  let startRow = 0;
  let endRow = arr.length - 1;

  const maxLenResArr = arr.reduce((acc, item) => acc + item.length, 0);

  const result = [];

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(arr[startRow][i]);
    }
    startRow++;

    if (maxLenResArr === result.length) break;

    for (let j = startRow; j <= endRow; j++) {
      result.push(arr[j][endCol]);
    }
    endCol--;

    if (maxLenResArr === result.length) break;

    for (let i = endCol; i >= startCol; i--) {
      result.push(arr[endRow][i]);
    }
    endRow--;

    if (maxLenResArr === result.length) break;

    for (let j = endRow; j >= startRow; j--) {
      result.push(arr[j][startCol]);
    }
    startCol++;
  }

  return result;
};
