// ================ ВЫВОД ТЕКУЩЕГО ВРЕМЕНИ В РЕАЛТАЙМЕ [НАЧАЛО] ====================
import { currentDate, days, months, dayOfWeek } from "./utils.js";

const day = document.querySelector("#dayPar");
let month = months[currentDate.getMonth()];
console.log("Time module init");
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return { hours, minutes };
}

document.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 1000);
});

function updateClock() {
    const { hours, minutes } = updateTime();
    day.textContent = `${currentDate.getDate()} ${month} ${hours}:${minutes}`;
}

const dayName = document.querySelector("#dayName");

dayName.textContent = days[dayOfWeek];

// ================ ВЫВОД ТЕКУЩЕГО ВРЕМЕНИ В РЕАЛТАЙМЕ [КОНЕЦ] ====================