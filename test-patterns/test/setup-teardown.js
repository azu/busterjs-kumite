buster.testCase("setup/teardown", {
    setUp : function(){
        this.i = this.i || 0;
        this.i++;
    },
    tearDown : function(){
        this.i--;
    },
    "one" : function(){
        assert.equals(this.i, 1);
    },
    "two" : function(){
        assert.equals(this.i, 1);
    }
});
