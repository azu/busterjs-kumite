buster.testCase("asynchronous", {
    "test asynchronous" : function(done){
        setTimeout(function(){
            assert(true);
            done();// test end
        }, 100);
    }
});
