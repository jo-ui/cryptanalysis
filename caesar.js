//Yohannes Beneberu

const caesar = (string, shift) => {
  string = string.toUpperCase();
  return String.fromCharCode(
    ...string
      .split("")
      .map((char) => ((char.charCodeAt() - 65 + shift) % 26) + 65)
  );
};

for (let i = 1; i < 26; i++) {
  console.log(caesar("abcdefghijklmnopqrstuvwxyz", i));
}
