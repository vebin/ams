(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{237:function(e,t,s){"use strict";var l=s(0),i=(s(245),s(242)),a=s.n(i),o=s(238),c=s.n(o),p=s(251),n=s(246),r=s.n(n),b=(s(247),s(248)),d=s.n(b),u=s(249),m=s.n(u),y=s(250),f=s.n(y);l.default.use(a.a),l.default.use(c.a),console.log("ams init config"),l.default.use(d.a),l.default.use(m.a),l.default.use(f.a),"undefined"!=typeof window&&(window.Vue=l.default),l.default.use(p.a,{languages:{javascript:r.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},243:function(e,t,s){"use strict";s(237);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String},methods:{toggleDemoCofig:function(){this.showConfig=!this.showConfig}}}},263:function(e,t,s){"use strict";s.d(t,"a",function(){return a});var l=s(94),i=s.n(l);function a(e,t,s){return t in e?i()(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}},992:function(e,t,s){"use strict";s.r(t);var l,i=s(243),a=s(263),o={defaultList:{type:"list",resource:{fields:{text:{label:"文本",type:"text"},inputnumber:{type:"inputnumber",label:"数字输入"},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}}}},data:{list:[{text:"双11活动",inputnumber:3,select:"a,b,c"},{text:"双11活动2",inputnumber:4,select:"b,c"},{text:"双11活动3",inputnumber:5,select:"a,b,c"},{text:"双11活动4",inputnumber:6,select:"c"}]}},indexList:{type:"list",resource:{fields:{text:{label:"文本",type:"text"},inputnumber:{type:"inputnumber",label:"数字输入"},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}}}},data:{list:[{text:"双11活动",inputnumber:3,select:"a,b,c"},{text:"双11活动2",inputnumber:4,select:"b,c"},{text:"双11活动3",inputnumber:5,select:"a,b,c"},{text:"双11活动4",inputnumber:6,select:"c"}]},props:{type:"index"}},pagesList:{type:"list",resource:{api:{prefix:"https://easy-mock.com/mock/5a0023effbbb09615044cb82/",list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID",props:{width:50}},testText:{type:"text",label:"名称"},testTextarea:{type:"textarea",label:"文本框"},testDate:{type:"datetime",label:"创建时间"},testSwitch:{type:"switch",label:"开关"}}},events:{init:"@list"}},filtersList:{type:"list",resource:{api:{prefix:"https://easy-mock.com/mock/5a0023effbbb09615044cb82/",list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID",props:{width:100}},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称"},testTextarea:{type:"textarea",label:"文本框"},testDate:{type:"datetime",label:"创建时间"}}},filters:{testSelect:{multiple:!0,remote:!0}},sorts:{id:!0},events:{init:"@list"}},searchsList:{type:"list",resource:{api:{prefix:"https://easy-mock.com/mock/5a0023effbbb09615044cb82/",list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID"},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称",props:{placeholder:"请输入名词"}}}},data:{list:[{id:3,testText:"双11活动",testSelect:"a,b,c"},{id:4,testText:"双11活动2",testSelect:"b,c"},{id:5,testText:"双11活动3",testSelect:"a,b,c"},{id:6,testText:"双11活动4",testSelect:"c"}]},operations:{testText:{slot:"searchs",type:"field",label:"名称"},testSelect:{slot:"searchs",type:"field",label:"类型"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list:1"}}},multipleSelectList:{type:"list",resource:{fields:{id:{type:"text",label:"ID"},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称",props:{placeholder:"请输入名词"}}}},data:{list:[{id:3,testText:"双11活动",testSelect:"a,b,c"},{id:4,testText:"双11活动2",testSelect:"b,c"},{id:5,testText:"双11活动3",testSelect:"a,b,c"},{id:6,testText:"双11活动4",testSelect:"c"}],total:100},options:{multipleSelect:!0},operations:{selectMulti:{slot:"multipleSelect",type:"field",field:"testSelect"},buttonMulti:{slot:"multipleSelect",type:"button",label:"删除",event:"multi"}},actions:{multi:function(e){this.$message("你点击了删除按钮！"),console.log("multipleSelect action",e.$prevReturn)}}},slotBlocksList:{type:"list",resource:{fields:{id:{type:"text",label:"ID"},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称",props:{placeholder:"请输入名词"}}}},data:{list:[{id:3,testText:"双11活动",testSelect:"a,b,c"},{id:4,testText:"双11活动2",testSelect:"b,c"},{id:5,testText:"双11活动3",testSelect:"a,b,c"},{id:6,testText:"双11活动4",testSelect:"c"}],total:100},operations:{testText:{slot:"searchs",type:"field"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list:1"}},blocks:{listTop:{type:"component",options:{is:"div",text:"我是列表区块最顶部的插槽内容！！"},style:{padding:"20px",marginBottom:"20px",border:"1px solid #3eaf7c"},slot:"top"},listTableTop:{type:"component",options:{is:"div",text:"我是列表区块表格顶部的插槽内容！！"},style:{padding:"20px",border:"1px solid #f60"},slot:"tableTop"}}},operationsList:{type:"list",resource:{fields:{text:{label:"文本",type:"text"},inputnumber:{type:"inputnumber",label:"数字输入"},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}}}},data:{list:[{text:"双11活动",inputnumber:3,select:"a,b,c"},{text:"双11活动2",inputnumber:4,select:"b,c"},{text:"双11活动3",inputnumber:5,select:"a,b,c"},{text:"双11活动4",inputnumber:6,select:"c"}]},operations:(l={testNewInput:{slot:"searchs",type:"field",field:{type:"text",props:{placeholder:"折"},style:{width:"100px"}}},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"}},Object(a.a)(l,"search",{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"}),Object(a.a)(l,"reset",{slot:"searchs",type:"reset",label:"重置"}),Object(a.a)(l,"addItem",{type:"button",label:"新建",props:{type:"primary"},slot:"searchs"}),Object(a.a)(l,"editItem",{type:"button",label:"编辑",props:{type:"primary",icon:"el-icon-edit"}}),Object(a.a)(l,"removeItem",{type:"button",props:{type:"danger",icon:"el-icon-delete",circle:!0}}),l),actions:{addItem:function(){this.$message("这是”新建“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")},editItem:function(){this.$message("这是”编辑“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")},removeItem:function(){this.$message("这是”删除“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")},reset:function(){this.$message("这是”重置“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")}}}},c=s(262),p=s.n(c),n=s(260),r=s.n(n),b={mixins:[i.a],mounted:function(){var e=p()(o[this.blockName]);this.configCode=r()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,o[this.blockName]),this.init=!0)}},d=s(13),u=Object(d.a)(b,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?s("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),s("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[s("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),s("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[s("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n    ")])],1)},[],!1,null,null,null);t.default=u.exports}}]);