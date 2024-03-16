let like = document.querySelector("i");
let img = document.querySelector("img");
img.addEventListener("dblclick",()=>{

    like.style.transform = "translate(-50%, -50%) scale(1.8)";
    like.style.opacity = 0.8;

    setTimeout( function () {
        like.style.transform = "translate(-50%, -50%) scale(0)";
        like.style.opacity = 0;

    },1200);
}
)

let heartIcon = document.getElementById("heart");
let commentIcon = document.getElementById("comment");

heartIcon.addEventListener("click",()=>{
    if( heartIcon.style.color === "red") {
        heartIcon.style.color = "white";
        
    }
    else{
        heartIcon.style.color = "red";
    }
})