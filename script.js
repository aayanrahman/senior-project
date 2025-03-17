document.addEventListener("DOMContentLoaded", () => {
  // Add basic protection against inspect element
  document.addEventListener('contextmenu', event => event.preventDefault());
  
  document.addEventListener('keydown', function(e) {
    // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
      e.key === 'F12' || 
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) || 
      (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
    ) {
      e.preventDefault();
    }
  });

  const questions = [
    "Used ChatGPT to write an assignment?",
    "Got flagged by Turnitin for AI or plagiarism?",
    "Beat an AI accusation from a teacher?",
    "Dropped a course to do OVS?",
    "Passed English with a +85% without ever reading the books?",
    "Pulled an all-nighter and still failed?",
    "Wrote your entire essay on the due date?",
    "Crammed for a test during lunch?",
    "Showed up to an exam with zero studying and raw confidence?",
    "Passed a test you absolutely should have failed?",
    "Copied someone’s homework five minutes before class?",
    "Faked being sick to get out of a test?",
    "Took a test drunk or high?",
    "Walked into the wrong classroom and stayed?",
    "Signed up for a club and never showed up?",
    "Skipped class because of an equity forum?",
    "Skipped a class without asking your parents?",
    "Got caught cheating and lied your way out?",
    "Cheated on a quiz and got caught?",
    "Crashed out over the Guidance office?",
    "Wrote an exam drunk or high?",
    "Got caught skipping a class by a teacher?",
    "Joined WOSS DECA?",
    "Went to Provs for DECA?",
    "Ran for student government?",
    "Made student government?",
    "Won a Wildcat Wednesday award?",
    "Tried to make a club at school but got turned down by teachers?",
    "Got club funding stolen by admin?",
    "Are a president of a club no one cares about?",
    "Are in a Google Classroom of a club you never attend?",
    "Have lied on a university application or resume?",
    "Attended Relay for Life?",
    "Attended the winter concert?",
    "Attended the athletic banquet?",
    "Senior sunrise?",
    "Went to a club for free food?",
    "Went on a date with someone from WOSS?",
    "Dated someone at least 2 grades below you?",
    "Dated someone at least 2 grades above you?",
    "Had your bike stolen?",
    "Played Minecraft during class?",
    "Played Roblox during class?",
    "Played Poker in class?",
    "Made a TikTok in the middle of class?",
    "Tried to use a school-issued Chromebook to mine crypto?",
    "Got attacked by a kid at North?",
    "Got chased by Mr. Mistry?",
    "Threw hands with someone?",
    "Started a fake rumor for fun?",
    "Pulled a fire alarm as a joke?",
    "Flooded a bathroom (accidentally or not)?",
    "Snuck into a classroom you weren’t supposed to be in?",
    "Taken something random from school and kept it?",
    "Got threatened to have your AirPods taken away mid-class?",
    "Gotten dress coded?",
    "Got yelled at by the librarian for being too loud?",
    "Had sex in school?",
    "Made out with someone in a classroom?",
    "Made out behind the portables?",
    "Hooked up with someone at semi?",
    "Got caught hooking up at semi?",
    "Gave oral on WOSS campus?",
    "Received oral on WOSS campus?",
    "Streaked, flashed, or otherwise exposed yourself to someone at WOSS?",
    "Held hands romantically in the hallway?",
    "Had a crush on a teacher?",
    "Had a relationship with a staff member of WOSS?",
    "Jerked off during class?",
    "Showed up to school hungover?",
    "Have used or made a fake ID?",
    "Vaped in class and blew the cloud into your sleeve?",
    "Sold edibles in the school parking lot?",
    "Snorted or injected drugs at school?",
    "Bought vapes in the school washrooms?",
    "Filled a water bottle up with vodka and shared it among friends?",
    "Vaped in the school bathroom?",
    "Have been addicted to drugs or alcohol?",
    "Played a full game in gym class wearing shoes you absolutely shouldn’t play sports in?",
    "Won an intramural game with zero effort?",
    "Lost an intramural game and blamed the ref?",
    "Attempted a PR bench press or squat in the weight room?",
    "Were on a sports team?",
    "Attended a school home game?",
    "Skipped class to get bubble tea?",
    "Skipped school to go to the mall?",
    "Snuck out of school early without getting caught?",
    "Snuck an entire pizza into class and acted like nothing was wrong?",
    "Bought ramen from White Store?",
    "Got a whole pizza from Vitos?",
    "Complained to someone else about how bad WOSS is?",
    "Willingly used the school bathrooms and lived to tell the tale?",
    "Take a school bus to school?",
    "Have sped at least 40km/h over the speed limit?",
    "Had first period or fifth period break (no spares)?",
    "Ate an entire meal during class?",
    "Climbed onto the school roof?",
    "Ran a money laundering operation through club fundraisers?",
    "Wore pajama pants to school on a non-spirit day?",
    "Seen or read pornographic material in school?"
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

    if (purityScore >= 90) {                        // 90 - 100
      message = "Bro… did you even go to White Oaks?";
    } else if (purityScore >= 80) {                 // 80 - 89
      message = "You lived clean, but you saw some sh*t. Probably skipped once or twice.";
    } else if (purityScore >= 60) {                 // 60 - 79
      message = "A balanced WOSS experience. You've caused drama, but admin still doesn't know you.";
    } else if (purityScore >= 40) {                 // 40 - 59
      message = "You've definitely been called to the office. They remember your name.";
    } else if (purityScore >= 20) {                 // 20 - 39
      message = "You are the reason Mr. Mistry wakes up stressed. Admin probably talks about you in staff meetings.";
    } else {                                        // 0 - 19
      message = "You're a menace. How have you not been expelled yet?";
    }

  
    scoreMessage.textContent = message;

    // Hide the quiz section
    purityForm.classList.add("hidden");
    calculateBtn.classList.add("hidden");
    cautionMessage.classList.add("hidden");

    // Show the results section
    resultSection.classList.remove("hidden");

    // Send score to Google Sheet
    sendToGoogleSheet(purityScore);
  });

  // Function to send score data to Google Sheets
  function sendToGoogleSheet(score) {
    fetch('https://script.google.com/macros/s/AKfycbyZaUOCEEmaDs0HEdu_LgvoMVh-IC1B_g0o4L3M_JXohc_wXnwPG80xIyS-u7v0xVQB/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        score: score
      })
    })
    .then(() => {
      console.log(" Score successfully sent to Google Sheet!");
    })
    .catch(err => {
      console.error(" Error sending score:", err);
    });
  }

  // Share button functionality
  const shareBtn = document.getElementById("shareBtn");

  shareBtn.addEventListener("click", () => {
    const score = document.getElementById("score").textContent;
    const msg = document.getElementById("scoreMessage").textContent;

    // Customize your share message and link
    const shareText = `I scored ${score}% on the WOSS Purity Test! Take the test here: https://wosspuritytest.vercel.app/`;

    // Copy to clipboard
    navigator.clipboard.writeText(shareText)
      .then(() => {
        alert("Your result was copied! Paste it anywhere you like.");
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  });

});
