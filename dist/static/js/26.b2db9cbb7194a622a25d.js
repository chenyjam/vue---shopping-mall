webpackJsonp([26],{176:function(e,t,n){e.exports={default:n(188),__esModule:!0}},188:function(e,t,n){var i=n(10),A=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return A.stringify.apply(A,arguments)}},217:function(e,t,n){e.exports={default:n(218),__esModule:!0}},218:function(e,t,n){n(54),n(53),e.exports=n(221)},219:function(e,t,n){var i=n(32),A=n(3)("toStringTag"),o="Arguments"==i(function(){return arguments}()),r=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=r(t=Object(e),A))?n:o?i(t):"Object"==(s=i(t))&&"function"==typeof t.callee?"Arguments":s}},220:function(e,t,n){var i=n(219),A=n(3)("iterator"),o=n(18);e.exports=n(10).getIteratorMethod=function(e){if(void 0!=e)return e[A]||e["@@iterator"]||o[i(e)]}},221:function(e,t,n){var i=n(11),A=n(220);e.exports=n(10).getIterator=function(e){var t=A(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e))}},400:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(217),A=n.n(i),o=n(176),r=n.n(o);t.default={data:function(){return{searchValue:"",history:["haode","shima"]}},name:"history",methods:{routerback:function(){this.$router.goBack()},submit:function(){if(this.searchValue=this.searchValue.trim(),!this.searchValue)return!1;var e=!0,t=!1,n=void 0;try{for(var i,o=A()(this.history);!(e=(i=o.next()).done);e=!0){if(i.value==this.searchValue)return this.searchValue="",!1}}catch(e){t=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw n}}this.history.push(this.searchValue),localStorage.setItem("zj_history",r()(this.history)),window.location.href="/#/goodslist?goods_name="+this.searchValue,this.searchValue=""},historySearch:function(e){this.searchValue=e,window.location.href="/#/goodslist/"+this.searchValue,this.searchValue=""},cleanHistory:function(){this.history=[],localStorage.setItem("zj_history",r()(this.history))}},mounted:function(){var e=JSON.parse(localStorage.getItem("zj_history"));e||(e=[]),this.history=e,console.log(this.$route.path)}}},426:function(e,t,n){t=e.exports=n(134)(),t.push([e.i,".search_main{background-color:#f3f3f3;height:100%}.search_header{padding:10px 20px;height:50px;background-color:#fff;position:fixed;top:0;width:100%;z-index:999;border-bottom:1px solid #f3f3f3}.search_header,.search_search{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex}.search_search{width:85%;border-radius:5px;background-color:#f5f5f5;font-size:14px;color:#6d6d6d;height:30px;line-height:30px;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.search_search>i{float:left;font-size:20px;color:#bfbfbf;margin-left:10px}.search_search>input{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;background-color:#f5f5f5;border:none;border-radius:5px}.search_menu{width:45px;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;display:block;line-height:30px;text-align:right;font-size:15px;color:#313130}.search_history{position:fixed;top:50px;width:100%;left:0}.search_history_title{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;padding:0 20px;height:60px}.search_history_title>h2{font-weight:400;color:#333;font-size:15px}.search_history_title>button{border:none;background:transparent;color:#333;font-size:15px}.search_history_list{box-sizing:border-box;padding:0 20px}.search_history_list>li{height:30px;line-height:30px;display:inline-block;margin-right:10px;background-color:#fff;padding:0 5px;font-size:16px;margin-bottom:10px;text-align:center}","",{version:3,sources:["/Users/wzh/Desktop/项目/projectPath/src/components/search/search.vue"],names:[],mappings:"AACA,aACE,yBAA0B,AAC1B,WAAa,CACd,AACD,eAEE,kBAAmB,AACnB,YAAa,AACb,sBAAuB,AAIvB,eAAgB,AAChB,MAAO,AACP,WAAY,AACZ,YAAa,AACb,+BAAiC,CAClC,AACD,8BAbE,sBAAuB,AAIvB,oBAAqB,AACrB,qBAAsB,AACtB,YAAc,CAsBf,AAfD,eACE,UAAW,AACX,kBAAmB,AACnB,yBAA0B,AAE1B,eAAgB,AAChB,cAAe,AACf,YAAa,AACb,iBAAkB,AAClB,mBAAoB,AACpB,oBAAqB,AACb,WAAa,CAItB,AACD,iBACI,WAAY,AACZ,eAAgB,AAChB,cAAe,AACf,gBAAkB,CACrB,AACD,qBACI,mBAAoB,AACpB,oBAAqB,AACb,YAAa,AACrB,yBAA0B,AAC1B,YAAa,AACb,iBAAmB,CACtB,AACD,aACE,WAAY,AACZ,mBAAoB,AACpB,oBAAqB,AACb,YAAa,AACrB,cAAe,AACf,iBAAkB,AAClB,iBAAkB,AAClB,eAAgB,AAChB,aAAe,CAChB,AACD,gBACE,eAAgB,AAChB,SAAU,AACV,WAAY,AACZ,MAAQ,CACT,AACD,sBACI,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,yBAA0B,AAC1B,sCAAuC,AAC/B,8BAA+B,AACvC,yBAA0B,AAC1B,2BAA4B,AACpB,mBAAoB,AAC5B,sBAAuB,AACvB,eAAgB,AAChB,WAAa,CAChB,AACD,yBACM,gBAAiB,AACjB,WAAY,AACZ,cAAgB,CACrB,AACD,6BACM,YAAa,AACb,uBAAwB,AACxB,WAAY,AACZ,cAAgB,CACrB,AACD,qBACI,sBAAuB,AACvB,cAAgB,CACnB,AACD,wBACM,YAAa,AACb,iBAAkB,AAClB,qBAAsB,AACtB,kBAAmB,AACnB,sBAAuB,AACvB,cAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,iBAAmB,CACxB",file:"search.vue",sourcesContent:["\n.search_main {\n  background-color: #f3f3f3;\n  height: 100%;\n}\n.search_header {\n  box-sizing: border-box;\n  padding: 10px 20px;\n  height: 50px;\n  background-color: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 999;\n  border-bottom: 1px solid #f3f3f3;\n}\n.search_search {\n  width: 85%;\n  border-radius: 5px;\n  background-color: #f5f5f5;\n  box-sizing: border-box;\n  font-size: 14px;\n  color: #6d6d6d;\n  height: 30px;\n  line-height: 30px;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.search_search > i {\n    float: left;\n    font-size: 20px;\n    color: #bfbfbf;\n    margin-left: 10px;\n}\n.search_search > input {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    background-color: #f5f5f5;\n    border: none;\n    border-radius: 5px;\n}\n.search_menu {\n  width: 45px;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n          flex-grow: 0;\n  display: block;\n  line-height: 30px;\n  text-align: right;\n  font-size: 15px;\n  color: #313130;\n}\n.search_history {\n  position: fixed;\n  top: 50px;\n  width: 100%;\n  left: 0;\n}\n.search_history_title {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    box-sizing: border-box;\n    padding: 0 20px;\n    height: 60px;\n}\n.search_history_title > h2 {\n      font-weight: 400;\n      color: #333;\n      font-size: 15px;\n}\n.search_history_title > button {\n      border: none;\n      background: transparent;\n      color: #333;\n      font-size: 15px;\n}\n.search_history_list {\n    box-sizing: border-box;\n    padding: 0 20px;\n}\n.search_history_list > li {\n      height: 30px;\n      line-height: 30px;\n      display: inline-block;\n      margin-right: 10px;\n      background-color: #fff;\n      padding: 0 5px;\n      font-size: 16px;\n      margin-bottom: 10px;\n      text-align: center;\n}\n"],sourceRoot:""}])},464:function(e,t,n){var i=n(426);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(135)("9538257c",i,!0)},516:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"search_main"},[n("header",{staticClass:"search_header"},[n("div",{staticClass:"search_search"},[n("i",{staticClass:"iconfont"},[e._v("")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{type:"text",placeholder:"请输入商品名"},domProps:{value:e.searchValue},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submit(t)},input:function(t){t.target.composing||(e.searchValue=t.target.value)}}})]),e._v(" "),n("span",{staticClass:"search_menu",on:{click:e.routerback}},[e._v("\n                取消\n            ")])]),e._v(" "),n("div",{staticClass:"search_history"},[n("div",{staticClass:"search_history_title"},[n("h2",[e._v("历史搜索")]),e._v(" "),n("button",{attrs:{type:"button"},on:{click:function(t){e.cleanHistory()}}},[e._v("清空")])]),e._v(" "),n("ul",{staticClass:"search_history_list"},e._l(e.history,function(t){return n("li",{on:{click:function(n){e.historySearch(t)}}},[e._v(e._s(t))])}))])])])},staticRenderFns:[]}},86:function(e,t,n){n(464);var i=n(16)(n(400),n(516),null,null);e.exports=i.exports}});
//# sourceMappingURL=26.b2db9cbb7194a622a25d.js.map