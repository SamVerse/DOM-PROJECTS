let isStatus = document.querySelector("h3");


//    this is for 2 different buttons 
// let addFriend =  document.querySelector(".add");
// let remove = document.querySelector(".remove");
// addFriend.addEventListener("click", function(){
//     isStatus.innerHTML = "Friends" ;
//     isStatus.style.color = "green" ;
// })

// remove.addEventListener("click", function(){

//     if (isStatus.innerHTML=="Friends"){
//         isStatus.innerHTML = "Successfully Removed" ;
//         isStatus.style.color = "purple" ;
//     }
//     if(isStatus.innerHTML=="Stranger"){
//         isStatus.innerHTML = "You both are not friends" ;
//         isStatus.style.color = "purple" ;
//     }

// })


//   this is for same button

let btn =  document.querySelector(".add");
let check = 0;
btn.addEventListener("click", function(){
    if (check==0){
        isStatus.innerHTML = "Friends" ;
        btn.innerHTML = "Remove Friend"
        isStatus.style.color = "green" ;
        check = 1
        btn.style.backgroundColor = "red" ;
    }
    else{
        // btn.style.background-color = "red";

        isStatus.innerText = "Stranger" ;
        btn.innerHTML = "Add Friend"
        isStatus.style.color = "red" ;
        btn.style.backgroundColor = "rgb(60, 103, 104)" ;
        check = 0;
    }
})