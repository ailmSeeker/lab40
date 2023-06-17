// Code your solution in this file!

function returnFirstTwoDrivers(x){ return [x[0], x[1]] }
function returnLastTwoDrivers(x){ return [x[x.length - 2], x[x.length - 1]]}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(x){
  return () => {
    let m = 5;
    return x * m;
  }
}
function fareDoubler(x){
  return x * 2;
}
function fareTripler(x){
  return x * 3;
}
function selectDifferentDrivers(drivers, method){
  return method(drivers);
}
