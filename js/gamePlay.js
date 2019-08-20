const gamePlay = {
    key: 'gamePlay',
    preload: function () {
        // 載入素材
        this.load.image('bg1', './images/bg/bg1.png');
        this.load.image('bg2', './images/bg/bg2.png');
        this.load.image('bg3', './images/bg/bg3.png');
        this.load.image('bg4', './images/bg/bg4.png');
        this.load.image('footer', './images/bg/footer.png');
        this.load.spritesheet('user', './images/player.png', {
            frameWidth: 144,
            frameHeight: 120
        })
        this.timeInt = 25;
        this.speedLv = 1;
        this.gameStop = false;
    },
    create: function () {
        // 設定素材位置、大小等
        this.bg4 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg4');
        this.bg3 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg3');
        this.bg2 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg2');
        this.bg1 = this.add.tileSprite(w / 2, h / 2, w, h, 'bg1');
        this.footer = this.add.tileSprite(w / 2, 360 + 45, w, 90, 'footer');

        this.player = this.physics.add.sprite(150, 150, 'user');
        this.player.setScale(.7);

        // 設定玩家不能超出邊界
        this.player.setCollideWorldBounds(true);

        // 創造動畫
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('user', {
                start: 0,
                end: 1
            }),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: 'speed',
            frames: this.anims.generateFrameNumbers('user', {
                start: 4,
                end: 5
            }),
            frameRate: 5,
            repeat: -1
        })
        this.player.anims.play('run', true);

        // 讓地板存在於空間中，且固定位置
        this.physics.add.existing(this.footer);
        this.footer.body.immovable = true;
        this.footer.body.moves = false;

        //設定玩家和地面的碰撞、彈跳力
        this.physics.add.collider(this.player, this.footer);
        this.player.setBounce(1);

        // 添加文字到畫面
        this.TimeText = this.add.text(w - 150, h - 50, `Time: ${this.timeInt}`, {
            fontSize: '25px'
        });
        let timer = setInterval(() => {
            this.timeInt--;
            this.TimeText.setText(`Time: ${this.timeInt}`);

            if (this.timeInt < 20 && this.timeInt > 10) {
                this.speedLv = 2;
            }

            if (this.timeInt < 10 && this.timeInt > 0) {
                this.speedLv = 4;
            }

            if (this.timeInt <= 0) {
                this.gameStop = true;
                clearInterval(timer);
            }

        }, 1000);
    },
    update: function () {
        if (this.gameStop) return;

        // 背景位移
        this.bg4.tilePositionX += 0 * this.speedLv;
        this.bg3.tilePositionX += 3 * this.speedLv;
        this.bg2.tilePositionX += 2 * this.speedLv;
        this.bg1.tilePositionX += 4 * this.speedLv;
        this.footer.tilePositionX += 4 * this.speedLv;

        // 鍵盤事件
        const keyboard = this.input.keyboard.createCursorKeys();
        if (keyboard.right.isDown) {

            // 啟動動畫
            this.player.anims.play('speed', true);
            // 物件翻轉
            this.player.flipX = false;
            // 速度設定
            this.player.setVelocityX(200);

        } else if (keyboard.left.isDown) {

            this.player.anims.play('speed', true);
            this.player.flipX = true;
            this.player.setVelocityX(-200);

        } else {

            this.player.anims.play('run', true);
            this.player.flipX = false;
            this.player.setVelocityX(0);

        }
    }
}