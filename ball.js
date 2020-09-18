class Ball{
    constructor(){

    var options={
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
 this.body=Bodies.circle(100,620,40,options);
 this.color="red";
World.add(world,this.body);
}
display(){
var pos =this.body.position;
rectMode(CENTER);
fill(this.color);
rect(pos.x,pos.y);
}
}