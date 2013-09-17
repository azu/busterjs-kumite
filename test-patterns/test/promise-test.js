var when = buster.when;
buster.testCase("Promise", {
    "test async, use promise" : function(){
        var promise = { // then メソッドの有無が重要
            then : function(callback){
                this.callbacks = this.callbacks || [];
                this.callbacks.push(callback);
            }
        };

        setTimeout(function(){
            buster.assert(true);
            var callbacks = promise.callbacks || [];
            for (var i = 0, l = callbacks.length; i < l; ++i){
                callbacks[i]();
            }
        }, 100);
        // thenを持ったものを返す => promiseと判断 (isPromise)
        return promise;
    },
    "test async ,use when.js" : function(){
        var deferred = when.defer();

        setTimeout(function(){
            buster.assert(true);
            deferred.resolver.resolve();
        }, 100);

        return deferred.promise;
    }
});