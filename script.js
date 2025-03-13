document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    "Played League of Legends/Valorant?",
    "Got Pizza from Vitos?",
    "Snuck out of class without a hall pass?",
    "Played a prank on a teacher?",
    "Forgot your locker combo and panicked?",
    "Eaten cafeteria food and regretted it?",
    "Skipped class to get bubble tea?",
    "Got caught texting in class?",
    "Stayed up all night before an exam?",
    "Lost your student ID?",
    "Crammed for a test during lunch?"
  ];

  const purityForm = document.getElementById("purityForm");

  // Generate questions dynamically
  questions.forEach((question, index) => {
    const div = document.createElement("div");
    div.className = "question";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `q${index + 1}`;
    checkbox.name = `q${index + 1}`;
    checkbox.value = 1;

    const label = document.createElement("label");
    label.setAttribute("for", `q${index + 1}`);
    label.innerText = `${index + 1}. ${question}`;

    div.appendChild(checkbox);
    div.appendChild(label);

    purityForm.appendChild(div);
  });

  // Select the key elements
  const calculateBtn = document.getElementById("calculateBtn");
  const resultSection = document.getElementById("resultSection");
  const scoreSpan = document.getElementById("score");
  const scoreMessage = document.getElementById("scoreMessage");
  const cautionMessage = document.getElementById("cautionMessage");

  calculateBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll("#purityForm input[type='checkbox']");
    let checkedCount = 0;
    const total = checkboxes.length;

    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    const purityScore = 100 - Math.round((checkedCount / total) * 100);
    scoreSpan.textContent = purityScore;

    let message = "";
    if (purityScore > 80) {
      message = "You are squeaky clean!";
    } else if (purityScore > 50) {
      message = "You've had a balanced high school life.";
    } else {
      message = "You've truly lived the WOSS experience!";
    }

    scoreMessage.textContent = message;

    // Hide the quiz section
    purityForm.classList.add("hidden");
    calculateBtn.classList.add("hidden");
    cautionMessage.classList.add("hidden");

    // Show the results section
    resultSection.classList.remove("hidden");
  });
});
