const dialogCalendarContainer = document.querySelector(".calendar-container");
const dateFlightShowCloseDialog = document.querySelector(".date-flight");
const cityToInput = document.querySelector("#city-to-input");
const cityToDropdownList = document.querySelector(".city-to-dropdown-list");
const cityFromInput = document.querySelector("#city-from-input");
const cityFromDropdownList = document.querySelector(".city-from-dropdown-list");
const passengersAndClassInput = document.querySelector(".passengers-and-class");
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
        if (cityToInput.value === name) {
            return;
        }
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
        if (cityFromInput.value === name) {
            return;
        }
        cityToInput.value = name;
        showClose(cityToDropdownList);
    })
});

const adultPassengersMinusBth = document.querySelector(".adult-passengers .minus-bth");
const adultPassengersCounter = document.querySelector(".adult-passengers .counter");
const adultPassengersPlusBth = document.querySelector(".adult-passengers .plus-bth");

const childrenPassengersMinusBth = document.querySelector(".children-passengers .minus-bth");
const childrenPassengersCounter = document.querySelector(".children-passengers .counter");
const childrenPassengersPlusBth = document.querySelector(".children-passengers .plus-bth");

const babiesPassengersMinusBth = document.querySelector(".babies-passengers .minus-bth");
const babiesPassengersCounter = document.querySelector(".babies-passengers .counter");
const babiesPassengersPlusBth = document.querySelector(".babies-passengers .plus-bth");

const passengersCounter = document.querySelector(".passengers-counter");
const passengersClass = document.querySelector(".passengers-class");
const radiosPassengersClass = document.querySelectorAll('.passengers-class-data input[name="choice-class"]');

const passengersBth = document.querySelector(".passengers-bth");

const maxNumberCounter = 9;
let numberCounter = 1;

const counterPlus = function (event) {
    const number = parseInt(event.innerHTML);
    if (numberCounter < maxNumberCounter) {
        event.innerHTML = number + 1;
        numberCounter++;
    }
}

const counterMinus = function (event) {
    const number = parseInt(event.innerHTML);
    if (numberCounter <= maxNumberCounter && numberCounter < 0 || number > 0) {
        event.innerHTML = number - 1;
        numberCounter--;
    }
}

adultPassengersPlusBth.addEventListener("click", function () {
    counterPlus(adultPassengersCounter);
})
childrenPassengersPlusBth.addEventListener("click", function () {
    counterPlus(childrenPassengersCounter);
})
babiesPassengersPlusBth.addEventListener("click", function () {
    counterPlus(babiesPassengersCounter);
})

adultPassengersMinusBth.addEventListener("click", function () {
    counterMinus(adultPassengersCounter);
})
childrenPassengersMinusBth.addEventListener("click", function () {
    counterMinus(childrenPassengersCounter);
})
babiesPassengersMinusBth.addEventListener("click", function () {
    counterMinus(babiesPassengersCounter);
})

passengersBth.addEventListener("click", function () {
    let selectedValue;

    if (numberCounter === 1) {
        passengersCounter.innerHTML = numberCounter + " пассажир";
    }
    if (numberCounter > 1 && numberCounter < 5) {
        passengersCounter.innerHTML = numberCounter + " пассажира";
    }
    if (numberCounter > 4 && numberCounter < 10) {
        passengersCounter.innerHTML = numberCounter + " пассажиров";
    }

    radiosPassengersClass.forEach((radio) => {
        if(selectedValue === undefined) {
            selectedValue = "любой";
        }else if(radio.checked){
            selectedValue = radio.value;
        }
    });

    passengersClass.innerHTML = selectedValue;
    showClose(passengersAndClassDropdownList);
})