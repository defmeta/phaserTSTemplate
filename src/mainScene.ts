import "phaser";

export class MainScene extends Phaser.Scene {

    player: Phaser.Physics.Arcade.Image;
    cursors: Phaser.Input.Keyboard.CursorKeys;
    stageWidth: number;
    stageHeight: number;

    constructor() {
        super({ key: 'MainScene' });
    }

    init() {
        this.stageWidth = 800;
        this.stageHeight = 600;
    }

    preload() {
        this.load.image('player', 'assets/img/RS05.png');
    }

    create() {

        this.cursors = this.input.keyboard.createCursorKeys();
        this.player = this.physics.add.image(this.stageWidth/2, this.stageHeight/2, 'player');

        //  Set the camera and physics bounds
        this.cameras.main.setBounds(0, 0, this.stageWidth, this.stageHeight);
        this.physics.world.setBounds(0, 0, this.stageWidth, this.stageHeight);

        this.player.setCollideWorldBounds(true);
        this.player.setScale(0.5, 0.5);

        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
    }

    update(time) {

        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-500);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(500);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-500);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(500);
        }

    }

}