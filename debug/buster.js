var config = module.exports;

config["My tests"] = {
    env : "node", // or "browser"
    tests : [
        "test/*-test.js"
    ]
};

config["Browser tests"] = {
    env : "browser", // or "browser"
    tests : [
        "browser-test/*-test.js"
    ],
    testHelpers : [
        "helper/browser-helper.js"
    ]

};
