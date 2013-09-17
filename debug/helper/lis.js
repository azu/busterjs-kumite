/**
 * Created by azu on 2013/09/18.
 */
buster.testRunner.onCreate(function myList(runner) {
    console.log(runner);

});
buster.testRunner.on("test:start", function (context) {
});
buster.testRunner.on("suite:start", function (test) {
    console.log("suite:start");
});

buster.testRunner.on("test:success", function (test) {
    console.log(test);
});
buster.testRunner.on("suite:end", function () {
    console.log("suite:end");
});


var assertions = 0;

buster.referee.on("failure", function () {
    assertions += 1;
    console.log(assertions);
});
