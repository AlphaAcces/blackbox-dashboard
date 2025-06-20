let i = 0;
let text = "GREYEUE AI: Authenticating user...";
let speed = 40; // millisekunder mellem hver karakter

function typeWriter(targetElementId) {
  if (i < text.length) {
    document.getElementById(targetElementId).innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(targetElementId), speed);
  }
}

const logMessages = [
  "[00:00] Mission Protocol Initialized",
  "[00:05] GreyEUE AI online...",
  "[00:10] Scanning threat vectors...",
  // ... etc.
];
let logIndex = 0;
function playLog() {
  if(logIndex < logMessages.length) {
    typeWriterAddLine("log-content", logMessages[logIndex]);
    logIndex++;
    setTimeout(playLog, 5000); // 5 sec between lines, adjustable
  }
}

.marker {
  position: absolute;
  width: 10px; height: 10px;
  background: rgba(0, 255, 0, 0.8); /* green dot */
  border: 2px solid #0f0;
  border-radius: 50%;
  animation: blink 1s infinite;
}
.marker.critical { /* a critical threat marker could be red */
  background: rgba(255, 0, 0, 0.8);
  border-color: red;
}
@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
