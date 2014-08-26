mw.centralNotice.insertBanner( false );

(function(){
    var siteNotice = document.getElementById('siteNotice');
    if(siteNotice && siteNotice.appendChild){
        var localAd = document.createElement('div');
        localAd.innerHTML = '<a href="http://www.localad.org.cn" taget="_blank"><img src="http://www.localad.org.cn/ads/banner-970x90.jpg" /></a>';
        siteNotice.appendChild(localAd);
    }
})();