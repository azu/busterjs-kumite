buster.testCase("testCase Context", {
    "test #1" : function(){
        assert.same("test", "test");
    },
    "context" : {
        "test #2" : function(){
            assert(true);
        },
        "Nest Context" : {
            "test #3" : function(){
                refute(false);
            }
        }
    }
});