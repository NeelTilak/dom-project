var isStatus = document.querySelector("h5")

// var addFriend = document.querySelector("#add")

// addFriend.addEventListener("click",function(){
//     isStatus.innerHTML = "Friends"
//     isStatus.style.color = "green"
// })

// var removeFriend = document.querySelector('#remove')

// removeFriend.addEventListener("click", function(){
//     isStatus.innerHTML = "Stranger"
//     isStatus.style.color = "red"
    
// })

var btn = document.querySelector("#add")
var flag = 0
btn.addEventListener("click",function(){
    if(flag==0){
        isStatus.innerHTML = "Friends"
        isStatus.style.color = "green"
        flag = 1
    }
    else{
        isStatus.innerHTML = "Strangers"
        isStatus.style.color = "red"
        flag = 0
    }
})