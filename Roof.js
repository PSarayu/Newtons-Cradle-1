class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.body=Matter.Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }

    display(){
        var posit=this.body.position
        var ang=this.body.angle
        push();
        translate(posit.x,posit.y)
        rotate(ang)
        fill("red")
        rectMode(CENTER)
        rect(posit.x,posit.y,this.width,this.height)
        pop();

    }

    
}