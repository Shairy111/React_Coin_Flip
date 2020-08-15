function randomize(arr){
    let randome = Math.floor(Math.random() * arr.length);
    return arr[randome];
}

export {randomize};