/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let cow = 0;
    rating.forEach((r1, i) => {
        const part1 = rating.slice(i);
        part1.forEach((r2, i) => {
            if (r2 > r1) {
                const part2 = part1.slice(i);
                part2.forEach((r3) => {
                    if (r3 > r2) {
                        cow++;
                    }
                });
            } else if (r2 < r1) {
                const part2 = part1.slice(i);
                part2.forEach((r3) => {
                    if (r3 < r2) {
                        cow++;
                    }
                })
            }
        });
    });
    return cow;
};