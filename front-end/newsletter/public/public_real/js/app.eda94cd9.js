(function(t){function c(c){for(var a,s,i=c[0],h=c[1],n=c[2],o=0,F=[];o<i.length;o++)s=i[o],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&F.push(l[s][0]),l[s]=0;for(a in h)Object.prototype.hasOwnProperty.call(h,a)&&(t[a]=h[a]);p&&p(c);while(F.length)F.shift()();return r.push.apply(r,n||[]),e()}function e(){for(var t,c=0;c<r.length;c++){for(var e=r[c],a=!0,s=1;s<e.length;s++){var i=e[s];0!==l[i]&&(a=!1)}a&&(r.splice(c--,1),t=h(h.s=e[0]))}return t}var a={},s={app:0},l={app:0},r=[];function i(t){return h.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d6f93d04"}[t]+".js"}function h(c){if(a[c])return a[c].exports;var e=a[c]={i:c,l:!1,exports:{}};return t[c].call(e.exports,e,e.exports,h),e.l=!0,e.exports}h.e=function(t){var c=[],e={about:1};s[t]?c.push(s[t]):0!==s[t]&&e[t]&&c.push(s[t]=new Promise((function(c,e){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"adec5016"}[t]+".css",l=h.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var n=r[i],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===a||o===l))return c()}var F=document.getElementsByTagName("style");for(i=0;i<F.length;i++){n=F[i],o=n.getAttribute("data-href");if(o===a||o===l)return c()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=c,p.onerror=function(c){var a=c&&c.target&&c.target.src||l,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete s[t],p.parentNode.removeChild(p),e(r)},p.href=l;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){s[t]=0})));var a=l[t];if(0!==a)if(a)c.push(a[2]);else{var r=new Promise((function(c,e){a=l[t]=[c,e]}));c.push(a[2]=r);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,h.nc&&o.setAttribute("nonce",h.nc),o.src=i(t);var F=new Error;n=function(c){o.onerror=o.onload=null,clearTimeout(p);var e=l[t];if(0!==e){if(e){var a=c&&("load"===c.type?"missing":c.type),s=c&&c.target&&c.target.src;F.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",F.name="ChunkLoadError",F.type=a,F.request=s,e[1](F)}l[t]=void 0}};var p=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(c)},h.m=t,h.c=a,h.d=function(t,c,e){h.o(t,c)||Object.defineProperty(t,c,{enumerable:!0,get:e})},h.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},h.t=function(t,c){if(1&c&&(t=h(t)),8&c)return t;if(4&c&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(h.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&c&&"string"!=typeof t)for(var a in t)h.d(e,a,function(c){return t[c]}.bind(null,a));return e},h.n=function(t){var c=t&&t.__esModule?function(){return t["default"]}:function(){return t};return h.d(c,"a",c),c},h.o=function(t,c){return Object.prototype.hasOwnProperty.call(t,c)},h.p="/",h.oe=function(t){throw console.error(t),t};var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=c,n=n.slice();for(var F=0;F<n.length;F++)c(n[F]);var p=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,c,e){t.exports=e("56d7")},"008b":function(t,c,e){"use strict";e("6a6d")},"0141":function(t,c,e){"use strict";e("0a12")},"0a12":function(t,c,e){},"0f63":function(t,c,e){"use strict";e("67ed")},1874:function(t,c,e){},"22c8":function(t,c,e){"use strict";e("1874")},"56d7":function(t,c,e){"use strict";e.r(c);var a=e("2b0e"),s=function(){var t=this,c=t._self._c;return c("div",{staticClass:"hi"},[c("mq-layout",{attrs:{mq:"sm"}},[c("div",{staticClass:"mobile",attrs:{id:"app"}},[c("router-view")],1)]),c("mq-layout",{attrs:{mq:"md+"}},[c("div",{staticClass:"desk",attrs:{id:"app"}},[c("router-view")],1)])],1)},l=[],r=(e("0141"),e("2877")),i={},h=Object(r["a"])(i,s,l,!1,null,null,null),n=h.exports,o=e("8c4f"),F=function(){var t=this,c=t._self._c;return c("div",{staticClass:"class"},[c("mq-layout",{attrs:{mq:"sm"}},[c("HelloWorld2",{staticClass:"hello1"}),c("Flipbook",{staticClass:"flipbook-mobile",attrs:{pages:this.pages1}})],1),c("mq-layout",{attrs:{mq:"md+"}},[c("HelloWorld",{staticClass:"hello1"}),c("br"),c("Flipbook",{staticClass:"flipbook-desktop",attrs:{pages:this.pages1},scopedSlots:t._u([{key:"default",fn:function(e){return[c("b-button",{staticClass:"hello one",attrs:{id:"hello"},on:{click:function(c){t.count(),e.flipLeft(),t.locateMe()}}},[t._v("«")]),c("b-button",{staticClass:"hello two",attrs:{id:"hello"},on:{click:function(c){t.count(),e.flipRight(),t.locateMe()}}},[t._v("»")])]}}])})],1)],1)},p=[],v=(e("d9e2"),e("bc3a")),u=e.n(v),d=e("8330"),f=function(){var t=this,c=t._self._c;return c("header",{staticClass:"header",attrs:{id:"header"}},[c("div",{staticClass:"container"},[c("div",{staticClass:"wrapper"},[c("div",{staticClass:"header-item-left"},[c("a",{staticClass:"brand",attrs:{href:"/"}},[c("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"155.377px",height:"40px",viewBox:"254.384 375.649 155.377 40","enable-background":"new 254.384 375.649 155.377 40","xml:space":"preserve"}},[c("g",[c("g",[c("path",{attrs:{fill:"#FFFFFF",d:"M303.269,379.543h2.231l2.62,6.832c0.505,1.369,1.269,3.939,1.269,3.939h0.034    c0,0,0.776-2.552,1.286-3.939l2.569-6.832h2.301v12.581h-1.657v-7.609c0-1.116,0.103-3.23,0.103-3.23h-0.036    c0,0-0.506,1.892-0.881,2.876l-3.06,7.965h-1.354l-3.063-7.965c-0.355-0.98-0.879-2.876-0.879-2.876h-0.036    c0,0,0.104,2.114,0.104,3.23v7.609h-1.557v-12.581H303.269z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M318.437,379.543h5.293c1.335,0,2.366,0.438,3.011,1.218c0.56,0.659,0.896,1.472,0.896,2.47    c0,2.317-1.354,3.721-4.075,3.721h-3.38v5.175h-1.744V379.543z M320.181,385.544h3.211c1.706,0,2.52-0.862,2.52-2.266    c0-1.473-0.896-2.231-2.453-2.231h-3.277V385.544z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M332.896,379.543h8.945v1.521h-7.221v3.804h6.526v1.437h-6.526v4.244h7.407v1.571h-9.132V379.543z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M345.242,384.329h0.05c0.658-0.912,1.555-1.504,2.876-1.504c1.893,0,3.061,1.066,3.061,2.958v6.341h-1.555    v-6.155c0-1.166-0.759-1.825-1.994-1.825c-1.404,0-2.418,0.998-2.418,2.453v5.528h-1.571v-9.081h1.555v1.286H345.242z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M353.193,392.748h1.473c0.134,0.948,1.048,1.336,2.4,1.336c1.623,0,2.521-0.727,2.521-2.267v-0.253    c0-0.524,0.017-1.016,0.034-1.301h-0.034c-0.627,0.895-1.423,1.455-2.705,1.455c-2.318,0-3.976-1.811-3.976-4.448    c0-2.79,1.759-4.448,3.89-4.448c1.3,0,2.181,0.506,2.755,1.421h0.032v-1.2h1.559v8.71c0,1.202-0.407,2.095-1.099,2.687    c-0.71,0.592-1.726,0.863-2.941,0.863C354.714,395.303,353.359,394.355,353.193,392.748z M359.687,387.202    c0-1.91-0.863-3.079-2.674-3.079c-1.657,0-2.501,1.25-2.501,3.161c0,1.929,0.88,3.147,2.52,3.147    C359.01,390.431,359.687,389.045,359.687,387.202z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M363.269,379.543h1.64v1.824h-1.64V379.543z M363.302,383.043h1.571v9.081h-1.571V383.043z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M368.612,384.329h0.051c0.658-0.912,1.555-1.504,2.873-1.504c1.893,0,3.062,1.066,3.062,2.958v6.341    h-1.558v-6.155c0-1.166-0.762-1.825-1.996-1.825c-1.404,0-2.419,0.998-2.419,2.453v5.528h-1.572v-9.081h1.557v1.286H368.612z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M376.255,387.591c0-2.638,1.745-4.769,4.346-4.769c1.354,0,2.402,0.524,3.112,1.404    c0.745,0.896,1.115,2.199,1.115,3.735h-6.968c0.117,1.775,1.083,3.129,2.842,3.129c1.249,0,2.113-0.592,2.401-1.558h1.54    c-0.406,1.693-1.862,2.841-3.957,2.841C377.896,392.378,376.255,390.246,376.255,387.591z M377.896,386.832h5.257    c-0.085-1.743-0.979-2.792-2.552-2.792C378.961,384.04,378.099,385.224,377.896,386.832z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M386.068,387.591c0-2.638,1.742-4.769,4.344-4.769c1.356,0,2.403,0.524,3.111,1.404    c0.746,0.896,1.116,2.199,1.116,3.735h-6.968c0.118,1.775,1.084,3.129,2.842,3.129c1.25,0,2.112-0.592,2.402-1.558h1.539    c-0.406,1.693-1.861,2.841-3.956,2.841C387.707,392.378,386.068,390.246,386.068,387.591z M387.707,386.832h5.258    c-0.086-1.743-0.979-2.792-2.554-2.792C388.772,384.04,387.91,385.224,387.707,386.832z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M397.871,384.682h0.051c0.559-1.048,1.488-1.757,2.688-1.757c0.253,0,0.406,0.033,0.573,0.1v1.49h-0.05    c-0.222-0.069-0.372-0.085-0.644-0.085c-1.403,0-2.603,1.048-2.603,2.754v4.936h-1.572v-9.08h1.556V384.682z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M402.049,389.366h1.59c0.185,1.319,1.2,1.76,2.503,1.76c1.435,0,2.045-0.627,2.045-1.437    c0-0.998-0.76-1.25-2.366-1.572c-1.775-0.371-3.384-0.745-3.384-2.74c0-1.554,1.221-2.538,3.333-2.538    c2.285,0,3.414,1.065,3.618,2.638h-1.572c-0.136-0.931-0.776-1.455-2.08-1.455c-1.234,0-1.759,0.574-1.759,1.269    c0,0.948,0.88,1.133,2.421,1.436c1.81,0.356,3.363,0.759,3.363,2.874c0,1.842-1.522,2.79-3.652,2.79    C403.604,392.395,402.184,391.211,402.049,389.366z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M318.37,398.701h1.926l4.635,12.581h-1.895l-1.25-3.671h-4.954l-1.285,3.671h-1.776L318.37,398.701z     M317.303,406.257h4.024l-1.202-3.518c-0.423-1.219-0.759-2.673-0.759-2.673h-0.05c0,0-0.371,1.504-0.776,2.673L317.303,406.257z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M327.841,403.839h0.052c0.558-1.047,1.486-1.756,2.688-1.756c0.252,0,0.405,0.032,0.572,0.1v1.489h-0.049    c-0.22-0.068-0.371-0.086-0.642-0.086c-1.404,0-2.605,1.048-2.605,2.756v4.936h-1.572v-9.081h1.554v1.642H327.841z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M331.645,406.749c0-2.639,1.706-4.769,4.431-4.769c2.181,0,3.603,1.233,3.924,3.179h-1.572    c-0.22-1.183-1.029-1.91-2.349-1.91c-1.859,0-2.823,1.539-2.823,3.5c0,1.96,0.964,3.5,2.823,3.5c1.422,0,2.267-0.828,2.385-2.181    h1.555c-0.204,2.163-1.64,3.467-3.939,3.467C333.356,411.535,331.645,409.403,331.645,406.749z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M343.161,403.519h0.049c0.677-0.962,1.59-1.54,2.909-1.54c1.893,0,3.062,1.065,3.062,2.958v6.34h-1.554    v-6.154c0-1.167-0.76-1.826-1.997-1.826c-1.404,0-2.417,0.999-2.417,2.453v5.528h-1.571v-12.581h1.571v3.297    C343.213,402.454,343.178,403.078,343.161,403.519z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M351.33,398.701h1.64v1.825h-1.64V398.701z M351.365,402.2h1.572v9.082h-1.572V402.2z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M354.563,402.2h1.421v-2.858h1.554v2.858h1.878v1.219h-1.878v5.731c0,0.659,0.356,0.845,0.93,0.845    c0.271,0,0.628-0.068,0.795-0.118h0.052v1.318c-0.425,0.103-0.863,0.153-1.27,0.153c-1.219-0.018-2.064-0.506-2.064-1.843v-6.087    h-1.421V402.2H354.563z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M360.261,406.749c0-2.639,1.742-4.769,4.344-4.769c1.355,0,2.403,0.523,3.112,1.404    c0.743,0.895,1.116,2.2,1.116,3.736h-6.969c0.117,1.775,1.083,3.129,2.841,3.129c1.251,0,2.113-0.592,2.401-1.558h1.54    c-0.406,1.692-1.859,2.84-3.956,2.84C361.901,411.535,360.261,409.403,360.261,406.749z M361.901,405.986h5.258    c-0.086-1.743-0.981-2.791-2.554-2.791C362.965,403.198,362.104,404.381,361.901,405.986z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M370.019,406.749c0-2.639,1.708-4.769,4.43-4.769c2.182,0,3.604,1.233,3.924,3.179h-1.571    c-0.221-1.183-1.031-1.91-2.353-1.91c-1.859,0-2.822,1.539-2.822,3.5c0,1.96,0.963,3.5,2.822,3.5c1.423,0,2.267-0.828,2.385-2.181    h1.557c-0.202,2.163-1.639,3.467-3.941,3.467C371.727,411.535,370.019,409.403,370.019,406.749z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M379.27,402.2h1.422v-2.858h1.559v2.858h1.877v1.219h-1.877v5.731c0,0.659,0.354,0.845,0.93,0.845    c0.271,0,0.627-0.068,0.795-0.118h0.05v1.318c-0.423,0.103-0.862,0.153-1.269,0.153c-1.218-0.018-2.064-0.506-2.064-1.843v-6.087    h-1.422V402.2L379.27,402.2z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M385.087,408.523h1.589c0.187,1.319,1.202,1.76,2.505,1.76c1.435,0,2.044-0.627,2.044-1.437    c0-0.998-0.76-1.25-2.368-1.572c-1.773-0.371-3.379-0.745-3.379-2.741c0-1.554,1.216-2.538,3.33-2.538    c2.285,0,3.415,1.066,3.618,2.638h-1.572c-0.135-0.93-0.776-1.455-2.082-1.455c-1.232,0-1.756,0.574-1.756,1.269    c0,0.948,0.879,1.134,2.421,1.437c1.81,0.356,3.364,0.759,3.364,2.873c0,1.843-1.523,2.79-3.653,2.79    C386.645,411.548,385.223,410.366,385.087,408.523z"}})]),c("polygon",{attrs:{fill:"#FFFFFF",points:"308.008,402.557 306.624,402.557 306.624,406.251 303.055,406.251 303.055,407.561    306.624,407.561 306.624,411.275 308.008,411.275 308.008,407.561 311.574,407.561 311.574,406.251 308.008,406.251  "}})]),c("path",{attrs:{fill:"#FFFFFF",d:"M254.384,375.649v40h40v-40H254.384z M261.734,408.148h-3.621l4.884-24.941l7.427,16.818l-1.823,3.992  l-4.373-9.889L261.734,408.148z M275.791,408.148v-2.901h3.749l-1.774-11.103l-6.385,14.003h-6.036v-2.901h3.782l10.078-22.041  l4.388,24.941H275.791z M290.574,394.204c-0.95,1.356-2.342,2.361-3.933,2.838c-0.917,0.273-3.876,0.769-3.876,0.769l-0.576-3.259  c0.893-0.157,1.795-0.292,2.682-0.481c0.843-0.179,1.693-0.454,2.346-1.037c0.671-0.597,1.142-1.408,1.327-2.287  c0.107-0.518,0.116-1.053,0.025-1.575c-0.095-0.519-0.286-1.021-0.563-1.472c-0.475-0.763-1.196-1.362-2.031-1.694  c-0.815-0.324-1.707-0.291-2.559-0.168c-0.897,0.128-1.791,0.309-2.685,0.469l-0.576-3.257c0-0.002,1.012-0.181,1.076-0.193  c0.938-0.168,1.875-0.361,2.83-0.418c1.659-0.099,3.311,0.368,4.669,1.316c1.646,1.148,2.746,2.865,3.099,4.839l0,0v0.002l0,0  C292.168,390.569,291.725,392.563,290.574,394.204z"}})])])]),t._m(0),t._m(1)])])])},g=[function(){var t=this,c=t._self._c;return c("div",{staticClass:"header-item-center"},[c("ul",{staticClass:"menu"},[c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/about"}},[t._v("About")])]),c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/expertise"}},[t._v("Expertise")])]),c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/projects"}},[t._v("Projects")])]),c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/leadership"}},[t._v("People")])]),c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/offices"}},[t._v("Offices")])]),c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/career"}},[t._v("Careers")])])])])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"header-item-right"},[c("button",{staticClass:"menu-mobile-trigger",attrs:{type:"button",onclick:"disFunction()",id:"mobileMenu"}},[c("span"),c("span"),c("span")])])}],m={name:"HelloWorld",props:{msg:String}},C=m,b=(e("008b"),Object(r["a"])(C,f,g,!1,null,"972c2fba",null)),M=b.exports,z=function(){var t=this,c=t._self._c;return c("header",{staticClass:"header",attrs:{id:"header"}},[c("div",{staticClass:"container"},[c("div",{staticClass:"wrapper"},[c("div",{staticClass:"header-item-left"},[c("a",{staticClass:"brand",attrs:{href:"/"}},[c("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"155.377px",height:"40px",viewBox:"254.384 375.649 155.377 40","enable-background":"new 254.384 375.649 155.377 40","xml:space":"preserve"}},[c("g",[c("g",[c("path",{attrs:{fill:"#FFFFFF",d:"M303.269,379.543h2.231l2.62,6.832c0.505,1.369,1.269,3.939,1.269,3.939h0.034    c0,0,0.776-2.552,1.286-3.939l2.569-6.832h2.301v12.581h-1.657v-7.609c0-1.116,0.103-3.23,0.103-3.23h-0.036    c0,0-0.506,1.892-0.881,2.876l-3.06,7.965h-1.354l-3.063-7.965c-0.355-0.98-0.879-2.876-0.879-2.876h-0.036    c0,0,0.104,2.114,0.104,3.23v7.609h-1.557v-12.581H303.269z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M318.437,379.543h5.293c1.335,0,2.366,0.438,3.011,1.218c0.56,0.659,0.896,1.472,0.896,2.47    c0,2.317-1.354,3.721-4.075,3.721h-3.38v5.175h-1.744V379.543z M320.181,385.544h3.211c1.706,0,2.52-0.862,2.52-2.266    c0-1.473-0.896-2.231-2.453-2.231h-3.277V385.544z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M332.896,379.543h8.945v1.521h-7.221v3.804h6.526v1.437h-6.526v4.244h7.407v1.571h-9.132V379.543z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M345.242,384.329h0.05c0.658-0.912,1.555-1.504,2.876-1.504c1.893,0,3.061,1.066,3.061,2.958v6.341h-1.555    v-6.155c0-1.166-0.759-1.825-1.994-1.825c-1.404,0-2.418,0.998-2.418,2.453v5.528h-1.571v-9.081h1.555v1.286H345.242z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M353.193,392.748h1.473c0.134,0.948,1.048,1.336,2.4,1.336c1.623,0,2.521-0.727,2.521-2.267v-0.253    c0-0.524,0.017-1.016,0.034-1.301h-0.034c-0.627,0.895-1.423,1.455-2.705,1.455c-2.318,0-3.976-1.811-3.976-4.448    c0-2.79,1.759-4.448,3.89-4.448c1.3,0,2.181,0.506,2.755,1.421h0.032v-1.2h1.559v8.71c0,1.202-0.407,2.095-1.099,2.687    c-0.71,0.592-1.726,0.863-2.941,0.863C354.714,395.303,353.359,394.355,353.193,392.748z M359.687,387.202    c0-1.91-0.863-3.079-2.674-3.079c-1.657,0-2.501,1.25-2.501,3.161c0,1.929,0.88,3.147,2.52,3.147    C359.01,390.431,359.687,389.045,359.687,387.202z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M363.269,379.543h1.64v1.824h-1.64V379.543z M363.302,383.043h1.571v9.081h-1.571V383.043z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M368.612,384.329h0.051c0.658-0.912,1.555-1.504,2.873-1.504c1.893,0,3.062,1.066,3.062,2.958v6.341    h-1.558v-6.155c0-1.166-0.762-1.825-1.996-1.825c-1.404,0-2.419,0.998-2.419,2.453v5.528h-1.572v-9.081h1.557v1.286H368.612z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M376.255,387.591c0-2.638,1.745-4.769,4.346-4.769c1.354,0,2.402,0.524,3.112,1.404    c0.745,0.896,1.115,2.199,1.115,3.735h-6.968c0.117,1.775,1.083,3.129,2.842,3.129c1.249,0,2.113-0.592,2.401-1.558h1.54    c-0.406,1.693-1.862,2.841-3.957,2.841C377.896,392.378,376.255,390.246,376.255,387.591z M377.896,386.832h5.257    c-0.085-1.743-0.979-2.792-2.552-2.792C378.961,384.04,378.099,385.224,377.896,386.832z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M386.068,387.591c0-2.638,1.742-4.769,4.344-4.769c1.356,0,2.403,0.524,3.111,1.404    c0.746,0.896,1.116,2.199,1.116,3.735h-6.968c0.118,1.775,1.084,3.129,2.842,3.129c1.25,0,2.112-0.592,2.402-1.558h1.539    c-0.406,1.693-1.861,2.841-3.956,2.841C387.707,392.378,386.068,390.246,386.068,387.591z M387.707,386.832h5.258    c-0.086-1.743-0.979-2.792-2.554-2.792C388.772,384.04,387.91,385.224,387.707,386.832z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M397.871,384.682h0.051c0.559-1.048,1.488-1.757,2.688-1.757c0.253,0,0.406,0.033,0.573,0.1v1.49h-0.05    c-0.222-0.069-0.372-0.085-0.644-0.085c-1.403,0-2.603,1.048-2.603,2.754v4.936h-1.572v-9.08h1.556V384.682z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M402.049,389.366h1.59c0.185,1.319,1.2,1.76,2.503,1.76c1.435,0,2.045-0.627,2.045-1.437    c0-0.998-0.76-1.25-2.366-1.572c-1.775-0.371-3.384-0.745-3.384-2.74c0-1.554,1.221-2.538,3.333-2.538    c2.285,0,3.414,1.065,3.618,2.638h-1.572c-0.136-0.931-0.776-1.455-2.08-1.455c-1.234,0-1.759,0.574-1.759,1.269    c0,0.948,0.88,1.133,2.421,1.436c1.81,0.356,3.363,0.759,3.363,2.874c0,1.842-1.522,2.79-3.652,2.79    C403.604,392.395,402.184,391.211,402.049,389.366z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M318.37,398.701h1.926l4.635,12.581h-1.895l-1.25-3.671h-4.954l-1.285,3.671h-1.776L318.37,398.701z     M317.303,406.257h4.024l-1.202-3.518c-0.423-1.219-0.759-2.673-0.759-2.673h-0.05c0,0-0.371,1.504-0.776,2.673L317.303,406.257z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M327.841,403.839h0.052c0.558-1.047,1.486-1.756,2.688-1.756c0.252,0,0.405,0.032,0.572,0.1v1.489h-0.049    c-0.22-0.068-0.371-0.086-0.642-0.086c-1.404,0-2.605,1.048-2.605,2.756v4.936h-1.572v-9.081h1.554v1.642H327.841z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M331.645,406.749c0-2.639,1.706-4.769,4.431-4.769c2.181,0,3.603,1.233,3.924,3.179h-1.572    c-0.22-1.183-1.029-1.91-2.349-1.91c-1.859,0-2.823,1.539-2.823,3.5c0,1.96,0.964,3.5,2.823,3.5c1.422,0,2.267-0.828,2.385-2.181    h1.555c-0.204,2.163-1.64,3.467-3.939,3.467C333.356,411.535,331.645,409.403,331.645,406.749z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M343.161,403.519h0.049c0.677-0.962,1.59-1.54,2.909-1.54c1.893,0,3.062,1.065,3.062,2.958v6.34h-1.554    v-6.154c0-1.167-0.76-1.826-1.997-1.826c-1.404,0-2.417,0.999-2.417,2.453v5.528h-1.571v-12.581h1.571v3.297    C343.213,402.454,343.178,403.078,343.161,403.519z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M351.33,398.701h1.64v1.825h-1.64V398.701z M351.365,402.2h1.572v9.082h-1.572V402.2z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M354.563,402.2h1.421v-2.858h1.554v2.858h1.878v1.219h-1.878v5.731c0,0.659,0.356,0.845,0.93,0.845    c0.271,0,0.628-0.068,0.795-0.118h0.052v1.318c-0.425,0.103-0.863,0.153-1.27,0.153c-1.219-0.018-2.064-0.506-2.064-1.843v-6.087    h-1.421V402.2H354.563z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M360.261,406.749c0-2.639,1.742-4.769,4.344-4.769c1.355,0,2.403,0.523,3.112,1.404    c0.743,0.895,1.116,2.2,1.116,3.736h-6.969c0.117,1.775,1.083,3.129,2.841,3.129c1.251,0,2.113-0.592,2.401-1.558h1.54    c-0.406,1.692-1.859,2.84-3.956,2.84C361.901,411.535,360.261,409.403,360.261,406.749z M361.901,405.986h5.258    c-0.086-1.743-0.981-2.791-2.554-2.791C362.965,403.198,362.104,404.381,361.901,405.986z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M370.019,406.749c0-2.639,1.708-4.769,4.43-4.769c2.182,0,3.604,1.233,3.924,3.179h-1.571    c-0.221-1.183-1.031-1.91-2.353-1.91c-1.859,0-2.822,1.539-2.822,3.5c0,1.96,0.963,3.5,2.822,3.5c1.423,0,2.267-0.828,2.385-2.181    h1.557c-0.202,2.163-1.639,3.467-3.941,3.467C371.727,411.535,370.019,409.403,370.019,406.749z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M379.27,402.2h1.422v-2.858h1.559v2.858h1.877v1.219h-1.877v5.731c0,0.659,0.354,0.845,0.93,0.845    c0.271,0,0.627-0.068,0.795-0.118h0.05v1.318c-0.423,0.103-0.862,0.153-1.269,0.153c-1.218-0.018-2.064-0.506-2.064-1.843v-6.087    h-1.422V402.2L379.27,402.2z"}}),c("path",{attrs:{fill:"#FFFFFF",d:"M385.087,408.523h1.589c0.187,1.319,1.202,1.76,2.505,1.76c1.435,0,2.044-0.627,2.044-1.437    c0-0.998-0.76-1.25-2.368-1.572c-1.773-0.371-3.379-0.745-3.379-2.741c0-1.554,1.216-2.538,3.33-2.538    c2.285,0,3.415,1.066,3.618,2.638h-1.572c-0.135-0.93-0.776-1.455-2.082-1.455c-1.232,0-1.756,0.574-1.756,1.269    c0,0.948,0.879,1.134,2.421,1.437c1.81,0.356,3.364,0.759,3.364,2.873c0,1.843-1.523,2.79-3.653,2.79    C386.645,411.548,385.223,410.366,385.087,408.523z"}})]),c("polygon",{attrs:{fill:"#FFFFFF",points:"308.008,402.557 306.624,402.557 306.624,406.251 303.055,406.251 303.055,407.561    306.624,407.561 306.624,411.275 308.008,411.275 308.008,407.561 311.574,407.561 311.574,406.251 308.008,406.251  "}})]),c("path",{attrs:{fill:"#FFFFFF",d:"M254.384,375.649v40h40v-40H254.384z M261.734,408.148h-3.621l4.884-24.941l7.427,16.818l-1.823,3.992  l-4.373-9.889L261.734,408.148z M275.791,408.148v-2.901h3.749l-1.774-11.103l-6.385,14.003h-6.036v-2.901h3.782l10.078-22.041  l4.388,24.941H275.791z M290.574,394.204c-0.95,1.356-2.342,2.361-3.933,2.838c-0.917,0.273-3.876,0.769-3.876,0.769l-0.576-3.259  c0.893-0.157,1.795-0.292,2.682-0.481c0.843-0.179,1.693-0.454,2.346-1.037c0.671-0.597,1.142-1.408,1.327-2.287  c0.107-0.518,0.116-1.053,0.025-1.575c-0.095-0.519-0.286-1.021-0.563-1.472c-0.475-0.763-1.196-1.362-2.031-1.694  c-0.815-0.324-1.707-0.291-2.559-0.168c-0.897,0.128-1.791,0.309-2.685,0.469l-0.576-3.257c0-0.002,1.012-0.181,1.076-0.193  c0.938-0.168,1.875-0.361,2.83-0.418c1.659-0.099,3.311,0.368,4.669,1.316c1.646,1.148,2.746,2.865,3.099,4.839l0,0v0.002l0,0  C292.168,390.569,291.725,392.563,290.574,394.204z"}})])])]),t._m(0)])])])},y=[function(){var t=this,c=t._self._c;return c("div",{staticClass:"header-item-center"},[c("ul",{staticClass:"menu"},[c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/about"}},[t._v("About")])]),c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/expertise"}},[t._v("Expertise")])]),c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/projects"}},[t._v("Projects")])]),c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/leadership"}},[t._v("People")])]),c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/offices"}},[t._v("Offices")])]),c("li",{staticClass:"list"},[c("a",{attrs:{href:"https://mpengs.nyc/career"}},[t._v("Careers")])])])])}],w={name:"HelloWorld",props:{msg:String}},_=w,x=(e("0f63"),Object(r["a"])(_,z,y,!1,null,"650a50cd",null)),k=x.exports,j={name:"Home",components:{Flipbook:d["a"],HelloWorld:M,HelloWorld2:k},data(){return{pages:["","/yo.jpg","/na.jpg","/jo.jpg","/ma.jpg"],pages1:[],counting:0,ip_address:"",location:null,gettingLocation:!1,errorStr:null,articleId:null}},methods:{postit(){var t={lat:this.location.coords.latitude,long:this.location.coords.longitude,count:this.counting};console.log(t),u.a.post("https://newsletter.mpengs.nyc/get_ips",{data:t},{params:t}).then(t=>this.articleId=t.data.id)},count(){this.counting=this.counting+1},async getLocation(){return new Promise((t,c)=>{"geolocation"in navigator||c(new Error("Geolocation is not available.")),navigator.geolocation.getCurrentPosition(c=>{t(c)},t=>{c(t)})})},async locateMe(){this.gettingLocation=!0;try{this.gettingLocation=!1,this.location=await this.getLocation()}catch(t){this.gettingLocation=!1,this.errorStr=t.message}this.postit()}},created(){let t=this;u.a.get("https://newsletter.mpengs.nyc/get_event_pics3").then((function(c){t.pages=c.data,t.pages1=t.pages.data})),u.a.get("https://api.ipify.org?format=json").then((function(c){t.ip_address=c.data,console.log(t.ip_address)}))}},H=j,L=(e("22c8"),Object(r["a"])(H,F,p,!1,null,"4b8bbc74",null)),V=L.exports;a["default"].use(o["a"]);const O=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:()=>e.e("about").then(e.bind(null,"f820"))}],P=new o["a"]({routes:O});var S=P,E=e("660e"),q=e("5f5b"),A=e("b1e0");e("f9e3"),e("2dd8");a["default"].config.productionTip=!1,a["default"].use(E["a"],{breakpoints:{sm:450,md:1550,lg:1/0},defaultBreakpoint:"sm"}),a["default"].use(q["a"]),a["default"].use(A["a"]),new a["default"]({router:S,VueMq:E["a"],render:t=>t(n)}).$mount("#app")},"67ed":function(t,c,e){},"6a6d":function(t,c,e){}});
//# sourceMappingURL=app.eda94cd9.js.map