function isLeapYear(year){
    if (year >= 0 && year % 1 === 0){
        if (year % 4 === 0){
            if (year % 100 === 0){
                if (year % 400 === 0){
                    return(true);
                }
                else{
                    return(false);
                }
            }
            else{
                return(true);
            }
        }
        else{
            return(false);
        }
    }
    else{
        return(false);
    }
}

console.log(isLeapYear(2000));
console.log(isLeapYear(-2024));
console.log(isLeapYear(1984.25));