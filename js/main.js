var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
	preload: preload, create: create, update: update
});

var platform;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/ground.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/player-sprite.png', 32, 56);
}
function create() {
	// game.add.sprite(0, 0, 'star');

	// We are going to be using physics, so enable the arcade physics system
	game.physics.startSystem(Phaser.Physics.ARCADE);

		// A simple background for our game
	var sky = game.add.sprite(0, 0, 'sky');


	sky.x = 0;
    sky.y = 0;
    sky.height = game.height;
    sky.width = game.width;


	// The platforms group contains the ground and the 2 ledges we can jump on 
	platforms = game.add.group();

	// We will enable physics for any object that is created in this group
	platforms.enableBody = true;

	// Here we create the ground.
	var ground = platforms.create(0, game.world.height - 32, 'ground');

	// Scale it to fit the width of the game (the original sprite is 400X32 iin size)
	// ground.scale.setTo(2, 2);

	// this stops it from falling away when you jump oon it 
	ground.body.immovable = true;

	ledge = platforms.create(-400, 250, 'ground');
	ledge.body.immovable = true;

	ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	

	// The player and its settings
	player = game.add.sprite(400, 450, 'dude');

	// We need to enable physics on the player 
	game.physics.arcade.enable(player);

	player.body.setSize(32, 56, 0, -9);

	// Player physics properties. Giv the little guy a slight bounce.
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 500;
	player.body.colliderWorldBounds = true;

	// Our two animations, walking left and right
	player.animations.add('left', [0, 1, 2, 3, 4, 5], 10, true);
	player.animations.add('right', [6, 7, 8, 9, 10], 10, true);

}
function update() {
	// Collide the player and the stars with the platforms 
	var hitPlatform = game.physics.arcade.collide(player, platforms);

	// Rest the player velocity (movement)
	player.body.velocity.x = 0;

	// var cursors = game.input.keyboard.createCursorkeys();
	var cursors = game.input.keyboard.createCursorKeys();

	if(cursors.left.isDown){
		// Move to the left
		player.body.velocity.x = -150;
		player.animations.play('left');
	}else if (cursors.right.isDown) {
		// Move to the right
		player.body.velocity.x = +150;
		player.animations.play('right');
	}else if(cursors.up.isDown){
		player.body.velocity.y = +150;
	}
}