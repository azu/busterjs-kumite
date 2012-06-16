var config = module.exports;

config["node tests"] = {
    env : "node",
    tests : [
        "test/node-test.js",
        "test/hybrid-test.js"
    ]
};

config["browser tests"] = {
    env : "browser",
    tests : [
        "test/browser-test.js",
        "test/hybrid-test.js"
    ]
};
