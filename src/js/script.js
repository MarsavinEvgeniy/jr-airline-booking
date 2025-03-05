const dialogCalendarContainer = document.querySelector(".calendar-container");
const dateFlightShowCloseDialog = document.querySelector(".date-flight");
const cityToInput = document.querySelector("#city-to-input");
const cityToDropdownList = document.querySelector(".city-to-dropdown-list");
const cityFromInput = document.querySelector("#city-from-input");
const cityFromDropdownList = document.querySelector(".city-from-dropdown-list");
const passengersAndClassInput = document.querySelector("#passengers-and-class");
const passengersAndClassDropdownList = document.querySelector(".passengers-and-class-dropdown-list");

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

cityFromInput.addEventListener("click", function () {
    showClose(cityFromDropdownList);
});

cityToInput.addEventListener("click", function () {
    showClose(cityToDropdownList);
});

passengersAndClassInput.addEventListener("click", function () {
    showClose(passengersAndClassDropdownList);
});

const cityName = document.querySelector(".city-name");


const mapCity = [
    {name: "Варшава", code: 'WAW'},
    {name: "Кишенев", code: 'RMO'},
    {name: "Балице", code: 'KRK'},
    {name: "Париж", code: 'PAR'},
    {name: "Нью-Йорк", code: 'NYC'},
    {name: "Лондон", code: 'LON'},
];

const htmlElementsFromCityName = mapCity.map(item => {
    return `<div class="city-from-name">${item.name}</div>`;
});
const htmlElementsToCityName = mapCity.map(item => {
    return `<div class="city-to-name">${item.name}</div>`;
});

const cityFromDataName = document.querySelector(".city-from-data-name div");
const cityToDataName = document.querySelector(".city-to-data-name div");
cityFromDataName.innerHTML = htmlElementsFromCityName.join('');
cityToDataName.innerHTML = htmlElementsToCityName.join('');

const htmlElementsCityCode = mapCity.map(item => {
    return `<div class="city-to-code">${item.code}</div>`;
});

const cityFromDataCode = document.querySelector(".city-from-data-code");
cityFromDataCode.innerHTML = htmlElementsCityCode.join('');
const cityToDataCode = document.querySelector(".city-to-data-code");
cityToDataCode.innerHTML = htmlElementsCityCode.join('');

document.querySelectorAll(".city-from-name").forEach(cityName => {
    cityName.addEventListener("click", function (event) {
        const name = event.target.textContent;
        for (let mapCityElement of mapCity.values()) {
            if (mapCityElement.name === name) {
                document.querySelector(".code").innerHTML = mapCityElement.code;
            }
        }

        cityFromInput.value = name;
        document.querySelector(".city").innerHTML = name;
        showClose(cityFromDropdownList);
    })
});
document.querySelectorAll(".city-to-name").forEach(cityName => {
    cityName.addEventListener("click", function (event) {
        const name = event.target.textContent;
        if(cityFromInput.value === name){
            return;
        }
        cityToInput.value = name;
        document.querySelector(".city").innerHTML = name;
        showClose(cityToDropdownList);
    })
});
