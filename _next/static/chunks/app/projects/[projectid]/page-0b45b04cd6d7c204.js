(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962,399,613,955,895,664,796],{2667:function(e,s,a){Promise.resolve().then(a.bind(a,8604)),Promise.resolve().then(a.t.bind(a,231,23))},8604:function(e,s,a){"use strict";var n=a(7437),l=a(2265),c=a(6134),r=a.n(c),i=a(7138);a(7722);var d=a(5390);s.default=()=>{let[e,s]=(0,l.useState)(!1),[a,c]=(0,l.useState)(!1),[t,o]=(0,l.useState)(""),[h,m]=(0,l.useState)();(0,l.useEffect)(()=>{o(window.innerWidth>768?"flex":"none"),m(window.innerWidth>768?(0,n.jsx)("div",{children:(0,n.jsxs)("h2",{className:r().slogan,children:["эксплуатация",(0,n.jsx)("br",{}),"и ремонт",(0,n.jsx)("br",{}),"сооружений",(0,n.jsx)("br",{})]})}):(0,n.jsx)("h2",{className:r().slogan,children:"эксплуатация и ремонт сооружений"}))},[]);let x=()=>{console.log("Закрыть форму"),c(!1),setTimeout(()=>s(!1),300)};return(0,n.jsxs)("div",{id:"header",children:[(0,n.jsx)("section",{className:r().siteMenu,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,n.jsxs)("div",{style:{paddingTop:"15px",paddingBottom:"15px"},children:[(0,n.jsx)("button",{onClick:()=>{console.log("Открыть меню"),o("flex"===t?"none":"flex")},children:(0,n.jsx)("img",{className:r().toggleIcon,src:"/images/toggleIcon.svg",alt:""})}),(0,n.jsxs)("ul",{style:{display:t,gap:"1rem",listStyleType:"none",margin:"0",padding:"0"},className:r().headerLinks,children:[(0,n.jsx)("li",{className:r().headerLinks,children:(0,n.jsx)(i.default,{href:"/",children:"главная"})}),(0,n.jsx)("li",{className:r().headerLinks,children:(0,n.jsx)(i.default,{href:"/about",children:"о компании"})}),(0,n.jsx)("li",{className:r().headerLinks,children:(0,n.jsx)(i.default,{href:"/news",children:"новости"})}),(0,n.jsx)("li",{className:r().headerLinks,children:(0,n.jsx)(i.default,{href:"/services",children:"услуги"})}),(0,n.jsx)("li",{className:r().headerLinks,children:(0,n.jsx)(i.default,{href:"/price",children:"цены"})}),(0,n.jsx)("li",{className:r().headerLinks,children:(0,n.jsx)(i.default,{href:"/projects",children:"проекты"})}),(0,n.jsx)("li",{className:r().headerLinks,children:(0,n.jsx)(i.default,{href:"/vacansii",children:"вакансии"})}),(0,n.jsx)("li",{className:r().headerLinks,children:(0,n.jsx)(i.default,{href:"/contacts",children:"контакты"})})]})]})})})}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsxs)("div",{className:r().logoBlock,children:[(0,n.jsx)(i.default,{href:"/",className:"mr-8",children:(0,n.jsx)("img",{src:"/images/logo1.jpg",alt:"logo",width:"211"})}),h]}),(0,n.jsxs)("div",{className:r().phoneBlock,children:[(0,n.jsx)("h3",{className:r().phone,children:"+7 391 2180214"}),(0,n.jsx)("button",{onClick:()=>{console.log("Заказать звонок"),s(!0),setTimeout(()=>c(!0),10)},className:r().callback,children:"заказать звонок"})]})]})})}),e&&(0,n.jsxs)("div",{className:"feedBack ".concat(e?"show":""),children:[(0,n.jsx)("div",{className:"overlay",onClick:x}),(0,n.jsx)("div",{className:"feedBackContent ".concat(a?"show":""),children:(0,n.jsx)(d.default,{Display:e,CloseForm:x})})]})]})}},5390:function(e,s,a){"use strict";a.r(s);var n=a(7437),l=a(2265);s.default=e=>{let{Display:s,CloseForm:a}=e,[c,r]=(0,l.useState)(""),[i,d]=(0,l.useState)(""),[t,o]=(0,l.useState)(""),h=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=e=>{h.current&&!h.current.contains(e.target)&&a()};return s?document.addEventListener("mousedown",e):document.removeEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[s,a]),(0,n.jsxs)("div",{ref:h,className:"feedBackContent",children:[(0,n.jsxs)("div",{className:"feedBackHeader",children:[(0,n.jsx)("h2",{className:"feedBackTitle",children:"Заказать звонок"}),(0,n.jsx)("button",{className:"close",onClick:a,children:(0,n.jsx)("svg",{className:"close",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,n.jsx)("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})})})]}),(0,n.jsxs)("div",{className:"feedBackBody",children:[(0,n.jsx)("div",{className:"feedBackInfo",children:"Вы можете заказать обратный звонок. Наши менеджеры будут рады ответить на Ваши вопросы."}),(0,n.jsxs)("form",{action:"",id:"feedBackForm",children:[(0,n.jsxs)("div",{className:"formGroup",children:[(0,n.jsxs)("label",{className:"formLabel",htmlFor:"feedBackPhone",children:["Номер телефона",(0,n.jsx)("span",{className:"asteriskField",children:"*"})]}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",className:"formInput formControl",id:"feedBackPhone",name:"phone",value:c,onChange:e=>r(e.target.value)})})]}),(0,n.jsxs)("div",{className:"formGroup",children:[(0,n.jsxs)("label",{className:"formLabel",htmlFor:"feedBackName",children:["Ваше имя",(0,n.jsx)("span",{className:"asteriskField",children:"*"})]}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",className:"formInput formControl",id:"feedBackName",name:"name",value:i,onChange:e=>d(e.target.value)})})]}),(0,n.jsxs)("div",{className:"formGroup",children:[(0,n.jsx)("label",{className:"formLabel",htmlFor:"feedBackMessage",children:"Сообщение"}),(0,n.jsx)("div",{children:(0,n.jsx)("textarea",{className:"formInput formControl",id:"feedBackMessage",name:"message",value:t,onChange:e=>o(e.target.value)})})]}),(0,n.jsx)("div",{className:"formGroup",children:(0,n.jsx)("button",{className:"buttonPrimary",type:"submit",children:"Отправить"})})]})]})]})}},7722:function(e){"use strict";e.exports={content:["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],theme:{extend:{backgroundImage:{"gradient-radial":"radial-gradient(var(--tw-gradient-stops))","gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"}}},plugins:[]}},6134:function(e){e.exports={siteMenu:"Header_siteMenu__IAozI",header:"Header_header__xuTiO",headerLinks:"Header_headerLinks__eeKB7",search:"Header_search__vP3SH",searchIcon:"Header_searchIcon__53olj",searchInput:"Header_searchInput__1xdgM",slogan:"Header_slogan__OaH5W",phone:"Header_phone__DkfhH",callback:"Header_callback__XO_oX",logoBlock:"Header_logoBlock__OhnSF",phoneBlock:"Header_phoneBlock__YwTzk",toggleIcon:"Header_toggleIcon__9KvLy"}}},function(e){e.O(0,[466,138,971,23,744],function(){return e(e.s=2667)}),_N_E=e.O()}]);