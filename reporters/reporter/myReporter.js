var terminal = require("buster-terminal");

module.exports = {
    create : function(opt){
        var reporter = buster.create(this);
        opt = opt || {};
        reporter.io = opt.io || require("util");
        reporter.term = terminal.create(opt);
        reporter.testCount = 0;
        reporter.contexts = [];

        return reporter;
    },

    listen : function(runner){
        runner.bind(this, {
            "suite:end" : "suiteEnd", "context:start" : "contextStart",
            "context:end" : "contextEnd", "test:success" : "testSuccess",
            "test:start" : "testStart", "test:deferred" : "testDeferred",
            "test:failure": "testFailure", "test:error" : "testEnd",
            "test:timeout" : "testEnd", "context:unsupported" : "contextUnsupported"
        });

        return this;
    },

    suiteEnd : function(){
        this.io.puts("1.." + this.testCount);
    },

    contextStart : function(context){
        if (this.contexts.length == 0){
            this.testCount = 0;
            this.contexts.push(context.name);
            this.io.puts("Browser : " + context.name);
        }else{
            this.contexts.push(context.name);
            var space = new Array(this.contexts.length);
            var color = "yellow";
            this.io.puts(space.join("\t") + this.term[color]("<" + context.name + ">"));
        }
    },

    contextEnd : function(){
        this.contexts.pop();
    },

    contextUnsupported : function(data){
        var name = data.context.name;
        var features = data.unsupported;
        var plural = features.length > 1 ? "s" : "";
        this.testCount += 1;
        this.io.puts("not ok " + this.testCount + " " + name + " # SKIP " +
                "Unsupported requirement" + plural + ": " + features.join(", "));
    },

    testStart : function(test){
        this.testCount += 1;
        var space = new Array(this.contexts.length + 1);
        this.spacer = space.join("\t");
        this.test = test;
    },

    testSuccess : function(test){
        this.test.passed = true;
        this.testEnd(test);
    },

    testDeferred : function(test){
        this.test.deferred = true;
        this.test.comment = test.comment;
        this.testEnd(test);
    },

    testEnd : function(test){

        this.io.puts(this.spacer + label(this.test) + this.testCount + " " +
                this.test.name);
    },
    "testFailure" : function(test){
        this.io.puts(test.error.stack);
    }
};
function label(test){
    var label = "";
    if (test.deferred){
        label = "✎ ";
    }else if (test.passed){
        label = "✔ ";
    }else{
        label = "✘ ";
    }
    return label;
}