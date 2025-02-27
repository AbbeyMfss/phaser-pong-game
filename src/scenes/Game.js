const WIDTH = 1024;
const HEIGHT = 768;

class BallGame extends Phaser.Scene {
    constructor() {
        super('Game');
        
        this.ball = null;
        this.leftPaddle = null;
        this.rightPaddle = null;
        this.ballInMotion = false; // Flag to track ball movement
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('ball', 'assets/ball.png');
        this.load.image('paddle', 'assets/paddle.png');
    }

    create() {
        // Set background image
        this.add.image(WIDTH / 2, HEIGHT / 2, 'background');

        // Create ball with physics properties
        this.ball = this.physics.add.image(WIDTH / 2, HEIGHT / 2, 'ball').setScale(0.05);
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1, 1);
        this.ball.setVelocity(200, 200);

        // Create paddles as static physics objects
        this.leftPaddle = this.physics.add.staticImage(50, HEIGHT / 2, 'paddle');
        this.rightPaddle = this.physics.add.staticImage(WIDTH - 50, HEIGHT / 2, 'paddle');

        // Enable collision between ball and paddles
        this.physics.add.collider(this.ball, this.leftPaddle);
        this.physics.add.collider(this.ball, this.rightPaddle);

        // Listen for SPACE key to start ball movement
        this.input.keyboard.on('keydown-SPACE', this.launchBall, this);
        
        // Setup keyboard controls
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S
        });
    }

    update() {
        // Game update logic (if needed)
    }

    launchBall() {
        if (!this.ballInMotion) {
            this.ball.setVelocity(200, 200);
            this.ballInMotion = true;
        }
    }
}
