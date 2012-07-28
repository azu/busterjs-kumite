buster.testCase("SinonJS", {
    setUp : function(){
        this.myLib = {
            method : function(str){
                return str;
            }
        }
    },
    "test a spy" : function(){
        var spy = this.spy(this.myLib, "method");// sinon.spy
        this.myLib.method("test");
        assert.calledOnce(spy);
    },
    "test a stub" : function(){
        var stub = this.stub(this.myLib, "method");// sinon.stub
        stub.withArgs("hello").returns("world");// "hello" を渡すと "world" を返す
        assert.equals(this.myLib.method("hello"), "world");// return "world"
    },
    "test a mock" : function(){
        var mock = this.mock(this.myLib);// sinon.stub
        mock.expects("method").withArgs("hello");// 期待値を設定
        this.myLib.method("hello");
        assert(mock);
    },
    "test async in sandbox" : {
        setUp : function(){
            // SandboxにFakeを作る
            this.sandbox.useFakeServer();
            this.sandbox.useFakeTimers();
        },
        tearDown : function(){
            // Sandboxを戻す
            this.sandbox.restore();
        },

        "test FakeTimer" : function(){
            var spy = this.spy();
            setTimeout(function(){
                spy();
            }, 16);
            this.sandbox.clock.tick(16);
            assert.called(spy);
        },
        "test FakeServer" : function(){
            var expectRes = {
                status : "OK"
            };
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/get', true);
            xhr.onreadystatechange = function(){
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200){
                    var res = JSON.parse(this.responseText);
                    assert.match(res, expectRes);
                }
            };
            xhr.send();
            this.sandbox.server.requests[0].respond(200, {}, JSON.stringify(expectRes));
        }
    }
});