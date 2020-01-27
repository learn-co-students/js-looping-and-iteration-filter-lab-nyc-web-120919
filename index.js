// Code your solution in this file
function findMatching(driverArray, string) {
    let my_array = [];
    for (const driver of driverArray) {
        if (driver.toUpperCase() === string.toUpperCase()) {
            my_array.push(driver);
        }
    }
    return my_array;
}

function fuzzyMatch(driverArray, string){
    let my_array = [];
    for (const driver of driverArray) {
        if (driver[0] === string[0]) {
            my_array.push(driver)
        }
    }
    return my_array
}

function matchName(driverArray, string) {
    let my_array = []
    for (const driver of driverArray) {
        if (driver.name === string) {
            my_array.push(driver)
        }
    }
    return my_array
}