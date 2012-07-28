buster.testCase("Deferred", {
    "// test isn't implement" : function(){
    },
    context : {
        setUp : function(){
            buster.log("doesn't call");
        },
        "// this context all Deferred" : function(){
        }
    }
});