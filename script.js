// TYPEWRITER AI FEEDBACK
let i = 0;
const text = "GREY EYE AI: Authenticating user...";
const speed = 40;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("ai-feedback").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.getElementById("login-btn").addEventListener("click", () => {
  document.getElementById("login-screen").style.display = "none";
  typeWriter();
  setTimeout(playLog, 1000);
});

// MISSION LOG
const logMessages = [
  "[00:00] Mission Protocol Initialized",
  "[00:05] GreyEYE AI online...",
  "[00:10] Scanning threat vectors...",
  "[00:15] Engaging countermeasures...",
];
let logIndex = 0;
function playLog() {
  if (logIndex < logMessages.length) {
    const ul = document.getElementById("log-content");
    const li = document.createElement("div");
    li.textContent = logMessages[logIndex];
    ul.appendChild(li);
    logIndex++;
    setTimeout(playLog, 5000);
  }
}

// INTRUSION ALERTS (EKSEMPEL)
const alerts = ["Unauthorized beep at Node 4", "Packet flood detected at Node 7"];
function showAlerts() {
  const list = document.getElementById("alerts-list");
  alerts.forEach(msg => {
    const li = document.createElement("li");
    li.textContent = msg;
    li.classList.add("alert-blink");
    list.appendChild(li);
  });
}
setTimeout(showAlerts, 20000);

// TRAFFIC CAMS AUTO-REFRESH
const camIds = ["cam1","cam2","cam3","cam4","cam5","cam6"];
function refreshCams() {
  camIds.forEach(id => {
    const img = document.getElementById(id);
    if (!img) return;
    const base = img.src.split("?")[0];
    img.src = base + "?t=" + Date.now();
  });
}
window.addEventListener("load", () => {
  refreshCams();
  setInterval(refreshCams, 60000);
});
