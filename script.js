// =============== 1 Pillars

function pillars(numPill, dist, width) {
    if(numPill == 1) {
        return 0;
    }
    if(numPill == 2) {
        return dist*100;
    }
    if(numPill > 2) {
        return dist*100*(numPill-1) + (numPill-2)*width;
    }
}

// =============== 2 Calculate average
function findAverage(array) {    
    if(array.length > 0) {
        let sum = 0;
        for (let i in array) {
            sum += +array[i];
        }
        return sum / array.length;
    }
    return 0;
}