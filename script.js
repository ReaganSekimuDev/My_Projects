let menue = document.querySelector(".menue");
let slash = document.querySelectorAll(".slash");
let slashes = document.querySelector("#cc");
let img = document.querySelector("img");
  let nav = document.querySelector(".nav");


menue.addEventListener('mouseover', () => {
  nav.style.display = "block";
 slash[0].style.transform = "rotate(50deg)";
  slash[1].style.transform = "rotate(-50deg)";
  slash[0].style.left = "1px";
  slash[0].style.top = "7px";
  slash[1].style.top = "-7px";
  
  menue.style.width = "300px";
  menue.style.height = "auto";
})
menue.addEventListener('mouseleave', () => {
  
 slash[0].style.transform = "rotate(0deg)";
  slash[1].style.transform = "rotate(0deg)";
  slash[0].style.left = "0px";
  slash[0].style.top = "0px";
  slash[1].style.top = "0px";
  
  menue.style.width = "50px";
  menue.style.height = "50px";
  let int = setTimeout(() => {
  nav.style.transition = " all 1s";
  nav.style.display = "none";
    
  },500)
  
});
