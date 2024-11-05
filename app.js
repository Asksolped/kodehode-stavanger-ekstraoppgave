const activities = [
  {
    title: "Work",
    daily: { current: 5, previous: 7 },
    weekly: { current: 32, previous: 36 },
    monthly: { current: 103, previous: 128 },
  },
  {
    title: "Play",
    daily: { current: 1, previous: 2 },
    weekly: { current: 10, previous: 8 },
    monthly: { current: 23, previous: 29 },
  },
  {
    title: "Study",
    daily: { current: 0, previous: 1 },
    weekly: { current: 4, previous: 7 },
    monthly: { current: 13, previous: 19 },
  },
  {
    title: "Exercise",
    daily: { current: 1, previous: 1 },
    weekly: { current: 4, previous: 5 },
    monthly: { current: 11, previous: 18 },
  },
  {
    title: "Social",
    daily: { current: 1, previous: 3 },
    weekly: { current: 5, previous: 10 },
    monthly: { current: 21, previous: 23 },
  },
  {
    title: "Self-Care",
    daily: { current: 0, previous: 1 },
    weekly: { current: 2, previous: 2 },
    monthly: { current: 7, previous: 11 },
  },
];

// Function to populate the activity cards
function populateActivityCards() {
  const cards = document.querySelectorAll(".activity-card");

  cards.forEach((card) => {
    const activityName = card.querySelector("span").textContent.trim(); //getting activity

    // Finding the corresponding activity
    const activityData = activities.find(
      (activity) => activity.title === activityName
    );
    console.log(activityData);

    if (activityData) {
      card.querySelector(
        ".hours"
      ).textContent = `${activityData.weekly.current}hrs`;
      card.querySelector(
        ".previous"
      ).textContent = `Last Week - ${activityData.weekly.previous}hrs`;
    }
  });
}

//updating card content
function updateTime(period) {
  const cards = document.querySelectorAll(".activity-card");

  cards.forEach((card) => {
    const activityName = card.querySelector("span").textContent.trim();
    const activityData = activities.find(
      (activity) => activity.title === activityName
    );

    if (activityData) {
      card.querySelector(
        ".hours"
      ).textContent = `${activityData[period].current}hrs`;
      card.querySelector(".previous").textContent = `Last ${capitalize(
        period
      )} - ${activityData[period].previous}hrs`;
    }
  });

  // change which button go white
  document.querySelectorAll(".time-options button").forEach((button) => {
    button.classList.toggle(
      "active",
      button.getAttribute("data-period") === period
    );
  });
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//add event listeners
document.querySelectorAll(".time-options button").forEach((button) => {
  button.addEventListener("click", () => {
    const period = button.getAttribute("data-period");
    updateTime(period);
  });
});

// Initial setup
populateActivityCards(); // give initial values
updateTime("monthly"); // default
