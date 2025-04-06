// פעולה 1: alert כשהדף נטען
document.addEventListener("DOMContentLoaded", () => {
  alert("Welcome");
});

// פעולה 2: שנה רקע בלחיצה
function changeBackground() {
  document.body.style.backgroundColor = "#d1ecf1";
}

// צור כפתור דינמי
const btn = document.createElement("button");
btn.innerText = "btn";
btn.className = "btn btn-primary mt-4";
btn.onclick = changeBackground;

// הוסף לכותרת
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".container").appendChild(btn);
})