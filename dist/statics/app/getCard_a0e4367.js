"use strict";function getCard(e,n){$.ajax({url:"https://isapi.zujiekeji.cn/index/coupon/receiveCoupon",type:"POST",data:{userId:e,token:n},async:!0,dataType:"json",success:function(e){confrim.innerText=e.msg,confrim.style.display="block",setTimeout(function(){confrim.style.display="none"},1500)},error:function(){}})}function getQueryString(e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(n);return null!=t?unescape(t[2]):null}var confrim=document.querySelector(".share_main_confrim");"H5"==getQueryString("type")&&(document.querySelector(".share_main_back").style.display="block"),document.querySelector(".share_main_btn").addEventListener("click",function(){{var e=navigator.userAgent,n=e.indexOf("Android")>-1||e.indexOf("Adr")>-1;!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}if("H5"==getQueryString("type")){var t=localStorage.getItem("userInfo");if(!t)return window.location.href="/#/login",!1;t=JSON.parse(t),getCard(t.id,t.token)}else n?Android.getCoupon():(window.open("getCoupon"),iOS.getCoupon())}),document.querySelector(".share_main_back").addEventListener("click",function(){window.history.back(-1)});