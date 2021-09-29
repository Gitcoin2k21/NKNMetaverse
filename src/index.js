import Phaser from "phaser";
import {Scene1} from "./scenes/dummy/Scene1";
import {Scene2} from "./scenes/dummy/Scene2";

const Config = {
    type: Phaser.AUTO,
    width: 1300,
    height: 850,
    parent: "game-container",
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 0}
        }
    },
    scene: [Scene1, Scene2],
};

export default new Phaser.Game(Config);
