function wrapping(gifts) {
  const packed_gift = gifts.map((gift) => {
    const wrap = "*".repeat(gift.length + 2);
    return wrap + "\n" + "*" + gift + "*" + "\n" + wrap;
  });

  return packed_gift;
}

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
