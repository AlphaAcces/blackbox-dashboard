// --- LOGIN TYPEWRITER --- //
const typeText = (el, text, speed=50, cb) => {
  let i=0;
  const tick = () => {
    if (i < text.length) {
      el.textContent += text.charAt(i++);
      setTimeout(tick, speed);
    } else cb && cb();
  };
  tick();
};

const prompt = document.querySelector('.typewriter');
typeText(prompt, '> INITIATING TERMINAL ACCESS...', 80, () => {
  prompt.textContent = '> STANDBY FOR AUTHENTICATION';
});

// --- FORM SUBMIT --- //
document.getElementById('login-form').addEventListener('submit', e=>{
  e.preventDefault();
  document.getElementById('auth-panel').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  startLogs();
  startAlerts();
});

// --- MISSION LOG --- //
const logs = ['[00:00] Protocol Init.', '[00:05] GreyEUE Online...', '[00:10] Scanning Threats...'];
function startLogs(){
  const container = document.querySelector('#mission-log .log');
  logs.forEach((msg,idx)=>{
    setTimeout(()=>{
      const d = document.createElement('div');
      d.textContent = msg;
      container.appendChild(d);
    }, idx*3000);
  });
}

// --- INTRUSION ALERTS --- //
function startAlerts(){
  const ul = document.querySelector('#alerts ul');
  setInterval(()=>{
    const li = document.createElement('li');
    li.textContent = '⚠️ ALERT: Unauthorized access detected';
    li.classList.add('alert');
    ul.appendChild(li);
    li.classList.add('alert-blink');
  }, 7000);
}
