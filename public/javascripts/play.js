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
    player.animations.add('up', [1, 2, 3, 4], 15, true);
    player.animations.add('down', [5, 6, 7, 8], 15, true);
    player.animations.add('right', [9, 10, 11, 12], 15, true);
    player.animations.add('left', [13, 14, 15, 16], 15, true);
  },

  update: function () {

    game.physics.arcade.overlap(player, home, this.gameOver);

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    if (moveRight.isDown && moveUp.isDown) {
      player.animations.play('up');
      player.body.velocity.x = 300;
      player.body.velocity.y = -300;
    } else if (moveRight.isDown && moveDown.isDown) {
      player.animations.play('down');
      player.body.velocity.x = 300;
      player.body.velocity.y = 300;
    } else if (moveLeft.isDown && moveUp.isDown) {
      player.animations.play('up');
      player.body.velocity.x = -300;
      player.body.velocity.y = -300;
    } else if (moveLeft.isDown && moveDown.isDown) {
      player.animations.play('down');
      player.body.velocity.x = -300;
      player.body.velocity.y = 300;
    } else if (moveRight.isDown) {
      player.animations.play('right');
      player.body.velocity.x = 300;
    } else if (moveDown.isDown) {
      player.animations.play('down');
      player.body.velocity.y = 300;
    } else if (moveUp.isDown) {
      player.animations.play('up');
      player.body.velocity.y = -300;
    } else if (moveLeft.isDown) {
      player.body.velocity.x = -300;
      player.animations.play('left');
    }
    else {
      player.animations.stop();
    }

  },

  gameOver: function() {
    game.state.start('win');
  }
}
