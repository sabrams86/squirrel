var menuState = {

  create: function () {

    game.add.sprite(0, 0, 'startBackground').scale.setTo(2.1,1.5);
    this.add.button(600, 425, 'button-start', this.start, this, 1, 0, 2).scale.setTo(.7,.7);
    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    enterKey.onDown.addOnce(this.start, this);
  },

  start: function () {
    game.state.start('play');
  },

}
