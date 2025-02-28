const dialogCalendarContainer = document.querySelector(".calendar-container");
const dateFlightShowCloseDialog = document.querySelector(".date-flight");
const cityToInput = document.querySelector("#city-to-input");
const cityToDropdownList = document.querySelector(".city-to-dropdown-list");
const cityFromInput = document.querySelector("#city-from-input");
const cityFromDropdownList = document.querySelector(".city-from-dropdown-list");
const city = ["Варшава"];
const airport = ["Кишенев","Балице"];

dateFlightShowCloseDialog.addEventListener("click", function () {
    if (dialogCalendarContainer.style.display === "flex") {
        dialogCalendarContainer.style.display = "none";
    } else {
        dialogCalendarContainer.style.display = "flex"
    }
});

cityToInput.addEventListener("click", function () {
    if (cityToDropdownList.style.display === "flex") {
        cityToDropdownList.style.display = "none";
    } else {
        cityToDropdownList.style.display = "flex"
    }
})

cityFromInput.addEventListener("click", function () {
    if (cityFromDropdownList.style.display === "flex") {
        cityFromDropdownList.style.display = "none";
    } else {
        cityFromDropdownList.style.display = "flex"
    }
})