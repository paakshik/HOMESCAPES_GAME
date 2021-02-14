//function for adding images
function images(name,filename){
  name.addImage(filename)
}
//function for adding scale.
function scales(name,number){
  name.scale = number;
}
//function for making the bckground
  function cac(size){
  createCanvas(size,size)
}
//function for making the images.
function maker(files,x,y,size1,size2){
  image(files,x,y,size1,size2);
}
function roller(name,number){
  name.rotation = number;
}
function killer(name){
  name.destroy();
}
