class Dustbin{
    constructor() {
 var options ={
     isStatic: true
 }
this.bodybottom= Bodies.rectangle(600,650,200,20,options);
this.width1=200;
this.height1=20;

this.bodyleft= Bodies.rectangle(500,610,20,100,options);
this.width2=20;
this.height2=100;
    
this.bodyright= Bodies.rectangle(700,610,20,100,options);
this.width3=20;
this.height3=100;
this.color="red";

World.add(world,this.bodybottom);
World.add(world,this.bodyleft);
World.add(world,this.bodyright);
}
display(){
var bottom=this.bodybottom.position;
var boxLeft=this.bodyleft.position;
var boxRight=this.bodyright.position;
rectMode(CENTER);
fill(this.color);
rect(bottom.x,bottom.y,this.width1,this.height1);
rect(boxLeft.x,boxLeft.y,this.width2,this.height2);
rect(boxRight.x,boxRight.y,this.width3,this.height3);
}


}