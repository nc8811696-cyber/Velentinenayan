// POPUP LOGIC
const popup = document.getElementById("popup");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.onclick = () => {
  popup.style.display = "none";
  alert("Yayyy! 💖 I love you Janshi ❤️");
};

// NO BUTTON RUNS AWAY 😈
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton(){
  const x = Math.random() * 200;
  const y = Math.random() * 40;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// FLOATING HEARTS
setInterval(()=>{
  const heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(14+Math.random()*20)+"px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
},500);