function ucFirst(name) {
  FirstLetter = name.slice(0, 1).toUpperCase();
  newString = FirstLetter + name.slice(1);
  console.log(newString);
}
ucFirst("коля");
//function checkSpam(str) {
// newString = str.toUpperCase();
//  if (~newString.indexOf("VIAGRA") || ~newString.indexOf("XXX")) {
//    console.log("true");
// } else {
//   console.log("false");
//  }
//}

//checkSpam("hello");
//function truncate(str, maxlength) {
// if (str.length <= maxlength) {
//    console.log(str);
// } else {
//   newExpression = str.slice(0, maxlength) + "...";
//    console.log(newExpression);
//  }
//}
//truncate("hell", 4);
function extractCurrencyValue(str) {
  value = +str.slice(1);
  console.log(value);
}
extractCurrencyValue("$120");
newValue = value;
console.log(isFinite(newValue));

function showVerticalMessage(message) {
  if (message.length <= 10) {
    if (message.slice(0, 1) === "f") {
      for (let i = 0; i < 1; ) {
        const firstLetter = message.slice(i, i + 1).toUpperCase();
        console.log(firstLetter);
        i++;
      }
      for (let i = 1; i < message.length; ) {
        console.log(message.slice(i, i + 1));
        i++;
      }
    }
    if (message.slice(0, 1) !== "f") {
      for (let i = 0; i < message.length; ) {
        console.log(message.slice(i, i + 1));
        i++;
        //console.log(i);
      }
    }
  } else {
    if (message.slice(0, 1) === "f") {
      for (let j = 0; j < 1; ) {
        const firstLetter = message.slice(j, j + 1).toUpperCase();
        console.log(firstLetter);
        j++;
      }
      for (let j = 1; j < 10; ) {
        console.log(message.slice(j, j + 1));
        j++;
      }
    } else {
      for (let j = 0; j < 10; ) {
        console.log(message.slice(j, j + 1));
        j++;
        //console.log(i);
      }
    }
  }
}

showVerticalMessage("fronhuopgh");
