import { projects } from "./data.js";

const grid = document.querySelector(".projects__grid");

if (grid) {
  grid.innerHTML = projects
    .map(
      ({ title, description, image, alt, links }) => `
<article class="card">
<div class="card__media">
<img class="card__img" src="${image}" alt="${alt}" >
</div>

    <div class="card__content">
      <h2>${title}</h2>
      <p>${description}</p>

      <div class="card__actions">
        <a href="${links.live}" target="_blank" rel="noopener noreferrer">
          <img src="../assets/icons/arrow-top-right.svg" alt="">
          Open live
        </a>

        <a href="${links.github}" target="_blank" rel="noopener noreferrer">
          <img src="../assets/icons/arrow-top-right.svg" alt="">
          Open GitHub
        </a>
      </div>
    </div>
  </article>
`,
    )
    .join("");
}
