class PlayScene extends Phaser.Scene{

    constructor(){
        super({key : "play",
            physics:{
                system : 'impact',
                gravity :100
            }    
    });
    }
    preload(){
this.load.spritesheet('run_sheet','run.png',{frameWidth : 21,frameHeight:33});
        this.load.image('tile_image','jungle tileset.png');
        this.load.tilemapTiledJSON('map','game_map.json');
    }
    create(){

         this.player= this.physics.add.sprite(100,100,'run_sheet');
        var map=this.add.tilemap('map');  
        var tileset=map.addTilesetImage("jungle_tiles","tile_image");      
        var layer =map.createStaticLayer('main',tileset);
        var items=map.createFromObjects("items",9,{},this);
        console.log(items);
    }
}