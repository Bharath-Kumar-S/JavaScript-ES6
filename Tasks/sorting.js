const bubbleSort = (v) => {
    
    for (let i = v.length - 1; i >= 0; i--) {
        console.log(v);
        for (let j = 1; j <= i; j++) {
            console.log(v);
            if (v[j - 1] < v[j]) {
                let temp = v[j - 1];
                v[j - 1] = v[j];
                v[j] = temp;
            }
        }
    }
    return v;
}


bubbleSort([7, 5, 2, 4, 3, 9]); //[2, 3, 4, 5, 7, 9]