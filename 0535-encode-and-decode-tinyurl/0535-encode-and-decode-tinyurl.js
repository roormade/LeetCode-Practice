/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const mapE = new Map();
const mapD = new Map();

var encode = function(longUrl) {    
    if (mapE.has(longUrl)) {
        return mapE.get(longUrl);
    }
    
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let tinyUrl = '';
    do {
        tinyUrl = '';
        for (let i = 0; i < 6; i++) {
            tinyUrl += chars[Math.floor(Math.random() * chars.length)];
        }        
    } while (mapD.has(tinyUrl));
    mapE.set(longUrl, tinyUrl);
    mapD.set(tinyUrl, longUrl);
    return tinyUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return mapD.get(shortUrl);        
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */