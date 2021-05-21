var map;
var tileset;
var capa ;
var obstaculos;
var KeyA;
var KeyD;
var KeyW;
var KeyS;
var SPACE;
var KeyE;
var texto;
var KeyQ;
var KeyC;
var player;
var velocidd;
var enemigo;
var direccion2;
var NPC;
var interaccion;
var hablar;
var pasar;
var perseguir;

var scoreText;
var scorecd;
var cd3;
var seguir;

var mascota;
var seguir;
var gay;
var scoreText;
var disparo;
var adri;
var mensaje;
var inicio;
var texto2;
var cd2;
var hola;
var finalconversacion;
var cd;
var scorecd;
var texto;
var mascotas;


var furro;

class inventario extends Phaser.Scene
{
	constructor()
	{
		super("inventario");
		
		var dinero=0;
		var comida=0;

		var direccion1=1;
		var direccion2=1;
		var mensaje=0;
		var scorecd=0;
		var final=20;
		var inicio=0;
		var cd3=0;

		var finalconversacion=true;

		var velocidad=3;

		var seguir=false;
	}

	preload() {

	    this.load.image('gameTiles', 'tileset/NatureTileset.png');

	    this.load.tilemapTiledJSON('tilemap', 'maps/nive.json');

	    this.load.atlas('attack','assets/attack.png', 'assets/attack_atlas.json');

	    this.load.image('moneda', 'assets/monedas.png');

	    this.load.image('cerdo', 'assets/cerdo.png');

	    this.load.image('panamiguel', 'assets/panamiguel.png');

	    this.load.image('laser', 'assets/disparo.png');

	    this.load.image('inventario', 'assets/inventario.png');

	    this.load.image('chuleta', 'assets/chuleta.png');

	    this.load.image('NPC', 'assets/NPC.png');

	    this.load.image('texto', 'assets/bafarada1.png');

	    this.load.image('texto2', 'assets/bafarada2.png');

	    this.load.image('enemigo', 'assets/panamiguel.png');

	    this.load.image('gay', 'assets/enemy.png');

	   this.load.image('furro', 'assets/panamiguel.png');

	    //game.load.spritesheet('furro', 'assets/furrp.png', 37, 45, 18);
	}
	   
	create() {

	    map = this.make.tilemap({key:'tilemap'});

	    tileset = map.addTilesetImage('nature','gameTiles');

	    capa = map.createLayer(0, tileset);

	   // furro = game.add.sprite(300,200, 'furro');

	    obstaculos = map.createLayer(1, tileset);
	    obstaculos.setCollisionByProperty({colisiones: true});

	    KeyA=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
	    KeyD=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
	    KeyW=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
	    KeyS=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
	    SPACE=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	    KeyE=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
	    KeyQ=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
	    KeyC=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

	    player = this.physics.add.sprite(0,2365, 'attack').setScale(0.07);

	    player.setBounce(0.2);
	    player.setCollideWorldBounds(true);

	   this.anims.create({
	        key:'attack',
	        frames: this.anims.generateFrameNames('attack', {
	            prefix: 'attack',
	            star: 0,
	            end: 10,
	        }),
	        repeat:0,
	        frameRate:15
	    });

	    velocidd = 150;0

	   // cartera = this.add.sprite(40,50,'moneda').setScale(0.1);

	   // monedaList = this.physics.add.group();

	    //this.physics.add.overlap(player, monedaList, recolectar, null, this);

	   // dineros = this.add.text(70, 50,+ dinero, { fontSize: '20px', fill: 'white' });

	 //   cerdo1 = this.physics.add.sprite(2140,2365,'cerdo').setScale(0.2);
	   // this.physics.add.overlap(player, cerdo1, ataque1, null, this);

	  //  cerdo2 = this.physics.add.sprite(2120,2430,'cerdo').setScale(0.1);
	  //  this.physics.add.overlap(player, cerdo2, ataque2, null, this);

	    this.cameras.main.setBounds(0, 0, 1280 * 2, 1280 * 2);
	    this.physics.world.setBounds(0, 0, 1280 * 2, 1280 * 2);
	    this.cameras.main.startFollow(player, true, 0.05, 0.05);

	    //inventario = this.add.sprite(700,80, 'inventario').setScale(0.3);
	    //inventario.setScrollFactor(0);

	    gay = this.physics.add.sprite(200,2200, 'gay').setScale(0.1);
	    gay.setCollideWorldBounds(true);
	    gay.body.setSize(100, 300, 50, 25);
	    gay.setImmovable(true);
	    //chuleta = this.add.sprite(595,40, 'chuleta').setScale(0.3);
	    //scoreText1 = this.add.text(605, 45,+ chuleta, { fontSize: '20px', fill: 'white' });

	    this.physics.add.collider(player, obstaculos);
	    //this.physics.add.collider(player, gay);

	    //Sprites del NPC
	    NPC = this.physics.add.sprite(1800,1800, 'NPC');
	    NPC.setScale(0.2);

	    //Colision con el final de la pantalla
	    player.setBounce(0.2);
	    player.setCollideWorldBounds(true);
	    player.body.setSize(100, 300, 50, 25);

		//Interacciones entre el player y el NPC
	    this.physics.add.overlap(player, NPC, this.interaccion, null, this);
	    this.physics.add.overlap(player, NPC, this.hablar, null, this);
	    this.physics.add.overlap(player, NPC, this.pasar, null, this);
	    this.physics.add.overlap(player, gay, this.hola, null, this)
	   // console.log(gay)


	    //this.physics.add.overlap(player, gay, null, this);

	    enemigo = this.physics.add.sprite(1900,1500,'enemigo').setScale(0.1);

	    enemigo.body.setSize(3200,3200);

	    this.physics.add.overlap(player,enemigo,perseguir, null, this);

	    direccion2 =new Phaser.Math.Vector2(1, 0);
	    direccion2.normalize();

	    this.mascotas();
	    
	    //.call(this);
	    /*chuleta1 = this.add.sprite(1730,1050, 'chuleta').setScale(0.3);
	    chuleta2 = this.add.sprite(595,40, 'chuleta').setScale(0.3);
	    chuleta3 = this.add.sprite(595,40, 'chuleta').setScale(0.3);
	    chuleta4 = this.add.sprite(595,40, 'chuleta').setScale(0.3);*/

	   /* */

	    
	}

	update()
	{
	   if(cd>0)
	    {
	        cd=cd-1;
	    }

	    if(cd3==1) 
	    {
	        scorecd=scorecd-1;
	    } 
	 	
	    	
	    	
	    

	    if (player.move == true) 
	    {
	    	var mover = mascota.huecos.pop();
	    	mover.setTo(player.x, player.y);

	    	mascota.huecos.unshift(mover);

	    	mascota.x = mascota.huecos[15].x;
	    	mascota.y = mascota.huecos[15].y + 15;
	    }
	    player.move = false; 

	    if (KeyA.isDown )
	    {
	        player.setVelocityX(-200);
	        player.move = true;
	        player.mirar = 'left';
	    }
	    else if(KeyD.isDown)
	    {
	        player.setVelocityX(200);
	        player.move = true;
	        player.mirar = 'right';
	    }
	    else
	    {
	        player.setVelocityX(0);
	    }

	    if (KeyW.isDown)
	    {
	        player.setVelocityY(-200);
	        player.move = true;
	        player.mirar = 'up';
	    }
	    else if (KeyS.isDown)
	    {
	        player.setVelocityY(200);
	        player.move = true;
	        player.mirar = 'down';
	    }
	    else
	    {
	        player.setVelocityY(0);
	    }

	    if (KeyC.isDown)
	    {
	        this.mascotita();
	    }


	    if (KeyQ.isDown)
	    {
	    	this.basico();
	    	//ataque2.call(this);
	        
	    }

	    if (SPACE.isDown && finalconversacion==false)
	    {
	        final=final-1;
	        if (SPACE.isDown && final<=0 )
	        {
	            this.destruir();
	            final=10;
	        }
	    } 

	   //movercerdo();
	   //girar();
	   //movercerdo2();
	   //girar2();
	   //this.atacar();
	   //this.hablar();
	   //this.hola();
	    
	}

	hola()
	{
		//console.log(p);
		/*this.input.once('inventario');
	   	this.scene.pause('game');
	    this.scene.launch('inventario');
	    this.scene.start('inventario');*/
	    Phaser.Scene.call(this, { key: 'inventario', active: true });	   
	    

        this.scene.transition({ target: 'inventario', duration: 2000 });

       
	}

	basico() 
	{
		//player.play('attack');

		disparo = this.physics.add.sprite(player.x, player.y, 'panamiguel');
	    disparo.setScale(0.1,0.1);
	    /*disparo.setVelocityX(1000);
	    setTimeout(function() {disparo.setVelocityX(-1000)}, 1000);*/

	    if (player.mirar == 'right') 
	    {
	    	disparo.setVelocityX(1000);
	    	setTimeout(function() {disparo.setVelocityX(-1000)}, 1000);
	    }
	    else if(player.mirar == 'up')
	    {
	    	disparo.setVelocityY(-1000);
	    	setTimeout(function() {disparo.setVelocityY(1000)}, 1000);
	    }
	    else if (player.mirar == 'left') 
	    {
	    	disparo.setVelocityX(-1000);
	    	setTimeout(function() {disparo.setVelocityX(1000)}, 1000);
	    }
	    else if (player.mirar == 'down') 
	    {
	    	disparo.setVelocityY(1000);
	    	setTimeout(function() {disparo.setVelocityY(-1000)}, 1000);
	    }

	    enemigo.destroy();
	    

	}

	mascotita()
	{
		var mirar;
	    disparo = this.physics.add.sprite(mascota.x, mascota.y, 'panamiguel');
	    disparo.setScale(0.1,0.1);

	    if (player.mirar == 'right') 
	    {
	    	disparo.setVelocityX(1000);
	    }
	    else if(player.mirar == 'up')
	    {
	    	disparo.setVelocityY(-1000);
	    }
	    else if (player.mirar == 'left') 
	    {
	    	disparo.setVelocityX(-1000);
	    }
	    else if (player.mirar == 'down') 
	    {
	    	disparo.setVelocityY(1000);
	    }
	    

	    
	        //fuerza++;
	        //marcafuerza.setText('Fuerza: '+ fuerza);
	    
	    /*else 
	    {
	            /*force.x = config.width / 2;*/
	            /*fuerza = 0;
	            marcafuerza.setText('Fuerza: '+ fuerza);*/
	       /* mascota.x = mascota.x + velocidd * direccion2.x;
	        mascota.y = mascota.y + velocidd * direccion2.y;
	    }*/
	}

	mascotas()
	{
		mascota = this.add.sprite(player.x, player.y, 'panamiguel');
	    mascota.setScale(0.1,0.1);

	    mascota.huecos =new Array;
	    for (var i = 0 ; i < 16; i++) 
	    {
	    	mascota.huecos[i] =new Phaser.Geom.Point(player.x, player.y);
	    }
	}

	/*function recolectar(objeto1, objeto2)
	{
	    objeto2.destroy();
	    var aleatorio = Phaser.Math.Between(1, 10);
	    dinero=dinero+aleatorio;
	    dineros = dineros.setText(+ dinero);
	    comida=comida+1;
	    scoreText1 = scoreText1.setText(+ comida);
	}

	function recolectar2(objeto1, objeto2)
	{
	    objeto2.destroy();
	    var aleatorio = Phaser.Math.Between(1, 10);
	    dinero=dinero+aleatorio;
	    dineros = dineros.setText(+ dinero);
	    comida=comida+1;
	    scoreText1 = scoreText1.setText(+ comida);
	}

	function ataque1(objeto1, objeto2)
	{
	    if(KeyQ.isDown)
	    {
	        objeto2.destroy();
	        var moneda2 = monedaList.create(cerdo1.x,cerdo1.y,'moneda').setScale(0.1);
	    }
	}
	*/
	ataque2(enemigo, player)
	{
	    if(KeyQ.isDown)
	    {
	        enemigo.destroy();
	        //var moneda2 = monedaList.create(enemigo.x,enemigo.y,'moneda').setScale(0.1);
	    }
	}
	    
	/*function movercerdo()
	{  
	    if(direccion1==1)
	    {
	        cerdo1.y=cerdo1.y-1;

	        if(cerdo1.y==2000)
	        {
	            direccion1=0;
	        }
	    }
	}

	function girar()
	{
	    if(direccion1==0)
	    {
	        cerdo1.y=cerdo1.y+1;

	        if(cerdo1.y==2400)
	        { 
	            
	            direccion1=1;
	        }
	    }
	}

	function movercerdo2()
	{  
	    if(direccion2==1)
	    {
	        cerdo2.y=cerdo2.y-1;

	        if(cerdo2.y==2000)
	        {
	            direccion2=0;
	        }
	    }
	}

	function girar2()
	{
	    if(direccion2==0)
	    {
	        cerdo2.y=cerdo2.y+1;

	        if(cerdo2.y==2400)
	        { 
	            
	            direccion2=1;
	        }
	    }
	} */

	//Funcion para iniciar conversación
	hablar()
	{
	    if(KeyE.isDown && cd==0 && mensaje==0 && inicio==0)
	    {
	        texto = this.physics.add.sprite(NPC.x+50, NPC.y-100, 'texto');
	        texto.setScale(0.3);
	        cd=100;
	        mensaje=1;
	        inicio=1;
	    }
	}

	//Funcion para pasar de frase
	pasar()    
	{
	    if(SPACE.isDown && mensaje==1)
	    {
	        texto.destroy();
	        scoreText.destroy();
	        texto2 = this.physics.add.sprite(NPC.x+50, NPC.y-100, 'texto2');
	        texto2.setScale(0.3);
	        cd2=200;
	        mensaje=0;
	        finalconversacion=false;
	    }   
	}

	//Funcion para que aparezca el texto de ayuda 
	interaccion()
	{
	    if(scorecd<=0)
	    {
	        scoreText = this.add.text(NPC.x-220, NPC.y + 50, 'Pulsa E para hablar y SPACE para continuar', { fontSize: '20px', fill: 'white' });
	        scorecd=100;
	        cd3=0;
	    }
	}

	//Funcion para eliminar cualquier texto
	destruir()
	{ 
	    scoreText.destroy();
	    texto2.destroy();
	    inicio=0;
	    cd3=1;
	    finalconversacion=true;
	}

	perseguir()
	{
	   seguir=true;
	}

	atacar()
	{
	   if(seguir==true) 
	    {
	        enemigo.direccion = new Phaser.Math.Vector2(player.x-enemigo.x, player.y-enemigo.y);
	        enemigo.direccion.normalize();
	        enemigo.x = enemigo.x + velocidad * enemigo.direccion.x;
	        enemigo.y = enemigo.y + velocidad * enemigo.direccion.y;
	    }
	}
}