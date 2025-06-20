let i = 0;
const authText = "GREYFUE AI: Authenticating user...";
const speed = 40;

function typeWriter(targetId, txt, cb) {
  if (i < txt.length) {
    document.getElementById(targetId).innerHTML += txt.charAt(i++);
    setTimeout(() => typeWriter(targetId, txt, cb), speed);
  } else if (cb) {
    cb();
  }
}

const logMessages = [
  "[00:00] Mission Protocol Initialized",
  "[00:05] GreyFUE AI online...",
  "[00:10] Scanning threat vectors...",
  // tilføj flere beskeder her…
];
let logIndex = 0;

function playLog() {
  if (logIndex < logMessages.length) {
    const line = document.createElement('div');
    line.textContent = logMessages[logIndex++];
    document.getElementById('log-content').append(line);
    setTimeout(playLog, 5000);
  }
}

document.getElementById('login-btn').addEventListener('click', () => {
  document.getElementById('login-screen').style.display = 'none';
  typeWriter('ai-feedback', authText, () => {
    setTimeout(() => {
      document.getElementById('ai-feedback').innerHTML += '<br>Access Granted.';
      playLog();
    }, 500);
  });
});
