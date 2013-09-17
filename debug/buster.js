var config = module.exports;
config["common"] = {
    rootPath: "../",
    testHelpers: ["helper/helper.js"]
}
// テストが失敗するパターン
config["Failure tests"] = {
    extends: "common",
    env : "node",
    tests : [
        "debug/test/failure-test.js"
    ]
};
config["Failure tests"] = {
    extends: "common",
    env : "browser",
    tests : [
        "debug/test/failure-test.js"
    ]
};

// 天邪鬼テスト
config["Error is True tests"] = {
    extends: "common",
    env : "browser",
    tests : [
        "debug/test/perverseness-test.js"
    ],
    testHelpers : [
        "debug/helper/browser-helper.js"
    ]

};
