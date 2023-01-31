// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function (fare) {return fare * num};
}

function fareDoubler(fare) {
    const doubler = createFareMultiplier(2);
    return doubler(fare);
}

function fareTripler(fare) {
    const tripler = createFareMultiplier(3);
    return tripler(fare);
}

/*function selectDifferentDrivers(drivers, func) {
    const newDrivers = [];
    for (let i = 0; i < drivers.length; i++) {
        if (func(drivers).includes(drivers[i]) === true) {
            newDrivers.push(drivers[i]);
        }
    }
    return newDrivers;

}*/

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}