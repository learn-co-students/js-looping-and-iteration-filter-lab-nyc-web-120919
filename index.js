// Code your solution in this file
function findMatching(list, name) {
    return list.filter((driverName) => {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(list, partialName) {
    let lengthOfName = partialName.length;
    return list.filter((driverName) => {
        return driverName.slice(0, lengthOfName) === partialName;
    });
}

function matchName(list, name) {
    return list.filter((driver) => {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}