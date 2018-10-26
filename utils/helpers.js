
function sortAsc(array) {
    return array.sort((a, b) => a > b);
}

function sortDesc(array) {
    return array.sort((a, b) => a < b);
}

function compareArrays(arr1, arr2) {
    return arr1.every((value, index) => value == arr2[index]);
}

function extractNumbers(array) {
    let output = [];
    array.forEach(el => { 
        output.push(Number(el.slice(1)));    
    });
    return output;
}

module.exports = { sortAsc, sortDesc, compareArrays, extractNumbers }