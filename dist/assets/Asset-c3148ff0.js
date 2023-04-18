import{f as n,B as o,g as c,h as l,i as d,j as u,E as h,k as m,P as p,S as _,a as f,l as v,T as y,m as g,b as A,n as C}from"./index-2cf8fe36.js";import{e as w,E as b,a as x,b as k,c as I}from"./EntityTaskList-609309ee.js";import"./PeopleNameCell-97620724.js";const S={name:"asset",mixins:[w,n],components:{ButtonSimple:o,ComboboxNumber:c,CornerLeftUpIcon:l,ComboboxStyled:d,DescriptionCell:u,EditAssetModal:h,EntityNews:b,EntityPreviewFiles:x,EntityThumbnail:m,EntityTaskList:k,EntityTimeLogs:I,PageSubtitle:p,Schedule:_,TableInfo:f,TaskInfo:v,TaskTypeName:y},data(){return{currentAsset:null,currentTask:null,castIn:{isLoading:!1,isError:!1},errors:{edit:!1},loading:{edit:!1},modals:{edit:!1,preview:!1}}},mounted(){this.clearSelectedTasks(),this.init()},computed:{...g(["assetMap","assetSearchText","assetMetadataDescriptors","currentEpisode","currentProduction","getTaskTypePriority","isTVShow","isCurrentUserManager","route","taskMap","taskTypeMap","shotId"]),title(){return this.currentAsset?`${this.currentAsset.asset_type_name} / ${this.currentAsset.name}`:"Loading..."},assetThumbnailPath(){return`/api/pictures/originals/preview-files/${this.currentAsset.preview_file_id}.png`},isPreview(){return this.currentAsset&&this.currentAsset.preview_file_id&&this.currentAsset.preview_file_id.length>0},previousAssetPath(){const s=Array.from(this.assetMap.values());if(s.length===0)return{name:"open-productions"};const t=s.findIndex(r=>r&&this.currentAsset&&r.id===this.currentAsset.id),e=t!==0?t-1:s.length-1,i=s[e];if(!i)return{name:"open-productions"};const a={name:"asset",params:{production_id:this.currentProduction.id,asset_id:i.id},query:{search:""}};return this.currentEpisode&&(a.name="episode-asset",a.params.episode_id=this.currentEpisode.id),a},nextAssetPath(){const s=Array.from(this.assetMap.values());if(s.length===0)return{name:"open-productions"};const t=s.findIndex(r=>r&&this.currentAsset&&r.id===this.currentAsset.id),e=t===s.length-1?0:t+1,i=s[e];if(!i)return{name:"open-productions"};const a={name:"asset",params:{production_id:this.currentProduction.id,asset_id:i.id},query:{search:""}};return this.currentEpisode&&(a.name="episode-asset",a.params.episode_id=this.currentEpisode.id),a},assetsPath(){const s={name:"assets",params:{production_id:this.currentProduction.id},query:{search:this.assetSearchText||""}};return this.currentEpisode&&(s.name="episode-assets",s.params.episode_id=this.currentEpisode.id),s}},methods:{...A(["clearSelectedTasks","editAsset","loadAsset","loadAssets","loadAssetCastIn","loadAssetCasting","loadShots","setCurrentEpisode"]),changeTab(s){this.selectedTab=s},getCurrentAsset(){return new Promise((s,t)=>{const e=this.route.params.asset_id;e||s(null);const i=this.assetMap.get(e)||null;if(i)return s(i);if(e)return this.loadAsset(e).then(s)})},onEditClicked(){this.modals.edit=!0},confirmEditAsset(s){s.id=this.currentAsset.id,this.loading.edit=!0,this.errors.edit=!1,this.editAsset(s).then(()=>{this.loading.edit=!1,this.modals.edit=!1}).catch(t=>{console.error(t),this.loading.edit=!1,this.errors.edit=!0})},resetData(){this.castIn.isLoading=!0,this.$route.params.episode_id==="main"&&this.setCurrentEpisode("main"),this.$nextTick(()=>{this.getCurrentAsset().then(s=>(this.currentAsset=s,this.loadAssetCastIn(this.currentAsset))).then(()=>this.loadAssetCasting(this.currentAsset)).then(()=>{this.castIn.isLoading=!1}).catch(s=>{this.castIn.isError=!0,this.castIn.isLoading=!1,console.error(s)})})},shotPath(s){return{name:s.episode_id?"episode-shot":"shot",params:{production_id:this.currentProduction.id,shot_id:s.shot_id,episode_id:s.episode_id?s.episode_id:void 0}}},init(){this.getCurrentAsset().then(s=>{this.currentAsset=s,this.currentSection=this.route.query.section||"casting",this.castIn.isLoading=!0,this.castIn.isError=!1,this.currentAsset?this.loadAssetCastIn(this.currentAsset).then(()=>this.loadAssetCasting(this.currentAsset)).then(()=>{this.castIn.isLoading=!1}).catch(t=>{this.castIn.isLoading=!1,this.castIn.isError=!0,console.error(t)}):this.resetData()}).catch(console.error)}},watch:{$route(){this.init()}},metaInfo(){return{title:`${this.title} - Kitsu`}}};var T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"columns fixed-page asset xyz-in",attrs:{xyz:"fade"}},[e("div",{staticClass:"page column main-column"},[e("div",{staticClass:"page-header flexrow"},[e("router-link",{staticClass:"flexrow-item has-text-centered back-link ml1",attrs:{to:t.assetsPath}},[e("corner-left-up-icon")],1),e("span",{staticClass:"flexrow-item ml2"},[t.currentAsset?e("entity-thumbnail",{staticClass:"entity-thumbnail",attrs:{entity:t.currentAsset,"empty-width":100,"empty-height":60,width:100}}):t._e()],1),e("div",{staticClass:"entity-title flexrow-item"},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"filler"}),t.currentAsset&&t.currentAsset.ready_for&&t.currentAsset.ready_for!=="None"?e("div",{staticClass:"ready-for flexrow block mr0"},[e("span",{staticClass:"flexrow-item"},[t._v(" "+t._s(t.$t("assets.fields.ready_for"))+" ")]),e("task-type-name",{staticClass:"flexrow-item",attrs:{"task-type":t.taskTypeMap.get(t.currentAsset.ready_for),"current-production-id":this.currentProduction.id}})],1):t._e()],1),e("div",{staticClass:"flexrow infos"},[e("div",{staticClass:"flexrow-item block flexcolumn"},[e("page-subtitle",{attrs:{text:t.$t("assets.tasks")}}),e("entity-task-list",{staticClass:"task-list",attrs:{entries:t.currentAsset?t.currentAsset.tasks:[],"is-loading":!t.currentAsset,"is-error":!1},on:{"task-selected":t.onTaskSelected}})],1),e("div",{staticClass:"flexrow-item block flexcolumn"},[e("div",{staticClass:"flexrow"},[e("page-subtitle",{attrs:{text:t.$t("main.info")}}),e("div",{staticClass:"filler"}),e("div",{staticClass:"flexrow-item has-text-right"},[t.isCurrentUserManager?e("button-simple",{attrs:{icon:"edit"},on:{click:function(i){t.modals.edit=!0}}}):t._e()],1)],1),e("div",{staticClass:"table-body"},[t.currentAsset?e("table",{staticClass:"datatable no-header"},[e("tbody",{staticClass:"table-body"},[e("tr",{staticClass:"datatable-row"},[e("td",{staticClass:"field-label"},[t._v(" "+t._s(t.$t("assets.fields.description"))+" ")]),e("description-cell",{attrs:{entry:t.currentAsset,full:!0}})],1),t._l(t.assetMetadataDescriptors,function(i){return e("tr",{key:i.id,staticClass:"datatable-row"},[e("td",{staticClass:"field-label"},[t._v(t._s(i.name))]),e("td",[t._v(" "+t._s(t.currentAsset.data?t.currentAsset.data[i.field_name]:"")+" ")])])})],2)]):t._e()])])]),e("div",{staticClass:"asset-data block"},[e("div",{staticClass:"flexrow"},[e("combobox-styled",{staticClass:"section-combo flexrow-item",attrs:{options:t.entityNavOptions},model:{value:t.currentSection,callback:function(i){t.currentSection=i},expression:"currentSection"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.currentSection==="casting"&&t.currentAsset.is_casting_standby,expression:`
            currentSection === 'casting' && currentAsset.is_casting_standby
          `}],staticClass:"tag tag-standby"},[t._v(" "+t._s(t.$t("breakdown.fields.standby"))+" ")]),e("div",{staticClass:"filler"}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.currentSection==="schedule",expression:"currentSection === 'schedule'"}],staticClass:"flexrow-item mt05"},[t._v(" "+t._s(t.$t("schedule.zoom_level"))+": ")]),e("combobox-number",{directives:[{name:"show",rawName:"v-show",value:t.currentSection==="schedule",expression:"currentSection === 'schedule'"}],staticClass:"zoom-level flexrow-item",attrs:{options:t.zoomOptions,"is-simple":""},model:{value:t.zoomLevel,callback:function(i){t.zoomLevel=i},expression:"zoomLevel"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentSection==="casting",expression:"currentSection === 'casting'"}],staticClass:"asset-casted-in"},[t.currentAsset?e("div",[t.currentAsset.castInShotsBySequence&&t.currentAsset.castInShotsBySequence[0].length>0?e("div",t._l(t.currentAsset.castInShotsBySequence,function(i){return i[0].sequence_name?e("div",{key:i.length>0?i[0].sequence_name:"",staticClass:"sequence-shots"},[e("div",{staticClass:"shot-sequence"},[t._v(" "+t._s(i.length>0?i[0].sequence_name:"")+" ")]),e("div",{staticClass:"shot-list"},t._l(i,function(a){return e("router-link",{key:a.shot_id,staticClass:"shot-link",attrs:{to:t.shotPath(a)}},[e("entity-thumbnail",{staticClass:"entity-thumbnail",attrs:{entity:a,square:!0,"empty-width":103,"empty-height":103,"with-link":!1}}),e("div",[e("span",[t._v(t._s(a.shot_name))]),a.nb_occurences>1?e("span",[t._v(" ("+t._s(a.nb_occurences)+") ")]):t._e()])],1)}),1)]):t._e()}),0):e("div",[t._v(" "+t._s(t.$t("assets.no_cast_in"))+" ")])]):e("table-info",{attrs:{"is-loading":t.castIn.isLoadin,"is-error":t.castIn.isError}}),t.currentAsset&&t.currentAsset.castingAssetsByType&&t.currentAsset.castingAssetsByType[0].length>0?e("div",[e("page-subtitle",{attrs:{text:"Linked"}}),t.currentAsset.castingAssetsByType&&t.currentAsset.castingAssetsByType[0].length>0?e("div",t._l(t.currentAsset.castingAssetsByType,function(i){return e("div",{key:i.length>0?i[0].asset_type_name:"",staticClass:"type-assets"},[e("div",{staticClass:"asset-type"},[t._v(" "+t._s(i.length>0?i[0].asset_type_name:"")+" ("+t._s(i.length)+") ")]),e("div",{staticClass:"asset-list"},t._l(i,function(a){return e("router-link",{key:a.id,staticClass:"asset-link",attrs:{to:{name:"asset",params:{production_id:t.currentProduction.id,asset_id:a.asset_id}}}},[e("entity-thumbnail",{staticClass:"entity-thumbnail",attrs:{entity:a,square:!0,"empty-width":103,"empty-height":103,"with-link":!1}}),e("div",[e("span",[t._v(t._s(a.asset_name))]),a.nb_occurences>1?e("span",[t._v(" ("+t._s(a.nb_occurences)+") ")]):t._e()])],1)}),1)])}),0):t._e()],1):t._e()],1),t.scheduleItems[0].children.length>0?e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentSection==="schedule",expression:"currentSection === 'schedule'"}],staticClass:"schedule mt1"},[e("div",{staticClass:"wrapper"},[e("schedule",{ref:"schedule-widget",attrs:{"start-date":t.tasksStartDate,"end-date":t.tasksEndDate,hierarchy:t.scheduleItems,"zoom-level":t.zoomLevel,"is-loading":!1,"is-estimation-linked":!0,"hide-root":!0,"with-milestones":!1}})],1)]):t._e(),t.currentSection==="preview-files"?e("entity-preview-files",{attrs:{entity:t.currentAsset}}):t._e(),t.currentSection==="activity"?e("entity-news",{attrs:{entity:t.currentAsset}}):t._e(),t.currentSection==="time-logs"?e("entity-time-logs",{attrs:{entity:t.currentAsset}}):t._e()],1)]),t.currentTask?e("div",{staticClass:"column side-column"},[e("task-info",{attrs:{task:t.currentTask}})],1):t._e(),e("edit-asset-modal",{ref:"edit-asset-modal",attrs:{active:t.modals.edit,"is-loading":t.loading.edit,"is-error":t.errors.edit,"asset-to-edit":t.currentAsset},on:{cancel:function(i){t.modals.edit=!1},confirm:t.confirmEditAsset}})],1)},E=[],P=C(S,T,E,!1,null,"c090d51f",null,null);const z=P.exports;export{z as default};
//# sourceMappingURL=Asset-c3148ff0.js.map