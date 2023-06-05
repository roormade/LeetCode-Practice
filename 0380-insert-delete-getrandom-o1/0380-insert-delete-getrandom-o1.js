
var RandomizedSet = function() {
    this.storage = new Set(); 
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.storage.has(val)) {
        this.storage.add(val);
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.storage.has(val)) {
        this.storage.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const hi = this.storage.size
    const ind = Math.floor(Math.random() * hi);
    const arr = [];
    this.storage.forEach((v) => arr.push(v));
    return arr[ind];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */