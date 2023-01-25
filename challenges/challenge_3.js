function distributeGifts(packOfGifts, reindeers) {
  const weightGift = packOfGifts
    .map((gift) => gift.length)
    .reduce((totalWeight, weighItem) => totalWeight + weighItem);

  const weightReindeers = reindeers
    .map((reindeer) => reindeer.length * 2)
    .reduce((totalWeight, weighReindeer) => totalWeight + weighReindeer);

  return Math.trunc(weightReindeers / weightGift);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

distributeGifts(packOfGifts, reindeers);
distributeGifts(["a", "b", "c"], ["d", "e"]);
