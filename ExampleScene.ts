module Example {
     
    export class ExampleScene extends Phaser.Scene {

        logo:any;

        constructor() {
            super({ key: 'ExampleScene' });
        }
 
        preload() {
            this.load.image('logo', 'assets/img/test.png');
            this.load.image('red', 'assets/img/red.png');
        }
 
        create() { 
            var particles = this.add.particles('red');

            var emitter = particles.createEmitter({
                speed: 100,
                scale: { start: 1, end: 0 },
                blendMode: 'ADD'
            });

            this.logo = this.physics.add.image(200, 100, 'logo');

            this.logo.setVelocity(100, 200);
            this.logo.setBounce(1, 1);
            this.logo.setCollideWorldBounds(true);

            emitter.startFollow(this.logo);
        }
    }
}