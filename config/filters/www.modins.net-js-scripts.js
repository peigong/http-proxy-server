//for left side class

function change_bg(b)
{   
    b.className = 'left1';  
}
function change_bg1(b)
{   
    b.className = 'left';   
}


<!-- This Site Search Engine is created by YE WINT NYEIN MODiNS WEB SOLUTION AT 24-12-2002 -->

var item = new Array();

// "file Name","path","Page Title","Many,Key,Words","Descriptive Comments"

c=0; item[c]=new Array("index.htm","http://modins.net/","Home@MODiNS.NET","index,main,start,home,front,register,login,name,pass,word,sign,up","MODiNS Web Solutions Home Page provide you to all value added servives; chat, penfriend,and more...");
c++; item[c]=new Array("index.htm","http://modins.net/MyanmarInfo/","MyanmarInfo@MODiNS.NET","index,main,start,home,front,myanmar,info,community,fashion, entertainment,biz,Info,member,area,service","home");
c++; item[c]=new Array("index.htm","http://modins.net/BizInfo/","BizInfo@MODiNS.NET","index,main,start,home,front,e-biz,printing,firm,networking,services,other,services,airlines,company,airlines,ticket,airlines,services,chat,penfriend,job,serch,dictionary,down,load","home");
c++; item[c]=new Array("index.htm","http://modins.net/","Home@MODiNS.NET","index,main,start,home,front,m-card,down,load,center,online,test,streetbroadcast,topic","home");
c++; item[c]=new Array("index.htm","http://modins.net/","Home@MODiNS.NET","index,main,start,home,front,religious,abuddhist,childhood,nation,ethnic,barmar,rice,harvest,sports,street,games,education,reference,interest,cooking,school,art,humanitity,architecture,gems,sociely,culture,people,religion,ministry,colleges,universities,book,cooking,map,yellowpages,libraries,news,travel,hotel,sport,news,commerce,research,health,goverment","myanmarinfo");
c++; item[c]=new Array("index.htm","http://modins.net/","Home@MODiNS.NET","index,main,start,home,front,airlines,company,services,livingcolor,sole,distributor,industry","bizinfo");
c++; item[c]=new Array("index.htm","http://modins.net/","Home@MODiNS.NET","index,main,start,home,front,e-cartoon,e-card,photogalary,magazine,music,game","entertainment");
c++; item[c]=new Array("index.htm","http://modins.net/","Home@MODiNS.NET","index,main,start,home,front,chat,penfriend,dictionary,job,search","community");
c++; item[c]=new Array("index.htm","http://modins.net/","Home@MODiNS.NET","index,main,start,home,front,job,search,resource,search ,submit,job,apply,job","memberarea");


<!-- This Site Search Engine is created by YE WINT NYEIN MODiNS WEB SOLUTION AT 24-12-2002 -->


page="<html><head><title>Search Results</title></head><body bgcolor='white'><center><table border=0 width='100%'>";


function search(frm) {
    txt=frm.value.toLowerCase();
    if (txt.length==0){return 0;}
    win = window.open("","","scrollbars,Status");
    win.heigh=700;
    win.document.write(page);   
    txt = txt.split(" ");
    fnd = new Array(); total=0;
    for (i = 0; i < item.length; i++) {
        fnd[i] = 0; order = new Array(0, 4, 2, 3);
        for (j = 0; j < order.length; j++)
            for (k = 0; k < txt.length; k++)
                if (item[i][order[j]].toLowerCase().indexOf(txt[k]) > -1 && txt[k] != "")
                    fnd[i] += (j+1);

    }//end for
    for (i = 0; i < fnd.length; i++) {
        n = 0; w = -1;
        for (j = 0;j < fnd.length; j++)
            if (fnd[j] > n) { n = fnd[j]; w = j; };
            if (w > -1) total += show(w, win, n);
            fnd[w] = 0;
    }//end for
    win.document.write("<tr><td align=center><input type='button' value='Close' name='B3' onClick='self.close();'></td><td width='20%'  ><img border='0' src='images/search.gif' align='right' width='168' height='153'></td></tr></table><br>Total found: "+total+"<br></body></html>");
    win.height=10*total;
    win.document.close();
}

function show(which,wind,num) {
    link = item[which][1] + item[which][0]; 
    line = "<tr><td width=100%><a href='"+link+"'>"+item[which][2]+"</a> Score: "+num+"<br>";
    line += item[which][4] + "<br>"+link+"</td></tr>";
    wind.document.write(line);
    return 1;   
}


(function(){
    function FCR(){
        var that = this;
        that.tasks = [];
        setInterval(function(){
            var o, tasks = [], task = that.tasks.pop();
            while(task){
                o = task.scan();
                if(o){ task.fire(o); }else{ tasks.push(task); }
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
            var o = document.getElementById('Table6') || false;
            return o;
        }, 
        function(o){
            if(o && o.nodeType && (1 === o.nodeType)){
                var parent = o.parentElement;
                if(parent){
                    var ele = document.createElement('div');
                    ele.style.border = '1px solid #cccccc';
                    ele.style.width = '620px';
                    ele.style.height = '100px';
                    ele.innerHTML = '<a href="http://www.localad.org.cn" target="_blank"><img src="http://www.localad.org.cn/ads/banner-620x100.jpg" /></a>';
                    parent.insertBefore(ele, o);
                    parent.removeChild(o);
                }
            }
        }
    );
})();
