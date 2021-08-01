var header = document.getElementById("sticky-nav-div-id");
var sticky = navbar.offsetTop;

window.onscroll = function(){
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
}


// The function below toggles the All jobs div active and off too when cick on not = the div itself

function allClick() {
    var x = document.getElementById("all-job-div-id");
    var tip = document.getElementById("dp_dwn");
    if(x.style.display === "none"){
        x.style.display = "block";
        tip.style.transform = "rotate(180deg)";
    } else{
        x.style.display = "none";
        tip.style.transform = "rotate(0deg)";
    }
document.onclick = function(e){
    if (e.target.id !== 'all-click'){
        x.style.display = "none";
    }
}
}

// The function above ends here



function ngClick() {
    var ng = document.getElementById("location-tag");
    if(ng.style.display === "none"){
        ng.style.display = "block";
    } else{
        ng.style.display = "none";
    }
}