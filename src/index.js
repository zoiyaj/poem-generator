function displayPoem(response) {
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "db3364484d110at742a63o2f755d343b";
  let context =
    "you are a lover of short poems with a huge vocabulary. Your task is to generate a haiku poem  and seperate each line with a <br/>.make sure to follow the user instructions.do not include the title to the poem sign the poem with `Zoiya Jesani 💜` inside a <strong> element at the end of the poem.";
  let prompt = `user instructions: Generate a English Poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poem = document.querySelector(".poem");
  poem.classList.remove("hidden");
  poem.innerHTML = `<div class="generating">♾ Presenting your poem shortly. ${instructionsInput.value}</div>`;
  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
