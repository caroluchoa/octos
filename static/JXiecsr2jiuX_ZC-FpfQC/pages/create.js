(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"HaE+":function(e,a,t){"use strict";function n(e,a,t,n,r,s,c){try{var i=e[s](c),o=i.value}catch(u){return void t(u)}i.done?a(o):Promise.resolve(o).then(n,r)}function r(e){return function(){var a=this,t=arguments;return new Promise((function(r,s){var c=e.apply(a,t);function i(e){n(c,r,s,i,o,"next",e)}function o(e){n(c,r,s,i,o,"throw",e)}i(void 0)}))}}t.d(a,"a",(function(){return r}))},hixh:function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),r=t.n(n),s=t("HaE+"),c=t("MX0m"),i=t.n(c),o=t("q1tI"),u=t.n(o),l=t("vcXL"),m=t.n(l),p=t("h7RS"),d=t("nOHt"),x=t.n(d),f=u.a.createElement;a.default=function(){var e=Object(o.useState)(""),a=e[0],t=e[1],n=Object(o.useState)(""),c=n[0],u=n[1],l=Object(o.useState)(""),d=l[0],b=l[1],h=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={cameraname:a,serialnumber:c,manufacturer:d},e.next=5,m()("http://localhost:3000/api/post",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return s=e.sent,e.next=8,s.json();case 8:return e.sent,e.next=11,x.a.push("/");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a){return e.apply(this,arguments)}}();return f(p.a,null,f("div",{className:"jsx-3640873618 page"},f("form",{onSubmit:h,className:"jsx-3640873618"},f("h1",{className:"jsx-3640873618"},"Adicionar C\xe2mera"),f("label",{className:"jsx-3640873618"},f("input",{autoFocus:!0,onChange:function(e){return t(e.target.value)},placeholder:"Nome da C\xe2mera",type:"text",maxlength:"50",value:a,className:"jsx-3640873618"})),f("label",{className:"jsx-3640873618"},f("input",{placeholder:"N\xfamero de S\xe9rie",type:"text",maxlength:"16",required:!0,pattern:"[A-Z0-9]+",value:c,onChange:function(e){return u(e.target.value)},className:"jsx-3640873618"})),f("label",{className:"jsx-3640873618"},f("select",{class:"select-css",manufacturer:"Fabricante",value:d,onChange:function(e){return b(e.target.value)},className:"jsx-3640873618"},f("option",{className:"jsx-3640873618"},"Fabricante"),f("option",{value:"Secure C\xe2meras Inc",className:"jsx-3640873618"},"Secure C\xe2meras Inc"),f("option",{value:"Surveillance Cams LLC",className:"jsx-3640873618"},"Surveillance Cams LLC"),f("option",{value:"DigiEye Group",className:"jsx-3640873618"},"DigiEye Group"),f("option",{value:"C\xe2meraFi Inc",className:"jsx-3640873618"},"C\xe2meraFi Inc"),f("option",{value:"VidMasters Inc",className:"jsx-3640873618"},"VidMasters Inc"))),f("input",{disabled:!c||!a||!d,type:"submit",value:"Adicionar",className:"jsx-3640873618"}),f("a",{href:"#",onClick:function(){return x.a.push("/")},className:"jsx-3640873618 back"},"Cancelar"))),f(i.a,{id:"3640873618"},[".page.jsx-3640873618{background:white;padding:3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".select-css.jsx-3640873618{width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}","input[type='text'].jsx-3640873618,textarea.jsx-3640873618{width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}","input[type='submit'].jsx-3640873618{background:#ececec;border:0;padding:1rem 2rem;}",".back.jsx-3640873618{margin-left:1rem;}"]))}},mDwW:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return t("hixh")}])},vcXL:function(e,a,t){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports}},[["mDwW",0,2,1,3,4]]]);