var buster = require("buster");
buster.testCase("type", {
    "isNull is null" : function(){
        assert.isNull(null);
    }
});