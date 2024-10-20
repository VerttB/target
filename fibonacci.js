const nums = [0,1,2,3,5,8,13,21,34,7,8,12,15, 55]

const isFibonnaci = (num) => {
    let sum;
    let start = [0,1];
    do {
        if(start[0] === num) return true;
        sum = start[0] + start[1]
        start.shift();
        start.push(sum);
    } while (start[0] <= num);

    return false
};


nums.forEach(num => console.log(`O número ${num} ${isFibonnaci(num) ?"pertence" : 
    "não pertence"
} a sequencia de fibonnaci`))