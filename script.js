
function confetti() {
  for (let i = 0; i < 100; i++) {
    let confetto = document.createElement('div');
    confetto.style.position = 'fixed';
    confetto.style.top = '-10px';
    confetto.style.left = Math.random() * 100 + 'vw';
    confetto.style.width = '10px';
    confetto.style.height = '10px';
    confetto.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
    confetto.style.opacity = 0.7;
    confetto.style.borderRadius = '50%';
    confetto.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;
    document.body.appendChild(confetto);
  }
}

let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");

let yesSize = 1;
let noSize = 1;

noBtn.addEventListener("click", () => {
  yesSize += 0.2;
  noSize -= 0.1;
  yesBtn.style.transform = `scale(${yesSize})`;
  noBtn.style.transform = `scale(${Math.max(noSize, 0.2)})`;
});

yesBtn.addEventListener("click", () => {
  document.getElementById("question1").style.display = "none";
  question2.style.display = "block";
  confetti();
});

document.getElementById("next-to-q3").addEventListener("click", () => {
  question2.style.display = "none";
  question3.style.display = "block";
});

// Tampilkan tombol rahasia setelah isi pertanyaan 3
const secretDiv = document.getElementById("secret-message");
const revealBtn = document.getElementById("reveal-message");

document.querySelector("#question3 textarea").addEventListener("input", () => {
  const value = document.querySelector("#question3 textarea").value.trim();
  if (value.length > 5) {
    secretDiv.style.display = "block";
  }
});

revealBtn.addEventListener("click", () => {
  alert(`Yooo meski kyk e telat se lagek ngucapno selamat ulangtahun nak awkmu saiki, tapi Percayalah cintaku hanya kamu yang sangat aku cintai, tidak ada wanita lain yang aku cintai selain kamu, jadi gak usah keseringan Over Thinking ya.....

Kenapa mamas isok ngomong koyo ngene? Soale awkmu iku seng nggarai aku isok merasa dicintai.

Yooo meski awkmu sering badmood se.... tapi gpp kok, mending aku selalu njalok sepuro nak awakmu daripada kelangan awkmu....

Dadi pls ojok ninggalno aku yo.... ❤️`);
});

window.onload = confetti;
