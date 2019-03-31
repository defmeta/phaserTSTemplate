import "phaser";
import { IntroScene } from "./introScene";
import { MainScene } from "./mainScene";

const config: GameConfig = {
  title: "PhaserTest",
  width: 800,
  height: 600,
  parent: "game",
  scene: [ IntroScene, MainScene ],
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  backgroundColor: "#000000"
};
export class PhaserTest extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}
window.onload = () => {
  var game = new PhaserTest(config);
};