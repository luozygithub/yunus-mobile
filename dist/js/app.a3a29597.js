(function(e){function t(t){for(var a,o,r=t[0],c=t[1],l=t[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},i={app:0},s=[];function r(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1235b46c":"539881ba","chunk-59b29ffc":"ef58cdab","chunk-6aef7742":"08988f9c","chunk-6c5fe607":"2f5aacb7","chunk-a63dd75c":"d220dd27","chunk-b8887920":"c09b08be","chunk-d1f2ce32":"7d3af6a3","chunk-f1992864":"aa5c31bc"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-1235b46c":1,"chunk-59b29ffc":1,"chunk-6aef7742":1,"chunk-6c5fe607":1,"chunk-a63dd75c":1,"chunk-b8887920":1,"chunk-d1f2ce32":1,"chunk-f1992864":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1235b46c":"eadde2bf","chunk-59b29ffc":"49e356da","chunk-6aef7742":"a7262b66","chunk-6c5fe607":"82c1618c","chunk-a63dd75c":"7972276a","chunk-b8887920":"91f34e41","chunk-d1f2ce32":"4f35ac5b","chunk-f1992864":"beba2623"}[e]+".css",i=c.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return t()}var p=document.getElementsByTagName("style");for(r=0;r<p.length;r++){l=p[r],u=l.getAttribute("data-href");if(u===a||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[e],d.parentNode.removeChild(d),n(s)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,n[1](p)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01ae":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAL9JREFUWEdj1HOd/J+BAJjTFcCgqSpKSBlcnvPfbwYmBvzG/r1wgeFncjJBMxmJceDSyaEMOuriBA0jRcHfs2cZfkRGEtQy6kBcQTQaggQTDwEFoyE4GoLQEBgtZkaLGVAIjFZ1eIqE0UwymklGMwmBOnM0k4xmktFMMppJyGxaj/ZJyAw4uLbREBwNwdFe3ejQB1IIjPbqRnt1ZBSKI6sm6ap2Z1BVFCY6nGR+f2RgYfiHV/3fq1cZfpWUEDQTAN7VT8AIVg6MAAAAAElFTkSuQmCC"},"01b7":function(e,t,n){},"047b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABXRJREFUWEftmHtQVHUUx7+/3QVWXiLRqps8dyXF1HRoAgUNQVJrGqPx0RgNY0IymfhCFIV8FZgiYYJuGaFjqJNaWAo+CCHMIkVzJE13UR4CIi91l2WX3Xube5m9sAMK7rJN43D//D3O+cy55/x+3/MjYsk6GiZ+B7MiMCVAihuRW1CzN6ebFaepEzHxnAxV1c3wey3FJC9kAPCZj6CbdwKt01Mm5cd/koM35fX05uRc5BfcfGpISwO+5DMchKZptoqLziuwKSkX12/U9RnUUoDDhjpi9YoQzHn75U5Ahkqvp3D4aCm27TiL+gZlr6D9DWg7yArRkYFYvCgAQgHB3d1HQe4k76NdY+aDJ7TmgFQqDdJlv0KWWYy2Nt1jQfsLkMcjmBM2AauXh2CoyAENPxZCHrcT6ltVIPnwpYUeYkiSP4Jo7nQQQjiguzUtSE45gx+O/4WORDD++gMwYJIXEtfOxJjRw/Hw4nXIV36BlqJSzhHJJ6/QBu+D/cdCumM5BvuNNSK5crUaGz/LRcnFCqNxcwClkueREPc6QqaNQlvVPZSvy0DdgVx0soyDNGUZyIOSMvrWilQ8KL7CORfNC4U0eQmEHsO5MaaWTp4qw6dbT6OiqokdNwXQ2dkWq5YGY8F8X0CtQeXWfajc8R0otYa1KfQUQ5K0BKK5IezfJFqtjhYIeLh/rACKuC+hVlSzC5mcdI15F+7xERA42nOgWq0Omft/R1rGOch2zu/zXTw1NA0fRPjj4+ipcBhkhZrM47idKIP2XiNrWzDYHu7rFsJ16TzwbDrrgQSGpNLr18xAaPAoUJp2VO86jDtbMqFrecRutBINgdfGDyFeNBtEwOdAm5pVaG/XY6jIsVexoFRq0NzSCtcRQ9B46gLkq9KguqZgbTE2X1j8Djw/iYSVi5NRCl0srQRJlxWx6T/ZzxPjx41gF7Q3tLD5QGnbuQ12Y7zgMmsy0KWIDJO9qRnDukeX/0HTmT+MIFzemgK7UR7dCvD2nUbknfnb+BzstqqPA30F7KM5o2VEWVZush40WCpP3IP7R3/p5t/B1wc++zaYwsXtYc9BsyxYePMAoLkBHojgsx/BAptJZlcxpdMBPbUNhIBnbWVWEDlFbY4Vix7UBsn/vwVcvPQQbW3Nx8JwP+4u7gpL6/Ss8mjO/5MbZpSHW2w4bEe6smOmRJCmKPa+bzxxnrPLtx8Et5ULYOfjBeYu3rO3GCRqyUE6fnUo3F2duwWxJ+UhjgqD54ZIlNWo4OgghMTLpVdARvlcvlKN4KAXu/loOlvCqmjl1VvsHOHzIY6cDc+NUVAKbHoWC8prCshj09CUd4Ez+NybAZB+HoNmRyckbT+NnJ+vIvvbp3ubCZwkQcLaGay8N/pLegq1WT+hPGEPtLUN7BTf0Q4eayKMAbX3msBc/DXf5HBVaT/em5XeVq+Oxa7dRfg66zdoNB2NlCmKmmmQ5oZNROzyYDDtZddPr1SjYtt+VG4/AKq1rSOiTJHo1RpUpWajIjkL+ket7IS12AVem6Mhem8Wso+UYntaPhobVUYGTQE0GOjaYtradipoZl5ztx6K9btRt/8ESO2Bk7QiPgOayo6GnWcrhHtsONxWhaPwUhU2J+Xhpry+xyI3B9BgkGkz2SY9bAL4PJ6RH0bgdt7FPIJh778ByZZolCspbErKQ1Gx/ImnT38AGhz4jB6GxDUzEThZYuSTBXQK8sXIlGVQjxBjW2o+Dh25BIrq/YLpT0ADVXCQN9bHzYC3VNSRg/dzCmm76f74KvM80mVFULVqnxi1rpOWAGQrmM/Dgnm+WBkzDeT7Y6U083pQW/ewz2CGhZYCNNi3t7fBwBPwwCP6kxLT0jnI+P4Xk1defGHyzAMAAAAASUVORK5CYII="},"0f3b":function(e,t,n){"use strict";n("01b7")},1:function(e,t){},"14c0":function(e,t,n){"use strict";n("6f88")},2:function(e,t){},2246:function(e,t,n){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"choose-nav-box",on:{click:function(t){return e.$emit("handleClick")}}},[t("div",{staticClass:"choose-nav"},[t("div",{staticClass:"nav-list"},[t("div",{staticClass:"choose-item",class:{active:"/"==e.$route.path},on:{click:function(t){return e.goPath("/")}}},[e._v(" Home ")]),t("div",{staticClass:"choose-item",class:{active:"/about"==e.$route.path},on:{click:function(t){return e.goPath("/about")}}},[e._v(" About Yunus Loop ")]),t("div",{staticClass:"choose-item",class:{active:"/SponsorExhaustion"==e.$route.path},on:{click:function(t){return e.goPath("/SponsorExhaustion")}}},[e._v(" Sponsor Exhaustion ")]),t("div",{staticClass:"choose-item",class:{active:"/BorrowProposition"==e.$route.path},on:{click:function(t){return e.goPath("/BorrowProposition")}}},[e._v(" Borrowing Proposition ")]),t("div",{staticClass:"choose-item"},[e._v(" Security Audit ")]),t("div",{staticClass:"choose-item",on:{click:function(t){return e.goPath("/Security")}}},[e._v(" Security ")]),t("div",{staticClass:"choose-item"},[e._v(" Circulation Certificate ")]),t("div",{staticClass:"choose-item"},[e._v(" Join Community ")])]),t("div",{staticClass:"select-lng"},[t("div",{staticClass:"title"},[e._v(" Select Language ")]),t("div",{staticClass:"lng-list"},[t("div",{staticClass:"lng-item",class:{active:0==e.activeLngInx}},[t("img",{attrs:{src:n("047b"),alt:""}})]),t("div",{staticClass:"lng-item",class:{active:1==e.activeLngInx}},[t("img",{attrs:{src:n("689b"),alt:""}})]),t("div",{staticClass:"lng-item",class:{active:2==e.activeLngInx}},[t("img",{attrs:{src:n("01ae"),alt:""}})]),t("div",{staticClass:"lng-item",class:{active:3==e.activeLngInx}},[t("img",{attrs:{src:n("5d53"),alt:""}})]),t("div",{staticClass:"lng-item",class:{active:3==e.activeLngInx}},[t("img",{attrs:{src:n("e216"),alt:""}})]),t("div",{staticClass:"lng-item",class:{active:3==e.activeLngInx}},[t("img",{attrs:{src:n("7614"),alt:""}})]),t("div",{staticClass:"lng-item",class:{active:3==e.activeLngInx}},[t("img",{attrs:{src:n("9be0"),alt:""}})]),t("div",{staticClass:"lng-item",class:{active:3==e.activeLngInx}},[t("img",{attrs:{src:n("a8d9"),alt:""}})])])])])])},o=[],i=(n("ec53"),{name:"ChooseNav",components:{},data(){return{activeIndex:0,activeLngInx:0}},methods:{goPath(e){this.$router.push(e)}}}),s=i,r=(n("4eec"),n("8619")),c=Object(r["a"])(s,a,o,!1,null,"f8a7db22",null);t["a"]=c.exports},"244f1":function(e,t,n){"use strict";n("7c59")},3:function(e,t){},"48a1":function(e,t,n){},"4eec":function(e,t,n){"use strict";n("48a1")},"51d3":function(e,t,n){"use strict";var a=n("c81b");const o={coin:{address:"",abi:a},USDT:{address:"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",abi:a}};async function i(e,t){return await t.contract(o[e].abi,o[e].address)}async function s(e,t,n){return await n.contract(o[e].abi,t)}function r(e){return o[e].address}t["a"]={CONTRACTS:o,getContractByName:i,getContractByToken:s,getContractAddress:r}},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("d797"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("YunusHeader"),t("router-view")],1)},i=[],s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("ChooseNav",{directives:[{name:"show",rawName:"v-show",value:e.isShowNav,expression:"isShowNav"}],staticClass:"choose-nav",on:{handleClick:e.hideChoose}}),t("div",{staticClass:"top-box sticky bg-darkGray"},[t("div",{staticClass:"flex-1 flex justify-center items-center space-x-5 flex-shrink-0 sm:flex-none"},[t("div",{staticClass:"flex items-center space-x-1.5 flex-shrink-0"},[t("span",{staticClass:"flex-shrink-0 text-white"},[e._v("Circulation ")]),t("span",{staticClass:"text-lightBlue text-[15px] leading-[18px] num-bold-style"},[e._v(e._s(e.contractUSDTBalance))])])])]),t("div",{staticClass:"header-box"},[t("img",{staticClass:"logo",attrs:{src:n("cf05"),alt:""}}),e._m(0),t("div",{staticClass:"menu-box",on:{click:e.showChoose}},[t("img",{attrs:{src:n("e915"),alt:""}})])])],1)},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"address-box"},[t("div",{staticClass:"address"},[e._v(" TAbgFNGCgKHv… ")]),t("div",{staticClass:"connect-button"},[t("div",{staticClass:"dot"}),e._v(" connected ")])])}],c=n("2246"),l=n("51d3");const u=n("e0e6");var p={name:"YunusHeader",components:{ChooseNav:c["a"]},data(){return{isShowNav:!1,contractUSDTBalance:0,nodePath:"https://api.trongrid.io",contractAddress:"TUtsRXcAAgC9FfFyhHzNZkqCByLXytmVii",tronAddress1:"TUA9cFnwkSMtHnEKmSN9HRXwpMtdr7drBq"}},methods:{hideChoose(){this.isShowNav=!1,document.querySelector("body").style.overflow=""},showChoose(){this.isShowNav=!0,document.querySelector("body").style.overflow="hidden"},async getUSDTBalance(){let e=await l["a"].getContractByName("USDT",window.tronWeb),t=await e.balanceOf(this.contractAddress).call({});this.contractUSDTBalance=parseInt(window.tronWeb.toDecimal(t._hex)/10**6).toString(),this.contractUSDTBalance=this.contractUSDTBalance.split("").reverse().join(""),this.contractUSDTBalance=this.contractUSDTBalance.replace(/(.{3})/g,"$1 "),this.contractUSDTBalance=this.contractUSDTBalance.split("").reverse().join("")},async getConnect(){const e=u.providers.HttpProvider,t=new e(this.nodePath),n=new e(this.nodePath),a=new e(this.nodePath),o=new u(t,n,a);o.setAddress("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"),window.tronWeb=o},async getData(){try{let e=await window.tronWeb.trx.getBalance(this.contractAddress);this.contractTrxBalance=parseInt(parseInt(e)/10**6).toString(),this.contractTrxBalance=this.contractTrxBalance.split("").reverse().join(""),this.contractTrxBalance=this.contractTrxBalance.replace(/(.{3})/g,"$1 "),this.contractTrxBalance=this.contractTrxBalance.split("").reverse().join(""),this.getUSDTBalance()}catch(e){console.log(e)}}},async mounted(){await this.getConnect(),setTimeout(()=>{this.getData()},2e3)}},d=p,h=(n("244f1"),n("8619")),A=Object(h["a"])(d,s,r,!1,null,"a8f047a4",null),m=A.exports,g={name:"App",components:{YunusHeader:m}},f=g,b=(n("0f3b"),Object(h["a"])(f,o,i,!1,null,null,null)),y=b.exports,C=n("19d6");const v={isConnected:e=>e.app.isConnected,account:e=>e.app.account};var w=v;const S={web3:null,account:"",isConnected:!1,chainId:666,ethBalance:0,isCollapse:!0},k={SET_ACCOUNT(e,t){e.account=t},SET_ISCONNECT(e,t){e.isConnected=t},SET_Web3(e,t){e.web3=t},SET_Balance(e,t){e.ethBalance=t},SET_SIDEBAR(e,t){e.isCollapse=t}},T={toggleSideBar({commit:e},t){e("SET_SIDEBAR",t)}};var B={namespaced:!0,state:S,mutations:k,actions:T};a["default"].use(C["a"]);var U=new C["a"].Store({getters:w,modules:{app:B}}),x=n("a21f"),D=function(){var e=this,t=e._self._c;return t("div",{staticClass:"layout"},[t("router-view",{staticClass:"layout-content",attrs:{id:"main"}})],1)},E=[],R={name:"layout",components:{},data(){return{showPrice:!0,dialogVisible:!1,isCollapse:!0}},watch:{isShowConnect(){this.dialogVisible=this.$store.state.app.isShowConnect}},computed:{isShowConnect(){return this.$store.state.app.isShowConnect},classObj(){return{}}},created(){"/cityNodeToken"==this.$route.path||"/home"==this.$route.path?this.showPrice=!1:this.showPrice=!0},methods:{chooseChain(e){this.isShowSelect=!1,this.curChain=e},onClose(){this.$store.commit("app/SET_SHOWCONNECT")},async registerWeb3(){},async getWallet(){"undefined"==typeof window.ethereum&&this.$message.error("down metamask"),window.ethereum.request({method:"eth_requestAccounts"}),this.registerWeb3()}}},F=R,N=(n("14c0"),Object(h["a"])(F,D,E,!1,null,null,null)),I=N.exports;a["default"].use(x["a"]);const Y=[{path:"/",component:I,redirect:"/",children:[{path:"/",name:"home",component:()=>n.e("chunk-6c5fe607").then(n.bind(null,"bb51"))},{path:"/about",name:"about",component:()=>n.e("chunk-a63dd75c").then(n.bind(null,"f820"))},{path:"/SponsorExhaustion",name:"SponsorExhaustion",component:()=>n.e("chunk-f1992864").then(n.bind(null,"b6bc"))},{path:"/BorrowProposition",name:"BorrowProposition",component:()=>n.e("chunk-d1f2ce32").then(n.bind(null,"8fdc"))},{path:"/BorrowingRules",name:"BorrowingRules",component:()=>n.e("chunk-1235b46c").then(n.bind(null,"2969"))},{path:"/RepaymentRules",name:"RepaymentRules",component:()=>n.e("chunk-59b29ffc").then(n.bind(null,"d0ea"))},{path:"/BorrowingOrder",name:"BorrowingOrder",component:()=>n.e("chunk-b8887920").then(n.bind(null,"1d85"))},{path:"/Security",name:"Security",component:()=>n.e("chunk-6aef7742").then(n.bind(null,"0ebc"))}]}],j=new x["a"]({mode:"history",routes:Y});var z=j,Q=n("f14f"),G=n("48b1"),M=n.n(G),O={documentation:"Dokumentation",livechat:"Live-Chat",page2info1:"Teilnehmer-Lernplattform",page2info2:"Plattform, auf der Sie erfahrenen Teilnehmern eine Frage stellen können",page2info1bottom:"Beginne zu lernen",page2info2bottom:"Finde einen Mentor",page3title:"Partnerergebnisse",page3content1:"Alle Daten sind in der Blockchain gemeinfrei gespeichert und verifizierbar!",contractAddress:"Vertragsadresse","Accounts count":"Konten zählen","Total result":"Gesamtergebnis",Autonomy:"Autonomie","Unchanging conditions":"Unveränderliche Bedingungen",Transparency:"Transparenz","Full automation":"Vollständige Automatisierung",Decentralization:"Dezentralisierung","100% online":"100% online",page4listContent2:"Der Algorithmus wird auf der Blockchain gespeichert, sodass niemand, nicht einmal die Urheber der Idee, Ihre Transaktionen eingreifen, stornieren oder ändern kann.",page4listContent3:"Der Smart-Contract-Code wird gemeinfrei gespeichert, und jeder kann jederzeit den gesamten Transaktionsverlauf einsehen. Das sorgt für faire Konditionen und verlässliche Statistiken, auf die Sie sich verlassen können.",page4listContent6:"Es gibt keine versteckten Kosten oder Servicegebühren. Der Saldo des Smart Contracts ist immer Null.",page5title:"Bequemes Büro"},L={documentation:"Documentation",page1info1:"Learning",page1info2part1:"Join ",page1info2part2:" Yunus Loop DeFi and make money",page1info2part3:" by helping people in developing countries.",page2content1:"Through blockchain technology-based DeFi, capital is allowed to ",page2content2:"flow around the world",page2content3:", allowing people   ",page2content4:"in developing countries",page2content5:"to borrow money and access development opportunities at at a lower cost, while",page2content6:"allowing investors to profit.",livechat:"Live chat",page2info1:"Participant learning platform",page2info2:"Platform where you can ask a question to experienced participants",page2info1bottom:"Start learning",page2info2bottom:"Find a mentor",page3title:"Partner results",page3content1:"All data is stored in the blockchain in the public domain and can be verified!",CirculationAddress:"Circulation Address ","Accounts count":"Accounts count","Total result":"Total result",page4title:"The New Opportunities Blockchain and Smart Contracts Bring to the World",page4content1:"DeFi, brought about by decentralized blockchain and open and transparent smart contracts, is a revolutionary technological change for finance, which achieves decentralized, open and transparent finance, and efficient operation, while having security far beyond that of traditional finance.",Autonomy:"Autonomy",Unchangingconditions:"Unchanging conditions",Transparency:"Transparency","Full automation":"Full automation",Decentralization:"Decentralization","100% online":"100% online",page4listContent1:"The Yunus Loop DeFi system runs on the blockchain by means of smart contracts, which are fully autonomous and exclude human influence.",page4listContent2:"The algorithm is stored on the blockchain, so no one, even the authors of the idea, can intervene, cancel or change your transactions.",page4listContent3:"Smart contracts run on the blockchain and transaction records are stored on the blockchain so that anyone can view them at any time. this ensures fair conditions and reliable statistics that you can rely on.",page4listContent4:"Yunus Loop DeFi does not store your assets, all assets are stored entirely on the blockchain and assets are automatically moved between participant accounts.",page4listContent5:"No one, not even the creators of the code, can make changes to the work of Yunus Loop DeFi smart contracts.",page4listContent6:"There are no hidden costs or service fees. The smart contract balance is always zero.",page5title:"Convenient office",page5content:"Participate and know the investment information at any time through any blockchain wallet.",page6title:"Frequently asked Questions",page6listTitle1:"What is Yunus Loop DeFi?",page6listTitle2:"How is Yunus Loop DeFi profitable?",page6listTitle3:"Is Yunus Loop DeFi secure?",page6listTitle4:"How I can participate in making money?",page6listTitle5:"How to make money by helping others？",page6listTitle6:"How can I borrow money through Yunus Loop DeFi?",page6listTitle7:"How to payback?",page6listContent1:"The Yunus Loop DeFi team pays tribute to Mr. Muhammad Yunus and aspires to do the same all over the world through blockchain technology. Yunus Loop DeFi aims to reduce the cost and risk of trust and enable people in every corner of the world to borrow money and access development opportunities at low cost.",page6listContent2part1:"Yunus Loop DeFi makes money by taking advantage of the interest rate difference between different countries. The annual interest rate for loans in France is 1.8%, in Germany 2.6%, but in developing countries the interest rate is very high, 19% in Colombia, 30% in Brazil and even more than 36% in China for private lending.",page6listContent2part2:"Yunus Loop DeFi makes money through short-term and ultra-short-term lending, for example, in China, bridging capital loans can reach 2% interest per day",page6listContent3part1:"Yunus Loop DeFi runs on the blockchain, with open source code, 100% transparent, 100% secure, and 100% efficient.",page6listContent3part2:"Security Audit",page6listContent4part1:'Download blockchain wallets, such as Trust Wallet,  Tronlink, click "Discover", enter ',page6listContent4part2:"in your browser, enter the dapp and start earning money.",page6listContent5part1:"In the Yunus Loop Defi Lending Smart Contract, each participant can become a project initiator, invite new users to join, and receive a sharing bonus.",page6listContent5part2:"For every additional 100 USDT circulated by the user himself, he will receive one more generation of sharing bonus.",page6listContent5part3:"The maximum share bonus is 21 levels.\n",page6listContent5part4:"For 100 USDT, you will receive 20% of the proceeds of each circulation of 1 generation of friends",page6listContent5part5:"When circulating 200 USDT, you will receive 10% of the proceeds of each circulation of 2 generations of friends",page6listContent5part6:"For 300USDT-700USDT, you will receive 5% of the proceeds of each circulation from 3 to 7 generations of friends.",page6listContent5part7:"For 800USDT-1000USDT, you will receive 3% of the proceeds of each circulation from 8 to 10 generations of friends.",page6listContent5part8:"For 1100USDT-2100USDT, you will receive 1% of each circulation from 11 to 21 generations of friends",page6listContent5part9:"Each share reward will be automatically credited to the originator's wallet address via smart contract",page6listContent6:"Go to the Yunus Loop DeFi dapp in your blockchain wallet (e.g. Trust Wallet), enter the amount of USDT you want to borrow, and the system will automatically calculate the amount of tokens you need to pledge. After you click submit to borrow, the smart contract will be executed automatically and USDT will be credited to your wallet address.",page6listContent7:"Borrowers are required to repay the loan as promised, otherwise the system will initiate liquidation.",bottomInfo:"The world's first 100% decentralized matrix platform"},q={documentation:"Documentation",livechat:"Chat en direct",page2info1:"Plateforme d'apprentissage des participants",page2info2:"Plateforme où vous pouvez poser une question aux participants expérimentés",page2info1bottom:"Commencer à apprendre",page2info2bottom:"Trouver un mentor",page3title:"Résultats partenaires",page3content1:"Toutes les données sont stockées dans la blockchain dans le domaine public et peuvent être",contractAddress:"Vertragsadresse","Accounts count":"Konten zählen","Total result":"Résultat total",Autonomy:"Autonomie","Unchanging conditions":"Conditions immuables",Transparency:"Transparence","Full automation":"Automatisation complète",Decentralization:"Décentralisation","100% online":"100% en ligne",page4listContent2:"L'algorithme est stocké sur la blockchain, donc personne, même les auteurs de l'idée, ne peut intervenir, annuler ou modifier vos transactions.",page4listContent3:"Le code de contrat intelligent est stocké dans le domaine public et n'importe qui peut consulter l'historique complet des transactions à tout moment. Cela garantit des conditions équitables et des statistiques fiables sur lesquelles vous pouvez compter.",page4listContent6:"Il n'y a pas de coûts cachés ni de frais de service. Le solde du contrat intelligent est toujours égal à zéro.",page5title:"Bureau pratique"},P={documentation:"Documentazione",livechat:"Chat dal vivo",page2info1:"Piattaforma di apprendimento dei partecipanti",page2info2:"Piattaforma in cui puoi porre una domanda a partecipanti esperti",page2info1bottom:"flex items-center text-white",page2info2bottom:"Trova un mentore",page3title:"Risultati partner",page3content1:"Tutti i dati sono archiviati nella blockchain di pubblico dominio e possono essere verificati!",contractAddress:"Indirizzo del contratto ","Total result":"Risultato totale",Autonomy:"Autonomia","Unchanging conditions":"Condizioni immutabili",Transparency:"Trasparenza","Full automation":"Automazione completa",Decentralization:"Decentramento","100% online":"100% in linea",page4listContent2:"L'algoritmo è memorizzato sulla blockchain, quindi nessuno, nemmeno gli autori dell'idea, può intervenire, annullare o modificare le tue transazioni.",page4listContent3:"Il codice dello smart contract è archiviato nel pubblico dominio e chiunque può visualizzare l'intera cronologia delle transazioni in qualsiasi momento. Ciò garantisce condizioni eque e statistiche affidabili su cui puoi fare affidamento.",page4listContent6:"Non ci sono costi nascosti o costi di servizio. Il saldo dello smart contract è sempre zero.",page5title:"Ufficio comodo"};a["default"].use(Q["a"]);let V=new Q["a"]({locale:localStorage.getItem("language")||"en",messages:{de:{...O},en:{...L},fr:{...q},it:{...P}}});M.a.i18n((e,t)=>V.t(e,t));var W=V;a["default"].config.productionTip=!1,new a["default"]({router:z,store:U,i18n:W,render:e=>e(y)}).$mount("#app")},"5d53":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAL5JREFUWEdjNFlq95+BAJjm1M+gIaRGSBlcnvPnPwYmAqb+uniR4V1yMkEzGYlx4AL3GQzawpoEDSNFwc+zZxneRkYS1DLqQFxBNBqCBBMPAQWjITgagtAQGC1mRosZUAiMVnV4ioTRTDKaSUYzCYE6czSTjGaS0UwymknIbFqP9knIDDi4ttEQHA3B0V7d6NAHUgiM9upGe3VkFIojqyZps25gUBFQIjqcJN//ZWD+i38e4vfVqwwfSkoImgkAcS1OaENhcNEAAAAASUVORK5CYII="},"689b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAH9JREFUWEft1rENgDAMBVF7CFaIQBSQBTMbi7AAG1AFMcM1Li79j6xnS3au2z6j8EsLhN1REAKGggpSAZp3BhWkAjSf13HWPhbu3i2QtDkVJHwRoSAEVJACKqggFqAf5DNa7V0838UCSZtTQcL3HwsKKggFaNwZVJAK0Hz5GfwAnWVal+jlhRAAAAAASUVORK5CYII="},"6f88":function(e,t,n){},7614:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAHpJREFUWEft2LsNgDAMRVF7CIagRMoMTJShEQ01VRjiNk/opndkHTvfvsZYFTzaBGF1FISApaCCVIDG5/fgM/fsk2S9mwmSPmwFCV9VKQgBFaSACiqIBegE7oMKUgEabw9iwfs8sm/Ufh7BGuc/Oy2xJYYCNNxF8nvBDyw1ahjwGLMaAAAAAElFTkSuQmCC"},"7c59":function(e,t,n){},"9be0":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA0RJREFUWEftmG1IU1EYx/93r4qKhooUOcWpYDjMmVDkSqQghYwisTBhkaIhmkRqZRgSZUmWbx+SSk2StA9GL0ZUqEmhJmo2qSxHOItUNN9NnduNM2W+Jm53i/th5+O9zznP7z7Pc/7PuYeiaZoGiwdlAWSYHaq2dZjdKYZ/DcsBpbUWQCZlSMESQSbxAyg7WT27a/DPtIbdgKbsJKRr1rUMIzjAARRFMcvt/GyTtroGxQj2xrXjVZEfdkjs2QWonqUREv8Bb9tGEORvj5pbfuDzOIwhTRbBBy/7EX3hE5KiXFFQ3oPiTB9Eh7r8f0CtlkbVmwGMjGv0zkntZRWrwKGAVLkI2aUqTE5pcTHOHVzuQi3a23JxaLcTOMRwncOoCGaVqnA+X6lLIY9HYXpGq3MnFCyklDwj8mAl4GBWQ0Ot1uJKkhjn5KJ1os2ZGQU4OaVB4LEWODsKUJjmhZ3yVsQf3oT0E27A/O7NKVPhepkKtXekuHy3G13dk3h/PwA2VlzzAxIPj+oGEJHSAR+xDX4Pq9FeGQgne77e+ejELLZFtYAv5ODr9wk8zPbFwWAng+CMjiCZSNIWmvgRrxuHkJ/micTIzSucl1X3Qp7xBUFSsqu3greoHtdLalSKyeIzai12xbahSTGGzJPuyIhxX+Ezv/IHTl3rgnSLLRpKpBDwDZcdowFLn/1CTGYnZAEOUHSOo60iEK4uQj1k/5Aa0qPN8HC1RpNiFEXp3pDv37jewOntjAIcGpuF/5FmeIiscSnBA2EJ7YjY44wUuZt+4bzyHtx72ovHeRIUVPxE++cx3UdssOMZBGkwIJGOswVKZJeoiAgsckberKVvNFKPi3A1Ubym1XJ6gwGJUDd2jGFqek77yNDSNFJylSDyk3vGC8k530BEsDDNG9xFomwl5GC7r535hXq1HFW/G8SBZAUi97mg8kUfqm5IEC5zNCidqxkbHMF/edRoaYSfVuB5/SDCZI54clOyJHrGkpoMkAB0KCcQEtuGmtv+8BXbGMu0ZJ5JAcktj6JrHBJPG9MdWPuHZth95Ief5WaBUS1aftwZhU/Xm1h/9cH2TdLTN8VumTHlzQLTejNrLzYHHKN/EnMBLV/3L7U7dCaCeqWZAAAAAElFTkSuQmCC"},a8d9:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAiVJREFUWEftlk1rE1EUQM8b08xMEnShC50uDMUGUhfVCNYPjIIItS5E/AMuBUGMCxFUxF8gWKPQLqI06K7FXa0gYnbFlOpCbG2oNWlNqlZLQ9N8y0RcWCs1eahZvLd7zLtzD+fed2fE0ZuxKk28hAKUrI4yKCkQZVAZlDUgG696UBmUNSAbL6K7zjX3z8JrDssDtjjw9HRh7vUjDCeFyRRLj2KU019kBSJkAY19HbQOXMG5o5XC2xSL0ScUErMIU2dlfIr8iwkpSClAPeDDG7uF5jJYCA+RuXAbSmUpoNXBUoDeeB9mwEf28SjJ45dgdbNoGlQqeE4eZPnZOJWlXG1fz2oYUA+00xbvr+V6FzxPLvbql7zaRjfWg6s4rC0Up+covp9nPhSuh6/xHtx0phsrcplqtcob4xgUSj8nFmAGO9l2J4Te4a09+3p/mI/XI5RmMn8M2bDB9QEFrmAnW++G0P3bvwMOjPDpxj2Kibm/D2hfkLZ43/olfniNFmszhek0xZn0vyuxTeYd68fc3U52eJRkzxqXZIMG5QqeU4dYfjpGJZur7etZDZfYTqLv8eF93ovm0lnoHSRzMdxcY8aGNA/sxLIHdZtFfiLJYnSE4tQswm2Qf5lg5X8O6h+lEk4H7hP7Mbv8aIaT/GSK7FCM0ofP9VRzzbMicuS0/LdYGuP3LxDdg2cVoIxgZVDGnh2rDCqDsgZk41UPKoOyBmTjm74HvwFL9//FiHhcvQAAAABJRU5ErkJggg=="},c81b:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},cf05:function(e,t){e.exports="data:image/png;base64,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"},e216:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAIBJREFUWEft1jENgEAMRuHW0CnAAQ4YsHFBAbKY0YAWUoKGt3R4t/+X5muTNt+qisYvLRB2R0EIGAoqSAVo3hlUkArQfG7z7n0sLPtlgaTNqSDhiwgFIaCCFFBBBbEA/SCP9ey9i58xLJC0ORUkfP+xoKCCUIDGnUEFqQDNt5/BDxhNcZyn/+zNAAAAAElFTkSuQmCC"},e915:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAAXNSR0IArs4c6QAAAEZJREFUOE/t07ENACAMA8FkYSq2pmGDR+zw7pIBTlYsdwWuA2ZlUGDZaRsggV4dtcHvZYqapPoHMkUBx44aW9TWk9rgLKoe2FMWvprt8s0AAAAASUVORK5CYII="}});
//# sourceMappingURL=app.a3a29597.js.map