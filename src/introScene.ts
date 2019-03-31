import "phaser";

export class IntroScene extends Phaser.Scene {

    logo: Phaser.GameObjects.Sprite;

    constructor() {
        super({ key: 'IntroScene' });
    }

    init() {

    }

    preload() {
        this.load.image('logo', 'assets/img/test.png');
        this.load.image('red', 'assets/img/red.png');
    }

    create() { 
        var particles = this.add.particles('red');

        var particleEmitterConfig: ParticleEmitterConfig = {
            speed: 500,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD',
            gravityY: 1000
        };

        var emitter = particles.createEmitter(particleEmitterConfig);

        this.logo = this.add.sprite(400, 200, 'logo');

        emitter.setPosition(400, 200);

        this.input.once('pointerdown', function (/*pointer*/) {
            this.scene.start( 'MainScene' );
        }, this);
    }

};