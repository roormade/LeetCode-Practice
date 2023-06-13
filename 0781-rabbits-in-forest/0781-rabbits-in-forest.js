/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const cow = {};
    
    answers.forEach((c, i) => {
        if (cow[c]) {
            cow[c]++;
        } else {
            cow[c] = 1;
        }
    });
    
    console.log(cow);
    let minRab = 0;
    for (const rabbit in cow) {
        const c = Number(rabbit);
        minRab += (Math.ceil(cow[rabbit] / (c + 1))) * (c + 1);
    }
    return minRab;
};