class Iron{
	constructor(x,y)
	{
	var options={
		restitution:0.8,
		friction:3,
		density:30
	}
		//this.x=x;
		//this.y=y;
		this.w=80;
        this.h=50;
		this.body=Bodies.rectangle(x, y, 50, 50, options);
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
            var angle = this.body.angle;
			push()
			translate(pos.x, pos.y);
            rotate(angle);
			rectMode(CENTER)
			//strokeWeight(4);
			//stroke("black");
			fill("brown");
			rect(0, 0, this.w, this.h);

			pop()
	}

}