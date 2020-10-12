
// You should implement your task here.
module.exports = function towelSort (matrix = []) {
    const linearArr = [];
    for(let i = 0; i < matrix.length; i++){
        const arr = i % 2 == 0 ? matrix[i] : matrix[i].reverse();
        console.log(arr);
        linearArr.push(...arr);
    }
    return linearArr;
};
