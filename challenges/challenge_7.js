function getGiftsToRefill(a1, a2, a3) {
  const a1DeleteDuplicate = a1.filter((item, index) => {
    return a1.indexOf(item) === index;
  });

  const a2DeleteDuplicate = a2.filter((item, index) => {
    return a2.indexOf(item) === index;
  });

  const a3DeleteDuplicate = a3.filter((item, index) => {
    return a3.indexOf(item) === index;
  });

  const replenishGifts = [];

  for (let i = 0; i < a1DeleteDuplicate.length; i++) {
    const validateGiftOneToTwo = a2DeleteDuplicate.some((item) => {
      return item === a1DeleteDuplicate[i];
    });

    const validateGiftOneToThree = a3DeleteDuplicate.some((item) => {
      return item === a1DeleteDuplicate[i];
    });

    if (!validateGiftOneToTwo && !validateGiftOneToThree) {
      replenishGifts.push(a1DeleteDuplicate[i]);
    }
  }

  for (let i = 0; i < a2DeleteDuplicate.length; i++) {
    const validateGiftTwoToOne = a1DeleteDuplicate.some((item) => {
      return item === a2DeleteDuplicate[i];
    });

    const validateGiftTwoToThree = a3DeleteDuplicate.some((item) => {
      return item === a2DeleteDuplicate[i];
    });

    if (!validateGiftTwoToOne && !validateGiftTwoToThree) {
      replenishGifts.push(a2DeleteDuplicate[i]);
    }
  }

  for (let i = 0; i < a3DeleteDuplicate.length; i++) {
    const validateGiftThreeToOne = a1DeleteDuplicate.some((item) => {
      return item === a3DeleteDuplicate[i];
    });

    const validateGiftThreeToTwo = a2DeleteDuplicate.some((item) => {
      return item === a3DeleteDuplicate[i];
    });

    if (!validateGiftThreeToOne && !validateGiftThreeToTwo) {
      replenishGifts.push(a3DeleteDuplicate[i]);
    }
  }

  return replenishGifts;
}

const a1 = ["bike", "car", "bike", "bike"];
const a2 = ["car", "bike", "doll", "car"];
const a3 = ["bike", "pc", "pc"];

const gifts = getGiftsToRefill(a1, a2, a3);
