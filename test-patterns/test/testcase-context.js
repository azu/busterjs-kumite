buster.testCase("testCase Context", {
    "test #1" : function(){
        assert(true);
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