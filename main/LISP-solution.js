    /* 4. Coding exercise: You are tasked to write a checker that validates the parentheses of a LISP code.
    Write a program (in Java or JavaScript)
    which takes in a string as an input and returns true if all the parentheses in the string are properly closed and nested.*/
    
    parenthesisChecker = (str) => {
    let newArray = [];

    let open = {
        '(': ')'
    };

    let closed = {
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            newArray.push(char)
        } else if (closed[char]) {
            if (open[newArray.pop()] !== char) return false
        }
    }
    return newArray.length === 0
}


console.log(parenthesisChecker('(((hannah)))'))
console.log(parenthesisChecker('(han(hannah)nah)'))
console.log(parenthesisChecker('(((kadfhk)))'))
console.log(parenthesisChecker('(()(()()'))

