function fitsInOneBox(boxes) {
  const tidyBoxes = boxes.sort((a, b) => a.l - b.l && a.w - b.w && a.h - b.h);

  let validator;

  for (let i = 1; i < tidyBoxes.length; i++) {
    const currentPosition = i;
    const previousPosition = i - 1;

    if (
      tidyBoxes[currentPosition].l > tidyBoxes[previousPosition].l &&
      tidyBoxes[currentPosition].w > tidyBoxes[previousPosition].w &&
      tidyBoxes[currentPosition].h > tidyBoxes[previousPosition].h
    ) {
      validator = true;
    } else {
      return false;
    }
  }

  return validator;
}

fitsInOneBox([
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]); // false

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
]);

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];
fitsInOneBox(boxes);

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

fitsInOneBox(boxes2);
