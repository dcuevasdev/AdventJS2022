function checkPart(part) {
  for (let i = 0; i < part.length; i++) {
    const newPartNormal = part.slice(0, i) + part.slice(i + 1, part.length);

    const newPartReverse = newPartNormal.split("").reverse().join("");

    if (newPartNormal === newPartReverse) {
      return true;
    }
  }

  return false;
}

checkPart("uwu");
checkPart("miidim");
checkPart("midu");
