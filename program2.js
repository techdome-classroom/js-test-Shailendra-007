/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mapNum = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            const curr = mapNum[s[i]];
            const val = mapNum[s[i + 1]];
    
            if (val > curr) {
                res += val - curr;
                i++;
            } else {
                res += curr;
            }
        }
        return res;
};


module.exports={romanToInt}
