buster.testCase("DOM", {
    "test exist DOM API" : function(){
        var div = document.createElement("div");
        assert.tagName(div, "div");// div or DIV
        assert.tagName(div, "DIV");// 大文字小文字はどちらもいい
    }
});