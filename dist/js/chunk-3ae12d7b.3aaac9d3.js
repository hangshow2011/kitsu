(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ae12d7b"],{5784:function(e,t,a){},9633:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns fixed-page"},[a("div",{staticClass:"column main-column"},[a("div",{staticClass:"flexrow project-dates"},[a("div",{staticClass:"flexrow-item"},[a("label",{staticClass:"label"},[e._v(" "+e._s(e.$t("main.start_date"))+" ")]),a("datepicker",{attrs:{"wrapper-class":"datepicker","input-class":"date-input input",language:e.locale,"disabled-dates":{days:[6,0]},"monday-first":!0,format:"yyyy-MM-dd"},model:{value:e.selectedStartDate,callback:function(t){e.selectedStartDate=t},expression:"selectedStartDate"}})],1),a("div",{staticClass:"flexrow-item field"},[a("label",{staticClass:"label"},[e._v(" "+e._s(e.$t("main.end_date"))+" ")]),a("datepicker",{attrs:{"wrapper-class":"datepicker","input-class":"date-input input",language:e.locale,"disabled-dates":{days:[6,0]},"monday-first":!0,format:"yyyy-MM-dd"},model:{value:e.selectedEndDate,callback:function(t){e.selectedEndDate=t},expression:"selectedEndDate"}})],1),a("text-field",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"flexrow-item overall-man-days",attrs:{type:"number",label:e.$t("schedule.overall_man_days"),disabled:!e.isCurrentUserAdmin},model:{value:e.overallManDays,callback:function(t){e.overallManDays=t},expression:"overallManDays"}}),a("combobox-number",{staticClass:"flexrow-item zoom-level",attrs:{label:e.$t("schedule.zoom_level"),options:e.zoomOptions},model:{value:e.zoomLevel,callback:function(t){e.zoomLevel=t},expression:"zoomLevel"}})],1),a("schedule",{attrs:{"start-date":e.startDate,"end-date":e.endDate,hierarchy:e.scheduleItems,"zoom-level":e.zoomLevel,"is-loading":e.loading.schedule,"is-error":e.errors.schedule},on:{"item-changed":e.scheduleItemChanged,"estimation-changed":e.estimationChanged,"change-zoom":e.changeZoom,"root-element-expanded":e.expandTaskTypeElement}})],1),e.currentTask?a("div",{staticClass:"column side-column is-hidden-mobile hide-small-screen"},[a("task-info",{attrs:{task:e.currentTask,"is-loading":!1}})],1):e._e()])},n=[],o=(a("4160"),a("d81d"),a("b0c0"),a("159b"),a("5530")),i=a("2f62"),d=a("7f45"),r=a.n(d),c=a("2430"),l=a("fa33"),u=a("2229"),h=a("9d8b"),m=a("3657"),p=a("1e4c"),f=a("9d94"),D=a("7bf8"),b=a("d7c7"),v={name:"production-schedule",components:{ComboboxNumber:p["a"],Datepicker:l["a"],Schedule:b["a"],TaskInfo:f["a"],TextField:D["a"]},data:function(){return{currentTask:null,overallManDays:0,endDate:r()().add(6,"months").endOf("day"),scheduleItems:[],startDate:r()().startOf("day"),selectedStartDate:null,selectedEndDate:null,zoomLevel:2,zoomOptions:[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3}],loading:{schedule:!1},errors:{schedule:!1}}},mounted:function(){this.reset()},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])(["assetTypeMap","currentEpisode","currentProduction","isCurrentUserAdmin","isCurrentUserManager","isTVShow","organisation","taskTypeMap","timezone","user"])),{},{locale:function(){return"fr_FR"===this.user.locale?c["fr"]:c["en"]}}),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["editProduction","loadAssetTypeScheduleItems","loadEpisodeScheduleItems","loadMilestones","loadScheduleItems","loadSequenceScheduleItems","saveScheduleItem"])),{},{loadData:function(){var e=this;this.loading.schedule=!0,this.loadScheduleItems(this.currentProduction).then((function(t){t=t.map((function(t){var a,s,n=e.taskTypeMap[t.task_type_id];return a=t.start_date?Object(m["p"])(t.start_date):r()(),s=t.end_date?Object(m["p"])(t.end_date):a.clone().add(1,"days"),Object(o["a"])(Object(o["a"])({},t),{},{color:n.color,for_shots:n.for_shots,name:n.name,priority:n.priority,startDate:a,endDate:s,editable:e.isCurrentUserManager,expanded:!1,loading:!1,route:Object(h["f"])(n.id,e.currentProduction.id,e.currentEpisode?e.currentEpisode.id:null,n.for_shots?"shots":"assets"),children:[]})})),e.scheduleItems=Object(u["j"])(t,e.taskTypeMap),e.loading.schedule=!1})).then(this.loadMilestones).catch((function(t){console.error(t),e.loading.schedule=!1}))},changeZoom:function(e){e.wheelDelta<0&&this.zoomLevel>1&&this.zoomLevel--,e.wheelDelta>0&&this.zoomLevel<3&&this.zoomLevel++},reset:function(){this.currentProduction.start_date&&(this.startDate=Object(m["p"])(this.currentProduction.start_date)),this.currentProduction.end_date&&(this.endDate=Object(m["p"])(this.currentProduction.end_date)),this.overallManDays=this.currentProduction.man_days,this.selectedStartDate=this.startDate.toDate(),this.selectedEndDate=this.endDate.toDate(),this.loadData()},convertScheduleItems:function(e,t){var a=this;return t.map((function(t){var s,n;s=t.start_date?Object(m["p"])(t.start_date):r()(),n=t.end_date?Object(m["p"])(t.end_date):s.clone().add(1,"days");var i=Object(o["a"])(Object(o["a"])({},t),{},{startDate:s,endDate:n,expanded:!1,loading:!1,editable:a.isCurrentUserManager,children:[],parentElement:e});return a.isTVShow&&(i.route=Object(h["f"])(t.task_type_id,a.currentProduction.id,t.object_id,e.for_shots?"shots":"assets")),i}))},expandTaskTypeElement:function(e){var t=this,a={production:this.currentProduction,taskType:this.taskTypeMap[e.task_type_id]};if(e.expanded=!e.expanded,e.expanded){e.loading=!0;var s="loadAssetTypeScheduleItems";e.for_shots&&(s=this.isTVShow?"loadEpisodeScheduleItems":"loadSequenceScheduleItems"),this[s](a).then((function(a){e.loading=!1,e.children=t.convertScheduleItems(e,a)})).catch((function(t){console.error(t),e.loading=!1,e.children=[]}))}},estimationChanged:function(e){var t=e.item,a=e.days;t.man_days=Object(m["b"])(this.organisation,a),this.saveScheduleItem(t)},scheduleItemChanged:function(e){if(e.startDate&&e.endDate&&e.parentElement)e.parentElement.startDate=this.getMinDate(e.parentElement),e.parentElement.endDate=this.getMaxDate(e.parentElement),this.saveScheduleItem(e.parentElement);else if(!e.parentElement){var t=this.getMinDate(e),a=this.getMaxDate(e);e.startDate.isAfter(t)&&(e.startDate=t),e.endDate.isBefore(a)&&(e.endDate=a.add(-1,"days"))}this.saveScheduleItem(e)},getMinDate:function(e){var t=this.endDate.clone();return e.children.forEach((function(e){e.startDate&&e.startDate.isBefore(t)&&(t=e.startDate)})),t.clone()},getMaxDate:function(e){var t=this.startDate.clone();return e.children.forEach((function(e){e.endDate&&e.endDate.isAfter(t)&&(t=e.endDate)})),t.clone()}}),socket:{},watch:{selectedStartDate:function(){this.startDate=Object(m["p"])(this.selectedStartDate),this.editProduction(Object(o["a"])(Object(o["a"])({},this.currentProduction),{},{start_date:this.startDate.format("YYYY-MM-DD")}))},selectedEndDate:function(){this.endDate=Object(m["p"])(this.selectedEndDate),this.editProduction(Object(o["a"])(Object(o["a"])({},this.currentProduction),{},{end_date:this.endDate.format("YYYY-MM-DD")}))},overallManDays:function(){this.overallManDays!==this.currentProduction.man_days&&this.editProduction(Object(o["a"])(Object(o["a"])({},this.currentProduction),{},{man_days:this.overallManDays}))},currentProduction:function(){this.reset()}},metaInfo:function(){return this.isTVShow?{title:"".concat(this.currentProduction?this.currentProduction.name:"")+" - ".concat(this.currentEpisode?this.currentEpisode.name:"")+" | ".concat(this.$t("schedule.title")," - Kitsu")}:{title:"".concat(this.currentProduction.name," ")+"| ".concat(this.$t("schedule.title")," - Kitsu")}}},y=v,_=(a("d454"),a("2877")),g=Object(_["a"])(y,s,n,!1,null,"0cbb867e",null);t["default"]=g.exports},d454:function(e,t,a){"use strict";a("5784")}}]);
//# sourceMappingURL=chunk-3ae12d7b.3aaac9d3.js.map