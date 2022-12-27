module.exports = {
    arraySum: function(arr) {
        // Your code goes here
        if (arguments.length === 0) return 0

        const charOrNum = element => isNan(element) ? 0 : parseInt(element)

        return arr.reduce((prev, current) => charOrNum(prev) + charOrNum(current))
    },

    arrayAverage: function(arr) {
        // Your code goes here

        return arr; // or something else who knows ?
    },

    arrayMax: function(arr) {
        // Your code goes here

        return arr // or something else who knows ?
    },

    arrayMin: function(arr) {
        // Your code goes here

        return arr // or something else who knows ?
    }
 };