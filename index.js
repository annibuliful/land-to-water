/*
map

1 1 0 0 0 0
1 1 0 0 0 0
0 0 0 1 0 0
0 1 0 0 1 1
0 1 0 0 1 1

fill(map, 1, 3)
*/

function spill(map, row, column) {
  if (map?.[row]?.[column] === undefined) {
    return map;
  }

  if (map?.[row]?.[column] === 1) {
    map[row][column] = 0;
    if (map?.[row]?.[column + 1] === 1) {
      spill(map, row, column + 1);
      map[row][column + 1] = 0;
    }

    if (map?.[row]?.[column - 1] === 1) {
      spill(map, row, column - 1);
      map[row][column - 1] = 0;
    }

    if (map?.[row + 1]?.[column] === 1) {
      spill(map, row + 1, column);
      map[row + 1][column] = 0;
    }

    if (map?.[row - 1]?.[column] === 1) {
      spill(map, row - 1, column);
      map[row - 1][column] = 0;
    }
  }

  return map;
}

module.exports = spill;

const TILE_MAP = [
  [1, 1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 1],
  [0, 1, 0, 0, 1, 1],
];

// console.log('TILE_MAP', TILE_MAP);
console.log('spill(TILE_MAP,4,4)', spill(TILE_MAP, 4, 4));
