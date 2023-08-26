function bubbleSort(arr) {
    let i, j;
    let len = arr.length;
    let fake = false;
    for (i = 0; i < len; i++) {
        fake = false;
        for (j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                fake = true;
            }
        }
        if (!fake) {
            break;
        }
    }
    console.log(arr)
}
let arr = [243, 45, 23, 356, 3, 5346, 35, 5];
bubbleSort(arr)