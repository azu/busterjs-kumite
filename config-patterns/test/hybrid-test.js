if (typeof module == "object" && typeof require == "function"){
    var buster = require("buster");// node環境なら読み込む
}

buster.testCase("Multi-environment", {
    "runs in all environments" : function(){
        assert(true);
    },

    "dependent on dom context" : {
        // requiresSupportFor で trueの場合のみ、contextのテストが実行される
        requiresSupportFor : { "DOM" : typeof document !== "undefined" },
        "only runs in browser-like environments" : function(){
            var el = document.createElement("p");
            el.className = "item feed";
            assert.className(el, "item");
        }
    }
});
