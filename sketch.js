let statement;
let button1;
let button2;
let input, button;
let myText;
let titleImg;

function preload() {
  art = loadStrings('art_termss.csv');
  medium = loadStrings('mediums.csv');
  majors = loadStrings('majors.csv');

}

function setup() {
  //createCanvas(900, 800);
  
  button1 = createElement('button1', '❏ &nbsp Load Another');
  button1.mousePressed(loop);
  
  statement = createElement('h3','Click to generate thesis ideas.')
  statement.id('myInput');

  //button2 = createElement('button2','❏ Copy Text');
  //square = createElement('square');
  //square2 = createElement('square2');
  //button2.mousePressed(copyTextToClipBoard);
}


function draw() {
  clear();
  //background('#F4E93F');
 
  statement.html(' “My thesis explores '+ random(majors) + ' within the realm of visual art. The project explores ' + random(medium) + ', ' + random(medium) + ' through the lens of ' + random(art) + '.”');
  
  
  noLoop();
}




