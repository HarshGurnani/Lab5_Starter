// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  populateList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateList;
  }
  speakButton();
}

function populateList() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");

  const voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function speakButton() {
  const synth = window.speechSynthesis;

  const talkButton = document.querySelector("button");
  const faceImage = document.querySelector("img");
  const inputText = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");

  const voices = synth.getVoices();

  talkButton.addEventListener("click", function () {
    const utterThis = new SpeechSynthesisUtterance(inputText.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    console.log(selectedOption);
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }

    synth.speak(utterThis);
    faceImage.src = "./assets/images/smiling-open.png";

    utterThis.onend = function () {
      faceImage.src = "./assets/images/smiling.png";
    };
  });
}
