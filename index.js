function findMatching(array, string) {
    return array.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(array, string) {
    let stringLength = string.length;
    return array.filter(function (driver) { return driver.slice(0, stringLength) === string; });
}

function matchName(array, string) {
    return array.filter(function (driver) { return driver.name.toLowerCase() === string.toLowerCase(); });
}