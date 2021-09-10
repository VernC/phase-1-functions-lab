// Code your solution in this file!
let headQuarters = 42;
let blockInFeet = 264

function distanceFromHqInBlocks(pickUpLocation) {
    return Math.abs (pickUpLocation - headQuarters)
}

function distanceFromHqInFeet(pickUpLocation) {
    return Math.abs ((pickUpLocation - headQuarters) * blockInFeet)
}

function distanceTravelledInFeet(pickUpLocation, dropOffLocation) {
    return Math.abs ((pickUpLocation - dropOffLocation) * blockInFeet)
}

let calculatesFarePrice = (pickUpLocation, dropOffLocation) => {
    let farePrice = distanceTravelledInFeet (pickUpLocation, dropOffLocation);
    if(farePrice <= 400) {
        return 0;
    } else if(farePrice >400 && farePrice<= 2000) {
        return (farePrice - 400) * 0.02;
    } else if(farePrice > 2000 && farePrice <= 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}