const portrait = document.querySelector(".portrait");

if (portrait) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        portrait.classList.add("is-flippable");
      } else {
        portrait.classList.remove("is-flippable");
        portrait.classList.remove("is-flipped");
      }
    },
    {
      threshold: 0.8,
    },
  );

  observer.observe(portrait);

  let flippedOnce = false;
  const onceObserver = new IntersectionObserver(
    ([entry]) => {
      if (!flippedOnce && entry.isIntersecting) {
        flippedOnce = true;
        portrait.classList.add("is-flipped");
        setTimeout(() => portrait.classList.remove("is-flipped"), 6000);
        onceObserver.disconnect();
      }
    },
    { threshold: 0.9 },
  );

  onceObserver.observe(portrait);
}
