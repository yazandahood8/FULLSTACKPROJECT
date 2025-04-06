document.addEventListener("DOMContentLoaded", () => {
  alert("Welcome , website by Yazan and Maria");
});

function changeBackground() {
  document.body.style.backgroundColor = "#d1ecf1";
}

const btn = document.createElement("button");
btn.innerText = "btn";
btn.className = "btn btn-primary mt-4";
btn.onclick = changeBackground;


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".container").appendChild(btn);
})

function Names() {
  alert("Yazan and Maria");
}