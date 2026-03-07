const email = document.querySelector(".footer__email");
const hint = document.querySelector(".footer__email-copy");

if (email && hint) {
  email.addEventListener("click", () => {
    const address = email.textContent.trim();
    navigator.clipboard.writeText(address);

    hint.textContent = "Copied!";
  });

  email.addEventListener("mouseleave", () => {
    hint.textContent = "Click to copy";
  });
}
