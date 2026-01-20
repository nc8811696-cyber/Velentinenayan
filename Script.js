document.addEventListener("DOMContentLoaded", function () {

  const popup = document.getElementById("popup");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  if (!popup || !yesBtn || !noBtn) {
    console.log("Popup elements missing");
    return;
  }

  yesBtn.onclick = function () {
    popup.style.display = "none";
    alert("Yayyy 💖 I love you Janshi ❤️");
  };

  function moveNo() {
    const x = Math.random() * 200;
    const y = Math.random() * 80;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  }

  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);

});
