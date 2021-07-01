class Menu extends Phaser.Scene {
	constructor() {
		super("menuScene");
	}
	preload() {
		// load audio
		this.load.audio('sfx_select', './assets/blip_select12.wav');
		this.load.audio('sfx_explosion', './assets/explosion38.wav');
		this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
		this.load.image('starfield', './assets/pink-background.png');
		this.load.image('ocean', './assets/ocean.png');
		this.load.image('beach', './assets/beach.png');
	}
	create() {
		this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
		this.ocean = this.add.tileSprite(0, 0, 640, 480, 'ocean').setOrigin(0, 0);
		this.beach = this.add.tileSprite(0, 0, 640, 480, 'beach').setOrigin(0, 0);
		
		let menuConfig = {
			fontFamily: 'Optima',
			fontSize: '28px',
			backgroundColor: '#34d2ff',
			color: '#ffffff',
			align: 'right',
			padding: {
				top: 5,
				bottom: 5,
			},
			fixedWidth: 0
		}
		
		this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderUISize - borderPadding - borderPadding, 'CAT UNIVERSE', menuConfig).setOrigin(0.5);
		this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'P1: Use (A)(D) arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
		this.add.text(game.config.width/2, game.config.height/2, 'P2: Use ←→ to move & (ENTER) to fire', menuConfig).setOrigin(0.5);
		this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
		
		// define keys
		keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
		keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
	}
	update() {
		this.ocean.tilePositionX -= 2;
		this.beach.tilePositionX -= 4;
		if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
			game.settings = {
				spaceshipSpeed: 3,
				gameTimer: 60000,
				multiplayer: false
			}
			this.sound.play('sfx_select');
			this.scene.start('playScene');    
		}
		if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
			game.settings = {
				spaceshipSpeed: 4,
				gameTimer: 45000,
				multiplayer: false
			}
			this.sound.play('sfx_select');
			this.scene.start('playScene');    
		}
	}
}