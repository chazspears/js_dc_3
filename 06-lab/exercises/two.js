var twoFunctions

twoFunctions.one = function() {
  console.log(1)
}

twoFunctions['two'] = function() {
console.log(2);

}

module.exports = twoFunctions
console.log(twoFunctions);
console.log(module.exports);
