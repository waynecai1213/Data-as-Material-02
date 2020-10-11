
var elemNum = document.querySelector('input[type="range"]');
var poemContent = document.querySelector(".content");
var fontElement='size'; 
var rangeValue = function(){
  var newValue = elemNum.value;
//   var target = document.querySelector('.value');
//   target.innerHTML = newValue;
    newclass=  fontElement+elemNum.value;
    poemContent.className= "content " + newclass;
}

elemNum.addEventListener("input", rangeValue);


function openStyle(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks, newclass;

    // Get all elements with class="tabcontent" and hide them
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    // document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
    fontElement = evt.currentTarget.value
    newclass=  fontElement+elemNum.value;
    poemContent.className= "content " + newclass;
    

  }

