window.onload = function() {
  console.log("Page loaded");

  /* apply effect to options */
  document.querySelectorAll("#selector .section").forEach(item => {
    item.addEventListener("click", () => {
      // toggle the class for the item
      if (!item.classList.contains("infocus")) {
        item.classList.add("infocus");
        document.querySelectorAll("#" + item.innerHTML)[0].classList.add("active");
      }
      else {
        item.classList.remove("infocus");
        document.querySelectorAll("#" + item.innerHTML)[0].classList.remove("active");
      }


      const siblings = item.parentElement.querySelectorAll(".section");
      siblings.forEach(sib => {
        if (sib !== item) {
          if (!sib.classList.contains("fade")) {
            sib.classList.add("fade");  // fade others
          }
          else {
            sib.classList.remove("fade");
          }
        }
      });
    });
  });

  /* apply effect to image */
  const profile = document.querySelectorAll("#profile .glow")[0];

  window.addEventListener("mousemove", handleMouseMove);

  function handleMouseMove(e) {
    /*
    const rect = this.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    */
    const mouseX = e.clientX - window.screenLeft - window.innerWidth / 2;
    const mouseY = e.clientY - window.screenTop - window.innerHeight / 2;

    
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    profile.style.setProperty("--start", angle + 60);
  }
};

