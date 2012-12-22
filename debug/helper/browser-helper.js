buster.testRunner.onCreate(function myList(runner){
    console.log(runner);

});
buster.testRunner.on("test:start", function(context){
});
buster.testRunner.on("suite:start", function(test){
    console.log("suite:start");
});

buster.testRunner.on("test:success", function(test){
    console.log(test);
});
buster.testRunner.on("suite:end", function(){
    console.log("Tesee");
});


var assertions = 0;

buster.assertions.on("failure", function(){
    assertions += 1;
    console.log(assertions);
});


// PhantomJS
if (!Function.prototype.bind){
    Function.prototype.bind = function(oThis){
        if (typeof this !== "function"){
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP = function(){
                },
                fBound = function(){
                    return fToBind.apply(this instanceof fNOP && oThis
                            ? this
                            : oThis,
                            aArgs.concat(Array.prototype.slice.call(arguments)));
                };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}