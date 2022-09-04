const gameState = {};

function preload () {
  
}

function create () {
  gameState.net = this.add.rectangle(250,150, 5, 300, 0xFFFFFF);
  gameState.circ1 = this.add.circle(250,150,5,0xFFFFFF);
  gameState.paddleA = this.add.rectangle(20, 150, 5, 50, 0xFFFFFF);
  gameState.paddleB = this.add.rectangle(480, 150, 5, 50, 0xFFFFFF);
  gameState.keyW = this.input.keyboard.addKey('W');
  gameState.keyS = this.input.keyboard.addKey('S');
  gameState.keyUP = this.input.keyboard.addKey('UP');
  gameState.keyDOWN = this.input.keyboard.addKey('DOWN');
}

function update () {
  //Moves PaddleB down
  if (gameState.keyDOWN.isDown) {
    gameState.paddleB.y += 2;
  }
  //Moves PaddleB up
  if (gameState.keyUP.isDown) {
    gameState.paddleB.y -= 2;
  }
  //Moves PaddleA down
  if (gameState.keyS.isDown) {
    gameState.paddleA.y += 2;
  }
  //Moves PaddleA up
  if (gameState.keyW.isDown) {
    gameState.paddleA.y -= 2;
  }
}

const config = {
  type: Phaser.AUTO,
  height: 300,
  width: 500,
  backgroundColor: 0x000000,
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);