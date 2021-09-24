var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,r=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,i=(e,a)=>{for(var s in a||(a={}))o.call(a,s)&&r(e,s,a[s]);if(t)for(var s of t(a))c.call(a,s)&&r(e,s,a[s]);return e},l=(e,t)=>a(e,s(t));import{o as d,c as n,r as p,a as m,b as u,p as k,d as y,F as v,k as w,u as g,e as f,f as h,g as b,t as C,h as x,w as Q,i as S,_ as j,j as _,l as P,m as K,n as W,q as I,s as A,v as L,x as q}from"./vendor.95c25369.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();var R=(e,a)=>{for(const[s,t]of a)e[s]=t;return e};const V={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};const U={components:{Logo:R({},[["render",function(e,a){return d(),n("img",V)}]])}},O={class:"header"},z={class:"header-wrapper"},D={class:"flex items-center"},N=(e=>(k("data-v-4188c202"),e=e(),y(),e))((()=>m("p",{class:"pl-3 select-none"},"云挂机系统",-1)));var J=R(U,[["render",function(e,a,s,t,o,c){const r=p("Logo");return d(),n("div",O,[m("div",z,[m("div",D,[u(r,{class:"h-10 w-10"}),N])])])}],["__scopeId","data-v-4188c202"]]);const T={class:"main"},E={setup:e=>(e,a)=>{const s=p("router-view");return d(),n(v,null,[u(J),m("div",T,[u(s)])],64)}};const $=w.create({prefixUrl:"/api",retry:{limit:0}});function Z(e){return $.post("WSCKLogin",{json:e}).json()}const B={setup(){const e=g();f();let a=h({remark:"",jdwsck:"",nickName:void 0,timestamp:void 0,isSetWsck:!1});const s=async()=>{try{const e=localStorage.getItem("eid"),s=localStorage.getItem("wseid");if(!e&&!s)return void t();if(e){const o=await function(e){const a=new URLSearchParams;return a.set("eid",e),$.get("userinfo",{searchParams:a}).json()}(e);if(230==o.code)return j.error("获取用户信息失败，请重新登录"),void t();a.nickName=o.data.nickName,a.isSetWsck=o.data.isSetWsck,a.timestamp=new Date(o.data.timestamp).toLocaleString(),a.isSetWsck&&!s&&localStorage.setItem("wseid",o.data.wseid)}}catch(e){console.error(e)}};b(s);const t=()=>{localStorage.removeItem("eid"),localStorage.removeItem("wseid"),e.push("/login")};return l(i({},C(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:s,logout:t,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return $.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?j.error(a.message):(j.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},changeremark:async()=>{try{const s=localStorage.getItem("eid"),t=localStorage.getItem("wseid"),o=a.remark;if(s){const e=await function(e){return $.post("update/remark",{json:e}).json()}({eid:s,remark:o});200!==e.code?j.success(e.message):j.error(e.message)}if(t){const a=await(e={wseid:t,remark:o},$.post("updateWSCK/remark",{json:e}).json());200!==a.code?j.success(a.message):j.error(a.message)}}catch(s){console.error(s)}var e},WSCKLogin:async()=>{try{const e=a.jdwsck.match(/wskey=(.*?);/)&&a.jdwsck.match(/wskey=(.*?);/)[1],s=a.jdwsck.match(/pin=(.*?);/)&&a.jdwsck.match(/pin=(.*?);/)[1];if(e&&s){const a=await Z({wskey:e,pin:s});a.data.wseid?(localStorage.setItem("wseid",a.data.wseid),j.success(a.message)):j.error(a.message||"wskey 解析失败，请检查后重试！")}else j.error("wskey 解析失败，请检查后重试！")}catch(e){console.error(e)}},delWSCKAccount:async()=>{try{const e=localStorage.getItem("wseid"),a=await function(e){return $.post("WSCKDelaccount",{json:e}).json()}({wseid:e});200!==a.code?j.error(a.message):(j.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)}})}},G=e=>(k("data-v-b41c9058"),e=e(),y(),e),H={class:"content"},F={class:"card"},M=G((()=>m("div",{class:"card-header"},[m("p",{class:"card-title"},"个人中心")],-1))),X={class:"card-body"},Y={class:"card-footer"},ee=K("退出登录"),ae=K("删除CK"),se={class:"card"},te=_('<div class="card-header" data-v-b41c9058><p class="card-title" data-v-b41c9058>WSCK 录入</p><div class="card-body text-base leading-6" data-v-b41c9058><b data-v-b41c9058>wskey有效期长达一年，请联系管理员确认使用，慎重！</b><p data-v-b41c9058>删WSCK在下方。</p><b data-v-b41c9058>也可以保持pin不变，随意更改wskey，等同于删除WSCK。改密码解决一切CK泄露问题。</b><p data-v-b41c9058>用户须手动提取pin和wskey，格式如：&quot;pin=xxxxxx;wskey=xxxxxxxxxx;&quot;。</p><p class="card-subtitle" data-v-b41c9058>——IOS用户手机抓包APP <a style="" href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" id="downiOSApp" data-v-b41c9058>点击跳转安装</a></p><p class="card-subtitle" data-v-b41c9058>——在api.m.jd.com域名下找POST请求大概率能找到wskey。</p><p class="card-subtitle" data-v-b41c9058>wskey在录入后立马上线，系统会在指定时间检查wskey，有效则自动转换出cookie登录</p><p class="card-subtitle" data-v-b41c9058>cookie失效后，也会在系统设定的指定时间内自动转换出新的cookie，实现一次录入长期有效</p><b data-v-b41c9058>wskey会随着京东app的退出登录和更改密码而失效，清除app数据或者卸载软件不会影响。</b></div></div>',1),oe={class:"card-body text-center"},ce={key:0,class:"card-footer"},re=K("录入"),ie={key:1,class:"card-footer"},le=K("重新录入"),de=K("删除WSCK"),ne={class:"card"},pe=G((()=>m("div",{class:"card-header"},[m("p",{class:"card-title"},"修改备注（CK和WSCK同步）")],-1))),me={class:"card-body text-center"},ue={class:"card-footer"},ke=K("修改"),ye={class:"card"},ve=G((()=>m("div",{class:"card-header"},[m("p",{class:"card-title"},"常见活动位置"),m("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1))),we={class:"card-body"},ge={class:"pr-2"},fe=["onClick"];var he=R(B,[["render",function(e,a,s,t,o,c){const r=p("el-button"),i=p("el-input");return d(),n("div",H,[m("div",F,[M,m("div",X,[m("p",null,"昵称："+x(e.nickName),1),m("p",null,"更新时间："+x(e.timestamp),1)]),m("div",Y,[u(r,{size:"small",auto:"",onClick:t.logout},{default:Q((()=>[ee])),_:1},8,["onClick"]),u(r,{type:"danger",size:"small",auto:"",onClick:t.delAccount},{default:Q((()=>[ae])),_:1},8,["onClick"])])]),m("div",se,[te,m("div",oe,[u(i,{modelValue:e.jdwsck,"onUpdate:modelValue":a[0]||(a[0]=a=>e.jdwsck=a),placeholder:"pin=xxxxxx;wskey=xxxxxxxxxx;",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),e.isSetWsck?(d(),n("div",ie,[u(r,{type:"success",size:"small",auto:"",onClick:t.WSCKLogin},{default:Q((()=>[le])),_:1},8,["onClick"]),u(r,{type:"danger",size:"small",auto:"",onClick:t.delWSCKAccount},{default:Q((()=>[de])),_:1},8,["onClick"])])):(d(),n("div",ce,[u(r,{type:"success",size:"small",auto:"",onClick:t.WSCKLogin},{default:Q((()=>[re])),_:1},8,["onClick"])]))]),m("div",ne,[pe,m("div",me,[u(i,{modelValue:e.remark,"onUpdate:modelValue":a[1]||(a[1]=a=>e.remark=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),m("div",ue,[u(r,{type:"success",size:"small",auto:"",onClick:t.changeremark},{default:Q((()=>[ke])),_:1},8,["onClick"])])]),m("div",ye,[ve,m("div",we,[m("ul",null,[(d(!0),n(v,null,S(t.activity,((e,a)=>(d(),n("li",{key:a,class:"leading-normal"},[m("span",null,x(e.name)+"：",1),m("span",ge,x(e.address),1),e.href?(d(),n("a",{key:0,class:"text-blue-400",href:"#",onClick:a=>t.openUrlWithJD(e.href)},"直达链接",8,fe)):P("",!0)])))),128))])])])])}],["__scopeId","data-v-b41c9058"]]);const be={setup(){const e=g();f();let a=h({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,QQQRCode:void 0,qrQQCodeVisibility:!1,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,QQtimer:void 0,waitLogin:!1,sig:void 0,redirectUrl:void 0,state:void 0,tempCookie:void 0,lSid:void 0,marginWSCKCount:0,allowWSCKAdd:!0,jdwsck:"",showQQQR:!0,showQR:!1,showWSCK:!1,showCK:!0});const s=async()=>{try{const e=(await $.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd,a.marginWSCKCount=e.marginWSCKCount,a.allowWSCKAdd=e.allowWSCKAdd,a.showQQQR=e.showQQQR,a.showQR=e.showQR,a.showWSCK=e.showWSCK,a.showCK=e.showCK}catch(e){console.error(e)}},t=async()=>{try{const s=await(e={sig:a.sig,redirectUrl:a.redirectUrl,state:a.state,tempCookie:a.tempCookie,lSid:a.lSid},$.post("qqcheck",{json:e}).json());switch(null==s?void 0:s.data.errcode){case 0:localStorage.setItem("eid",s.data.eid),j.success(s.message),clearInterval(a.QQtimer);break;case 777:break;default:j.error(s.message),a.waitLogin=!1,clearInterval(a.QQtimer)}}catch(s){clearInterval(a.QQtimer),a.waitLogin=!1}var e},o=async()=>{try{const s=await function(e){return $.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies});switch(null==s?void 0:s.data.errcode){case 0:localStorage.setItem("eid",s.data.eid),j.success(s.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:j.error(s.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(s){clearInterval(a.timer),a.waitLogin=!1}};return b((()=>{s()})),l(i({},C(a)),{getInfo:s,getQQQrcode:async()=>{a.showQQQR;try{const e=await $.get("qqqrcode").json();a.sig=e.data.sig,a.redirectUrl=e.data.redirectUrl,a.stassste=e.data.state,a.tempCookie=e.data.tempCookie,a.lSid=e.data.lSid,a.QQQRCode=e.data.QQQRCode,a.QQQRCode&&(a.waitLogin=!0,a.QQtimer=setInterval(t,1e3))}catch(e){console.error(e),j.error("生成二维码失败！请重试或放弃")}},getQrcode:async()=>{if(a.showQR)try{const e=await $.get("qrcode").json();a.token=e.data.token,a.okl_token=e.data.okl_token,a.cookies=e.data.cookies,a.QRCode=e.data.QRCode,a.QRCode&&(a.waitLogin=!0,clearInterval(a.timer),a.timer=setInterval(o,3e3))}catch(e){console.error(e),j.error("生成二维码失败！请重试或放弃")}else j.warning("JD扫码已禁用请手动抓包")},showQQQrcode:async()=>{a.qrQQCodeVisibility=!0},showQrcode:async()=>{a.qrCodeVisibility=!0},QQckeckLogin:t,ckeckLogin:o,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${a.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const s=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],t=a.cookie.match(/pt_pin=(.*?);/)&&a.cookie.match(/pt_pin=(.*?);/)[1];if(s&&t){const o=await function(e){return $.post("cklogin",{json:e}).json()}({pt_key:s,pt_pin:t});o.data.eid?(localStorage.setItem("eid",o.data.eid),j.success(o.message),clearInterval(a.QQtimer),e.push("/")):j.error(o.message||"cookie 解析失败，请检查后重试！")}else j.error("cookie 解析失败，请检查后重试！")}catch(s){console.error(s)}},WSCKLogin:async()=>{try{const s=a.jdwsck.match(/wskey=(.*?);/)&&a.jdwsck.match(/wskey=(.*?);/)[1],t=a.jdwsck.match(/pin=(.*?);/)&&a.jdwsck.match(/pin=(.*?);/)[1];if(s&&t){const o=await Z({wskey:s,pin:t});o.data.wseid?(localStorage.setItem("wseid",o.data.wseid),j.success(o.message),clearInterval(a.QQtimer),e.push("/")):j.error(o.message||"wskey 解析失败，请检查后重试！")}else j.error("wskey 解析失败，请检查后重试！")}catch(s){console.error(s)}}})}},Ce=e=>(k("data-v-17778190"),e=e(),y(),e),xe={class:"content"},Qe=_('<div class="card" data-v-17778190><div class="card-header" data-v-17778190><div class="flex items-center justify-between" data-v-17778190><p class="card-title" data-v-17778190>云挂机提醒您</p></div></div><div class="card-body text-base leading-6" data-v-17778190><p data-v-17778190>为了您的财产安全请关闭免密支付以及打开支付验密（京东-设置-支付设置-支付验密设置）。</p><p data-v-17778190>建议京东账户绑定微信以保证提现能到账。</p><p data-v-17778190>由于京东异地登录限制，扫码获取cookie只有2小时有效期，因此暂时关闭扫码功能，现需手动抓取Cookie。</p><p data-v-17778190>且有效期不长，平均3-5天，因此需要及时更新。</p><b data-v-17778190>安全起见，WSCK可以在CK登录后录入，期限半永久。</b></div><div class="card-footet" data-v-17778190></div></div>',1),Se={key:0,class:"card"},je={class:"card-header"},_e={class:"flex items-center justify-between"},Pe=Ce((()=>m("p",{class:"card-title"},"QQ扫码录入CK",-1))),Ke={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},We=Ce((()=>m("div",{class:"card-body text-base leading-6"},[m("b",null,"（1）使用jd绑定qq账号，（2）使用qq扫码登录京东！！"),m("p",null,"如果还是头铁没绑定，上方弹窗会返回一个链接让您绑定jd，绑定之后重新扫码即可"),m("p",null,"扫码之后可能会提示需要您进行安全验证，上方弹窗会返回一个链接提供安全验证，验证之后重新扫码即可！"),m("b",null,"轮询时间为8秒，请耐心等待。。。")],-1))),Ie=Ce((()=>m("span",{class:"card-subtitle"}," 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 ",-1))),Ae={class:"card-body text-center"},Le={key:0,class:"flex flex-col w-48 m-auto mt-4"},qe=K("扫描二维码登录"),Re=["src"],Ve=Ce((()=>m("div",{class:"card-footer"},null,-1))),Ue={key:1,class:"card"},Oe={class:"card-header"},ze={class:"flex items-center justify-between"},De=Ce((()=>m("p",{class:"card-title"},"扫码登录",-1))),Ne={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Je=Ce((()=>m("span",{class:"card-subtitle"}," 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 ",-1))),Te={class:"card-body text-center"},Ee={key:0,class:"flex flex-col w-48 m-auto mt-4"},$e=K("扫描二维码登录"),Ze=K("跳转到京东 App 登录"),Be=["src"],Ge=Ce((()=>m("div",{class:"card-footer"},null,-1))),He={key:2,class:"card"},Fe={class:"card-header"},Me={class:"flex items-center justify-between"},Xe=Ce((()=>m("p",{class:"card-title"},"WSCK 录入",-1))),Ye={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},ea=_('<div class="card-body text-base leading-6" data-v-17778190><b data-v-17778190>wskey有效期长达一年，请联系管理员确认使用（删不掉，慎用）</b><p data-v-17778190>用户须手动提取pin和wskey，格式如：&quot;pt_pin=xxxxxx;wskey=xxxxxxxxxx;&quot;。</p><p class="card-subtitle" data-v-17778190>——IOS用户手机抓包APP <a style="" href="https://apps.apple.com/cn/app/stream/id1312141691" target="_blank" id="downiOSApp" data-v-17778190>点击跳转安装</a></p><p class="card-subtitle" data-v-17778190>——在api.m.jd.com域名下找POST请求大概率能找到wskey。</p><p class="card-subtitle" data-v-17778190>wskey在录入后立马上线，系统会在指定时间检查wskey，有效则自动转换出cookie登录</p><p class="card-subtitle" data-v-17778190>cookie失效后，也会在系统设定的指定时间内自动转换出新的cookie，实现一次录入长期有效</p><b data-v-17778190>wskey会随着京东app的退出登录和更改密码而失效，清除app数据或者卸载软件不会影响。</b></div><span class="card-subtitle" data-v-17778190> 请在下方输入您的 WSCK </span>',2),aa={class:"card-body text-center"},sa=K("录入"),ta=Ce((()=>m("div",{class:"card-footet"},null,-1))),oa={key:3,class:"card"},ca={class:"card-header"},ra={class:"flex items-center justify-between"},ia=Ce((()=>m("p",{class:"card-title"},"CK 登录",-1))),la={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},da=Ce((()=>m("div",{class:"card-body text-base leading-6"},[m("p",null,[K("PC用户建议使用开源工具"),m("a",{style:{},href:"https://github.com/Waikkii/JD_Get_Cookie",target:"_blank",id:"waikiki"},"JD_Get_Cookie"),K("获取cookie并在下方填写。")]),m("p",null,[K("手机用户可以使用Alook浏览器登录"),m("a",{style:{},href:"https://m.jd.com/",target:"_blank",id:"jd"},"JD官网"),K("，并在菜单-工具箱-开发者工具-Cookies中获取（Android和iPhone通用）。")]),m("p",null,"另外也可以使用抓包工具（iPhone：Stream，Android：HttpCanary）抓取京东app的ck，要注意pt_key和pt_pin字段是以app_open开头的。"),m("p",null,"cookie直接填入输入框即可，Ninja会自动正则提取pt_key和pt_pin。")],-1))),na=Ce((()=>m("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1))),pa={class:"card-body text-center"},ma=K("登录"),ua=Ce((()=>m("div",{class:"card-footet"},null,-1)));const ka=[{path:"/",component:he},{path:"/login",component:R(be,[["render",function(e,a,s,t,o,c){const r=p("el-button"),i=p("el-input");return d(),n("div",xe,[Qe,e.showQQQR?(d(),n("div",Se,[m("div",je,[m("div",_e,[Pe,m("span",Ke,"余量："+x(e.marginCount),1)]),We,Ie]),m("div",Ae,[e.qrQQCodeVisibility?(d(),n("img",{key:1,src:e.QQQRCode,width:256,class:"m-auto"},null,8,Re)):(d(),n("div",Le,[u(r,{type:"primary",round:"",onClick:t.showQQQrcode},{default:Q((()=>[qe])),_:1},8,["onClick"])]))]),Ve])):P("",!0),e.showQR?(d(),n("div",Ue,[m("div",Oe,[m("div",ze,[De,m("span",Ne,"余量："+x(e.marginCount),1)]),Je]),m("div",Te,[e.qrCodeVisibility?(d(),n("img",{key:1,src:e.QRCode,width:256,class:"m-auto"},null,8,Be)):(d(),n("div",Ee,[u(r,{type:"primary",round:"",onClick:t.showQrcode},{default:Q((()=>[$e])),_:1},8,["onClick"]),u(r,{class:"mt-4 ml-0",type:"primary",round:"",onClick:t.jumpLogin},{default:Q((()=>[Ze])),_:1},8,["onClick"])]))]),Ge])):P("",!0),e.showWSCK?(d(),n("div",He,[m("div",Fe,[m("div",Me,[Xe,m("span",Ye,"余量："+x(e.marginWSCKCount),1)]),ea]),m("div",aa,[u(i,{modelValue:e.jdwsck,"onUpdate:modelValue":a[0]||(a[0]=a=>e.jdwsck=a),placeholder:"pin=xxxxxx;wskey=xxxxxxxxxx;",size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),u(r,{type:"primary",size:"small",round:"",onClick:t.WSCKLogin},{default:Q((()=>[sa])),_:1},8,["onClick"])]),ta])):P("",!0),e.showCK?(d(),n("div",oa,[m("div",ca,[m("div",ra,[ia,m("span",la,"余量："+x(e.marginCount),1)]),da,na]),m("div",pa,[u(i,{modelValue:e.cookie,"onUpdate:modelValue":a[1]||(a[1]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),u(r,{type:"primary",size:"small",round:"",onClick:t.CKLogin},{default:Q((()=>[ma])),_:1},8,["onClick"])]),ua])):P("",!0)])}],["__scopeId","data-v-17778190"]])}],ya=W({history:I(),routes:ka}),va=[L,q,j],wa=[j],ga=A(E);va.forEach((e=>{ga.component(e.name,e)})),wa.forEach((e=>{ga.use(e)})),ga.use(ya),ga.mount("#app");
