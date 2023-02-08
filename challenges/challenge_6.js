function createCube(size) {
  const upperTriangle = "/\\";
  const upperLines = "_\\";
  const lowerTriangle = "\\/";
  const lowerLines = "_/";
  const space = " ";

  const arrayUpperTriangle = [];
  const arrayLowerTriangle = [];

  for (let i = 1; i <= size; i++) {
    arrayUpperTriangle.push(
      space.repeat(size - i) + upperTriangle.repeat(i) + upperLines.repeat(size)
    );
    arrayLowerTriangle.unshift(
      space.repeat(size - i) + lowerTriangle.repeat(i) + lowerLines.repeat(size)
    );
  }

  const arrayUnion = arrayUpperTriangle.concat(arrayLowerTriangle);

  return arrayUnion.join("\n");
}

const cube = createCube(3);
const cubeOfOne = createCube(1);
const cubeOfTwo = createCube(2);
const cubeOfTen = createCube(10);
