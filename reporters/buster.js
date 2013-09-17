var config = module.exports;
config["My tests"] = {
    env : "browser",
    tests : [
        "reporters/test/*-test.js"
    ],
    rootPath: "../",
    testHelpers: ["helper/helper.js"]
};
