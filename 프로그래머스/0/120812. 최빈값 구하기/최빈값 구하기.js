const solution = (array) => {
    const frequency = {};
    let maxFreq = 0;
    let mostFrequentNum = -1;

    array.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    for (let num in frequency) {
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mostFrequentNum = num;
        } else if (frequency[num] === maxFreq) {
            mostFrequentNum = -1;
        }
    }

    return Number(mostFrequentNum);
};