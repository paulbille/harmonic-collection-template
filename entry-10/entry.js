const element = document.getElementById("follower");

document.addEventListener("mousemove", event => {
  element.style.top = event.clientY + "px";
  element.style.left = event.clientX + "px";
});

element.style.transition = "top 20s ease-in-out, left 20s ease-in-out";

