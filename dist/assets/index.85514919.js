var e=Object.defineProperty,t=(t,l,a)=>(((t,l,a)=>{l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a})(t,"symbol"!=typeof l?l+"":l,a),a);import{R as l,r as a,d as n,a as r,M as c,F as o,b as d,c as i,e as s,B as m,S as u,f as E,D as v,G as f,K as y,g}from"./vendor.a6c26f09.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const p=()=>l.createElement("div",null,l.createElement("div",{className:"header"},l.createElement("h3",null,"COVID-",l.createElement("span",{style:{color:"yellow"}},"19")," TRACKER")));const h=({stateData:e})=>(console.log(e),l.createElement("div",null,l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-3 box box1"},l.createElement("div",null,l.createElement("h2",null,"INDIA"))),l.createElement("div",{className:"col-md-3 box box2"},l.createElement("div",null,l.createElement("div",null,"Confirmed"),l.createElement("div",null,e.confirmed))),l.createElement("div",{className:"col-md-3 box box3"},l.createElement("div",null,l.createElement("div",null,"Active"),l.createElement("div",null,e.active))),l.createElement("div",{className:"col-md-3 box box4"},l.createElement("div",null,l.createElement("div",null,"Recovered"),l.createElement("div",null,e.recovered)))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-3 box box5"},l.createElement("div",null,l.createElement("div",null,"Deaths"),l.createElement("div",null,e.deaths))),l.createElement("div",{className:"col-md-3 box box6"},l.createElement("div",null,l.createElement("div",null,"Delta Confirmed"),l.createElement("div",null,e.deltaconfirmed))),l.createElement("div",{className:"col-md-3 box box7"},l.createElement("div",null,l.createElement("div",null,"Delta Recovered"),l.createElement("div",null,e.deltarecovered))),l.createElement("div",{className:"col-md-3 box box8"},l.createElement("div",null,l.createElement("div",null,"Delta Deaths"),l.createElement("div",null,e.deltadeaths)))))));const D=()=>{const[e,t]=a.exports.useState(),[E,v]=a.exports.useState(),[f,y]=a.exports.useState("Hey Champion! Still you have not added your COVID-19 information. Please click on + icon for fill details"),[g,p]=a.exports.useState(),[h,D]=a.exports.useState(),[b,x]=a.exports.useState(!0);a.exports.useState(!1),a.exports.useEffect((()=>{var e=localStorage.getItem("name"),t="true"===localStorage.getItem("vaccine"),l="true"===localStorage.getItem("full");null!==e&&(x(!1),p(e),console.log(g),y(`Hey! ${e} as we are see ${t?"you are  "+(l?"fully vaccinated , But still be careful !":"vaccinated but not fully vaccinate so please get full vaccine on your schedule date !"):"you haven't vaccinated yet please visit your nearest vaccine center !"}`))}),[]);return l.createElement("div",null,!e&&l.createElement("div",{className:"userMessage"},l.createElement("span",null,f),l.createElement("span",{className:"addIcon",onClick:()=>t(!0),variant:"contained",color:"primary",style:{marginLeft:"30px"}},b?l.createElement(n,null):l.createElement(r,null))),l.createElement(c,{isOpen:e},l.createElement("div",{className:"userData"},l.createElement("div",null,l.createElement("h2",{style:{marginBlock:"30px",color:"gray"}},"Vaccine Information")),l.createElement("table",null,l.createElement("tr",null,l.createElement("td",null,"Enter your name"),l.createElement("td",null,l.createElement("input",{type:"text",value:g,placeholder:"Please enter your name",onChange:e=>p(e.target.value)}))),l.createElement("tr",null,l.createElement("td",null,l.createElement("span",{style:{paddingTop:"40px"}},"Are you vaccinated")),l.createElement("td",null,l.createElement(o,{component:"fieldset"},l.createElement(d,{style:{display:"inline"},"aria-label":"gender",name:"gender1",onChange:e=>{"yes"===e.target.value?v(!0):v(!1)}},l.createElement(i,{value:"yes",control:l.createElement(s,null),label:"Yes"}),l.createElement(i,{value:"no",control:l.createElement(s,null),label:"No"}))))),E&&l.createElement("tr",null,l.createElement("td",null,"You have full vaccinated or half"),l.createElement("td",null,l.createElement(o,{component:"fieldset"},l.createElement(d,{style:{display:"inline"},"aria-label":"gender",name:"gender1",onChange:e=>{"full"===e.target.value?D(!0):D(!1)}},l.createElement(i,{value:"full",control:l.createElement(s,null),label:"Full"}),l.createElement(i,{value:"half",control:l.createElement(s,null),label:"Half"}))))),l.createElement("tr",null,l.createElement("td",{style:{paddingLeft:"20%"}},l.createElement(m,{variant:"contained",onClick:()=>t(!1),color:"secondary"},"Cancel")),l.createElement("td",{style:{paddingLeft:"20%"}},l.createElement(m,{variant:"contained",onClick:()=>(console.log(E),void(""===g?u.fire({icon:"warning",title:"Oops...",text:"Please Enter your name!"}):void 0===E||void 0===h&&E?u.fire({icon:"warning",title:"Oops...",text:"Please fill your vaccination details!"}):(window.location.reload(),t(!1),localStorage.setItem("userData",!0),localStorage.setItem("name",g),localStorage.setItem("vaccine",E),localStorage.setItem("full",h)))),color:"primary"},"Submit")))))))};const b=({stateData:e})=>{const[t,n]=a.exports.useState({name:e[1].state,active:e[1].active,death:e[1].deaths,confirmed:e[1].confirmed,recovered:e[1].recovered,deltaConfirm:e[1].deltaconfirmed,deltarecovered:e[1].deltarecovered,deltaDeaths:e[1].deltadeaths});var r=localStorage.getItem("userData");return l.createElement("div",{style:{overflowX:"hidden"}},l.createElement("div",{className:"selectBox"},l.createElement("select",{style:{marginBottom:"40px"},className:"stateList",onChange:t=>(t=>{console.log(t);for(let l of e)l.state===t.target.value&&(console.log(l.state),n({name:l.state,active:l.active,death:l.deaths,confirmed:l.confirmed,recovered:l.recovered,deltaConfirm:l.deltaconfirmed,deltarecovered:l.deltarecovered,deltaDeaths:l.deltadeaths}))})(t),onClick:()=>{r||u.fire({icon:"warning",title:"Oops...",text:"Please first fill your vaccination details!"})}},e.map(((e,t)=>{if("Total"!==e.state)return l.createElement("option",{key:t,style:{background:"transparent",height:"35px"},value:e.state},e.state)})))),l.createElement("table",{className:"table",style:{color:"white"}},l.createElement("tr",null,l.createElement("td",null,"State"),l.createElement("td",null,t.name)),l.createElement("tr",null,l.createElement("td",null,"Active"),l.createElement("td",null,t.active)),l.createElement("tr",null,l.createElement("td",null,"Confirmed"),l.createElement("td",null,t.confirmed)),l.createElement("tr",null,l.createElement("td",null,"recovered"),l.createElement("td",null,t.recovered)),l.createElement("tr",null,l.createElement("td",null,"Deaths"),l.createElement("td",null,t.death)),l.createElement("tr",null,l.createElement("td",null,"Active"),l.createElement("td",null,t.active)),l.createElement("tr",null,l.createElement("td",null,"Delta Confirm"),l.createElement("td",null,t.deltaConfirm)),l.createElement("tr",null,l.createElement("td",null,"Delta recovered"),l.createElement("td",null,t.deltarecovered)),l.createElement("tr",null,l.createElement("td",null,"Delta Deaths"),l.createElement("td",null,t.deltaDeaths))),l.createElement("div",{className:"warning"},l.createElement("div",null,t.deltaConfirm>100&&l.createElement("div",null,"100+ Delta patient found in ",t.name,", if you are belongs to the ",t.name," so be secure and maintain social distancing."))))};const x=({stateData:e})=>{const t=localStorage.getItem("userData");return l.createElement("div",{className:"scroll"},l.createElement("table",{className:(t?"sec":"tableData")+" table",onClick:()=>{localStorage.getItem("name")||u.fire({icon:"warning",title:"Oops...",text:"Please first fill your vaccination details!"})}},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"#NO"),l.createElement("th",null,"STATE NAME"),l.createElement("th",null,"CONFIRM CASE"),l.createElement("th",null,"ACTIVE"),l.createElement("th",null,"DEATHS"))),e.map(((e,t)=>{if("Total"!==e.state)return l.createElement("tr",{key:t},l.createElement("td",null,t+1),l.createElement("td",null,e.state),l.createElement("td",null,e.confirmed),l.createElement("td",null," ",e.active),l.createElement("td",null,e.deaths))}))))};const N=({stateData:e})=>{const[t,n]=a.exports.useState({dailyconfirmed:e[0].dailyconfirmed,dailydeceased:e[0].dailydeceased,dailyrecovered:e[0].dailyrecovered,date:e[0].date,totalconfirmed:e[0].totalconfirmed,totaldeceased:e[0].totaldeceased,totalrecovered:e[0].totalrecovered}),[r,c]=l.useState(new Date("2020-06-21"));function o(e){var t=new Date(e),l=("0"+(t.getMonth()+1)).slice(-2),a=("0"+t.getDate()).slice(-2);return[t.getFullYear(),l,a].join("-")}return l.createElement("div",null,l.createElement(E,{utils:v},l.createElement(f,{container:!0,justifyContent:"space-around"},l.createElement(y,{margin:"normal",id:"date-picker-dialog",label:"Date picker dialog",format:"dd/MM/yyyy",value:r,onChange:t=>{c(t),console.log(o(t));for(let l in e)o(t)==e[l].dateymd&&n({dailyconfirmed:e[l].dailyconfirmed,dailydeceased:e[l].dailydeceased,dailyrecovered:e[l].dailyrecovered,date:e[l].date,totalconfirmed:e[l].totalconfirmed,totaldeceased:e[l].totaldeceased,totalrecovered:e[l].totalrecovered})},KeyboardButtonProps:{"aria-label":"change date"},style:{background:"rgba(0,0,0,0.1)"}}))),l.createElement("div",{className:"testTable"},l.createElement("table",null,l.createElement("tr",null,l.createElement("tr",null,l.createElement("td",null,"Date"),l.createElement("td",null,t.date)),l.createElement("tr",null,l.createElement("td",null,"Daily Confirmed"),l.createElement("td",null,t.dailyconfirmed)),l.createElement("tr",null,l.createElement("td",null,"Daily Deceased"),l.createElement("td",null,t.dailydeceased)),l.createElement("tr",null,l.createElement("td",null,"Daily Recovered"),l.createElement("td",null,t.dailyrecovered)),l.createElement("tr",null,l.createElement("td",null,"Total Confirmed"),l.createElement("td",null,t.totalconfirmed)),l.createElement("tr",null,l.createElement("td",null,"Total Active"),l.createElement("td",null,t.totaldeceased)),l.createElement("tr",null,l.createElement("td",null,"Total Recovered"),l.createElement("td",null,t.totalrecovered))))))};const C=()=>l.createElement("div",{className:"footer"},l.createElement("span",null,"For any technical query with respect to COVID-19, you may kindly email on technicalquery.covid19@gov.in"));class S extends a.exports.Component{constructor(){super(),t(this,"changeState",(()=>{localStorage.getItem("userData")?this.setState({stateWiseData:!1}):u.fire({icon:"warning",title:"Oops...",text:"Please first fill your vaccination details! "})})),t(this,"changeTest",(()=>{this.setState({stateWiseData:!0})})),this.state={apiData:"",testData:"",stateWiseData:!0}}componentDidMount(){fetch("https://api.covid19india.org/data.json").then((e=>e.json())).then((e=>{console.log(e),this.setState({apiData:e.statewise,renderChildren:!1,testData:e.cases_time_series})})),console.log(this.state.apiData)}render(){const{apiData:e,testData:t,stateWiseData:a}=this.state;return l.createElement("div",{className:"container-fluet App"},l.createElement(p,null),l.createElement(D,null),l.createElement("div",null,this.state.apiData&&l.createElement(h,{stateData:e[0]}),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-5"}),l.createElement("div",{className:"col-md-4"},l.createElement("button",{onClick:this.changeTest},"State Wise Cases"),l.createElement("button",{onClick:this.changeState},"Day Wise Cases"))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-4"},e&&a&&l.createElement(b,{stateData:e})),l.createElement("div",{className:"col-md-8"},e&&a&&l.createElement(x,{stateData:e}))),t&&!a&&l.createElement(N,{stateData:t}),l.createElement(C,null)))}}g.render(l.createElement(l.StrictMode,null,l.createElement(S,null)),document.getElementById("root"));