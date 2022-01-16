// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integer) {
  return function (fare) {
    return fare * integer;
  };
}

const fareDoubler = function (fare) {
  return fare * 2;
};
const fareTripler = function (fare) {
  return fare * 3;
};
const selectDifferentDrivers = function (drivers, f) {
  if (f === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } else if (f === returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  }
};
