// Code your solution in this file
function findMatching(drivers, name) {
    const newDrivers = drivers.filter(function(name2) {return name2.toLowerCase() == name.toLowerCase()});
    return newDrivers;
}

function fuzzyMatch(drivers, string) {
    const newDrivers = drivers.filter(function(name){return name.startsWith(string)});
    return newDrivers;
}

function matchName(drivers, name) {
    const newDrivers = drivers.filter(function(driver){return driver.name===name});
    return newDrivers;
}