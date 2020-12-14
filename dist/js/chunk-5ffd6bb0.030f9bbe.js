(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ffd6bb0"],{"38fe":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"custom-actions page fixed-page"},[i("list-page-header",{attrs:{title:t.$t("custom_actions.title"),"new-entry-label":t.$t("custom_actions.new_custom_action")},on:{"new-clicked":t.onNewClicked}}),i("custom-action-list",{attrs:{entries:t.customActions,"is-loading":t.loading.list,"is-error":t.errors.list},on:{"edit-clicked":t.onEditClicked,"delete-clicked":t.onDeleteClicked}}),i("edit-custom-action-modal",{attrs:{active:t.modals.edit,"is-loading":t.loading.edit,"is-error":t.errors.edit,"custom-action-to-edit":t.customActionToEdit},on:{cancel:function(e){t.modals.edit=!1},confirm:t.confirmEditCustomAction}}),i("delete-modal",{attrs:{active:t.modals.del,"is-loading":t.loading.del,"is-error":t.errors.del,text:t.deleteText,"error-text":t.$t("custom_actions.delete_error")},on:{cancel:function(e){t.modals.delete=!1},confirm:t.confirmDeleteCustomAction}})],1)},s=[],c=(i("b0c0"),i("5530")),n=i("2f62"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"data-list"},[i("div",{staticClass:"datatable-wrapper"},[i("table",{staticClass:"datatable"},[i("thead",{staticClass:"datatable-head"},[i("tr",[i("th",{staticClass:"name",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("custom_actions.fields.name"))+" ")]),i("th",{staticClass:"url",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("custom_actions.fields.url"))+" ")]),i("th",{staticClass:"entity-type",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("custom_actions.fields.entity_type"))+" ")]),i("th",{staticClass:"is-ajax",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("custom_actions.fields.is_ajax"))+" ")]),i("th",{staticClass:"actions",attrs:{scope:"col"}})])]),i("tbody",{staticClass:"datatable-body"},t._l(t.entries,(function(e){return i("tr",{key:e.id,staticClass:"datatable-row"},[i("th",{staticClass:"name datatable-row-header",attrs:{scope:"row"}},[t._v(" "+t._s(e.name)+" ")]),i("td",{staticClass:"url"},[t._v(t._s(e.url))]),i("td",{staticClass:"entity-type"},[t._v(t._s(e.entity_type))]),i("td",{staticClass:"is-ajax"},[t._v(" "+t._s(t.formatBoolean(e.is_ajax))+" ")]),i("row-actions-cell",{attrs:{"entry-id":e.id},on:{"edit-clicked":function(i){return t.$emit("edit-clicked",e)},"delete-clicked":function(i){return t.$emit("delete-clicked",e)}}})],1)})),0)])]),i("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isError}}),i("p",{staticClass:"has-text-centered nb-custom-actions"},[t._v(" "+t._s(t.entries.length)+" "+t._s(t.$tc("custom_actions.number",t.entries.length))+" ")])],1)},l=[],r=i("31f2"),d=i("14b2"),u=i("e60b"),m={name:"custom-action-list",mixins:[r["a"]],props:["entries","isLoading","isError"],data:function(){return{}},components:{RowActionsCell:d["a"],TableInfo:u["a"]},computed:Object(c["a"])({},Object(n["c"])([])),methods:Object(c["a"])(Object(c["a"])({},Object(n["b"])([])),{},{renderForShots:function(t){return t.for_shots?this.$tc("shots.title"):this.$tc("assets.title")}})},f=m,b=(i("b7bb"),i("2877")),h=Object(b["a"])(f,a,l,!1,null,"5dfe8b48",null),p=h.exports,_=i("5f48"),C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{modal:!0,"is-active":t.active}},[i("div",{staticClass:"modal-background",on:{click:function(e){return t.$emit("cancel")}}}),i("div",{staticClass:"modal-content"},[i("div",{staticClass:"box"},[t.isEditing()?i("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("custom_actions.edit_title"))+" "+t._s(t.customActionToEdit.name)+" ")]):i("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("custom_actions.new_custom_action"))+" ")]),i("form",{on:{submit:function(t){t.preventDefault()}}},[i("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:t.$t("custom_actions.fields.name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),i("text-field",{ref:"urlField",attrs:{label:t.$t("custom_actions.fields.url")},on:{enter:t.confirmClicked},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}}),i("combobox",{attrs:{label:t.$t("custom_actions.fields.entity_type"),options:t.entityTypeOptions,"locale-key-prefix":"custom_actions.entity_types."},on:{enter:t.confirmClicked},model:{value:t.form.entityType,callback:function(e){t.$set(t.form,"entityType",e)},expression:"form.entityType"}}),i("combobox-boolean",{attrs:{label:t.$t("custom_actions.fields.is_ajax")},on:{enter:t.confirmClicked},model:{value:t.form.isAjax,callback:function(e){t.$set(t.form,"isAjax",e)},expression:"form.isAjax"}})],1),i("modal-footer",{attrs:{"error-text":t.$t("custom_actions.create_error"),"is-error":t.isError},on:{confirm:t.confirmClicked,cancel:function(e){return t.$emit("cancel")}}})],1)])])},v=[],A=(i("d3b7"),i("25f0"),i("d065")),x=i("992f"),y=i("4636"),g=i("d5c9"),j=i("7bf8"),T={name:"edit-custom-action-modal",mixins:[A["a"]],components:{Combobox:x["a"],ComboboxBoolean:y["a"],ModalFooter:g["a"],TextField:j["a"]},props:["onConfirmClicked","text","active","isLoading","isError","errorText","customActionToEdit"],data:function(){return{form:{name:"",url:"",entityType:"all",isAjax:"false"},entityTypeOptions:[{label:"all",value:"all"},{label:"asset",value:"asset"},{label:"shot",value:"shot"}]}},computed:Object(c["a"])({},Object(n["c"])(["customActions","customActionStatusOptions"])),methods:Object(c["a"])(Object(c["a"])({},Object(n["b"])([])),{},{confirmClicked:function(){this.$emit("confirm",this.form)},isEditing:function(){return this.customActionToEdit&&this.customActionToEdit.id}}),watch:{customActionToEdit:function(){this.customActionToEdit&&(this.form={name:this.customActionToEdit.name,url:this.customActionToEdit.url,entityType:this.customActionToEdit.entity_type,isAjax:Boolean(this.customActionToEdit.is_ajax).toString()})},active:function(){var t=this;this.active&&setTimeout((function(){t.$refs.nameField.focus()}),100)}}},$=T,E=(i("8eff"),Object(b["a"])($,C,v,!1,null,"61518db1",null)),k=E.exports,w=i("459c"),O={name:"custom-actions",components:{CustomActionList:p,DeleteModal:_["a"],EditCustomActionModal:k,ListPageHeader:w["a"]},data:function(){return{modals:{edit:!1,del:!1},loading:{edit:!1,del:!1,list:!1},errors:{edit:!1,del:!1,list:!1},customActionToDelete:null,customActionToEdit:null}},computed:Object(c["a"])(Object(c["a"])({},Object(n["c"])(["customActions"])),{},{deleteText:function(){var t=this.customActionToDelete;return t?this.$t("custom_actions.delete_text",{name:t.name}):""}}),created:function(){var t=this;this.loading.list=!0,this.errors.list=!1,this.loadCustomActions((function(e){t.loading.list=!1,e&&(t.errors.list=!0)}))},methods:Object(c["a"])(Object(c["a"])({},Object(n["b"])(["deleteCustomAction","editCustomAction","loadCustomActions","newCustomAction"])),{},{confirmEditCustomAction:function(t){var e=this,i="newCustomAction";this.customActionToEdit&&this.customActionToEdit.id&&(i="editCustomAction",t.id=this.customActionToEdit.id),this.loading.edit=!0,this.errors.edit=!1,this[i](t).then((function(){e.loading.edit=!1,e.modals.edit=!1})).catch((function(t){console.error(t),e.errors.edit=!0,e.modals.isNewDisplayed=!1}))},confirmDeleteCustomAction:function(){var t=this;this.loading.del=!0,this.errors.del=!1,this.deleteCustomAction(this.customActionToDelete).then((function(){t.loading.del=!1,t.modals.del=!1})).catch((function(e){console.error(e),t.errors.del=!0,t.loading.del=!1}))},onNewClicked:function(){this.customActionToEdit={},this.errors.edit=!1,this.modals.edit=!0},onEditClicked:function(t){this.customActionToEdit=t,this.errors.edit=!1,this.modals.edit=!0},onDeleteClicked:function(t){this.customActionToDelete=t,this.errors.del=!1,this.modals.del=!0}}),watch:{$route:function(){this.handleModalsDisplay()}},metaInfo:function(){return{title:"".concat(this.$t("custom_actions.title")," - Kitsu")}}},D=O,L=Object(b["a"])(D,o,s,!1,null,"b2289c12",null);e["default"]=L.exports},"459c":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"level page-header"},[i("div",{staticClass:"level-left"},[i("page-title",{attrs:{text:t.title}})],1),i("div",{staticClass:"level-right"},[i("button-simple",{staticClass:"level-item",attrs:{icon:"plus",text:t.newEntryLabel},on:{click:function(e){return t.$emit("new-clicked")}}})],1)])},s=[],c=i("5530"),n=i("2f62"),a=i("de40"),l=i("8d07"),r={name:"list-page-header",components:{ButtonSimple:a["a"],PageTitle:l["a"]},props:{title:{type:String,default:""},newEntryLabel:{type:String,default:""}},computed:Object(c["a"])({},Object(n["c"])([])),methods:Object(c["a"])({},Object(n["b"])([])),watch:{}},d=r,u=i("2877"),m=Object(u["a"])(d,o,s,!1,null,"bf4864ae",null);e["a"]=m.exports},"8eff":function(t,e,i){"use strict";i("ca10")},b79a:function(t,e,i){},b7bb:function(t,e,i){"use strict";i("b79a")},ca10:function(t,e,i){}}]);
//# sourceMappingURL=chunk-5ffd6bb0.030f9bbe.js.map