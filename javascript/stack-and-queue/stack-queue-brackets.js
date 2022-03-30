'use strict';

const Stack = require("./stack");

function stackQueueBrackets(str) {

    let strArr = str.split('');
    let testStack1 = new Stack;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "{" || strArr[i] === "(" || strArr[i] === "[") {
            testStack1.push(strArr[i]);
        }
    }

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "}" || strArr[i] === ")" || strArr[i] === "]")

            switch (testStack1.storage.head.value) {
                case "{":
                    testStack1.pop();
                    break;
                case "(":
                    testStack1.pop();
                    break;
                case "[":
                    testStack1.pop();
                    break;
            }
    }
    if (testStack1.storage.head == null) {
        return true;
    }
    else {
        return false;
    }

}

//console.log(stackQueueBrackets("(]("))

module.exports = stackQueueBrackets;