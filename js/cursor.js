window.addEventListener("mousemove", (e) => {
  let cursor = document.getElementById("cursor");
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;

  if (e.target.closest(".card, .portrait")) {
    cursor.classList.add("active");
  } else {
    cursor.classList.remove("active");
  }
});
