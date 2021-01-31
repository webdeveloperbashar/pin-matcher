// generate pin
function generatePin(id) {
  const generatePin = Math.round(Math.random() * 9000) + 1000;
  document.getElementById(id).value = generatePin;
}

//Number pad handler
const allBtn = document.querySelectorAll(".button");
[...allBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!isNaN(e.target.innerText)) {
      let matchInput = document.getElementById("match-input").value;
      document.getElementById("match-input").value =
        matchInput + e.target.innerText;
    } else if (e.target.innerText === "C") {
      document.getElementById("match-input").value = "";
    } else if (e.target.innerText === "<") {
      let matchInput = document.getElementById("match-input").value;
      document.getElementById("match-input").value = matchInput.slice(0, -1);
    }
  });
});

// pin matcher handler
function pinMatch() {
  const generatePin = document.getElementById("generate-pin-input").value;
  const matchInput = document.getElementById("match-input").value;
  if (matchInput === "") {
    showMessage("none", "none", "block");
    clickCount();
  } else if (generatePin === matchInput) {
    showMessage("none", "block", "none");
    audioOpen();
  } else {
    showMessage("block", "none", "none");
    clickCount();
    audioClose();
  }
}

// open audio play
function audioOpen() {
  const openAudio = document.getElementById('openSound');
  openAudio.play();
}

// close audio play
function audioClose() {
  const closeSound = document.getElementById('closeSound');
  closeSound.play();
}

// submit button click validation
let clicks = 3;
function clickCount() {
  if (clicks > 0) {
    clicks -= 1;
  } else if (clicks === 0) {
    document.querySelector(".submit-btn").disabled = true;
  }
  document.getElementById("click-count").innerText = `${clicks} try left`;
}

//Show message
function showMessage(block1, none, block2) {
  const wrongMessage = document.getElementById("wrongMsg");
  wrongMessage.style.display = block1;
  const successMessage = document.getElementById("successMsg");
  successMessage.style.display = none;
  const alertMessage = document.getElementById("alertMsg");
  alertMessage.style.display = block2;
}