const monthNameEl = document.querySelector(".monthName");
const dayNameEl = document.querySelector(".dayName");
const dayNumberEl = document.querySelector(".dayNumber");
const yearEl = document.querySelector(".year");

const date = new Date();

monthNameEl.textContent = date.toLocaleString("en-US", { month: "long" });
dayNameEl.textContent = date.toLocaleString("en-US", { weekday: "long" });
dayNumberEl.textContent = date.getDate();
yearEl.textContent = date.getFullYear();
