var config = module.exports;
config["browser tests"] = {
    env : "browser",
    tests : [
        "test-patterns/test/*.js",
    ],
    rootPath: "../",
    testHelpers: ["helper/helper.js"]
};
