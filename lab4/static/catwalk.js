function attachEvent(element, type, handler)
{
    if (element.addEventListener) element.addEventListener(type, handler, false);
    else element.attachEvent("on"+type, handler);
}
var img;
var walkForwards;

attachEvent(window,"load",setup);

function setup()
{
    img = document.getElementsByTagName('img')[0];
    attachEvent(img, "mouseover", playAudio);
    img.style.left = '0px';
    walkForwards = true;
    sound = document.createElement('audio');  
    sound.setAttribute('src', 'static/meow.ogg');
  
  if(localStorage.position)
  {
    //alert(localStorage.position);
    img.style.left =  localStorage.position;
    //alert( localStorage.direction);
    
      if (String(localStorage.direction) == "true"){
        walkForwards = true;
      } else {
        walkForwards = false;
      }
     
  }
    
    //localStorage.catwalk=JSON.stringify({position: '0px'}); 
    window.setInterval(catWalk, 50);  
}

function playAudio()
{
    sound.play()
}


function catWalk() {
  var currentLeft = parseInt(img.style.left);

  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }
  
  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
  
  var temp = "" + currentLeft + "px";
  localStorage.setItem('position', temp);
  localStorage.setItem('direction', walkForwards);
}
