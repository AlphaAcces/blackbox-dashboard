
let i = 0;
let text = "GREYEUE AI: Authenticating user...";
let speed = 40;

function typeWriter(targetElementId) {
  if (i < text.length) {
    document.getElementById(targetElementId).innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(targetElementId), speed);
  } else {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    playLog();
  }
}

document.getElementById("login-btn").addEventListener("click", function() {
  document.getElementById("ai-feedback").innerHTML = "";
  i = 0;
  typeWriter("ai-feedback");
});

const logMessages = [
  "[00:00] Mission Protocol Initialized",
  "[00:05] GreyEUE AI online...",
  "[00:10] Scanning threat vectors...",
];
let logIndex = 0;

function playLog() {
  if (logIndex < logMessages.length) {
    const logElement = document.createElement("div");
    logElement.textContent = logMessages[logIndex];
    document.getElementById("log-content").appendChild(logElement);
    logIndex++;
    setTimeout(playLog, 3000);
  }
}
