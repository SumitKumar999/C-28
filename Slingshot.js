class Slingshot {
    constructor(bodyA,pointB){
        var option = {stiffness:0.04,
        length:20,
        bodyA:bodyA,
        pointB:pointB 
}
    this.chain = Matter.Constraint.create(option)
    this.pointB = pointB 
    World.add(world,this.chain)
    }

    fly(){
        this.chain.bodyA = null; // null = nothing
    }
     
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4); // make the border or line thik or thin
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
    }
}