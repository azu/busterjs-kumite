buster.testCase("setup/teardown", {
    setUp : function(){
        this.i = 1
    },
    tearDown : function(){
        delete this.i;
    },
    "one" : function(){
        this.i = 10;
        assert.equals(this.i, 10);
    },
    "two" : function(){
        assert.equals(this.i, 1);
    }
});
