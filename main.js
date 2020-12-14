var canvas=new fabric.Canvas('mycanvas');
    player_x=10;
    player_y=10;
    block_image_width=30;
    block_image_height=30;
    
    var player_object="";
    var lock_image_object="";

    function player_update(){
        fabric.Image.fromURL("player.png",function(IMG){
            player_object=IMG;player_object.scaleToWidth(150);
            player_object.scaleToHeight(140);
            player_object.set({
                top:player_y,
                left:player_x
            });
            canvas.add(player_object);
        });
    }

    function new_image(get_image){
        fabric.Image.fromURL(get_image,function(IMG){
            lock_image_object=IMG;
            lock_image_object.scaleToWidth(block_image_width);
            lock_image_object.scaleToHeight(block_image_height);
            lock_image_object.set({
                top:player_y,
                left:player_x
            });
            canvas.add(lock_image_object);
        });
    }

    window.addEventListener("keydown",mykeydown);
    function mykeydown(e){
        keypressed=e.keyCode;
        if(e.shiftKey==true && keypressed=='80'){
console.log("p and shift pressed together=");
block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("curent_width").innerHTML=block_image_width;
document.getElementById("curent_height").innerHTML=block_image_height;
        }

        if(e.shiftKey==true && keypressed=='77'){
            console.log("m and shift pressed together=");
            block_image_width=block_image_width-10;
            block_image_height=block_image_height-10;
            document.getElementById("curent_width").innerHTML=block_image_width;
            document.getElementById("curent_height").innerHTML=block_image_height;
                    }
                    if(keypressed=='38'){
                        up();
                     console.log("up");  
                    }

                    if(keypressed=='37'){
                        left();
                     console.log("left");  
                    }

                    if(keypressed=='40'){
                        down();
                     console.log("down");  
                    }

                    if(keypressed=='39'){
                        right();
                     console.log("right");  
                    }

                    if(keypressed=='70'){
                        new_image('ironman_face.png');
                     console.log("f");  
                    }

                    if(keypressed=='66'){
                        new_image('spiderman_body.png');
                     console.log("b");  
                    }

                    if(keypressed=='82'){
                        new_image('thor_right_hand.png');
                     console.log("r");  
                    }

                    if(keypressed=='72'){
                        new_image('captain_america_left_hand.png');
                     console.log("h");  
                    }

                    if(keypressed=='76'){
                        new_image('hulk_legs.png');
                     console.log("h");  
                    }

    function up(){
        if(player_y>=0){
            player_y=player_y-block_image_height;
            console.log("block_image_height="+block_image_height);
            console.log("when up arrow key is pressed x="+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function down(){
        if(player_y<=500){
            player_y=player_y+block_image_height;
            console.log("block_image_height="+block_image_height);
            console.log("when down arrow key is pressed x="+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function left(){
        if(player_x>=0){
            player_x=player_x-block_image_width;
            console.log("block_image_width="+block_image_width);
            console.log("when left arrow key is pressed x="+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function right(){
        if(player_x<=850){
            player_x=player_x+block_image_width;
            console.log("block_image_width="+block_image_width);
            console.log("when rights arrow key is pressed x="+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
    }
}