if (typeof require == "function" && typeof module == "object"){
    buster = require("buster");
    // Nodeの場合はbuster.jsのsourcesでは読み込まれない
    require("../src/strftime");
}
// テストケース
buster.testCase("Date strftime tests", {
    setUp : function(){
        this.date = new Date(2009, 9, 2, 22, 14, 45);
    },

    "test format specifier %Y" : function(){
        assert(Date.formats.Y(this.date) === 2009,
                "%Y should return full year");
    },

    "test format specifier %m" : function(){
        assert(Date.formats.m(this.date) === "10",
                "%m should return month");
    },

    "test format specifier %d" : function(){
        assert(Date.formats.d(this.date) === "02",
                "%d should return date");
    },

    "test format specifier %y" : function(){
        assert(Date.formats.y(this.date) === "09",
                "%y should return year as two digits");
    },

    "test format shorthand %F" : function(){
        assert(Date.formats.F === "%Y-%m-%d",
                "%F should be shortcut for %Y-%m-%d");
    }
});
