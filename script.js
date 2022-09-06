const gameState = {};

function create () {
  //Add PONG to top of screen
  gameState.title = this.add.text(208,0,'PONG', {
    fontSize: 30,
    fontFamily: 'Arial',
    align: 'center'
  });
  gameState.score1 = this.add.text(20,0,player1_score, {
    fontSize: 30,
    fontFamily: 'Arial',
    align: 'center'
  });
  gameState.score2 = this.add.text(465,0,player1_score, {
    fontSize: 30,
    fontFamily: 'Arial',
    align: 'center'
  });
  //Create net and top divider
  gameState.net = this.add.rectangle(250,165,5,270,0xFFFFFF);
  gameState.topLine = this.add.rectangle(250,30,500,5,0xFFFFFF);
  this.physics.add.existing(gameState.topLine,false);
  //Create ball
  gameState.ball = this.add.circle(250,165,5,0xFFFFFF);
  this.physics.add.existing(gameState.ball,false);
  gameState.ball.body.setBounce(1.05,1.05);
  //Create paddles
  gameState.paddleA = this.add.rectangle(20,165,5,50,0xFFFFFF);
  this.physics.add.existing(gameState.paddleA,false);
  gameState.paddleB = this.add.rectangle(480,165,5,50,0xFFFFFF);
  this.physics.add.existing(gameState.paddleB,false);
  //Read keybaord input
  gameState.keyW = this.input.keyboard.addKey('W');
  gameState.keyS = this.input.keyboard.addKey('S');
  gameState.keyUP = this.input.keyboard.addKey('UP');
  gameState.keyDOWN = this.input.keyboard.addKey('DOWN');
  gameState.keySPACE = this.input.keyboard.addKey('SPACE');
  //Create colliders
  gameState.ball.body.setCollideWorldBounds(true);
  gameState.paddleA.body.setCollideWorldBounds(true);
  gameState.paddleA.body.setImmovable(true);
  gameState.paddleB.body.setCollideWorldBounds(true);
  gameState.paddleB.body.setImmovable(true);
  gameState.topLine.body.setCollideWorldBounds(true);
  gameState.topLine.body.setImmovable(true);
  this.physics.add.collider(gameState.ball,gameState.paddleA);
  this.physics.add.collider(gameState.ball,gameState.paddleB);
  this.physics.add.collider(gameState.ball,gameState.topLine);
  resetBall();
}

let player1_score = 0;
let player2_score = 0;
let reset = true; 
let seed;

function update () {
  //Restart ball
  if (gameState.keySPACE.isDown && reset) {
    seed = Math.random() < 0.5 ? -1 : 1;
    gameState.ball.body.setVelocity(seed*getRandomInt(150,200),getRandomInt(-50,50));
    reset = false;
  }
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
  //Player 1 scores
  if (gameState.ball.x > 490) {
    player1_score += 1;
    gameState.score1.text = player1_score;
    resetBall();
  }
  //Player 2 scores
  if (gameState.ball.x < 10) {
    player2_score += 1;
    gameState.score2.text = player2_score;
    resetBall();
  }
}

const config = {
  type: Phaser.AUTO,
  height: 300,
  width: 500,
  backgroundColor: 0x000000,
  physics: {
      default: 'arcade',
      arcade: {
          debug: true
      }
  },
  scene: {
    create,
    update
  }
};

const game = new Phaser.Game(config);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function resetBall() {
  gameState.ball.body.setVelocity(0,0);
  gameState.ball.x = 250;
  gameState.ball.y = 165;
  reset = true;
}