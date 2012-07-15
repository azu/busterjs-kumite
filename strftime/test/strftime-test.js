if (typeof require == "function" && typeof module == "object"){
    buster = require("buster");
    // Nodeの場合はbuster.jsのsourcesでは読み込まれない
    require("../src/strftime");
}
// テストケース
buster.testCase("Date strftime tests", {
});
