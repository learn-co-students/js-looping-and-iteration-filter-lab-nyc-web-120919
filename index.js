// Code your solution in this file
function findMatching(drivers, string) {
    let arr = drivers.filter(function(i) {return i.toLowerCase() === string.toLowerCase()});
    return arr;
}

function fuzzyMatch(drivers, str) {
    let arr = drivers.filter(function (i) { return i.substring(0,str.length) === str } );
    return arr;
}

function matchName(drivers, str) {
    let arr = drivers.filter(function (driver) { return driver.name === str });
    return arr;
}
 