var fundo
var fundoimg
var jaxon
var jaxonimg
var barreiradireita
var barreiraesquerda
var edges

function preload(){
  //imagens pré-carregadas
  jaxonimg = loadAnimation("Runner-1.png","Runner-2.png");
 fundoimg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  fundo = createSprite(200,200)
  fundo.addImage(fundoimg)
  fundo.velocityY = 4
  barreiradireita = createSprite(380,0,100,800)
  barreiraesquerda = createSprite(20,0,100,800)
  jaxon = createSprite(180,340,30,30)
  jaxon.addAnimation("correndo",jaxonimg)
  jaxon.scale = 0.08
  barreiraesquerda.visible = false;
  barreiradireita.visible = false;
}

function draw() {
  background(0);
  jaxon.x = World.mouseX
  if(fundo.y > 400){
    fundo.y = height/2
  }
  edges=createEdgeSprites()
  jaxon.collide(edges)
  jaxon.collide(barreiradireita)
  jaxon.collide(barreiraesquerda)
  drawSprites();

}
