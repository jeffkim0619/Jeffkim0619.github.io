import{_ as e,r as s,a as o,o as a,c,f as n,d as i,e as t,t as d,F as r,n as l}from"./index.b47dc3c7.js";const u={class:"field-radiobutton m-3"},h=["for"];const m=e({emits:["radioOnCheck"],props:{choiseList:{type:Array,required:!0}},setup(){const e=s(),{emit:o}=l();return{check:e,radioOnCheck:()=>{o("radioOnCheck",e.value)}}}},[["render",function(e,s,l,m,f,p){const k=o("RadioButton");return a(!0),c(r,null,n(l.choiseList,((e,o)=>(a(),c("div",{key:o},[i("div",u,[t(k,{inputId:e.choiseIdx,value:e.choiseNm,modelValue:m.check,"onUpdate:modelValue":s[0]||(s[0]=e=>m.check=e),onChange:m.radioOnCheck},null,8,["inputId","value","modelValue","onChange"]),i("label",{for:e.choiseIdx},d(e.choiseNm),9,h)])])))),128)}],["__file","/Users/jeff/Documents/jeff/test/sample/221017/dev_1/src/components/choise/Radio.vue"]]);export{m as R};