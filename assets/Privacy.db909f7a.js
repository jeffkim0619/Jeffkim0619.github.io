import{_ as i,r as a,c,e as s,F as t,k as n,t as e,o as v,h as l}from"./index.f715368b.js";var r=[{privacyId:"pri_1",privacyTitle:"V1.0 (2022.10.10 개정)",privacyContents:"수원삼성이 제공하는 <블루윙즈클럽>은 경기 홍보, 정보를 제공하는 메시지를 기본적으로 제공하며, 이벤트와 설문조사 등에 참여 할 수 있습니다.#인터파크 예매를 통해서 간편 가입이 이루어진 회원을 대상으로‘ 본인인증 ' 절차가 필요합니다. 아래 [본인인증] 버튼을 통해서 본인인증 시 가입 절차가 마무리됩니다.#‘광고성 메시지 수신 동의 '시에는 맞춤형 메시지와 각종 쿠폰, 포인트 등이 제공됩니다. ",privacyStatus:"0"},{privacyId:"pri_2",privacyTitle:"V0.9 (2022.07.10 개정)",privacyContents:"인터파크 예매를 통해서 간편 가입이 이루어진 회원을 대상으로‘ 본인인증 ' 절차가 필요합니다. 아래 [본인인증] 버튼을 통해서 본인인증 시 가입 절차가 마무리됩니다.#‘광고성 메시지 수신 동의 '시에는 맞춤형 메시지와 각종 쿠폰, 포인트 등이 제공됩니다. ",privacyStatus:"1"},{privacyId:"pri_3",privacyTitle:"V0.8 (2022.05.10 개정)",privacyContents:"아래 [본인인증] 버튼을 통해서 본인인증 시 가입 절차가 마무리됩니다.#‘광고성 메시지 수신 동의 '시에는 맞춤형 메시지와 각종 쿠폰, 포인트 등이 제공됩니다. ",privacyStatus:"1"}];const p={setup(){const i=a(!1),c=a("▼"),s=r,t=a(""),n=i=>{null===i?t.value=s[0].privacyContents:s.forEach((a=>{a.privacyId===i&&(t.value=a.privacyContents)}))};n(null);return{isOpen:i,datas:s,icon:c,contents:t,listToggle:a=>{i.value?(i.value=!1,c.value="▼"):(i.value=!0,c.value="▲"),n(a)},getContents:n}}},y={class:"privacy_info"},o=s("div",{class:"privacy_title"},[s("span",{class:"privacy_title_h"},"|"),s("span",{class:"privacy_title_b"},"블루윙즈클럽 개인정보처리방침")],-1),u={class:"privacy_con"},_={key:0},d=["onClick"],C={key:1},k=["onClick"],f={class:"privacy_contents"},g={class:"privacy_contents_con"},T=s("div",null,null,-1);var I=i(p,[["render",function(i,a,r,p,I,b){return v(),c("div",y,[o,s("div",u,[(v(!0),c(t,null,n(p.datas,((i,a)=>(v(),c("div",{class:"privacy_con_title",key:a},[0===a?(v(),c("div",_,[0===a?(v(),c("div",{key:0,class:"privacy_con_title_1",onClick:a=>p.listToggle(i.privacyId)},[s("span",null,e(i.privacyTitle)+" "+e(p.icon),1)],8,d)):l("v-if",!0)])):(v(),c("div",C,[p.isOpen?(v(),c("div",{key:0,class:"privacy_con_title_2",onClick:a=>p.getContents(i.privacyId)},e(i.privacyTitle),9,k)):l("v-if",!0)]))])))),128))]),s("div",f,[s("div",g,[s("span",null,e(p.contents),1)])]),T])}],["__file","D:/demo/vue/bluewings/bluewings.club/src/views/main/privacy/Privacy.vue"]]);export{I as default};