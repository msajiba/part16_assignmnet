// 1 feet = 0.000189394 miles

function isMile(feet) {;
    let feetToMile = feet * 0.000189394;
    return feetToMile;
}

const result = isMile(5280);
console.log(result);