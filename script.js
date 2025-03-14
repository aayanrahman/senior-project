document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    "Got attacked by a kid at North?",
    "Got chased by Mr. Mistry?",
    "Joined WOSS DECA?",
    "Went to Provs for DECA?",
    "Won a Wildcat Wednesday award?",
    "Wrote an exam drunk or high?",
    "Skipped class to get bubble tea?",
    "Skipped school to go to the mall?",
    "Snuck out of school early without getting caught?",
    "Skipped a class without asking your parents?",
    "Skipped class because of an equity forum?",
    "Used ChatGPT to write an assignment?",
    "Got flagged by Turnitin for AI or plagiarism?",
    "Beat an AI accusation from a teacher?",
    "Dropped a course to do OVS?",
    "Passed English with a +85% without ever reading the book?",
    "Pulled an all-nighter and still failed?",
    "Wrote your entire essay on the due date?",
    "Crammed for a test during lunch?",
    "Showed up to an exam with zero studying and raw confidence?",
    "Passed a test you absolutely should have failed?",
    "Copied someone’s homework five minutes before class?",
    "Faked being sick to get out of a test?",
    "Played GeoGuessr during class and got caught?",
    "Played Minecraft during class?",
    "Played Roblox during class?",
    "Watched Netflix during class?",
    "Played Poker in class?",
    "Made a TikTok in the middle of class?",
    "Asked a member of the opposite sex for their snap/insta?",
    "Walked into the wrong classroom and stayed?",
    "Got threatened to have your AirPods taken away mid-class?",
    "Got caught cheating and lied your way out?",
    "Cheated on a quiz and got caught?",
    "Crashed out during a group project?",
    "Crashed out over the Guidance office?",
    "Vaped in the school bathroom?",
    "Had sex in school?",
    "Made out with someone in a stairwell?",
    "Made out with someone in a classroom?",
    "Gotten dress coded?",
    "Slept through a whole period?",
    "Fell asleep in the middle of presentations?",
    "Got kicked out of class for laughing too hard?",
    "Showed up to school hungover?",
    "Snuck alcohol into a school dance?",
    "Hooked up with someone at semi?",
    "Got caught hooking up at semi?",
    "Started a fake rumor for fun?",
    "Threw hands with someone?",
    "Pulled a fire alarm as a joke?",
    "Flooded a bathroom (accidentally or not)?",
    "Thrown a chair in class?",
    "Snuck into a classroom you weren’t supposed to be in?",
    "Taken something random from school and kept it?",
    "Jerked off during class?",
    "Bought ramen from White Store?",
    "Got a whole pizza from Vitos?",
    "Snuck an entire pizza into class and acted like nothing was wrong?",
    "Complained to someone else about how bad WOSS is?",
    "Willingly used the school bathrooms and lived to tell the tale?",
    "Gone to club fair to only grab candy?",
    "Tried to make a club at school but got turned down by teachers?",
    "Got club funding stolen by admin?",
    "Are in a Google Classroom of a club you never attend?",
    "Signed up for a club and never showed up?",
    "Won an intramural game with zero effort?",
    "Lost an intramural game and blamed the ref?",
    "Attended a school home game?",
    "Were on a sports team?",
    "Got yelled at by the librarian for being too loud?",
    "Take a school bus to school?",
    "Had first period or fifth period break (no spares)?",
    "Ate an entire meal during class?",
    "Made out behind the portables?",
    "Climbed onto the school roof?",
    "Went to a club for free food?",
    "Got rejected for an exec position at a club?",
    "Tried to use a school-issued Chromebook to mine crypto?",
    "Tried to sell your school Chromebook on Facebook Marketplace?",
    "Had your bike stolen?",
    "Ran a money laundering operation through Club fundraisers?",
    "Started offering guided tours of the school for money during open house night?",
    "Put up ‘School For Sale’ signs and listed WOSS on Facebook Marketplace?",
    "Held hands romantically in the hallway?",
    "Wore pajama pants to school on a non-spirit day?",
    "Had a crush on a teacher?",
    "Played a full soccer game in Timbs or Air Force 1s?",
    "Filled a water bottle up with vodka and shared it among friends?"
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

    // Make the entire question div clickable
    div.addEventListener("click", (event) => {
      // Prevent triggering multiple times if clicking directly on checkbox or label
      if (event.target !== checkbox && event.target !== label) {
        checkbox.checked = !checkbox.checked;
      }
    });

    // Label already has native click functionality, but let's make it explicit
    label.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default label behavior
      checkbox.checked = !checkbox.checked;
    });

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


// TO DO: make the share button do something 
