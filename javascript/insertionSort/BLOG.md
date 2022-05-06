## insertion sort 
nsertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.

## Pseudo Code
```ruby
 InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```
## visual code
![visual code2](https://user-images.githubusercontent.com/90922969/167196236-d98bba4b-276e-4295-a35c-9e5287e1b53a.jpg)

