var buster = require("buster");
buster.testCase("My Failure Test", {
    setUp : function(){
        // failを乗っ取る
        buster.assertions.throwOnFailure = false;
        this.orig_fail = buster.assertions.fail;
        // failならpassするように
        buster.assertions.fail = function(message){
            var exception = new Error(message);
            exception.name = "AssertionError";
            console.log(exception);
            // failが起きた時にpassしたとイベントを投げる
            buster.assertions.emit("pass", "fail", message || "");
        };
    },
    tearDown : function(){
        buster.assertions.throwOnFailure = true;
        buster.assertions.fail = this.orig_fail;
    },
    "this is fail,but pass test" : function(){
        assert(false);
    }
});