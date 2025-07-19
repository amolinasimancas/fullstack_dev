/*
Input: findLargestPalindrome(["racecar", "level", "world", "hello"])
Output: "racecar"

Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])
Output: null
*/

const wordList = ["racecar", "level", "world", "hello"];

function findLargestPalindrome(wordList){
    let palindromeList = [];

    function reverseWord(word){
        return word.split("").reverse().join("");
    }
    
    for(const word of wordList){
        if(word === reverseWord(word)){
            palindromeList.push(word);
        };
    }
    
    if(palindromeList.length != 0){
        let counter = 0;
        let largestWord;
        for(const word of palindromeList){
            if (word.length > counter){
                counter = word.length;
                largestWord = word;
            }
        }
        return largestWord;
    }
    else{
        return null;
    }
}

console.log(findLargestPalindrome(wordList));