class Box{
    constructor(x, y, width, height){
      //super(x,y,width,height);
      this.visibilty =255;
      var options = {
        //restitution:0.5,
        friction:1.0,
         //density:1.0,
         isStatic: false
    }
    //fill(random(0,225),random(0,225),random(0,225));
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    
    this.height = height;
    
    World.add(world, this.body);
    

    }
    
    display()
    { var angle = this.body.angle; 
      var pos = this.body.position; 
      
      if(this.body.speed<3){
        //this.body.display();
        
        push();
         
         rotate(angle);
          rectMode(CENTER);
          rect(pos.x, pos.y, this.width, this.height); 
           //imageMode(CENTER);
          //image(this.image, 0, 0, this.width, this.height);
             pop();  
      }
       
        else{
          World.remove(world,this.body);
          //push();
        this.visibilty=this.visibilty-5;
        // tint(255,0,0,this.visibilty);
        // fill(255,0,0,this.visibilty);
          
        // rect(pos.x, pos.y, this.width, this.height); 
          //pop();
        }
        
      
      
       
           
          }

score(){
  if(this.visibilty<0 && this.visibilty>-105){
    score++;
  }
}

        }