window.onload = function() {
  console.log("Page loaded");
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

};

