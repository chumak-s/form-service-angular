(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Gk5q:function(e,t,n){"use strict";n.r(t),n.d(t,"FormMainModule",function(){return f});var i=n("ofXK"),s=n("fXoL");let c=(()=>{class e{transform(e){return e?e.reduce((e,t)=>e+t.price,0):"\u043e\u0448\u0438\u0431\u043a\u0430 \u0440\u0430\u0441\u0447\u0435\u0442\u0430"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=s.Ib({name:"pipeOptionsSum",type:e,pure:!0}),e})();function o(e,t){if(1&e){const e=s.Nb();s.Mb(0,"div",2),s.Tb("click",function(){s.cc(e);const n=t.$implicit;return s.Vb().selectUser(n.id)}),s.Mb(1,"p"),s.Mb(2,"strong"),s.gc(3),s.Lb(),s.Lb(),s.Mb(4,"div"),s.Mb(5,"p"),s.gc(6),s.Lb(),s.Mb(7,"p"),s.gc(8),s.Wb(9,"pipeOptionsSum"),s.Lb(),s.Lb(),s.Lb()}if(2&e){const e=t.$implicit,n=s.Vb();s.Bb("active",n.selected(e.id)),s.zb(3),s.hc(e.name),s.zb(3),s.ic("\u0423\u0441\u043b\u0443\u0433: ",e.options.length,""),s.zb(2),s.ic("\u0430\u0431. \u043f\u043b\u0430\u0442\u0430: ",s.Xb(9,5,e.options)," \u0440\u0443\u0431")}}let r=(()=>{class e{constructor(){this.users=null,this.selectedUserId=new s.n}selectUser(e){this.selectedUserId.emit(e)}selected(e){return this.currentId===e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-form-users"]],inputs:{users:"users",currentId:"currentId"},outputs:{selectedUserId:"selectedUserId"},decls:2,vars:1,consts:[[1,"user-container"],[3,"active","click",4,"ngFor","ngForOf"],[3,"click"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.fc(1,o,10,7,"div",1),s.Lb()),2&e&&(s.zb(1),s.Zb("ngForOf",t.users))},directives:[i.i],pipes:[c],styles:[".user-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid #000;border-radius:4px;justify-content:flex-start;height:100%}.user-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border:1px solid #000;border-radius:8px;margin:10px;padding:10px 20px;transition:all .18s ease-in;font-size:17px}.user-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row}.user-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex-grow:1}.user-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.active):hover{box-shadow:2px 6px 8px 0 #5f5e5e;cursor:pointer}.active[_ngcontent-%COMP%]{background:#eaeaea;border:1px solid #7f7e7e}"],changeDetection:0}),e})();var a=n("3Pt+");function l(e,t){if(1&e){const e=s.Nb();s.Mb(0,"div",7),s.Mb(1,"div"),s.Mb(2,"p"),s.gc(3),s.Wb(4,"date"),s.Lb(),s.Mb(5,"p"),s.gc(6),s.Lb(),s.Lb(),s.Mb(7,"div"),s.Mb(8,"p"),s.gc(9),s.Lb(),s.Mb(10,"button",8),s.Tb("click",function(){s.cc(e);const n=t.$implicit;return s.Vb().onRemoveOption(n.id)}),s.gc(11,"\u2717"),s.Lb(),s.Lb(),s.Lb()}if(2&e){const e=t.$implicit;s.zb(3),s.hc(s.Yb(4,3,e.startDate,"dd.MM.YYYY")),s.zb(3),s.ic("\xa0 ",e.name,""),s.zb(3),s.ic("",e.price," \u0440\u0443\u0431")}}function d(e,t){1&e&&(s.Mb(0,"p"),s.gc(1," \u041d\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0445 \u0443\u0441\u043b\u0443\u0433 "),s.Lb())}function p(e,t){if(1&e){const e=s.Nb();s.Mb(0,"div",3),s.Mb(1,"div"),s.Mb(2,"input",9),s.Tb("click",function(n){s.cc(e);const i=t.$implicit;return s.Vb().selectAnOption(n,i.id)}),s.Lb(),s.Mb(3,"label",10),s.gc(4),s.Lb(),s.Lb(),s.Mb(5,"p"),s.gc(6),s.Lb(),s.Lb()}if(2&e){const e=t.$implicit;s.zb(2),s.Zb("id",e.id)("checked",e.check),s.zb(1),s.Zb("for",e.id),s.zb(1),s.hc(e.name),s.zb(2),s.ic("",e.price," \u0440\u0443\u0431")}}function b(e,t){1&e&&(s.Mb(0,"p"),s.gc(1,"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0443\u0441\u043b\u0443\u0433"),s.Lb())}function u(e,t){if(1&e){const e=s.Nb();s.Mb(0,"button",8),s.Tb("click",function(){return s.cc(e),s.Vb().onAddSelectedOptions()}),s.gc(1,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438"),s.Lb()}}let h=(()=>{class e{constructor(){this.removeOption=new s.n,this.selectedOptionId=new s.n,this.addSelectedOptions=new s.n,this.changeInputValue=new s.n}get showSelectedOptionNotice(){return 0===this.user.options.length}get showUnselectedOptionNotice(){return 0===this.availableOptions.length}get showFilteredUserOptions(){return 0!==this.filteredUserOptions.length||this.inputValue?this.filteredUserOptions:this.user.options}onRemoveOption(e){this.removeOption.emit(e)}selectAnOption(e,t){e.preventDefault(),this.selectedOptionId.emit(t)}onAddSelectedOptions(){this.addSelectedOptions.emit()}onChangeInputValue(){this.changeInputValue.emit(this.inputValue)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-form-options"]],inputs:{user:"user",filteredUserOptions:"filteredUserOptions",availableOptions:"availableOptions"},outputs:{removeOption:"removeOption",selectedOptionId:"selectedOptionId",addSelectedOptions:"addSelectedOptions",changeInputValue:"changeInputValue"},decls:14,vars:6,consts:[["placeholder","\u041f\u043e\u0438\u0441\u043a","type","search",1,"search",3,"ngModel","ngModelChange","input"],["class","service-active",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"available-service"],["class","available-service",4,"ngFor","ngForOf"],[1,"container-btn"],[3,"click",4,"ngIf"],[1,"service-active"],[3,"click"],["type","checkbox",3,"id","checked","click"],[3,"for"]],template:function(e,t){1&e&&(s.Mb(0,"div"),s.Mb(1,"h1"),s.gc(2,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"),s.Lb(),s.Mb(3,"input",0),s.Tb("ngModelChange",function(e){return t.inputValue=e})("input",function(){return t.onChangeInputValue()}),s.Lb(),s.fc(4,l,12,6,"div",1),s.fc(5,d,2,0,"p",2),s.Lb(),s.Mb(6,"div",3),s.Mb(7,"h1"),s.gc(8,"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"),s.Lb(),s.Kb(9,"hr"),s.fc(10,p,7,5,"div",4),s.fc(11,b,2,0,"p",2),s.Mb(12,"div",5),s.fc(13,u,2,0,"button",6),s.Lb(),s.Lb()),2&e&&(s.zb(3),s.Zb("ngModel",t.inputValue),s.zb(1),s.Zb("ngForOf",t.showFilteredUserOptions),s.zb(1),s.Zb("ngIf",t.showSelectedOptionNotice),s.zb(5),s.Zb("ngForOf",t.availableOptions),s.zb(1),s.Zb("ngIf",t.showUnselectedOptionNotice),s.zb(2),s.Zb("ngIf",!t.showUnselectedOptionNotice))},directives:[a.b,a.g,a.i,i.i,i.j],pipes:[i.d],styles:[".service-active[_ngcontent-%COMP%]{justify-content:space-between;width:100%;margin:12px 0}.service-active[_ngcontent-%COMP%], .service-active[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row}.service-active[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{justify-content:flex-start;align-items:center}.service-active[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]:first-child{color:#7f7e7e}.service-active[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{justify-content:flex-end;align-items:center}.service-active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:20px;padding:6px 10px;border-radius:10px;border:1px solid #ec3232;background:#fad3d3;font-size:20px;font-weight:700;cursor:pointer}.search[_ngcontent-%COMP%]{width:100%;padding:7px 3px;margin:10px 0;border-radius:7px;border:4px double #000}.search[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]::placeholder{font-size:16px}hr[_ngcontent-%COMP%]{margin:7px 0}.available-service[_ngcontent-%COMP%]{margin:32px 0}.available-service[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.container-btn){display:flex;flex-direction:row;justify-content:space-between}.available-service[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.container-btn)   p[_ngcontent-%COMP%]:last-child{justify-content:flex-end}.available-service[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{justify-content:flex-end;margin-left:20px;padding:6px 10px;border-radius:10px;border:1px solid #76bd77;background:#dbfdcd;font-size:16px;cursor:pointer}.available-service[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:10px}.container-btn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;width:100%}"],changeDetection:0}),e})(),O=(()=>{class e{constructor(){this.users=[{id:234,name:"\u041d\u043e\u0432\u0438\u043a\u043e\u0432 \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041e\u043b\u0435\u0433\u043e\u0432\u0438\u0447",options:[]},{id:34,name:"\u0421\u043c\u0438\u0440\u043d\u043e\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0438\u0447",options:[]},{id:52,name:"\u041d\u043e\u0432\u0438\u043a\u043e\u0432\u0430 \u041e\u043b\u044c\u0433\u0430 \u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u043d\u0430",options:[]}],this.availableOptions=[{id:325,name:"\u041f\u0430\u043a\u0435\u0442 \u043c\u0438\u043d\u0443\u0442",price:600,check:!1},{id:23,name:"\u041f\u0430\u043a\u0435\u0442 \u0441\u043c\u0441",price:150,check:!1},{id:53,name:"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442",price:250,check:!1},{id:6467,name:"\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435",price:60,check:!1},{id:9789,name:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u043d\u043e\u043c\u0435\u0440\u0430",price:0,check:!1},{id:453,name:"\u0410\u043d\u0442\u0438\u0441\u043f\u0430\u043c",price:90,check:!1},{id:6,name:"\u0413\u043e\u0440\u043e\u0441\u043a\u043e\u043f",price:120,check:!1}],this.selectedUserId=this.users[0].id,this.selectedUser=Object.assign({},this.users[0]),this.filteredUserOptions=[],this.selectedAvailableOptionsId=[],this.filteredAvailableOptions=this.getFilteredAvailableOption(this.availableOptions,this.selectedUser),this.inputValue=""}ngOnInit(){localStorage.getItem("users")||this.saveUsersToLocalStorage(),this.users=[...JSON.parse(localStorage.getItem("users"))],this.selectedUser=Object.assign({},this.users[0])}onChangeUser(e){this.selectedUserId=e,this.selectedUser=Object.assign({},this.users.find(t=>t.id===e)),this.filteredAvailableOptions=this.getFilteredAvailableOption(this.availableOptions,this.selectedUser),this.selectedAvailableOptionsId=[],this.searchAvailableOptions(),this.searchUserOptions(),this.saveUsersToLocalStorage()}onRemoveOption(e){const t=this.selectedUser.options.filter(t=>t.id!==e);this.selectedUser=Object.assign(Object.assign({},this.selectedUser),{options:t}),this.users=[...this.saveUpdateUsers(this.users,t)],this.filteredAvailableOptions=this.getFilteredAvailableOption(this.availableOptions,this.selectedUser),this.searchAvailableOptions(),this.searchUserOptions(),this.saveUsersToLocalStorage()}selectAnOption(e){let t=[...this.selectedAvailableOptionsId];t.includes(e)?(t=t.filter(t=>t!==e),this.selectedAvailableOptionsId=[...t],this.filteredAvailableOptions=[...this.changeCheckOptions(this.filteredAvailableOptions,t)]):(t.push(e),this.selectedAvailableOptionsId=[...t],this.filteredAvailableOptions=[...this.changeCheckOptions(this.filteredAvailableOptions,t)])}onAddSelectedOptions(){const e=[...this.selectedUser.options];this.availableOptions.forEach(t=>{this.selectedAvailableOptionsId.includes(t.id)&&e.push(Object.assign(Object.assign({},t),{startDate:new Date}))}),this.selectedAvailableOptionsId=[],this.selectedUser=Object.assign(Object.assign({},this.selectedUser),{options:e}),this.users=[...this.saveUpdateUsers(this.users,e)],this.filteredAvailableOptions=this.getFilteredAvailableOption(this.availableOptions,this.selectedUser),this.searchAvailableOptions(),this.searchUserOptions(),this.saveUsersToLocalStorage()}getFilteredAvailableOption(e,t){const n=t.options.map(e=>e.name);return e.filter(e=>!n.includes(e.name))}saveUpdateUsers(e,t){return e.map(e=>e.id===this.selectedUserId?Object.assign(Object.assign({},e),{options:t}):Object.assign({},e))}changeCheckOptions(e,t){return e.map(e=>t.includes(e.id)?Object.assign(Object.assign({},e),{check:!0}):Object.assign(Object.assign({},e),{check:!1}))}onChangeInputValue(e){this.inputValue=e,this.searchAvailableOptions(),this.searchUserOptions()}searchAvailableOptions(){this.filteredAvailableOptions=[...this.getFilteredAvailableOption(this.availableOptions,this.selectedUser)];const e=this.filteredAvailableOptions.filter(e=>e.name.toLowerCase().includes(this.inputValue.trim().toLowerCase()));this.filteredAvailableOptions=[...e]}searchUserOptions(){this.filteredUserOptions=this.selectedUser.options.filter(e=>e.name.toLowerCase().includes(this.inputValue.trim().toLowerCase()))}saveUsersToLocalStorage(){localStorage.setItem("users",JSON.stringify(this.users))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-form-main-page"]],decls:3,vars:5,consts:[[1,"main-form"],[3,"users","currentId","selectedUserId"],[3,"user","availableOptions","filteredUserOptions","removeOption","selectedOptionId","addSelectedOptions","changeInputValue"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.Mb(1,"app-form-users",1),s.Tb("selectedUserId",function(e){return t.onChangeUser(e)}),s.Lb(),s.Mb(2,"app-form-options",2),s.Tb("removeOption",function(e){return t.onRemoveOption(e)})("selectedOptionId",function(e){return t.selectAnOption(e)})("addSelectedOptions",function(){return t.onAddSelectedOptions()})("changeInputValue",function(e){return t.onChangeInputValue(e)}),s.Lb(),s.Lb()),2&e&&(s.zb(1),s.Zb("users",t.users)("currentId",t.selectedUserId),s.zb(1),s.Zb("user",t.selectedUser)("availableOptions",t.filteredAvailableOptions)("filteredUserOptions",t.filteredUserOptions))},directives:[r,h],styles:[".main-form[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;margin:40px 120px;height:content-box}.main-form[_ngcontent-%COMP%]   app-form-users[_ngcontent-%COMP%]{flex-grow:1}.main-form[_ngcontent-%COMP%]   app-form-options[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;flex-grow:2;border:1px solid #000;border-radius:4px;margin-left:9px;padding:40px}"],changeDetection:0}),e})();var g=n("tyNb");let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({imports:[[i.b,g.c.forChild([{path:"",component:O}]),a.f],g.c]}),e})()}}]);