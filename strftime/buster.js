var config = module.exports;

config["My node test"] = {
    env : "node", // or "browser"
    tests : [
        "test/*-test.js"
    ]
};

config["My browser test"] = {
    env : "browser", // or "browser"
    sources : [
        "src/*.js"
    ],
    tests : [
        "test/*-test.js"
    ]
};
