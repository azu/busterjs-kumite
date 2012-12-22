var config = module.exports;

// テストが失敗するパターン
config["Failure tests"] = {
    env : "node", // or "browser"
    tests : [
        "test/failure-test.js"
    ]
};

// 天邪鬼テスト
config["Error is True tests"] = {
    env : "browser", // or "browser"
    tests : [
        "browser-test/perverseness-test.js"
    ],
    testHelpers : [
        "helper/browser-helper.js"
    ]

};
