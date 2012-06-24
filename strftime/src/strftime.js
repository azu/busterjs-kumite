// strftimeはDataオブジェクトを拡張する
if (typeof Date.prototype.strftime !== "function"){
    Date.prototype.strftime = (function(){

    })();
}