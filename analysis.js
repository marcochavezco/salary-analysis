
// Make an array of mexico.salary from salary.js
function createSalaryList(list) {
    const salaryData = list.map(
        function (person) {
            return person.salary;
        }
    );
    return salaryData;
}
// Sort salaryData
function sortNumberList(list) {
    const sortedList = list.sort(
        function (a, b) {
            return a - b;
        }
    );
    return sortedList;
}

// Calculate arithmetic mean
function calculateArithmeticMean(list) {
    const sumList = list.reduce(
        function (total = 0, num) {
            return total + num;
        }
    )
    return sumList / list.length;
}

// Check if a number is even or odd
function isEven(number) {
    return number % 2 === 0;
}

// Calculate median of top x percert of salaryList
function calculateSalaryMedianOf(salaryList, percentage = 100) {

    const salaryData = createSalaryList(salaryList);
    const sortedSalaryData = sortNumberList(salaryData);

    let middlePoint;
    let finalList;
    if (percentage != 100) {

        const spliceStart = (sortedSalaryData.length * (100 - percentage)) / 100;
        const spliceElements = sortedSalaryData.length - spliceStart;
        const topSortedSalaryData = sortedSalaryData.splice(spliceStart, spliceElements);

        middlePoint = parseInt(topSortedSalaryData.length / 2);
        finalList = topSortedSalaryData;

    } else {

        middlePoint = parseInt(sortedSalaryData.length / 2);
        finalList = sortedSalaryData;
    }
    
    let median;
    if (isEven(finalList.length)) {

        const elementA = finalList[middlePoint];
        const elementB = finalList[middlePoint - 1];
    
        median = calculateArithmeticMean([elementA, elementB]);

    } else {

        median = finalList[middlePoint];
    }
    return median;
}

const salaryMedian = calculateSalaryMedianOf(mexico, 10);

console.log({
salaryMedian,
})