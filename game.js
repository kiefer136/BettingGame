var prompt = require('prompt-sync')();


var money = 100;
bettingGame = function() {
  var bet = parseInt(prompt('Enter money bet: '));
  var numberBet = parseInt(prompt('Enter bet number: '));
  var randNum = parseInt((Math.floor((Math.random() * 10) + 1)));
  if (money > 1) {
    if (numberBet == randNum) {
      console.log('u win')
      money += bet
    }
    else if ((numberBet - randNum == 1) || (numberBet + randNum == 1)) {
      console.log('You were off by 1. You did not lose or win.')
    }
    else if (bet == 'quit') {
      return 0;
    }
    else {
      console.log('u lose')
      money -= bet
    }
    console.log("The number was" + ' ' + randNum)
    console.log(money)
    bettingGame()
  }
  else {
    console.log("You are too poor to bet anymore. Go home!")
  }
}
bettingGame()
