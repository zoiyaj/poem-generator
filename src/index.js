function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: ["The poem will present itself"],
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let poemformElement = document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit", generatePoem);
