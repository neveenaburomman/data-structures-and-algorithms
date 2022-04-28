'use strict';

function mergeSort(arr) {

    let n = arr.length;
    if (n > 1) {
        let mid = Math.floor(n / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        // console.log(left);
        //  console.log(right);
        merge(mergeSort(left), mergeSort(right), arr)
    }
    return arr;
}

function merge(left, right, arr) {
    let i = 0
    let j = 0
    let k = 0

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i]
            i++
        } else {
            arr[k] = right[j]
            j++
        }
        k++
    }

    if ((i === left.length)) {
        while (k < arr.length) {
            arr[k] = right[j]
            j++
            k++
        }
    } else {
        while (k < arr.length) {
            arr[k] = left[i]
            i++
            k++
        }
    }
}

module.exports = mergeSort;

    //let arr=[8, 4, 23, 42, 16, 15];
  //  console.log(mergeSort(arr));

