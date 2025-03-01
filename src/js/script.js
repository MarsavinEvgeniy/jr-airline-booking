const dialogCalendarContainer = document.querySelector(".calendar-container");
const dateFlightShowCloseDialog = document.querySelector(".date-flight");
const cityToInput = document.querySelector("#city-to-input");
const cityToDropdownList = document.querySelector(".city-to-dropdown-list");
const cityFromInput = document.querySelector("#city-from-input");
const cityFromDropdownList = document.querySelector(".city-from-dropdown-list");
const passengersAndClassInput = document.querySelector("#passengers-and-class");
const passengersAndClassDropdownList = document.querySelector(".passengers-and-class-dropdown-list");
const city = ["Варшава"];
const airport = ["Кишенев","Балице"];

const showClose = function (event) {
    if (event.style.display === "flex") {
        event.style.display = "none";
    } else {
        event.style.display = "flex"
    }
}

dateFlightShowCloseDialog.addEventListener("click", function () {
    showClose(dialogCalendarContainer);
});

cityToInput.addEventListener("click", function () {
    showClose(cityToDropdownList);
});

cityFromInput.addEventListener("click", function () {
    showClose(cityFromDropdownList);
});

passengersAndClassInput.addEventListener("click", function () {
    showClose(passengersAndClassDropdownList);
});