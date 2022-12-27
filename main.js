module.exports = {
    arraySum: function(arr) {
        // Your code goes here
        if(arguments.length == 0) return 0;
        let numOrChar = n => isNaN(n) ? 0 : parseInt(n);        
        return arr.reduce((a, b) => numOrChar(a) + numOrChar(b));
    },

    arrayAverage: function(arr) {
        
        if(arguments.length == 0) return 0;

        const total = module.exports.arraySum(arr);
        const filterNumber = arr.filter(number => !isNaN(number));
        

        if (filterNumber == 0) {
            return 0;
        } else {
            return total / filterNumber.length; 
        }
       
    },

    arrayMax: function(arr) {
        if(arguments.length == 0) return 0;

        const filterNumber = arr.filter(number => !isNaN(number));

        if (filterNumber == 0) {
            return 0;
        } else {
            return Math.max(...filterNumber);
        }
        
    },

    arrayMin: function(arr) {

        if(arguments.length == 0) return 0;

        const filterNumber = arr.filter(number => !isNaN(number));

        if (filterNumber == 0) {
            return 0;
        } else {
            return Math.min(...filterNumber);
        }

    }
 };