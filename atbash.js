function decode(message) {
  message = message.toUpperCase();
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  var decoded_string = "";

  for (i = 0; i < message.length; i++) {
    var coded_letter = message.charAt(i);
    var letter_index = alphabet.indexOf(coded_letter);
    var decoded_letter = tebahpla.charAt(letter_index);
    decoded_string = decoded_string + decoded_letter;
  }
  return decoded_string;
}
console.log(decode("ccdd"));
