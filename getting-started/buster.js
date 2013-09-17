var config = module.exports;

config["My tests"] = {
    env: "node", // or "browser"
    tests: [
        "getting-started/test/*-test.js"
    ],
    rootPath: "../",
    testHelpers: ["helper/helper.js"]
};
