class Boxorg{
    constructor(x,y,width,height){
        var options={
            density:5
            
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        if (this.body.speed<10) {
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("orange");
            strokeWeight(5);
            rect(0,0,this.width,this.height); 
            pop();  
        } else {
            World.remove(world,this.body);
            
        }
        
    }
}
