const gameStart = {
    key: 'gameStart',
    preload: function () {
        // 載入素材
        this.load.image('logo', './images/ui/txt-title.png');
        this.load.image('startBtn', './images/ui/btn-press-start.png');
        this.load.image('PlayerEnd', './images/ui/player-end.png');

        this.load.image('bg1', './images/bg/bg1.png');
        this.load.image('bg2', './images/bg/bg2.png');
        this.load.image('bg3', './images/bg/bg3.png');
        this.load.image('bg4', './images/bg/bg4.png');
        this.load.image('footer', './images/bg/footer.png');
        this.load.spritesheet('user', './images/player.png', {
            frameWidth: 144,
            frameHeight: 120
        })
    },
    create: function () {
        // 設定素材位置、大小等
        this.bg4 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg4');
        this.bg3 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg3');
        this.bg2 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg2');
        this.bg1 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg1');
        this.footer = this.add.tileSprite(w / 2, 360 + 45, w, 90, 'footer');

        // image容器只是單純把圖片貼上，不具備遊戲物件的特性
        this.logo = this.add.image(w / 2, h / 2 - 50, 'logo');
        this.logo.setScale(.5);

        this.startBtn = this.add.image(w / 2, h / 2 + 50, 'startBtn')
        this.startBtn.setScale(.5);

        // 開啟物件互動設定
        this.startBtn.setInteractive();
        // 監聽pointerdown(游標點擊)
        this.startBtn.on('pointerdown', () => {
            // 轉換場景
            this.scene.start('gamePlay');
        })

    },
    update: function () {
        // 背景位移
        this.bg4.tilePositionX += 0;
        this.bg3.tilePositionX += 3;
        this.bg2.tilePositionX += 2;
        this.bg1.tilePositionX += 4;
        this.footer.tilePositionX += 4;
    }
}