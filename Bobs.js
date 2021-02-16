class Bobs{
    constructor(x,y,radius){
     var options={
      isStatic:true,
        restitution:0.3,
      friction:0.5,
         density:1.2
     }
  
  
     this.body=Matter.Bodies.circle(x,y,radius,options)
     this.body.radius=50
     World.add(world,this.body)
    
    }

    display(){
        var pos=this.body.position
        var rad=this.body.radius
        var ang=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(ang)
        fill("pink")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,rad)
        pop();

   

    }
}