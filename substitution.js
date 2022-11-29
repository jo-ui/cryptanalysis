//Yohannes Beneberu

alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

permuted = "KDPQOHEAWXNJZVURSLMGYTFBCI";

word = "abcd";

word = word.toUpperCase();

i = 0;

result = "";

while (i < word.length) {
  ind = alphabet.indexOf(word.charAt(i));

  result = result + permuted.charAt(ind);

  i++;
}

console.log(result);
