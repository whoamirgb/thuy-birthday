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

function generateHeart(){

heartPoints=[]

let cx = canvas.width/2
let cy = canvas.height/2

for(let t=0; t<Math.PI*2; t+=0.05){

let x = 16*Math.pow(Math.sin(t),3)
let y = -(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))

heartPoints.push({
x: cx + x*20,
y: cy + y*20
})

}

}
