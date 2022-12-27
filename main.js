module.exports = {
    falsyBouncer: function(arr) {
        if (arguments.length === 0 ) {
            return arr = [];
        } else {
            return  arr.filter(Boolean); // Comme Boolean est une f(x), l'élement sera directement injecté dans la fonction. C'est l'équivalent de element => Boolean(element).
        }
        
    }
}