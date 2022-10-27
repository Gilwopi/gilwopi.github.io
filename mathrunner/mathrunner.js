let mathrunner = {};

function preload() {
  
}

function create() {
  
}

function update() {

}

const config = {
  type: Phaser.AUTO,
  height: 500,
  width: 700,
  backgroundColor: 0x000000,
  physics: {
      default: 'arcade',
      arcade: {
          debug: false
      }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);