const words = [
  "apple",
  "arm",
  "banana",
  "bike",
  "bird",
  "book",
  "chin",
  "clam",
  "class",
  "clover",
  "club",
  "corn",
  "crayon",
  "crow",
  "crown",
  "crowd",
  "crib",
  "desk",
  "dime",
  "dirt",
  "dress"
];

export const chooseWord = () => words[Math.floor(Math.random() * words.length)];
