var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick",function(){
    love.style.transform = 'translate(-50%, -50%) scale(1)'
    setTimeout(() => {
        love.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 1000);
})

// setTimeout(() => {
//     console.log("hello")
// }, 2000);

// setTimeout(() => {
//     console.log("hello2")
// }, 1000);

