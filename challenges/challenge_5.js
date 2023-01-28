function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const giftsCombination = giftsCities
    .reduce(
      (arr, gift) => arr.concat(arr.map((element) => [gift].concat(element))),
      [[]]
    )
    .filter((arrAgree) => arrAgree.length <= maxCities);

  giftsCombination.shift();

  const sumGifts = giftsCombination.map((element) => {
    let sum = element.reduce((a, b) => a + b);
    if (sum > maxGifts) {
      return 0;
    } else {
      return sum;
    }
  });

  return Math.max(...sumGifts);
}

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;
getMaxGifts(giftsCities, maxGifts, maxCities); //20

getMaxGifts([50], 100, 1); // 50
getMaxGifts([50], 15, 1); // 0
getMaxGifts([12, 3, 11, 5, 7], 20, 3); // 20
getMaxGifts([50, 70], 100, 1); // 70
getMaxGifts([50, 70, 30], 100, 2); // 100
getMaxGifts([50, 70, 30], 100, 3); // 100
getMaxGifts([50, 70, 30], 100, 4); // 100
