const cityFromInput = document.querySelector("#city-from-input");
const cityToInput = document.querySelector("#city-to-input");
const cityFromDropdownList = document.querySelector(".city-from-dropdown-list");
const cityToDropdownList = document.querySelector(".city-to-dropdown-list");
const passengersAndClassInput = document.querySelector(".passengers-and-class");
const passengersAndClassDropdownList = document.querySelector(".passengers-and-class-dropdown-list");

cityFromInput.addEventListener("focus", function () {
    document.querySelector(".city-from-span").style.display = "flex";
    cityFromInput.placeholder = "";
});
cityToInput.addEventListener("focus", function () {
    document.querySelector(".city-to-span").style.display = "flex";
    cityToInput.placeholder = "";
});
document.querySelector("#date-from-input").addEventListener("focus", function () {
    document.querySelector(".date-from-span").style.display = "flex";
    document.querySelector("#date-from-input").placeholder = "";
    document.querySelector(".date-to-span").style.display = "flex";
    document.querySelector("#date-to-input").placeholder = "";
});
document.querySelector("#date-to-input").addEventListener("focus", function () {
    document.querySelector(".date-from-span").style.display = "flex";
    document.querySelector("#date-from-input").placeholder = "";
    document.querySelector(".date-to-span").style.display = "flex";
    document.querySelector("#date-to-input").placeholder = "";
});

const showClose = function (event) {
    if (event.style.display === "flex") {
        event.style.display = "none";
    } else {
        event.style.display = "flex"
    }
}

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
    });
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
});
childrenPassengersPlusBth.addEventListener("click", function () {
    counterPlus(childrenPassengersCounter);
});
babiesPassengersPlusBth.addEventListener("click", function () {
    counterPlus(babiesPassengersCounter);
});

adultPassengersMinusBth.addEventListener("click", function () {
    counterMinus(adultPassengersCounter);
});
childrenPassengersMinusBth.addEventListener("click", function () {
    counterMinus(childrenPassengersCounter);
});
babiesPassengersMinusBth.addEventListener("click", function () {
    counterMinus(babiesPassengersCounter);
});

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
        if (selectedValue === undefined) {
            selectedValue = "любой";
        } else if (radio.checked) {
            selectedValue = radio.value;
        }
    });

    passengersClass.innerHTML = selectedValue;
    showClose(passengersAndClassDropdownList);
});

const closeSmooth = document.querySelector(".close-smooth");

closeSmooth.addEventListener("click", function () {
    cityFromInput.value = "";
    document.querySelector(".city").innerHTML = "";
    document.querySelector(".code").innerHTML = "";
});

const containerSearchBtn = document.querySelector(".container-search-btn");

containerSearchBtn.addEventListener("click", function () {
    const fromCity = cityFromInput.value;
    const toCity = cityToInput.value;
    const counterPassengers = passengersCounter.innerHTML;
    const classPassengers = passengersClass.innerHTML;
    console.log(`
                 Вылет - Откуда: ${fromCity}; куда: ${toCity}.
                 Дата вылета - туда: ${document.querySelector("#date-from-input").value}; обратно: ${document.querySelector("#date-to-input").value}.
                 Количество пассажиров: ${counterPassengers};
                 класс комфорта: ${classPassengers}.
                 `);
});

const calendarContainer = document.querySelector(".calendar-container");

const monthTemplate = document
    .querySelector("#calendar-template")
    .content
    .querySelector(".calendar-month");

const monthContainer = document.querySelector(".calendar-dates");

const ClassName = {
    DATE: "calendar-month-dates-day",
    FROM: "calendar-month-dates-day-from",
    IN_RANGE: "calendar-month-dates-day-in-range",
    PAST_DATE: "calendar-month-dates-day-past",
    TO: "calendar-month-dates-day-to",
    TODAY: "calendar-month-dates-day-today",
};

function getMonth(idx) {
    const objDate = new Date();
    objDate.setDate(1);
    objDate.setMonth(idx);

    const month = objDate.toLocaleString("ru-RU", {
        month: "long",
    });

    return month;
}

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function renderCalendarMonth(
    container,
    monthNumber = new Date().getMonth(),
    yearNumber = new Date().getFullYear(),
) {
    const monthElement = monthTemplate.cloneNode(true);
    // Все изменения в DOM мы производим до отрисовки элемента на страницу
    // чтобы не вызывать слишком много повторных рендерингов

    const monthNameElement = monthElement.querySelector(".calendar-month-name");
    monthNameElement.textContent = `${getMonth(monthNumber)} ${yearNumber}`;

    // 1. Взять первый день месяца
    // 2. Определить день недели этого дня
    let firstDayInMonth = new Date(yearNumber, monthNumber, 1).getDay();
    if (firstDayInMonth === 0) {
        firstDayInMonth = 7;
    }

    const daysContainer = monthElement.querySelector(".calendar-month-dates-days");

    // 3. До этого дня заполнить контейнер филлерами (пустыми элементами)
    let daysLeft = firstDayInMonth;
    while (--daysLeft) {
        const fillerDate = document.createElement("li");
        daysContainer.appendChild(fillerDate);
    }

    // 4. Определить количество дней в месяце
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const daysInMonth = getDaysInMonth(monthNumber, yearNumber);
    // 5. В цикле заполнить контейнер блоками под дни по их количеству
    // 6. Попутно отмечая прошедние дни и текущий день
    for (let day = 1; day <= daysInMonth; day++) {
        const date = document.createElement("li");
        const renderedDate = new Date(yearNumber, monthNumber, day, 0, 0, 0, 0);

        date.textContent = day;

        date.classList.add(ClassName.DATE);
        date.classList.toggle(ClassName.PAST_DATE, renderedDate - today < 0);
        date.classList.toggle(ClassName.TODAY, renderedDate - today === 0);

        date.dataset.date = renderedDate.toISOString();

        daysContainer.appendChild(date);
    }

    container.appendChild(monthElement);
}

function clearCalendarMonths() {
    monthContainer.innerHTML = "";
}

function showCalendarDialog() {
    calendarContainer.open = true;
}

function hideCalendarDialog() {
    calendarContainer.open = false;
    clearCalendarMonths();
}

function highlightRange(container, dateFrom, dateTo = null) {
    const allDates = container.querySelectorAll(`.${ClassName.DATE}`);

    for (date of allDates) {
        const currentDate = new Date(date.dataset.date);

        date.classList.toggle(ClassName.FROM, +currentDate === +dateFrom);
        date.classList.toggle(ClassName.IN_RANGE, dateTo !== null && currentDate > dateFrom && currentDate < dateTo);
        date.classList.toggle(ClassName.TO, dateTo !== null && +currentDate === +dateTo);
    }
}

function initializeDatePicker(dateFromElement, dateToElement) {
    let isCalendarOpen = false;

    const selectedDates = {
        from: null,
        to: null,
    };

    dateFromElement.onfocus = function () {
        // Fail fast
        if (isCalendarOpen) {
            return;
        }

        showCalendarDialog();
        renderCalendarMonth(monthContainer, new Date().getMonth());
        renderCalendarMonth(monthContainer, new Date().getMonth() + 1);

        isCalendarOpen = true;
    }

    monthContainer.onclick = function (evt) {
        const isSelectableDateClicked = (
            evt.target.classList.contains(ClassName.DATE) &&
            !evt.target.classList.contains(ClassName.PAST_DATE)
        );

        if (!isSelectableDateClicked) {
            return;
        }

        const clickedDate = new Date(evt.target.dataset.date);

        // 1. Если не выбрана никакая дата, первая нажатая дата становится from
        // 2. Если дата выбрана, вторая нажатая дата становится
        //   2.1. Если вторая нажатая дата больше или равна выбранной, она становится to
        //   2.2. Если вторая нажатая дата меньше выбранной, она становится from, а
        //        выбранная дата становится to
        // if (selectedDates.from === null) {
        //   selectedDates.from = selectedDate;
        // } else {
        //   if (selectedDate > selectedDates.from) {
        //     selectedDates.to = selectedDate;
        //   } else {
        //     selectedDates.to = selectedDates.from;
        //     selectedDates.from = selectedDate;
        //   }
        // }

        if (selectedDates.from === null && selectedDates.to === null) {
            // Выбрано ноль дат — подсвечиваем то, на что навели
            selectedDates.from = clickedDate;
            selectedDates.to = null;
        } else if (selectedDates.from !== null && selectedDates.to === null) {
            // Выбрана одна дата
            // - from - меньшая дата из hoveredDate или selectedDates.from
            // - to — большая дата из hoveredDate или selectedDates.from

            selectedDates.from = +clickedDate < +selectedDates.from ? clickedDate : selectedDates.from;
            selectedDates.to = +clickedDate > +selectedDates.from ? clickedDate : selectedDates.from;
        } else {
            selectedDates.from = +clickedDate < +selectedDates.to ? clickedDate : selectedDates.from;
            selectedDates.to = +clickedDate >= +selectedDates.to ? clickedDate : selectedDates.to;
        }

        if (selectedDates.from !== null && selectedDates.to !== null) {
            dateFromElement.value = selectedDates.from.toLocaleString("ru-RU").split(',')[0];
            dateToElement.value = selectedDates.to.toLocaleString("ru-RU").split(',')[0];

            hideCalendarDialog();
            isCalendarOpen = false;
        }

        highlightRange(monthContainer, selectedDates.from, selectedDates.to);
    }

    monthContainer.onmouseover = function (evt) {
        const isSelectableDateHovered = (
            evt.target.classList.contains(ClassName.DATE) &&
            !evt.target.classList.contains(ClassName.PAST_DATE)
        );

        if (!isSelectableDateHovered) {
            return;
        }

        const hoveredDate = new Date(evt.target.dataset.date);

        if (selectedDates.from === null && selectedDates.to === null) {
            // Выбрано ноль дат — подсвечиваем то, на что навели
            highlightRange(monthContainer, hoveredDate);
        } else if (selectedDates.from !== null && selectedDates.to === null) {
            // Выбрана одна дата
            // - from - меньшая дата из hoveredDate или selectedDates.from
            // - to — большая дата из hoveredDate или selectedDates.from
            highlightRange(
                monthContainer,
                +hoveredDate < +selectedDates.from ? hoveredDate : selectedDates.from,
                +hoveredDate > +selectedDates.from ? hoveredDate : selectedDates.from,
            );
        } else {
            // Выбрано две даты
            // - from меньшая дата из hoveredDate или selectedDates.from
            // - to — большая дата из hoveredDate или selectedDates.to
            highlightRange(
                monthContainer,
                +hoveredDate < +selectedDates.to ? hoveredDate : selectedDates.from,
                +hoveredDate >= +selectedDates.to ? hoveredDate : selectedDates.to,
            );
        }
    }
}

// — Визуализация выбранных дат
//   — [x] Если нет выбранных дат — ничего не подсвечено по умолчанию
//   — [ ] Если нет выбранных дат при перемещении курсора по полю мы подсвечиваем дату
//   — [x] Если выбрана одна дата, ее блок подсвечен
//   — [ ] Если выбрана одна дата при перемещении курсора по полю мы подсвечиваем
//     диапазон до той даты, на которую наведен курсор
//   — [x] Если выбрано две даты — подсветить обе и диапазон
//   — [-] Если выбрана одна дата без обратного билета, подсвечена только она
//
//     при открытии
//     по клику на дату
//     при перемещении курсора

// — Инициализация календаря с уже выбранными датами
// — Закрытие календаря
// — Одна дата
// — Переключение месяцев

initializeDatePicker(
    document.querySelector("#date-from-input"),
    document.querySelector("#date-to-input"),
);

document.querySelector('.swap-icon img').addEventListener("click", function (e){
    const substitution = cityFromInput.value;
    cityFromInput.value = cityToInput.value;
    document.querySelector(".city").innerHTML = cityFromInput.value;
    for (let mapCityElement of mapCity.values()) {
        if (mapCityElement.name === cityFromInput.value) {
            document.querySelector(".code").innerHTML = mapCityElement.code;
        }
    }
    cityToInput.value = substitution;
    e.preventDefault();
})