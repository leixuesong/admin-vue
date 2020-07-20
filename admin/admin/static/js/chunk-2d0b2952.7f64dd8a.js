(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2952"],{2570:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("查询条件")]),a("el-form",{staticClass:"search-form",attrs:{inline:"",model:t.searchForm}},[a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{attrs:{clearable:""},model:{value:t.searchForm.mer_acc,callback:function(e){t.$set(t.searchForm,"mer_acc",e)},expression:"searchForm.mer_acc"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{clearable:"",placeholder:""},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"正常",value:0}}),a("el-option",{attrs:{label:"待审核",value:1}}),a("el-option",{attrs:{label:"停用",value:2}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.searchList}},[t._v("查询")])],1)],1)],1),a("el-table",{staticClass:"margin-top-16",attrs:{border:"",data:t.list.data}},[a("el-table-column",{attrs:{prop:"mer_acc",label:"账号"}}),a("el-table-column",{attrs:{prop:"agent_acc",label:"所属代理商"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号码"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),a("el-table-column",{attrs:{prop:"login_count",label:"登录次数"}}),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间"}}),a("el-table-column",{attrs:{prop:"update_time",label:"更新时间"}}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?a("span",[t._v("正常")]):t._e(),1===e.row.status?a("span",[t._v("待审核")]):a("span",[t._v("停用")])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{on:{click:function(a){return t.changeStatus(e.row.mer_id,0)}}},[t._v("开启")]),a("el-button",{on:{click:function(a){t.changeStatus(e.row.mer_id)}}},[t._v("停用")]),a("el-button",{on:{click:function(a){return t.whiteList(e.row.mer_id)}}},[t._v("设置白名单")]),a("el-button",{on:{click:function(a){return t.reset(e.row.mer_id)}}},[t._v("重置密码")])]}}])})],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-pagination",{attrs:{background:"",layout:"->, total, prev, pager, next, sizes, jumper","current-page":t.list.pageNo,"page-size":t.list.pageSize,total:t.list.total},on:{"update:currentPage":function(e){return t.$set(t.list,"pageNo",e)},"update:current-page":function(e){return t.$set(t.list,"pageNo",e)},"update:pageSize":function(e){return t.$set(t.list,"pageSize",e)},"update:page-size":function(e){return t.$set(t.list,"pageSize",e)},"current-change":t.getList,"size-change":t.getList}})],1)],1)},n=[],s=a("5530"),l=(a("96cf"),a("1da1")),o={name:"Merchant",data:function(){return{loading:{list:!1},searchForm:{status:""},list:{data:[],pageNo:1,pageSize:10,total:0}}},created:function(){this.getList()},methods:{searchList:function(){this.list=this.$options.data().list,this.getList()},getList:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request({url:"/merchant/index",data:Object(s["a"])(Object(s["a"])({},t.searchForm),{},{pageNo:t.list.pageNo,pageSize:t.list.pageSize})});case 2:a=e.sent,t.list.data=a.data,t.list.total=a.total;case 5:case"end":return e.stop()}}),e)})))()},changeStatus:function(t,e){var a=this;this.$confirm("是否".concat(0===e?"停用":"开启"," ?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.loading.list=!0,r.next=3,a.$request({url:"/merchant/status",data:{mer_id:t,status:e}});case 3:a.getList();case 4:case"end":return r.stop()}}),r)})))).catch((function(){}))},whiteList:function(){},reset:function(t){var e=this;this.$confirm("是否重置密码 ?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loading.list=!0,a.next=3,e.$request({url:"/merchant/reset",data:{mer_id:t}});case 3:e.getList();case 4:case"end":return a.stop()}}),a)})))).catch((function(){}))}}},i=o,c=a("2877"),u=Object(c["a"])(i,r,n,!1,null,"89ac0910",null);e["default"]=u.exports}}]);