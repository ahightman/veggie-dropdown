function TwitterMessage(handle, text) {
  var tweet = {};

  tweet.handle = handle;
  tweet.text = text;

  return tweet;
}

var tweets = [
  TwitterMessage('jhightman', 'I love Ashley'),
  TwitterMessage('ahightman', 'I love Jason'),
  TwitterMessage('ittyhightman', 'I love Patch'),
  TwitterMessage('patchhightman', 'I hate Itty Bitty')
];

//Dice Function
function Dice(sides) {
  if (!sides) {
    sides = 6;
  }

  var newDice = {
    value: 1,

    roll: function () {
      newDice.value = Math.floor(Math.random() * sides) + 1;
    }
  };

  newDice.roll();

  return newDice;
}

var sixSided = Dice();
var tenSided = Dice(12);

console.log(tenSided.value);
tenSided.roll();
