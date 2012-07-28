buster.testCase("setup/teardown", {
    setUp : function(){
        this.i = this.i || 0;
        this.i++;
    },
    tearDown : function(){
        this.i--;
    },
    "one should be 1" : function(){
        assert.equals(this.i, 1);
    },
    "twice should be 1" : function(){
        assert.equals(this.i, 1);
    }
});
