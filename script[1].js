const calendar = document.querySelector("#calendar");
const partyButton = document.querySelector("#partyButton");
const wishButton = document.querySelector("#wishButton");
const wishText = document.querySelector("#wishText");
const toast = document.querySelector("#toast");

const boosts = [
  "A calm day and a cleaner win.",
  "Family pride loading.",
  "Classy energy, steady mind.",
  "Hard work is not invisible.",
  "May brings a fresh chance.",
  "Respect grows quietly.",
  "One good surprise is near.",
  "Strength looks good on you.",
  "Keep going. The story is still rising.",
  "Birthday month belongs to Swapnil."
];

const wishes = [
  "May this birthday month bring peace to your efforts, pride to your family, fresh chances in your journey, and many reasons to smile like life is finally listening.",
  "For the mature man who keeps showing up: may 31 bring stability, success, health, and the kind of happiness that stays.",
  "Swapnil, may your clean habits, strong heart, and family-first nature bring you everything you are working so hard for.",
  "May 29 be full of respect, love, laughter, and one very solid reminder that better days are coming."
];

let wishIndex = 0;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function makeConfetti(amount = 52) {
  const colors = ["#f35f96", "#f6c95f", "#58c7a2", "#5a9ee8", "#ffffff"];

  for (let index = 0; index < amount; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.35}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    document.body.append(piece);
    window.setTimeout(() => piece.remove(), 2300);
  }
}

function buildCalendar() {
  for (let day = 1; day <= 31; day += 1) {
    const button = document.createElement("button");
    button.className = "date";
    button.type = "button";
    button.textContent = day;
    button.setAttribute("aria-label", `May ${day}`);

    if ([5, 12, 19, 26].includes(day)) {
      button.classList.add("special");
    }

    if (day === 29) {
      button.classList.add("birthday");
      button.setAttribute("aria-label", "May 29, Swapnil's birthday");
    }

    button.addEventListener("click", () => {
      if (day === 29) {
        showToast("May 29: Happy Birthday Swapnil Ghavat. Turning 31 with strength and style.");
        makeConfetti(90);
        return;
      }

      const boost = boosts[(day - 1) % boosts.length];
      showToast(`May ${day}: ${boost}`);
      if (button.classList.contains("special")) {
        makeConfetti(18);
      }
    });

    calendar.append(button);
  }
}

partyButton.addEventListener("click", () => {
  makeConfetti();
  showToast("Swapnil's birthday month is officially on.");
});

wishButton.addEventListener("click", () => {
  wishIndex = (wishIndex + 1) % wishes.length;
  wishText.textContent = wishes[wishIndex];
  makeConfetti(18);
});

buildCalendar();
