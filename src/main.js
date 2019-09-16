import MainScene from "./scenes/MainScene";

const scenes = [
    MainScene
];

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: scenes
}
const game = new Phaser.Game(config);