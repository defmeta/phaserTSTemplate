"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Example;
(function (Example) {
    var ExampleScene = /** @class */ (function (_super) {
        __extends(ExampleScene, _super);
        function ExampleScene() {
            return _super.call(this, { key: 'ExampleScene' }) || this;
        }
        ExampleScene.prototype.preload = function () {
            this.load.image('logo', 'assets/img/test.png');
            this.load.image('red', 'assets/img/red.png');
        };
        ExampleScene.prototype.create = function () {
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
        };
        return ExampleScene;
    }(Phaser.Scene));
    Example.ExampleScene = ExampleScene;
})(Example || (Example = {}));
/// <reference path='./phaser.d.ts'/>
var Example;
(function (Example) {
    var InitPhaser = /** @class */ (function () {
        function InitPhaser() {
        }
        InitPhaser.initGame = function () {
            var config = {
                type: Phaser.AUTO,
                width: 800,
                height: 600,
                physics: {
                    default: 'arcade',
                    arcade: {
                        gravity: { y: 200 }
                    }
                },
                scene: [Example.ExampleScene]
            };
            this.gameRef = new Phaser.Game(config);
        };
        return InitPhaser;
    }());
    Example.InitPhaser = InitPhaser;
})(Example || (Example = {}));
window.onload = function () {
    Example.InitPhaser.initGame();
};
//# sourceMappingURL=test.js.map