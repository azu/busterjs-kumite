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
