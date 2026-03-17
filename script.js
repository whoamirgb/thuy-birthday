/* ===============================
LOCK SYSTEM
=============================== */

const passInput=document.getElementById("passInput")

const lockScreen=document.getElementById("lockScreen")

const errorText=document.getElementById("errorText")

const PASSWORD="190309" // đổi nếu muốn

passInput.addEventListener("input",()=>{

if(passInput.value===PASSWORD){

unlockUniverse()

}

else if(passInput.value.length===6){

showError()

}

})



function showError(){

errorText.style.display="block"

passInput.value=""

setTimeout(()=>{

errorText.style.display="none"

},1000)

}



function unlockUniverse(){

createHeartExplosion()

lockScreen.style.opacity="0"

setTimeout(()=>{

lockScreen.style.display="none"

},1000)

}



/* ===============================
HEART EFFECT
=============================== */

function createHeartExplosion(){

for(let i=0;i<25;i++){

const heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="❤"

heart.style.left=Math.random()*100+"vw"

heart.style.top="80vh"

heart.style.fontSize=Math.random()*20+20+"px"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},3000)

}

}
let secretStars=[
{ x:200, y:300, text:"Anh thích em lâu hơn em nghĩ đó." },
{ x:600, y:200, text:"Nếu có 1000 vũ trụ anh vẫn tìm thấy em." },
{ x:900, y:400, text:"Thùy là ngôi sao sáng nhất." },
{ x:400, y:500, text:"Website này chỉ dành riêng cho em." },
{ x:1100, y:250, text:"Happy Birthday ❤️" }
]

let foundStars=0
