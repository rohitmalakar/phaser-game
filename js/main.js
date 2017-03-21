var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
	preload: preload, create: create, update: update
});

var platform;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/ground.png');
	game.load.image('star', 'assets/star.png');
	game.load.image('dude', 'assets/dude.png', 32, 48);
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
	


}
function update() {
	
}