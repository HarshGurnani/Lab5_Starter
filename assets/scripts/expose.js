// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  hornSelect();
  volumeSelect();
  playButton();
}

function hornSelect() {
  const hornSelect = document.getElementById("horn-select");
  const audio = document.querySelector("audio");

  hornSelect.addEventListener("change", function () {
    let horn = hornSelect.value;
    let hornImage = document.querySelector("img");
    hornImage.src = `./assets/images/${horn}.svg`;
    const hornSound = `./assets/audio/${horn}.mp3`;
    audio.src = hornSound;
  });
}

function volumeSelect() {
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const audio = document.querySelector("audio");

  volumeSlider.addEventListener("input", function () {
    const volume = parseFloat(volumeSlider.value);
    let level = 0;
    if (volume >= 67) {
      level = 3;
    } else if (volume >= 33) {
      level = 2;
    } else if (volume >= 1) {
      level = 1;
    }

    volumeIcon.src = `./assets/icons/volume-level-${level}.svg`;
    audio.volume = volume / 100;
  });
}

function playButton() {
  const button = document.querySelector("button");
  const audio = document.querySelector("audio");
  const hornSelect = document.getElementById("horn-select");
  const jsConfetti = new JSConfetti();

  button.addEventListener("click", function () {
    const horn = hornSelect.value;

    audio.play();

    if (horn === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}
