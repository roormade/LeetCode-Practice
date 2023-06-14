/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    const pointPairs = new Set();
    let minArea = Infinity;
    for (const [x, y] of points) {
        pointPairs.add(`${x},${y}`);
    }
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];
            if ((x1 !== x2 && y1 !== y2) && 
            (pointPairs.has(`${x1},${y2}`) && pointPairs.has(`${x2},${y1}`))) {
                const currArea = Math.abs(x1 - x2) * Math.abs(y1 - y2);
                minArea = Math.min(minArea, currArea);
            }
        }
    }
    return minArea === Infinity ? 0 : minArea;
};