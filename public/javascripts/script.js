var element = document.getElementById("id");
element.style.background = "red";


element.addEventListener("click", function(){
    if(element.style.background === "red") element.style.background = "blue";
    else element.style.background = "red";
});

