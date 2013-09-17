var config = module.exports;
config["common"] = {
    rootPath : "../",
    testHelpers: ["helper/helper.js"]
}
config["My node test"] = {
    extends: "common",
    env : "node",
    tests : [
        "strftime/test/*-test.js"
    ]
};

config["My browser test"] = {
    extends: "common",
    env : "browser",
    sources : [
        "strftime/src/*.js"
    ],
    tests : [
        "strftime/test/*-test.js"
    ]
};
