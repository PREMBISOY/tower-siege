class Polygon{
    constructor(x,y,radius)
    {
        var options=
        {
            restitution:0.2,
            isStatic:false,
            density:0.3,
            friction:0.5
        }
        this.polygon = Bodies.circle(x,y,radius,options);
        World.add(world,this.polygon);
        this.rope = new SlingShot(this.polygon,{x:100,y:400});
    this.image = loadImage('polygon.png');

}
display(){
    imageMode(CENTER)
       image(this.image,this.polygon.position.x,this.polygon.position.y,40,40);
}
    
} 