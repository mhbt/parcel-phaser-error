import {Scene} from 'phaser'
export default class MainScene extends Scene {
    constructor(){
        super("MainScene");
    }
    init(){

    }
    preload(){
        this.load.multiatlas('girl', 'assets/girl/girl.json', "assets/girl");
    }
    create(){
        let background = this.add.sprite(this.game.config.width / 2, this.game.config.height / 2, 'girl', 'background/background');
    }
    update(){

    }
}