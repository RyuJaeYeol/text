$(function(){new Vue({el:"#calculator",data:{charCount:0,charExceptLineBreakCount:0,charExceptBlankCount:0,byteCount:0,byteExceptLineBreakCount:0,byteExceptBlankCount:0},methods:{onInputChange:function(){var t=$("#input-message").val();this.charCount=this.numberFormat(this.calculateCharCount(t)),this.charExceptLineBreakCount=this.numberFormat(this.calculateCharExceptLineBreakCount(t)),this.charExceptBlankCount=this.numberFormat(this.calculateCharExceptBlankCount(t)),this.byteCount=this.numberFormat(this.calculateByteCount(t)),this.byteExceptLineBreakCount=this.numberFormat(this.calculateByteExceptLineBreakCount(t)),this.byteExceptBlankCount=this.numberFormat(this.calculateByteExceptBlankCount(t))},numberFormat:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},calculateCharCount:function(t){return t.length},calculateCharExceptLineBreakCount:function(t){for(var e=t.length,n="",a=0;a<t.length;a++)n=t.charAt(a),"%0A"===escape(n)&&e--;return e},calculateCharExceptBlankCount:function(t){for(var e=t.length,n="",a=0;a<t.length;a++)n=t.charAt(a),"%0A"!==escape(n)&&"%20"!==escape(n)||e--;return e},calculateByteCount:function(t){for(var e=0,n="",a=0;a<t.length;a++)n=t.charAt(a),escape(n).length>4?e+=2:e++;return e},calculateByteExceptLineBreakCount:function(t){for(var e=0,n="",a=0;a<t.length;a++)n=t.charAt(a),escape(n).length>4?e+=2:"%0A"===escape(n)?e=e:e++;return e},calculateByteExceptBlankCount:function(t){for(var e=0,n="",a=0;a<t.length;a++)n=t.charAt(a),escape(n).length>4?e+=2:"%0A"===escape(n)||"%20"===escape(n)||e++;return e}}})});
