(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{237:function(e,a,t){"use strict";var l=t(0),o=(t(245),t(242)),n=t.n(o),i=t(238),s=t.n(i),c=t(251),d=t(246),r=t.n(d),b=(t(247),t(248)),m=t.n(b),p=t(249),u=t.n(p),f=t(250),y=t.n(f);l.default.use(n.a),l.default.use(s.a),console.log("ams init config"),l.default.use(m.a),l.default.use(u.a),l.default.use(y.a),"undefined"!=typeof window&&(window.Vue=l.default),l.default.use(c.a,{languages:{javascript:r.a}}),s.a.config({resource:{api:{withCredentials:!1}}})},243:function(e,a,t){"use strict";t(237);a.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String},methods:{toggleDemoCofig:function(){this.showConfig=!this.showConfig}}}},999:function(e,a,t){"use strict";t.r(a);var l=t(243),o={defaultTable:{type:"table",resource:{api:{prefix:"https://easy-mock.com/mock/5bf25b2b34392218c898a5fd/",list:"list"},fields:{id:{type:"text",label:"序号",on:{change:function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];console.log("text change",a,this)}}},grade1:{type:"text",label:"一级品类",rules:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],props:{"suffix-icon":"el-icon-service"}},grade2:{type:"text",label:"二级品类"},day1:{type:"text",label:"第1天"},day2:{type:"text",label:"第2天"},day3:{type:"text",label:"第3天"},day4:{type:"text",label:"第4天"},day5:{type:"text",label:"第5天"},day6:{type:"text",label:"第6天"},day7:{type:"text",label:"第7天"},week:{type:"text",label:"前7天"}}},ctx:"view",sorts:{id:!0,week:!0},searchs:{id:!0,grade1:!0},data:{list:[],pageSize:10},options:{"span-merge":{grade1:!0,grade2:!0},"expand-row":{valueKey:"rowchildren",remoteConfig:{action:"https://easy-mock.com/mock/5bf25b2b34392218c898a5fd/table-expand",queryName:"chidTableId",queryValue:"id"}},"table-column":[{label:"序号",name:"id"},{label:"",children:[{label:"一级品类",name:"grade1","slot-header":{type:"tooltip",content:"这里是一级品类信息<br/>第二行信息"}},{label:"二级品类",name:"grade2","slot-header":{type:"tooltip",content:"这里是二级品类信息<br/>第二行信息"}}]},{label:"收入","slot-header":{type:"tooltip",content:"提示框信息<br/>第二行信息"},children:[{label:"第1天",name:"day1"},{label:"第2天",name:"day2"},{label:"第3天",name:"day3"},{label:"第4天",name:"day4"},{label:"第5天",name:"day5"},{label:"第6天",name:"day6"},{label:"第7天",name:"day7"},{label:"前7天",name:"week","slot-header":{type:"collapse",collapseColumn:["day1","day2","day3","day4","day5","day6","day7"]}}]}]},on:{"cell-click":function(e,a,t,l){},"header-click":function(e,a){}},events:{init:"@list"}}},n=t(262),i=t.n(n),s=t(260),c=t.n(s),d={mixins:[l.a],mounted:function(){var e=i()(o[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,o[this.blockName]),this.init=!0)}},r=t(13),b=Object(r.a)(d,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n    ")])],1)},[],!1,null,null,null);a.default=b.exports}}]);