(function (global) {
    if (typeof require == "function" && typeof module == "object") {
        global.buster = require("buster");
    }
    global.assert = buster.assert;
    global.refute = buster.refute;
    global.expect = buster.expect;
})(this.self || global);
