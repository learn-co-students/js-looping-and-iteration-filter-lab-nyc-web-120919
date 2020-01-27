

function findMatching(drivers, name) {
    return drivers.filter(function (driver) { return name.toLowerCase()===driver.toLowerCase(); })
}

function fuzzyMatch(drivers, fuzz) {
    return drivers.filter(function (driver) { return driver.startsWith(fuzz)});
}

function matchName(drivers, name) {
    return drivers.filter(function (driver) { return driver.name===name; })
}