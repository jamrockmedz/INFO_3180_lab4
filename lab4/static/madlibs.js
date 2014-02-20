function attachEvent(element, type, handler)
{
    if (element.addEventListener) element.addEventListener(type, handler, false);
    else element.attachEvent("on"+type, handler);
}


var timer = null;


function save() {
    alert('do stuff');
}

var libButton;
var noun, timer, adjective, inputName;

attachEvent(window,"load",setup);

function setup()
{
   libButton = document.getElementById('lib-button');
   attachEvent(libButton, "click", libIt);
   
  noun = document.getElementById("noun");
  adjective = document.getElementById("adjective");
  inputName = document.getElementById("name");
  
  if(localStorage.userInput)
  {
      var userdata = localStorage.userInput;
      var temp = JSON.parse(userdata);
      noun.value = temp['noun'];
      adjective.value = temp['adjective'];
      inputName.value = temp['name'];
  }

	attachEvent(noun, "keyup", save);
  attachEvent(adjective, "keyup", save);
  attachEvent(inputName, "keyup", save);
}
  
function save()
	{
		if(timer) window.clearTimeout(timer);
		
		timer = window.setTimeout(function(){
      localStorage.userInput=JSON.stringify(
      {
      name: inputName.value,
      noun: noun.value,
      adjective: adjective.value
      })
    
    }, 1000);
	}

function libIt() {
  var storyDiv = document.getElementById("story");
  var name = document.getElementById("name").value;
  var adjective = document.getElementById("adjective").value;
  var noun = document.getElementById("noun").value;
  var text = name + " married a " + adjective + " " + noun + "... So weird!";
  storyDiv.innerHTML = text;
  
  localStorage.userInput=JSON.stringify(
      {
      name: "",
      noun: "",
      adjective: ""
      })
  
   var a =[];
  if(localStorage.lib)
  {
    a = JSON.parse(localStorage.getItem('lib'));
    a.push(text);
    localStorage.setItem('lib', JSON.stringify(a));
  }
  else
  {
      a.push(text);
      localStorage.setItem('lib', JSON.stringify(a));
  }
}



	
