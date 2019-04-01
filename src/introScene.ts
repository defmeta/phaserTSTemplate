import "phaser";

export class IntroScene extends Phaser.Scene {

    logo: Phaser.GameObjects.Sprite;
    introTitle: Phaser.GameObjects.Text;
    stageWidth: number;
    stageHeight: number;

    constructor() {
        super({ key: 'IntroScene' });
    }

    init() {
        this.stageWidth = 800;
        this.stageHeight = 600;
    }

    preload() {
        this.load.image('logo', 'assets/img/Generic_logo.png');
        this.load.image('red', 'assets/img/red.png');
    }

    create() {
        this.introTitle = this.add.text(
            10, 10, 'Welcome to game...',
            { fontFamily: 'Arial', color: '#ffffff', fontSize: '18px' }
        );

        var particles = this.add.particles('red');

        var particleEmitterConfig: ParticleEmitterConfig = {
            speed: 500,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD',
            gravityY: 1000
        };

        var emitter = particles.createEmitter(particleEmitterConfig);

        this.logo = this.add.sprite(this.stageWidth/ 2,this.stageHeight / 2, 'logo');

        emitter.setPosition(this.stageWidth/ 2,this.stageHeight / 2);

        this.input.once('pointerdown', function (/*pointer*/) {
            this.scene.start( 'MainScene' );
        }, this);
    }

};