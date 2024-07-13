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
