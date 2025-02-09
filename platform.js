// Description: This file contains the class Platform which is used to create the platforms in the game.
class Platform {
    constructor(pos_x, pos_y, height, width){
        image = this.load.image('platform', 'assets/Background/ground.jpg');
        pos_x = pos_x;
        pos_y = pos_y;
        height = height;
        width = width;
        this.sprite = this.add.tileSprite(pos_x,pos_y,width,height,'platform').setOrigin(0,0);
    }
}