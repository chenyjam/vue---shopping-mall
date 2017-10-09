"use strict";

var shareConfrim = document.querySelector('.share_main_openLink');

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

document.querySelector(".share_main_sharebtn").addEventListener('click', function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (getQueryString("type") == 'H5') {
        var userInfo = localStorage.getItem('userInfo');
        if (!userInfo) {
            window.location.href = "/#/login";
            return false;
        }
        userInfo = JSON.parse(userInfo);
        (function () {
            $.ajax({
                url: "https://isapi.zujiekeji.cn/index/coupon/activtyShare",
                type: "POST",
                data: {
                    userId: userInfo.id,
                    token: userInfo.token
                },
                async: true,
                dataType: "json",
                success: function success(data) {
                    /* 微信监控 */
                    var title = data.data.title,
                        link = data.data.shareurl,
                        imgurl = data.data.sharepic,
                        desc = data.data.content;
                    $.ajax({
                        url: "https://isapi.zujiekeji.cn/index/wechat/getSignature",
                        type: "GET",
                        data: {
                            "url": link
                        },
                        async: true,
                        dataType: "json",
                        success: function success(data) {
                            /* ajax请求后调用 */
                            shareConfrim.style.display = 'block';
                            wx.config({
                                debug: false,
                                appId: data.data.appId,
                                timestamp: data.data.timestamp,
                                nonceStr: data.data.nonceStr,
                                signature: data.data.signature,
                                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ"]
                            });
                            wx.error(function (res) {
                                /*  alert(JSON.stringify(res)); */
                            });
                        },
                        error: function error(_error) {
                            /*  alert(JSON.stringify(error)); */
                        }
                    });

                    wx.ready(function (res) {
                        //分享给朋友
                        wx.onMenuShareAppMessage({
                            title: title,
                            desc: desc,
                            link: link,
                            imgUrl: imgurl,
                            trigger: function trigger(res) {},
                            success: function success(res) {},
                            cancel: function cancel(res) {},
                            fail: function fail(res) {}
                        });
                        //分享到朋友圈
                        wx.onMenuShareTimeline({
                            title: title,
                            link: link,
                            imgUrl: imgurl,
                            success: function success(res) {},
                            cancel: function cancel(res) {}
                        });
                        wx.onMenuShareQQ({
                            title: title,
                            desc: desc,
                            link: link,
                            imgUrl: imgurl,
                            success: function success(res) {},
                            cancel: function cancel(res) {}
                        });
                    });
                },
                error: function error(_error2) {}
            });
        })();
    } else if (isAndroid) {
        Android.shareActivity();
    } else {
        window.open("shareActivity");
        iOS.shareActivity();
    }
});

document.querySelector(".share_main_back").addEventListener('click', function () {
    window.history.back(-1);
});