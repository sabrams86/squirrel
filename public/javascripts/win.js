var winState = {

  create: function () {
  totalScore = (acornCount * 10) + (minutes * 60) + (seconds * 1);
  var winLabel = game.add.text(80,150, 'You Won!', {font: '30px Courier', fill: 'yellow'});
  var score = game.add.text(80,100, 'Your total score is ' + totalScore + "points!", {font: '30px Courier', fill: 'orange'});
  var restartLabel = game.add.text(300,150, 'Press Enter to Restart', {font: '15px Courier', fill: 'lightblue'});
  var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  enterKey.onDown.addOnce(this.restart, this);
  },

  restart: function () {
    game.state.start('menu');
  },

}
