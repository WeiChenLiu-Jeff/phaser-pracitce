const config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    parent: 'app',
    physics: {
        // 物理引擎
        default: 'arcade',
        arcade: {
            gravity: {
                y: 700
            },
            debug: true
        },
    },
    // 遊戲場景
    scene: [
        gamePlay,
        gameStart
    ]
}
const game = new Phaser.Game(config);