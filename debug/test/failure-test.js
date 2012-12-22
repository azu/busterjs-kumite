if (typeof module == "object" && typeof require == "function"){
    var buster = require("buster");// node環境なら読み込む
}
buster.testCase("My Failure Test", {
    "Assertion failure" : {
        "refute should fail" : function(){
            refute(true);
            // => [refute] Expected true to be falsy
        },
        "assert.same should fail" : function(){
            assert.same("A"); // 本来は比較対象の第二引数が必要
            // => [assert.same] Expected to receive at least 2 arguments
        }
    },
    "Async failure" : {
        "doesn't call assert" : function(){
            setTimeout(function(){
                assert(true);// 非同期なので呼ばれない
            }, 100);
            // => No assertions!
        }
    },
    "Exception failure" : {
        "exception test" : function(){
            throw new Error("cause error");
            assert(true);
        }// => Error
    }
});