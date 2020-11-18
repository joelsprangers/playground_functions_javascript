

const calculateSupply = function(age, amountPerDay) {
    maxAge = 100;
    consumed = (maxAge - age)  * 365 * amountPerDay;
    console.log('You will need ' + Math.round(consumed) + ' to last you until the ripe old age of ' +maxAge);
}

calculateSupply(67, 3);
calculateSupply(67.7, 5);
