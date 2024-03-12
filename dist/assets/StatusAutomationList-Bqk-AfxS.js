import{f as o,A as n,j as l,g as r,T as c,m as _,a as u,n as d}from"./index-zCN1hhCD.js";import{T as p}from"./TaskStatusCell-D45nAD3u.js";const m={name:"status-automation-list",mixins:[o],components:{AlertTriangleIcon:n,RowActionsCell:l,TableInfo:r,TaskStatusCell:p,TaskTypeCell:c},props:{entries:{type:Array,default:()=>[]},isEditable:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},data(){return{}},computed:{..._(["getTaskStatus","getTaskType","isTaskTypePriorityHigherById","isStatusAutomationDisabled","remainingStatusAutomations"])},methods:{...u(["removeStatusAutomationFromProduction"]),async removeStatusAutomation(e){await this.removeStatusAutomationFromProduction(e),await this.$nextTick(),this.remainingStatusAutomations.length>0&&(this.statusAutomationId=this.remainingStatusAutomations[0].id)}}};var y=function(){var t=this,s=t._self._c;return s("div",{staticClass:"data-list"},[s("div",{staticClass:"datatable-wrapper"},[s("table",{staticClass:"datatable"},[s("thead",{staticClass:"datatable-head"},[s("tr",[s("th",{staticClass:"name",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("status_automations.fields.entity_type"))+" ")]),s("th",{staticClass:"in-task-type",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("status_automations.fields.in_task_type"))+" ")]),s("th",{staticClass:"in-task-status",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("status_automations.fields.in_task_status"))+" ")]),s("th",{staticClass:"automation-type",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("status_automations.fields.out_field_type"))+" ")]),s("th",{staticClass:"out-task-type",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("status_automations.fields.out_task_type"))+" ")]),s("th",{staticClass:"in-task-status",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("status_automations.fields.out_task_status"))+" ")]),s("th",{staticClass:"actions",attrs:{scope:"col"}},[t._v(" ")])])]),s("tbody",{staticClass:"datatable-body"},t._l(t.entries,function(a){return s("tr",{key:a.id,staticClass:"datatable-row"},[s("td",{staticClass:"name",attrs:{scope:"row"}},[s("div",{staticClass:"flexrow"},[t.isStatusAutomationDisabled(a)?s("span",{staticClass:"flexrow-item",attrs:{title:t.$t("status_automations.wrong_automation")}},[s("alert-triangle-icon")],1):t._e(),s("span",{staticClass:"flexrow-item"},[t._v(" "+t._s(a.entity_type)+" ")])])]),s("task-type-cell",{staticClass:"in-task-type",attrs:{"task-type":t.getTaskType(a.in_task_type_id)}}),s("task-status-cell",{staticClass:"in-task-status",attrs:{entry:t.getTaskStatus(a.in_task_status_id)}}),s("td",{staticClass:"input-separator"},[t._v(" "+t._s(a.out_field_type==="ready_for"?t.$t("status_automations.change_ready_for"):t.$t("status_automations.change_status"))+" ")]),s("task-type-cell",{staticClass:"out-task-type",attrs:{"task-type":t.getTaskType(a.out_task_type_id)}}),a.out_field_type==="status"?s("task-status-cell",{staticClass:"out-task-status",attrs:{entry:t.getTaskStatus(a.out_task_status_id)}}):s("td",{staticClass:"name out-task-status"}),t.isEditable?s("row-actions-cell",{attrs:{"entry-id":a.id},on:{"edit-clicked":function(i){return t.$emit("edit-clicked",a)},"delete-clicked":function(i){return t.$emit("delete-clicked",a)}}}):s("td",[s("button",{staticClass:"button",on:{click:function(i){return t.removeStatusAutomation(a.id)}}},[t._v(" "+t._s(t.$t("main.remove"))+" ")])])],1)}),0)])]),s("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isError}}),s("p",{staticClass:"has-text-centered nb-status-automations"},[t._v(" "+t._s(t.entries.length)+" "+t._s(t.$tc("status_automations.number",t.entries.length))+" ")])],1)},k=[],f=d(m,y,k,!1,null,"c46e842b",null,null);const h=f.exports;export{h as S};
//# sourceMappingURL=StatusAutomationList-Bqk-AfxS.js.map