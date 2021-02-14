//Make Frog Object
const frogger = {
	
	// Score 
	score: 0,
	//How Many Lives our Hero will Have
	life: 5,
	//The Value to increment/Decrement X,Y when Moving Frog
	speed: 43,
	//The x position of the frogger sprite in the sheet
	sx:0,
	//The y position of the frogger sprite in the sheet 
	sy:225,
	//The width of the frogger sprite in the sheet
	sw:65,
	//The height of the frogger sprite in the sheet
	sh:75,
	//Dead or alive
	alive: true,
	//Position hero in center of width of canvas
	x: (canvas.width/2),
	// x: ((canvas.width/2) -20),
	// y: ((canvas.height - 95)),
	y: (canvas.height - 75),
	w: 45,
	h: 45,
	r: 10,
	source: frog,
	//Function to draw body
	drawFrog(){ 	
		// Added Sprite Image of Frog
		ctx.drawImage(this.source, this.sx, this.sy, this.sw, this.sh, this.x - 20, this.y - 20, this.w, this.h);
	},
	decrementLives(){
		this.life -= 1;
		if(this.life === 0){
			theFroggerGame.gameOver();
		};
	},
	increaseScore(){
		this.score += 100;
		control = false;
		theFroggerGame.changeRound();


		setTimeout(()=>{
			this.x = canvas.width/2;
			this.y = canvas.height - 75;
			theFroggerGame.generateBug();
			control = true;
			animate();
		},150);
			
	},
	decrementScore(){
		if(this.score > 0){
			this.score -= 100;
		};

	},
	die(){
		this.alive = false;

		this.decrementLives();
		this.decrementScore();
		
		this.source=collision;
			this.sx= 0;
			this.sy= 110;
			this.sw= 100;
			this.sh= 90;
		
		setTimeout(()=>{
			this.source=frog;
			this.sy=225,
			this.sw=65,
	
			this.sh=75,
			this.sx = 0;
			this.x = canvas.width/2;
			this.y = canvas.height -75;
			this.alive = true;
			theFroggerGame.generateBug()
		},1000)

	}	
};
