/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGs = 0;
    let currGs = 0;
    let startGs = 0;
    
    for (let i = 0; i < gas.length; i++) {
        totalGs += gas[i] - cost[i];
        currGs += gas[i] - cost[i];
        
        if (currGs < 0) {
            currGs = 0;
            startGs = i + 1;
        }
    }
    
    return totalGs >= 0 ? startGs : -1;
};