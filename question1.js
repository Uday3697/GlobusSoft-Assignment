//a function to find last value of nth row ,where N is given num of rows
/*  maeans if ohani has given 5 then first row will start from 1 to five i.e 5 elements (N-0)
but in 2nd row number of elements will be (N-1) means 5-1 i.e 4  elements 
3rd row has (N-2) i.e 5-2 means 3 elements ...so on 
every next row element is resultant of sum of first and second of previous row */
function lastValueNthRow(n) {
    const arr = [];
    for (let i = 0; i < n; i++) { 
        if (!Array.isArray(arr[i])) arr[i] = [];
        for (let j = 0; j < n - i; j++) {
            if (i == 0 ){
                arr[i][j] = j+1;
            } else {
                const prevArr = arr[i-1];
                const newArr = prevArr.slice(j);
                const [first, second] = newArr; 
                arr[i][j] = first + second;
            }
        }
    }

    // console.log(arr[arr.length-1][0]);
    return arr[arr.length-1][0];
}
//if ohani has given N number Then we have to pass N as function parameter
console.log(lastValueNthRow(5));