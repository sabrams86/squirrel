var playState = {

  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(-300,-1600,'tree');
    player = game.add.sprite(0, 0, 'squirrel');
    game.physics.arcade.enable(player);

    home = game.add.sprite( 300, 300, 'home');
    game.physics.arcade.enable(home);

    player.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();

    moveUp = game.input.keyboard.addKey(Phaser.Keyboard.W);
    moveDown = game.input.keyboard.addKey(Phaser.Keyboard.S);
    moveRight = game.input.keyboard.addKey(Phaser.Keyboard.D);
    moveLeft = game.input.keyboard.addKey(Phaser.Keyboard.A);
  },

  update: function () {

    game.physics.arcade.overlap(player, home, this.gameOver);

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    if (moveRight.isDown && moveUp.isDown) {
      player.body.velocity.x = 300;
      player.body.velocity.y = -300;
    } else if (moveRight.isDown && moveDown.isDown) {
      player.body.velocity.x = 300;
      player.body.velocity.y = 300;
    } else if (moveLeft.isDown && moveUp.isDown) {
      player.body.velocity.x = -300;
      player.body.velocity.y = -300;
    } else if (moveLeft.isDown && moveDown.isDown) {
      player.body.velocity.x = -300;
      player.body.velocity.y = 300;
    } else if (moveRight.isDown) {
      player.body.velocity.x = 300;
    } else if (moveDown.isDown) {
      player.body.velocity.y = 300;
    } else if (moveUp.isDown) {
      player.body.velocity.y = -300;
    } else if (moveLeft.isDown) {
      player.body.velocity.x = -300;
    }

  },

  gameOver: function() {
    game.state.start('win');
  }
}
