document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    "Got attacked by a kid at north?",
    "Played Games in class?",
    "Got Pizza from Vitos?",
    "Wrote an exam drunk or high?",
    "Joined Woss Deca?",
    "Played a prank on a teacher?",
    "Forgot your locker combo and panicked?",
    "Eaten cafeteria food and regretted it?",
    "Skipped class to get bubble tea?",
    "Got caught texting in class?",
    "Stayed up all night before an exam?",
    "Lost your student ID?",
    "Crammed for a test during lunch?",
    "Cried in the bathroom after a test?",
    "Used ChatGPT to write an assignment?",
    "Beat an AI accusation from a teacher?",
    "Passed a class without opening the textbook?",
    "Bribed someone for class notes?",
    "Had sex in school?",
    "Gotten dress coded for something dumb?",
    "Ate expired snacks from your backpack?",
    "Forgot it was photo day and regretted it forever?",
    "Peed yourself laughing in class?",
    "Slept through a whole period?",
    "Pulled an all-nighter and still failed?",
    "Wrote your entire essay on the due date?",
    "Accidentally sent a meme to your teacher?",
    "Walked into the wrong classroom and stayed?",
    "Got hit in the face during dodgeball?",
    "Thrown a chair in class (joking… or not)?",
    "Made a TikTok in the middle of class?",
    "Vaped in the school bathroom?",
    "Got suspended?",
    "Had a mental breakdown during a group project?",
    "Passed english without ever reading the book",
    "Cheated on a quiz and got caught?",
    "Made out with someone in a stairwell?",
    "Made out with someone in a classroom?",
    "Skipped school just to sleep all day?",
    "Snuck out of school early without getting caught?",
    "Tripped in front of the entire cafeteria?",
    "Had your phone go off LOUD during an exam?",
    "Walked in late holding Starbucks?",
    "Got caught cheating and lied your way out?",
    "Changed your grade on a returned test?",
    "Got your AirPods taken away mid-class?",
    "Watched Netflix during class?",
    "Played Minecraft during class?",
    "Showed up to school hungover?",
    "Snuck alcohol into a school dance?",
    "Hooked up with someone at a school dance?",
    "Got caught hooking up at a school dance?",
    "Fought someone in the hallway?",
    "Got suspended for fighting?",
    "Started a fake rumor for fun?",
    "Believed a dumb rumor about yourself?",
    "Had beef with someone over a seat?",
    "Threw hands with someone?",
    "Got banned from the library?",
    "Snuck into a classroom you weren’t supposed to be in?",
    "Pulled a fire alarm as a joke?",
    "Flooded a bathroom (accidentally or not)?",
    "Got caught drawing something sus in class?",
    "Got caught passing notes in class?",
    "Sent a risky text during class and instantly regretted it?",
    "Roasted your teacher to their face?",
    "Played sound effects during a serious lesson?",
    "Faked being sick to get out of a test?",
    "Copied someone’s homework five minutes before class?",
    "Showed up to school in pajamas on purpose?",
    "Forgot it was non-uniform day and showed up in uniform?",
    "Forgot it was uniform day and got sent home?",
    "Tried to sneak food into the gym during assembly?",
    "Ate an entire meal during class?",
    "Fell asleep in the middle of a presentation?",
    "Got called out for snoring in class?",
    "Lost your project on a USB stick and lied about it?",
    "Got kicked out of class for laughing too hard?",
    "Played GeoGuessr during class and got caught?",
    "Showed up to an exam with zero studying and raw confidence?",
    "Passed a test you absolutely should have failed?",
    "Argued with a teacher and actually won?",
    "Helped your friend sneak out of school?",
    "Got banned from school Wi-Fi for ‘inappropriate’ searches?",
    "Stalked a crush on LinkedIn during class?",
    "Got a LinkedIn connection request from your teacher?",
    "Used the teacher’s bathroom (without permission)?",
    "Crashed out over mr Leborveau?",
    "Sent a selfie from the principal’s office?",
    "Got chased by Mr Mistry?",
    "Carried a traffic cone around for no reason?",
    "Taken something random from school and kept it?",
    "Accidentally broke something expensive and ran?",
    "Got caught in a place you 100% weren’t supposed to be?",
    "Made eye contact with a teacher while doing something unholy?",
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
