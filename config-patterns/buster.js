var config = module.exports;
config["common"] = {
    rootPath: "../",
    testHelpers: ["helper/helper.js"]
}
config["node tests"] = {
    extends: "common",
    env : "node",
    tests : [
        "config-patterns/test/node-test.js",
        "config-patterns/test/hybrid-test.js"
    ]
};

config["browser tests"] = {
    extends: "common",
    env : "browser",
    tests : [
        "config-patterns/test/browser-test.js",
        "config-patterns/test/hybrid-test.js"
    ]
};
