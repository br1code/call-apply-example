const obj = {
    name: 'Bruno',
    greet: function(message) {
        console.log(message + ' ' + this.name);
    }
};

// traditional function call
obj.greet('Hello'); // --> Hello Bruno

/* the call() method calls a function with a given -this- value
    and arguments provided individually */
obj.greet.call({name: 'Agustina'}, 'Hello'); // --> Hello Agustina

/* the apply() method calls a function with a given -this- value,
    and arguments provided as an array*/
obj.greet.apply({name: 'Gino'}, ['Hello']); // --> Hello Gino