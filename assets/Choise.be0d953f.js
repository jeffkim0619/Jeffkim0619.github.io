import{j as e,i as s,c as o,_ as t,k as a,d as r,r as c,e as i,o as l,a as m,f as n,b as p,g as f,w as u,l as h,m as d,K as D}from"./index.b2e2f5a6.js";import v from"./Docter.bfb44c5c.js";import b from"./Department.adc306af.js";import j from"./Date.02c80e25.js";import P from"./Purpose.c3f9b2a6.js";import"./Radio.81d60cef.js";const g={class:"m-2"},x={class:"mt-2 mb-2 choiseHD"};const C=t({components:{Docter:v,Department:b,Date:j,Purpose:P},setup(){a((()=>{t.push(i.value[0].to)}));const t=r(),i=c([{label:"증명서 선택",to:"/choise/choiseDocument"},{label:"진료과 선택",to:"/choise/choiseDepartment"},{label:"진료의 선택",to:"/choise/choiseDocter"},{label:"진료일선택",to:"/choise/choiseDate"},{label:"발급용도선택",to:"/choise/choisePurpose"}]);let l=c({});const{choiseList:m,setChoiseList:n}=(()=>{const t=e();return{choiseList:s((()=>t.state.choise.choiseList)),setChoiseList:e=>{t.dispatch(o.store.choise.SETCHOISELIST,e)}}})();return{items:i,fromObject:l,nextPage:e=>{for(let s in e.fromData)l.value[s]=e.fromData[s];t.push(i.value[e.pageIndex+1].to)},prevPage:e=>{t.push(i.value[e.pageIndex-1].to)},complete:e=>{for(let s in e.fromData)l.value[s]=e.fromData[s];displayModal.value=!0,n(l.value)}}}},[["render",function(e,s,o,t,a,r){const c=i("Steps"),v=i("router-view");return l(),m("div",g,[n(' <div class="mt-2 mb-2"> '),p("div",x,[f(c,{model:t.items,readonly:!0},null,8,["model"])]),f(v,{fromData:t.fromObject,onPrevPage:s[0]||(s[0]=e=>t.prevPage(e)),onNextPage:s[1]||(s[1]=e=>t.nextPage(e)),onComplete:s[2]||(s[2]=e=>t.complete(e))},{default:u((({Component:e})=>[(l(),h(D,null,[(l(),h(d(e)))],1024))])),_:1},8,["fromData"])])}],["__file","/Users/jeff/Documents/jeff/test/sample/221017/dev_1/src/views/home/select/Choise.vue"]]);export{C as default};
