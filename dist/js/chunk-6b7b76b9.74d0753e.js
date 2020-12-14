(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b7b76b9"],{"4e82":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"productions page fixed-page"},[o("div",{staticClass:"level page-header"},[o("div",{staticClass:"level-left"},[o("page-title",{attrs:{text:t.$t("productions.title")}})],1),o("div",{staticClass:"level-right"},[o("div",{staticClass:"level-item"},[o("button-simple",{staticClass:"level-item",attrs:{text:t.$t("productions.new_production"),icon:"plus"},on:{click:t.onNewClicked}})],1)])]),o("production-list",{attrs:{entries:t.productions,"is-loading":t.isProductionsLoading,"is-error":t.isProductionsLoadingError},on:{"delete-clicked":t.onDeleteClicked,"edit-clicked":t.onEditClicked}}),o("edit-production-modal",{attrs:{active:t.modals.isNewDisplayed,"is-loading":t.loading.edit,"is-error":t.errors.edit,"production-to-edit":t.productionToEdit},on:{cancel:function(e){t.modals.isNewDisplayed=!1},fileselected:t.onProductionPictureSelected,confirm:t.confirmEditProduction}}),o("hard-delete-modal",{attrs:{active:t.modals.isDeleteDisplayed,"is-loading":t.loading.del,"is-error":t.errors.del,text:t.deleteText(),"error-text":t.$t("productions.delete_error"),"lock-text":t.currentLockText},on:{cancel:function(e){t.modals.isDeletDisplayed=!1},confirm:t.confirmDeleteProduction}})],1)},s=[],a=(o("b0c0"),o("d3b7"),o("5530")),r=o("2f62"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"data-list"},[o("div",{staticClass:"datatable-wrapper"},[o("table",{staticClass:"datatable"},[o("thead",{staticClass:"datatable-head"},[o("tr",[o("th",{staticClass:"name datatable-row-header",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("productions.fields.name"))+" ")]),o("th",{staticClass:"type",attrs:{scope:"col"}},[t._v(t._s(t.$t("productions.fields.type")))]),o("th",{staticClass:"fps",attrs:{scope:"col"}},[t._v(t._s(t.$t("productions.fields.fps")))]),o("th",{staticClass:"ratio",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("productions.fields.ratio"))+" ")]),o("th",{staticClass:"resolution",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("productions.fields.resolution"))+" ")]),o("th",{staticClass:"actions",attrs:{scope:"col"}})])]),o("tbody",{staticClass:"datatable-body"},[o("tr",{staticClass:"datatable-type-header"},[o("th",{attrs:{scope:"rowgroup",colspan:"6"}},[o("span",{staticClass:"datatable-row-header"},[t._v(" "+t._s(t.$t("productions.status.open"))+" ")])])]),t._l(t.openProductions,(function(e){return o("tr",{key:e.id,staticClass:"datatable-row"},[o("th",{staticClass:"name datatable-row-header",attrs:{scope:"row"}},[o("production-name-cell",{attrs:{"with-avatar":!0,entry:e,"last-production-screen":t.lastProductionScreen}})],1),o("td",{staticClass:"type"},[t._v(" "+t._s(t.$t("productions.type."+(e.production_type||"short")))+" ")]),o("td",{staticClass:"fps"},[t._v(" "+t._s(e.fps)+" ")]),o("td",{staticClass:"ratio"},[t._v(" "+t._s(e.ratio)+" ")]),o("td",{staticClass:"resolution"},[t._v(" "+t._s(e.resolution)+" ")]),o("row-actions-cell",{attrs:{"entry-id":e.id,"hide-delete":!0},on:{"edit-clicked":function(o){return t.$emit("edit-clicked",e)}}})],1)}))],2),t.closedProductions.length>0?o("tbody",[o("tr",{staticClass:"datatable-type-header"},[o("th",{attrs:{scope:"rowgroup",colspan:"6"}},[o("span",{staticClass:"datatable-row-header"},[t._v(" "+t._s(t.$t("productions.status.closed"))+" ")])])]),t._l(t.closedProductions,(function(e){return o("tr",{key:e.id,staticClass:"datatable-row"},[o("th",{staticClass:"name datatable-row-header",attrs:{scope:"row"}},[o("production-name-cell",{attrs:{"with-avatar":!0,entry:e,"last-production-screen":t.lastProductionScreen}})],1),o("td",{staticClass:"type"},[t._v(" "+t._s(t.$t("productions.type."+(e.production_type||"short")))+" ")]),o("td",{staticClass:"fps"},[t._v(" "+t._s(e.fps)+" ")]),o("td",{staticClass:"ratio"},[t._v(" "+t._s(e.ratio)+" ")]),o("td",{staticClass:"resolution"},[t._v(" "+t._s(e.resolution)+" ")]),o("row-actions",{attrs:{"entry-id":e.id},on:{"edit-clicked":function(o){return t.$emit("edit-clicked",e)},"delete-clicked":function(o){return t.$emit("delete-clicked",e)}}})],1)}))],2):t._e()])]),o("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isError}}),o("p",{staticClass:"has-text-centered nb-productions"},[t._v(" "+t._s(t.entries.length)+" "+t._s(t.$tc("productions.number",t.entries.length))+" ")])],1)},d=[],c=(o("4de4"),o("ddb0"),o("09a4")),l=o("14b2"),u=o("e60b"),p={name:"production-list",props:["entries","isLoading","isError"],data:function(){return{}},components:{ProductionNameCell:c["a"],RowActionsCell:l["a"],TableInfo:u["a"]},computed:Object(a["a"])(Object(a["a"])({},Object(r["c"])(["openProductions","lastProductionScreen"])),{},{closedProductions:function(){return this.entries.filter((function(t){return"Closed"===t.project_status_name}))}}),methods:Object(a["a"])(Object(a["a"])({},Object(r["b"])([])),{},{getStatusLocale:function(t){var e={Active:"productions.status.open",Open:"productions.status.open",Closed:"productions.status.closed"};return e[t]}})},h=p,f=(o("f327"),o("2877")),m=Object(f["a"])(h,n,d,!1,null,"34dc5ba2",null),b=m.exports,_=o("1d3d"),v=o("2c1a"),C=o("de40"),P=o("8d07"),w={name:"productions",components:{ButtonSimple:C["a"],HardDeleteModal:v["a"],EditProductionModal:_["a"],PageTitle:P["a"],ProductionList:b},data:function(){return{errors:{del:!1,edit:!1},loading:{del:!1,edit:!1},modals:{isNewDisplayed:!1,isDeleteDisplayed:!1},productionToDelete:null,productionToEdit:null,choices:[]}},computed:Object(a["a"])(Object(a["a"])({},Object(r["c"])(["isProductionsLoading","isProductionsLoadingError","productionAvatarFormData","productions","productionMap"])),{},{currentLockText:function(){return this.productionToDelete?this.productionToDelete.name:""}}),created:function(){this.loadProductions()},methods:Object(a["a"])(Object(a["a"])({},Object(r["b"])(["deleteProduction","loadProductions","storeProductionPicture","uploadProductionAvatar"])),{},{confirmEditProduction:function(t){var e=this,o="newProduction",i=this.productionToEdit&&this.productionToEdit.id;i&&(o="editProduction",t.id=this.productionToEdit.id),this.loading.edit=!0,this.errors.edit=!1,this.$store.dispatch(o,t).then((function(){return i&&e.productionAvatarFormData?e.uploadProductionAvatar(t.id):Promise.resolve()})).then((function(){e.modals.isNewDisplayed=!1,e.loading.edit=!1})).catch((function(t){console.error(t),e.loading.edit=!1,e.errors.edit=!0}))},confirmDeleteProduction:function(){var t=this;this.loading.del=!0,this.errors.del=!1,this.deleteProduction(this.productionToDelete).then((function(){t.modals.isDeleteDisplayed=!1,t.loading.del=!1})).catch((function(e){console.error(e),t.errors.del=!0,t.loading.del=!1}))},deleteText:function(){var t=this.productionToDelete;return t?this.$t("productions.delete_text",{name:t.name}):""},onEditClicked:function(t){this.productionToEdit=t,this.modals.isNewDisplayed=!0},onDeleteClicked:function(t){this.productionToDelete=t,this.modals.isDeleteDisplayed=!0},onNewClicked:function(t){this.productionToEdit={},this.modals.isNewDisplayed=!0},onProductionPictureSelected:function(t){this.storeProductionPicture(t)}}),watch:{},metaInfo:function(){return{title:"".concat(this.$t("productions.title")," - Kitsu")}}},g=w,y=Object(f["a"])(g,i,s,!1,null,"ceff8736",null);e["default"]=y.exports},"5e85":function(t,e,o){},f327:function(t,e,o){"use strict";o("5e85")}}]);
//# sourceMappingURL=chunk-6b7b76b9.74d0753e.js.map