var config = module.exports;

config["My tests"] = {
    env : "node", // or "browser"
    sources : [
        "src/*.js"
    ],
    tests : [
        "test/*-test.js"
    ]
};
