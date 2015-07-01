var loseState = {

  create: function () {
    var loseLabel = game.add.text(300,200, 'Game Over!', {font: '60px Courier', fill: 'red'});
    var restartLabel = game.add.text(320,320, 'Press Enter to Try Again', {font: '15px Courier', fill: 'lightblue'});
    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(this.restart, this);
  },

  restart: function () {
    game.state.start('menu');
  },

}
