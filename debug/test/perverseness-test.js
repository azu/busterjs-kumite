buster.testCase("My Failure Test", {
    setUp : function(){
        // failを乗っ取る
        buster.referee.throwOnFailure = false;
        this.orig_fail = buster.referee.fail;
        // failならpassするように
        buster.referee.fail = function(message){
            var exception = new Error(message);
            exception.name = "AssertionError";
            // failが起きた時にpassしたとイベントを投げる
            buster.referee.emit("pass", "fail", message || "");
        };
        this.overWritePass = function pass(name, message){
            // 明示的にfail経由で呼び出されたものは素通りして、それ以外の時は実際にfailを発生させる
            if (name !== "fail"){
                var fail_message = "[" + name + "] " + message;
                this.orig_fail.call(buster.referee, fail_message);

            }
        }.bind(this);
        // テストがpassした時に呼ばれる
        buster.referee.on("pass", this.overWritePass);
    },
    tearDown : function(){
        buster.referee.throwOnFailure = true;
        buster.referee.fail = this.orig_fail;
        buster.referee.off("pass", this.overWritePass);
    },
    "actually, pass test" : function(){
        assert(false);// 本来はfailだがpassする
    },
    "// actually, fail test" : function(){
        assert(true);// 本来はpassだがfailする
    }
});