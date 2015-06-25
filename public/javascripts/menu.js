var menuState = {

  create: function () {

    var nameLabel = game.add.text(80,150, 'Squirrel', {font: '30px Courier', fill: 'Blue'});
    var startLabel = game.add.text(300,150, 'Press Enter to Start', {font: '15px Courier', fill: 'lightblue'});
    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    enterKey.onDown.addOnce(this.start, this);

  },

  start: function () {
    game.state.start('play');
  },

}
