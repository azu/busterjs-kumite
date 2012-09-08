buster.testCase("My Test Case", {
    "TEST ONE" : function(){
        assert.equals("foo", "foo");
    },
    "Context" : {
        "TEST TWO" : function(){
            refute.equals("foo", "bar");
        },
        "Context NEST" : {
            "//TEST Three" : function(){
            }
        }
    }
});