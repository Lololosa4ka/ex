(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{8604:function(e,s,a){"use strict";var r=a(7437),l=a(2265),t=a(6134),c=a.n(t),n=a(7138);a(7722);var i=a(5390);s.default=()=>{let[e,s]=(0,l.useState)(!1),[a,t]=(0,l.useState)(!1),[o,d]=(0,l.useState)(""),[h,m]=(0,l.useState)();(0,l.useEffect)(()=>{d(window.innerWidth>768?"flex":"none"),m(window.innerWidth>768?(0,r.jsx)("div",{children:(0,r.jsxs)("h2",{className:c().slogan,children:["эксплуатация",(0,r.jsx)("br",{}),"и ремонт",(0,r.jsx)("br",{}),"сооружений",(0,r.jsx)("br",{})]})}):(0,r.jsx)("h2",{className:c().slogan,children:"эксплуатация и ремонт сооружений"}))},[]);let x=()=>{console.log("Закрыть форму"),t(!1),setTimeout(()=>s(!1),300)};return(0,r.jsxs)("div",{id:"header",children:[(0,r.jsx)("section",{className:c().siteMenu,children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,r.jsxs)("div",{style:{paddingTop:"15px",paddingBottom:"15px"},children:[(0,r.jsx)("button",{onClick:()=>{console.log("Открыть меню"),d("flex"===o?"none":"flex")},children:(0,r.jsx)("img",{className:c().toggleIcon,src:"/images/toggleIcon.svg",alt:""})}),(0,r.jsxs)("ul",{style:{display:o,gap:"1rem",listStyleType:"none",margin:"0",padding:"0"},className:c().headerLinks,children:[(0,r.jsx)("li",{className:c().headerLinks,children:(0,r.jsx)(n.default,{href:"/",children:"главная"})}),(0,r.jsx)("li",{className:c().headerLinks,children:(0,r.jsx)(n.default,{href:"/about",children:"о компании"})}),(0,r.jsx)("li",{className:c().headerLinks,children:(0,r.jsx)(n.default,{href:"/news",children:"новости"})}),(0,r.jsx)("li",{className:c().headerLinks,children:(0,r.jsx)(n.default,{href:"/services",children:"услуги"})}),(0,r.jsx)("li",{className:c().headerLinks,children:(0,r.jsx)(n.default,{href:"/price",children:"цены"})}),(0,r.jsx)("li",{className:c().headerLinks,children:(0,r.jsx)(n.default,{href:"/projects",children:"проекты"})}),(0,r.jsx)("li",{className:c().headerLinks,children:(0,r.jsx)(n.default,{href:"/vacansii",children:"вакансии"})}),(0,r.jsx)("li",{className:c().headerLinks,children:(0,r.jsx)(n.default,{href:"/contacts",children:"контакты"})})]})]})})})}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)("div",{className:c().logoBlock,children:[(0,r.jsx)(n.default,{href:"/",className:"mr-8",children:(0,r.jsx)("img",{src:"/images/logo1.jpg",alt:"logo",width:"211"})}),h]}),(0,r.jsxs)("div",{className:c().phoneBlock,children:[(0,r.jsx)("h3",{className:c().phone,children:"+7 391 2180214"}),(0,r.jsx)("button",{onClick:()=>{console.log("Заказать звонок"),s(!0),setTimeout(()=>t(!0),10)},className:c().callback,children:"заказать звонок"})]})]})})}),e&&(0,r.jsxs)("div",{className:"feedBack ".concat(e?"show":""),children:[(0,r.jsx)("div",{className:"overlay",onClick:x}),(0,r.jsx)("div",{className:"feedBackContent ".concat(a?"show":""),children:(0,r.jsx)(i.default,{Display:e,CloseForm:x})})]})]})}},7955:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return o}});var r=a(7437),l=a(2265),t=a(8478),c=a.n(t),n=a(7138);let i=[{image:"/images/projects/1.jpeg",title:"Название проекта",source:"/projects/1",text:"Описание проекта",description:"Описание проекта",id:1},{image:"/images/projects/2.jpeg",title:"Название проекта",source:"/projects/2",text:"Описание проекта",description:"Описание проекта",id:2},{image:"/images/projects/3.jpeg",title:"Название проекта",source:"/projects/3",text:"Описание проекта",description:"Описание проекта",id:3},{image:"/images/projects/4.jpeg",title:"Название проекта",source:"/projects/4",text:"Описание проекта",description:"Описание проекта",id:4}];var o=()=>{let[e,s]=(0,l.useState)(0),[a,t]=(0,l.useState)(null),[o,d]=(0,l.useState)(""),h=()=>{d("prev"),t((e-1+i.length)%i.length)},m=()=>{d("next"),t((e+1)%i.length)};return(0,l.useEffect)(()=>{if(null!==a){let e=setTimeout(()=>{s(a),t(null)},300);return()=>clearTimeout(e)}},[a]),(0,r.jsx)("div",{className:c().scrollContainer,children:i.map((s,l)=>(0,r.jsxs)("div",{className:"".concat(c().scrollItem," ").concat(l===e?c().current:""," ").concat(l===a?c()[o]:""),style:{backgroundImage:"url(".concat(s.image,")"),display:l===e||l===a?"flex":"none"},children:[(0,r.jsx)("div",{className:c().arrowContainer,children:(0,r.jsxs)("div",{className:c().arrowWrap,children:[(0,r.jsx)("svg",{className:c().arrowLeft,onClick:h,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,r.jsx)("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})}),(0,r.jsx)("svg",{className:c().arrow,onClick:m,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,r.jsx)("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})})]})}),(0,r.jsx)("div",{className:c().description,children:(0,r.jsxs)("div",{className:c().textContainer,children:[(0,r.jsxs)("div",{className:c().text,children:[(0,r.jsx)("h3",{className:"h3",children:s.title}),(0,r.jsx)("h5",{children:s.description})]}),(0,r.jsx)("div",{className:"absolute bottom-0 right-0 text-white",children:(0,r.jsx)(n.default,{href:"/projects",children:(0,r.jsx)("button",{className:c().button,children:"Подробнее..."})})})]})})]},l))})}},5390:function(e,s,a){"use strict";a.r(s);var r=a(7437),l=a(2265);s.default=e=>{let{Display:s,CloseForm:a}=e,[t,c]=(0,l.useState)(""),[n,i]=(0,l.useState)(""),[o,d]=(0,l.useState)(""),h=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=e=>{h.current&&!h.current.contains(e.target)&&a()};return s?document.addEventListener("mousedown",e):document.removeEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[s,a]),(0,r.jsxs)("div",{ref:h,className:"feedBackContent",children:[(0,r.jsxs)("div",{className:"feedBackHeader",children:[(0,r.jsx)("h2",{className:"feedBackTitle",children:"Заказать звонок"}),(0,r.jsx)("button",{className:"close",onClick:a,children:(0,r.jsx)("svg",{className:"close",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:(0,r.jsx)("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})})})]}),(0,r.jsxs)("div",{className:"feedBackBody",children:[(0,r.jsx)("div",{className:"feedBackInfo",children:"Вы можете заказать обратный звонок. Наши менеджеры будут рады ответить на Ваши вопросы."}),(0,r.jsxs)("form",{action:"",id:"feedBackForm",children:[(0,r.jsxs)("div",{className:"formGroup",children:[(0,r.jsxs)("label",{className:"formLabel",htmlFor:"feedBackPhone",children:["Номер телефона",(0,r.jsx)("span",{className:"asteriskField",children:"*"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"text",className:"formInput formControl",id:"feedBackPhone",name:"phone",value:t,onChange:e=>c(e.target.value)})})]}),(0,r.jsxs)("div",{className:"formGroup",children:[(0,r.jsxs)("label",{className:"formLabel",htmlFor:"feedBackName",children:["Ваше имя",(0,r.jsx)("span",{className:"asteriskField",children:"*"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"text",className:"formInput formControl",id:"feedBackName",name:"name",value:n,onChange:e=>i(e.target.value)})})]}),(0,r.jsxs)("div",{className:"formGroup",children:[(0,r.jsx)("label",{className:"formLabel",htmlFor:"feedBackMessage",children:"Сообщение"}),(0,r.jsx)("div",{children:(0,r.jsx)("textarea",{className:"formInput formControl",id:"feedBackMessage",name:"message",value:o,onChange:e=>d(e.target.value)})})]}),(0,r.jsx)("div",{className:"formGroup",children:(0,r.jsx)("button",{className:"buttonPrimary",type:"submit",children:"Отправить"})})]})]})]})}},7722:function(e){"use strict";e.exports={content:["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],theme:{extend:{backgroundImage:{"gradient-radial":"radial-gradient(var(--tw-gradient-stops))","gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"}}},plugins:[]}},6134:function(e){e.exports={siteMenu:"Header_siteMenu__IAozI",header:"Header_header__xuTiO",headerLinks:"Header_headerLinks__eeKB7",search:"Header_search__vP3SH",searchIcon:"Header_searchIcon__53olj",searchInput:"Header_searchInput__1xdgM",slogan:"Header_slogan__OaH5W",phone:"Header_phone__DkfhH",callback:"Header_callback__XO_oX",logoBlock:"Header_logoBlock__OhnSF",phoneBlock:"Header_phoneBlock__YwTzk",toggleIcon:"Header_toggleIcon__9KvLy"}},8478:function(e){e.exports={scrollContainer:"scrollProjects_scrollContainer__etb0r",scrollItem:"scrollProjects_scrollItem__ma4e0",current:"scrollProjects_current__iRTPm",right:"scrollProjects_right__1vfpj",left:"scrollProjects_left__bmbnB",description:"scrollProjects_description__6kB6g",textContainer:"scrollProjects_textContainer__V6Qux",text:"scrollProjects_text__56xjE",button:"scrollProjects_button__geDZs",arrowContainer:"scrollProjects_arrowContainer__bV4HW",arrowWrap:"scrollProjects_arrowWrap__MQCH1",arrow:"scrollProjects_arrow__G2F5r",arrowLeft:"scrollProjects_arrowLeft__ocl0V"}}}]);