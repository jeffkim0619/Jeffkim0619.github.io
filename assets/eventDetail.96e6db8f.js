import{e}from"./event.30d275d0.js";import{_ as t,s,j as n,k as a,r as l,a as i,c as _,d as v,t as p,g as c,b as d,w as o,v as u,l as r,f as m,o as f}from"./index.26684738.js";const h={components:{VueDaumPostcode:s},setup(){const t=n(),s=a(),i=e.resultData,_=l({});i.forEach((e=>{e.eventId===t.params.id&&(_.value=e)}));const v=l(!1),p=l(""),c=l(""),d=l(""),o=l([]);return{route:t,data:_,display:v,address:p,postal:c,fileName:d,essential:o,searchAddress:()=>{v.value=!0},oncomplete:e=>{"R"===e.userSelectedType?p.value=e.roadAddress:p.value=e.jibunAddress,c.value=e.zonecode,v.value=!1},onupload:e=>{d.value=e.files[0].name},checkEssential:()=>{o.value.length>1&&(o.value.reverse(),o.value.pop())},participateEvent:()=>{let e=o.value[0];(o.value.length<1||"event_essential_off"===e)&&s.add({severity:"error",summary:"개인정보 동의",detail:"개인정보 수집 및 이용에 동의하셔야 합니다.",life:1500})}}}},x={class:"event_detail_info"},b=v("div",{class:"event_detail_title"},[v("span",{class:"event_detail_title_h"},"|"),v("span",{class:"event_detail_title_b"},"이벤트 안내")],-1),y={class:"event_details"},k=["src","alt"],g={class:"event_details_title"},E={class:"event_details_contants"},w={class:"event_details_period"},C={class:"event_details_con"},U={class:"event_participate_info"},D=v("div",{class:"event_participate_title"},[v("span",{class:"event_participate_title_h"},"|"),v("span",{class:"event_participate_title_b"},"이벤트 참여")],-1),j={class:"event_participate_detail"},A={class:"event_input"},I=m('<div class="event_input_1"><div class="event_input_1_1">이름</div><input class="event_input_1_2 event_input_text" type="text" placeholder="이름입력"></div><div class="event_input_1"><div class="event_input_1_1">연락처</div><input class="event_input_1_2 event_input_text" type="text" placeholder="연락처 입력"></div><div class="event_input_1"><div class="event_input_1_1">추가입력사항1</div><input class="event_input_1_2 event_input_text" type="text" placeholder="추가입력사항1 입력"></div><div class="event_input_1"><div class="event_input_1_1"> 추가입력사항2 의 내용이 길면 이렇게 질어 집니다 </div><input class="event_input_1_2 event_input_text" type="text" placeholder="추가입력사항2 의 내용이 길면 이렇게 질어 집니다 입력"></div><div class="event_input_1"><div class="event_input_1_1">추가입력사항3</div><input class="event_input_1_2 event_input_text" type="text" placeholder="추가입력사항3 입력"></div>',5),M={class:"event_input_1"},V=v("div",{class:"event_input_1_1"},"우편번호",-1),z=["value"],P=[v("span",{class:"event_button_1_1"},"우편번호 검색",-1)],S={class:"event_input_1"},T=v("div",{class:"event_input_1_1"},"주소",-1),F=["value"],N=v("div",{class:"event_input_1"},[v("div",{class:"event_input_1_1"},"세부 주소"),v("input",{class:"event_input_1_2 event_input_text",type:"text",placeholder:"세부주소 입력"})],-1),G={class:"event_input_1"},L=v("div",{class:"event_input_1_1"},"첨부파일",-1),R=["value"],q={class:"event_consent"},B=m('<div class="event_consent_1"><span class="event_consent_1_1">개인정보 수집 및 이용에 관한 동의사항이 길 어질수도 있다<span class="event_consent_1_2" style="color:#0058a6;">(필수)</span></span></div><div class="event_consent_2"><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p><p>문자안내 서비스 이용 동의 내용이 들어갈 공간</p></div>',2),H={class:"event_consent_check"},J=v("label",{class:"event_consent_check_4",for:"event_essential_on"},"동의",-1),K=v("label",{class:"event_consent_check_6",for:"event_essential_off"},"미동의",-1),O=[v("span",{class:"event_involved_1"},"참여하기",-1)],Q={class:"post-daum-address"};var W=t(h,[["render",function(e,t,s,n,a,l){const m=i("FileUpload"),h=i("VueDaumPostcode"),W=i("Dialog"),X=i("Toast");return f(),_("div",x,[b,v("div",y,[v("img",{src:n.data.eventMainImg,alt:n.data.eventMainImg,class:"event_details_img"},null,8,k),v("span",g,p(n.data.eventTitle),1),v("div",E,[v("p",w,p(n.data.eventPeriod),1),v("p",C,p(n.data.eventContents),1)])]),v("div",U,[D,v("div",j,[c(" 1 "),v("div",A,[I,v("div",M,[V,v("input",{class:"event_input_1_2 event_input_text",type:"text",value:n.postal,placeholder:"우편번호 입력"},null,8,z)])]),c(" 1 "),c(" 2 "),v("div",{class:"event_button_1",onClick:t[0]||(t[0]=(...e)=>n.searchAddress&&n.searchAddress(...e))},P),c(" 2 "),c(" 3 "),v("div",S,[T,v("input",{class:"event_input_1_2 event_input_text",type:"text",value:n.address,placeholder:"주소 입력"},null,8,F)]),N,v("div",G,[L,v("input",{class:"event_input_1_2 event_input_text",type:"text",value:n.fileName,placeholder:"첨부파일 입력"},null,8,R)]),c(" 3 "),c(" 4 "),c(' <div class="event_button_2" >\r\n          <span class="event_button_2_1">업로드</span>\r\n        </div> '),c(" 4 "),c(" 4 "),d(m,{class:"event_button_2",mode:"basic",uploadIcon:"null",auto:!0,chooseLabel:"업로드",name:"demo[]",multiple:!0,customUpload:!0,maxFileSize:1e6,style:{"font-family":"GmarketSansMedium","font-size":"16px","line-height":"17px",color:"#ffffff"},onUploader:n.onupload},null,8,["onUploader"]),c(' <input class="event_button_2" id="event_file" type="file" placeholder="업로드"/> '),c(' <span class="event_button_2_1">업로드</span> '),c(" 4 "),c(" 5 "),v("div",q,[B,v("div",H,[c(' name="event_essential_on" '),o(v("input",{type:"checkbox",class:"event_consent_check_3",id:"event_essential_on",value:"event_essential_on","onUpdate:modelValue":t[1]||(t[1]=e=>n.essential=e),onChange:t[2]||(t[2]=(...e)=>n.checkEssential&&n.checkEssential(...e))},null,544),[[u,n.essential]]),J,c(' name="event_essential_off" '),o(v("input",{type:"checkbox",class:"event_consent_check_5",id:"event_essential_off",value:"event_essential_off","onUpdate:modelValue":t[3]||(t[3]=e=>n.essential=e),onChange:t[4]||(t[4]=(...e)=>n.checkEssential&&n.checkEssential(...e))},null,544),[[u,n.essential]]),K])]),c(" 5 ")]),v("div",{class:"event_involved",onClick:t[5]||(t[5]=(...e)=>n.participateEvent&&n.participateEvent(...e))},O)]),c(" 카카오주소 "),v("div",Q,[d(W,{header:"주소검색",visible:n.display,"onUpdate:visible":t[6]||(t[6]=e=>n.display=e),breakpoints:{"1080px":"75vw","720px":"100vw"},style:{width:"30vw"},modal:!0,class:"",dismissableMask:!0},{default:r((()=>[d(h,{onComplete:n.oncomplete},null,8,["onComplete"])])),_:1},8,["visible"])]),c(" 카카오주소 "),d(X,{position:"center"})])}],["__file","D:/2022/1.위시켓/0708더스포츠/project/bluewings/bluewings.club/src/views/main/event/eventDetail.vue"]]);export{W as default};
