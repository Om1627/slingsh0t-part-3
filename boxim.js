
class Boxim{
    constructor(x,y){
        
        this.body=Bodies.rectangle(x,y,50,50);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
        this.image=loadImage("wood1.png")
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        

        if (this.body.speed<20) {
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            
            image(this.image,0,0,50,50);
            pop();  
        } else {
            World.remove(world,this.body);
            push();
            score=score+1;
            pop();
        }
        
        
    }
}