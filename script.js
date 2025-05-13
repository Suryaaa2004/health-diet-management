function updateDietPlan() {
  const goal = document.getElementById("goalSelect").value;
  const output = document.getElementById("dietPlan");
  let plan = "";

  switch (goal) {
    case "weightLoss":
      plan = "<h3>Weight Loss Plan</h3><p>High protein, low carbs, calorie deficit meals.</p>";
      break;
    case "muscleGain":
      plan = "<h3>Muscle Gain Plan</h3><p>High protein, complex carbs, calorie surplus meals.</p>";
      break;
    case "maintenance":
      plan = "<h3>Maintenance Plan</h3><p>Balanced meals with moderate portions.</p>";
      break;
  }

  output.innerHTML = plan;
}

function addEntry(event) {
  event.preventDefault();
  const food = document.getElementById("food").value;
  const calories = document.getElementById("calories").value;
  const list = document.getElementById("entryList");
  const entry = document.createElement("li");
  entry.textContent = `${food} - ${calories} cal`;
  list.appendChild(entry);
  document.getElementById("food").value = "";
  document.getElementById("calories").value = "";
}

function submitContactForm(event) {
  event.preventDefault();
  alert("Your message has been sent!");
}
