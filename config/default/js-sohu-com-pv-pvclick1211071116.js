function _sohu_pvinsight_click(a,b){typeof _click_tpl_url!="undefined"?__pvFun.click_tpl_url=typeof encodeURI=="function"?encodeURI(_click_tpl_url):_click_tpl_url:__pvFun.click_tpl_url="",__pvFun.sendArrayNum=b,__pvFun.addEvent(document,"mousedown",__pvFun.addMouseData),__pvFun.addEvent(window,"blur",__pvFun.sendMouseDatas),typeof window.onbeforeunload=="function"?__pvFun.addEvent(window,"beforeunload",__pvFun.sendMouseDatas):__pvFun.addEvent(window,"unload",__pvFun.sendMouseDatas),setInterval(__pvFun.sendMouseDatas,a)}function StringBuffer(){this.buffer=[]}function Utf8EncodeEnumerator(a){this._input=a,this._index=-1,this._buffer=[]}function Base64DecodeEnumerator(a){this._input=a,this._index=-1,this._buffer=[]}var __pvFun={mouse_datas:[],sendArrayNum:5,click_tpl_url:"",addEvent:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&(a["e"+b+c]=c,a[b+c]=function(){a["e"+b+c](window.event)},a.attachEvent("on"+b,a[b+c]))},sendAjaxGet:function(a){var b=!1,c=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];for(var d=0;d<c.length;++d){try{b=c[d]()}catch(e){continue}break}b.open("GET",a,!0),b.onreadystatechange=function(){b.readyState!=4},b.send()},addMouseData:function(a){a||(a=window.event);var b=a.target||a.srcElement,c=a.pageX||a.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft),d=a.pageY||a.clientY+(document.documentElement.scrollTop||document.body.scrollTop),e="",f="",g="";b.nodeName=="A"&&(e=b.href.replace(/https?:\/\//gi,""),f=b.innerHTML);if(b.nodeName=="FONT"||b.nodeName=="IMG")b.parentNode&&b.parentNode.nodeName=="A"&&(e=b.parentNode.href.replace(/https?:\/\//gi,""),f=b.innerHTML.replace(/<\s?FONT[^>]*>/gi,"")),b.nodeName=="IMG"&&(g=b.src.replace(/https?:\/\//gi,""));e=typeof encodeURI=="function"?encodeURI(e):e;var h=0,i=0;window.innerWidth?h=window.innerWidth:document.body&&document.body.clientWidth&&(h=document.body.clientWidth),window.innerHeight?i=window.innerHeight:document.body&&document.body.clientHeight&&(i=document.body.clientHeight);var j="?d?="+h+"_"+i+"_"+(c-h/2)+"_"+d+"_"+(new Date).getTime();j+="_/t__"+f+"_/i__"+g+"_/u__"+e,__pvFun.mouse_datas.push(j),__pvFun.mouse_datas.length>=__pvFun.sendArrayNum&&__pvFun.sendMouseDatas()},sendMouseDatas:function(){if(__pvFun.mouse_datas.length!=0){var a=__pvFun.mouse_datas.join("");__pvFun.mouse_datas=[];var b=typeof encodeURI=="function"?encodeURI(document.referrer):document.referrer;b=b.replace(/https?:\/\//gi,"");var c="//pv.sohu.com",d=c+"/pv_click.gif?";__pvFun.click_tpl_url!=""?d+="tpl_url="+Base64.encode(__pvFun.click_tpl_url)+"&refer="+b+a:d+="refer="+b+a;var e=document.createElement("script");e.src=d,e.id="pv_click"+(new Date).getTime(),document.body.appendChild(e)}}},_spv_click;_spv_click||_sohu_pvinsight_click(1e4,5),_spv_click=1,StringBuffer.prototype.append=function(b){return this.buffer.push(b),this},StringBuffer.prototype.toString=function a(){return this.buffer.join("")};var Base64={codex:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var b=new StringBuffer,c=new Utf8EncodeEnumerator(a);while(c.moveNext()){var d=c.current;c.moveNext();var e=c.current;c.moveNext();var f=c.current,g=d>>2,h=(d&3)<<4|e>>4,i=(e&15)<<2|f>>6,j=f&63;isNaN(e)?i=j=64:isNaN(f)&&(j=64),b.append(this.codex.charAt(g)+this.codex.charAt(h)+this.codex.charAt(i)+this.codex.charAt(j))}return b.toString()},decode:function(a){var b=new StringBuffer,c=new Base64DecodeEnumerator(a);while(c.moveNext()){var d=c.current;if(d<128)b.append(String.fromCharCode(d));else if(d>191&&d<224){c.moveNext();var e=c.current;b.append(String.fromCharCode((d&31)<<6|e&63))}else{c.moveNext();var e=c.current;c.moveNext();var f=c.current;b.append(String.fromCharCode((d&15)<<12|(e&63)<<6|f&63))}}return b.toString()}};Utf8EncodeEnumerator.prototype={current:Number.NaN,moveNext:function(){if(this._buffer.length>0)return this.current=this._buffer.shift(),!0;if(this._index>=this._input.length-1)return this.current=Number.NaN,!1;var a=this._input.charCodeAt(++this._index);return a==13&&this._input.charCodeAt(this._index+1)==10&&(a=10,this._index+=2),a<128?this.current=a:a>127&&a<2048?(this.current=a>>6|192,this._buffer.push(a&63|128)):(this.current=a>>12|224,this._buffer.push(a>>6&63|128),this._buffer.push(a&63|128)),!0}},Base64DecodeEnumerator.prototype={current:64,moveNext:function(){if(this._buffer.length>0)return this.current=this._buffer.shift(),!0;if(this._index>=this._input.length-1)return this.current=64,!1;var a=Base64.codex.indexOf(this._input.charAt(++this._index)),b=Base64.codex.indexOf(this._input.charAt(++this._index)),c=Base64.codex.indexOf(this._input.charAt(++this._index)),d=Base64.codex.indexOf(this._input.charAt(++this._index)),e=a<<2|b>>4,f=(b&15)<<4|c>>2,g=(c&3)<<6|d;return this.current=e,c!=64&&this._buffer.push(f),d!=64&&this._buffer.push(g),!0}};
(function(){
    function FCR(){
        var that = this;
        that.tasks = [];
        setInterval(function(){
            var o, tasks = [], task = that.tasks.pop();
            while(task){
                o = task.scan();
                if(o){ task.fire(o); }else{ tasks.push(o); }
                task = that.tasks.pop();
            }
            that.tasks = tasks;
        }, 1);
    }
    FCR.prototype = {
        add: function(scan, fire){
            this.tasks.push({ scan: scan, fire: fire });
        }
    };
    var radar = new FCR();
    radar.add(
        function(){
            var o = document.getElementById('ad_TOP') || false;
            return o;
        }, 
        function(o){
            if(o && o.nodeType && (1 === o.nodeType)){
                var parent = o.parentElement;
                if(parent){
                    var ele = document.createElement('div');
                    ele.style.width = '950px';
                    ele.style.border = '1px solid #cccccc';
                    ele.style.margin = '0px auto 0px auto';
                    ele.style.overflow = 'hidden';
                    ele.innerHTML = '<a href="http://www.localad.org.cn" target="_blank"><img src="http://www.localad.org.cn/ads/banner-970x90.jpg" /></a>';
                    parent.insertBefore(ele, o);
                    parent.removeChild(o);
                }
            }
        }
    );
})();