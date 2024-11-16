const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words).length, words.length - 1);
assertEqual(tail([1]).length, 0);
assertEqual(tail([]).length, 0);