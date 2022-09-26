pacman = {};

function preload() {
  this.load.image('maze_top', 'pacman/assets/images/maze_top.png');
  this.load.image('maze_side', 'pacman/assets/images/maze_side.png');
}

function create() {
  pacman.mazeTop = this.add.image(250,100,'maze_top');
  this.physics.add.existing(pacman.mazeTop,false);
  pacman.mazeTop.body.setImmovable(true);
  pacman.mazeLeftSide = this.add.image(50,300,'maze_side');
  this.physics.add.existing(pacman.mazeLeftSide,false);
  pacman.mazeLeftSide.body.setImmovable(true);
  pacman.mazeRightSide = this.add.image(450,300,'maze_side');
  this.physics.add.existing(pacman.mazeRightSide,false);
  pacman.mazeRightSide.body.setImmovable(true);
  pacman.mazeBottom = this.add.image(250,495,'maze_top').setFlipY(true);
  pacman.ball = this.add.circle(250,250,10,0xFFFFFF);
  this.physics.add.existing(pacman.ball,false);
  pacman.ball.body.setBounce(1,1);
  pacman.ball.body.setVelocity(50,40);
  pacman.ball.body.setCollideWorldBounds(true);
  this.physics.add.collider([pacman.mazeTop,pacman.mazeLeftSide,pacman.mazeRightSide,pacman.ball]);
}

const config = {
  type: Phaser.AUTO,
  height: 500,
  width: 500,
  backgroundColor: 0x000000,
  physics: {
      default: 'arcade',
      arcade: {
          debug: false
      }
  },
  scene: {
    preload,
    create
  }
};

const game = new Phaser.Game(config);