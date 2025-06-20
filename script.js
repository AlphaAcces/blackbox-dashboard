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

