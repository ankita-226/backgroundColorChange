const button = document.getElementById("button")
const code = document.getElementById("code")
button.addEventListener("click",()=>{
    let color ="#";
    let random = Math.random().toString(16).slice(2,8);
    color = color+random;
    document.body.style.backgroundColor = color;
    document.getElementById("code").innerText = color;

})