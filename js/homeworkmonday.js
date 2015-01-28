
//Create a 'tweet' data object

function ChirpFeed(spec) {
  if (!spec.rechirps) {
    spec.rechirps = 0;
  }

  if (!spec.userImg) {
    spec.userImg = 'http://default.icon';
  }

  if (!spec.favorites) {
    spec.favorites = 0;
  }

  return {
    name: spec.name,
    handle: spec.handle,
    chirp: spec.chirp,
    timestamp: spec.timestamp,
    rechirps: spec.rechirps,
    userImg: spec.userImg,
    favorites: spec.favorites
  };
}

ChirpFeed({name: 'Ashley', handle: 'ahightman', chirp: 'TDSS is awesome!', timestamp: '11:01pm'});


//Create a distinct function
var array = ['Ashley', 'Jason', 'Itty', 'Patch', 'Aston', 'Stormy', 'Itty'];

function distinct(array) {
  var distinctArray = {};

  array.forEach(function (item) {
    distinctArray[item] = true;
  });

  return Object.keys(distinctArray);
}


//Create escapeHtml function
function escapeHtml(str) {
  var unsafeChars = {
    '<': '&lt;',
    '>': '&gt;',
    '\'': '&squot;',
    '"': '&quot;'
  };

  var escapedArr = str.split('').map(function (char) {
    var escapeChar = unsafeChars[char];
    if (escapeChar === undefined) {
      return char;
    }

    return escapeChar;
  });

  return escapedArr.join('');
}
//
// //Create wordCount function
//
// var str = "Here are many many many words upon words upon words to count";
//
// function wordCount(str) {
//   var CountedWords = {};
//   var words = str.split('');
//
//     words.forEach(function() {
//       return words[i].length;
//     }
//   return CountedWords;
// }
