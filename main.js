  function myFunction() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("dp_dwn")
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.style.transform="rotate(180deg)";
    } else {
      x.style.display = "none";
      y.style.transform="rotate(0deg)";
    }
    
  } 




  function toolsFunction() {
    var x = document.getElementById("tools-div");
    var y = document.getElementById("dp-dwn-2");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.transition =  "all 5s linear";
      y.style.transform = "rotate(180deg)";
    } else {
      x.style.display = "none";
      y.style.transform="rotate(0deg)";
    }
    
  } 

 function wheelFunction(){
     var wheel = document.getElementById("color-wheel-div");
     if (wheel.style.display === "none"){
         wheel.style.display = "block";
     } else {
         wheel.style.display = "none";
     }
 }


 function sortFunction(){
 var sorted = document.getElementById("sort-div-home");
 var turn = document.getElementById("dp_dwn_sort");
 var text = document.getElementById("sort-text");
     if (sorted.style.display === "none"){
         sorted.style.display = "block";
         text.style.color = "blue";
         turn.style.transform = "rotate(180deg)";
     } else{
         sorted.style.display = "none";
         turn.style.transform = "rotate(0deg)";
         text.style.color = "black";
     }
}

function show() {
  var v = document.getElementById("dropup");
  if (v.style.display === "none") {
    v.style.display = "block";
  } else {
    v.style.display = "none";
  } 
} 

function contin() {
  var v = document.getElementById("dropup");
  if (v.style.display === "block") {
    v.style.display = "block";
  } else {
    v.style.display = "block";
  } 
} 
function hide() {
  var v = document.getElementById("dropup");
  if (v.style.display === "block") {
    v.style.display = "none";
  } else {
    v.style.display = "none";
  } 
} 




function continLang() {
  var w = document.getElementById("lanuage-id");
  if (w.style.display === "block") {
    w.style.display = "block";
  } else {
    v.style.display = "block";
  } 
} 
function hideLang() {
  var w = document.getElementById("lanuage-id");
  if (w.style.display === "block") {
    w.style.display = "none";
  } else {
    w.style.display = "none";
  } 
} 

























const btns = document.querySelectorAll('.btn');
const dropMenus = document.querySelectorAll('.drop-menu');

btns.forEach(btn => {
    btn.addEventListener('onmouseover', () => {
        removeActive();
        btn.classList.add('active');
        document.querySelector(btn.dataset.target).classList.add('active');
    })
})

const removeActive = () => {
    btns.forEach(btn => btn.classList.remove('active'));
    dropMenus.forEach(dropmenu => dropmenu.classList.remove('active'));
}


    


// function colorFunction(){
//         var color = document.getElementById("color-div");
//         if (color.style.display === "none"){
//             color.style.display = "flex";
//         } else {
//             color.style.display = "none";
//         }
        
//     }
