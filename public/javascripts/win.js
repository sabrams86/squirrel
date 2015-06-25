var winState = {

  create: function () {
  var winLabel = game.add.text(80,150, 'You Won!', {font: '30px Courier', fill: 'yellow'});
  var restartLabel = game.add.text(300,150, 'Press Enter to Restart', {font: '15px Courier', fill: 'lightblue'});
  var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  enterKey.onDown.addOnce(this.restart, this);
  },

  restart: function () {
    game.state.start('menu');
  },

}
