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

let music=document.getElementById("bgMusic")
music.volume=0.6
music.play().catch(()=>{})

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
