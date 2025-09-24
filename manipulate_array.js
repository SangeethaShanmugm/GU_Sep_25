function manipulateArray(arr) {
    //step -1 => double each items

    const doubled = arr.map(num => num * 2)

    //step -2 => filter numbers >= 10
    const filteredData = doubled.filter((num => num >= 10))

    //step -3 -> Find sum
    const total = filteredData.reduce((sum, num) => sum + num, 0)
    return total;
}

const numbers = [2, 5, 8, 3]
console.log(manipulateArray(numbers))