function sum_slojenie(n1, n2){
    return n1 + n2;
}

function allUpper(arr){
    return arr.map(el => el.toUpperCase())
}


function validateValue(value) {
    if (value < 0 || value > 100){
        return false;
    }
    return true;
}


module.exports = {sum_slojenie, allUpper, validateValue};


