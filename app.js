console.log("This is js");
document.getElementById("menu").addEventListener("click",function(){
    console.log("toggle clicked")
    let ulList = document.querySelector(".navList");
    if(ulList.style.display=="none"){
        ulList.style.display="block";
    }else if(ulList.style.display=="block"){
        ulList.style.display="none";
    }else{
        ulList.style.display="block";
    }
});