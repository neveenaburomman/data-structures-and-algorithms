'use strict';

function insertionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        // console.log(arr)

        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j = j - 1;
            arr[j + 1] = temp;
            //  console.log(arr)


        }
    }
    return arr
}

//console.log(insertionSort([20,18,12,8,5,-2]));

module.exports = insertionSort    