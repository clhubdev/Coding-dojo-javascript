module.exports = {
    falsyBouncer: function(arr) {
        if (arguments.length === 0 ) {
            return arr = [];
        } else {
            return  arr.filter(Boolean);
        }
        
    }
}