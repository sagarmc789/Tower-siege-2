class BoxImage extends Block{
    constructor(x,y){

        super(x,y,30,40)
    this.visibility=255
    }

    display(){
       
       
        if(this.body.speed<8){
            super.display();
          
          }
          else{
            push();
            World.remove(world,this.body)
            
            this.visibility=this.visibility-10
            tint(255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
          }
          }
    }
