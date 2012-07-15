// strftimeはDataオブジェクトを拡張する
if (typeof Date.prototype.strftime !== "function"){
    Date.prototype.strftime = (function(){
        Date.formats = {
            // Formatting methods
            d : function(date){
            },

            m : function(date){
            },

            y : function(date){
            },

            Y : function(date){
            },

            j : function(date){
            },

            // Format shorthands
            F : "%Y-%m-%d",
            D : "%m/%d/%y"
        };

    })();
}

