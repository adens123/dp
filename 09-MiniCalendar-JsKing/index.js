const monthNameEl = document.querySelector(".monthName");
const dayNameEl = document.querySelector(".dayName");
const dayNumberEl = document.querySelector(".dayNumber");
const yearEl = document.querySelector(".year");

const date = new Date();
// const month = date.getMonth();

monthNameEl.textContent = date.toLocaleString("en-US", { month: "long" });
dayNameEl.textContent = date.toLocaleString("en-US", { weekday: "long" });
dayNumberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
