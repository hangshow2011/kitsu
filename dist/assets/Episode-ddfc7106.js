import{a3 as r,bp as n,af as o,Y as c,a as d,b as l,bA as u,n as p}from"./TaskInfo-86bb07b0.js";import{e as m,E as h,a as f,b as v,c as _}from"./EntityTaskList-d56fb8a6.js";import{f as g,C as y,b as E,D as b,c as C,d as w,P as x,S as k,T as S}from"./index-5e15805d.js";import{E as T}from"./EditEpisodeModal-d1345ff8.js";import"./PeopleNameCell-18614bd9.js";const L={name:"episode",mixins:[m,g],components:{ButtonSimple:r,ComboboxNumber:y,ComboboxStyled:E,CornerLeftUpIcon:n,DescriptionCell:b,EditEpisodeModal:T,EntityNews:h,EntityPreviewFiles:f,EntityTaskList:v,EntityTimeLogs:_,EntityThumbnail:C,PageSubtitle:w,PageTitle:x,Schedule:k,TableInfo:S,TaskInfo:o,TaskTypeName:c},data(){return{type:"episode",currentEpisode:null,currentTask:null,casting:{isLoading:!1,isError:!1},errors:{edit:!1},loading:{edit:!1},modals:{edit:!1,preview:!1}}},mounted(){this.clearSelectedTasks(),this.loadCurrentEpisode().then(i=>{this.currentEpisode=i,this.currentSection=this.route.query.section||"casting",this.casting.isLoading=!0,this.casting.isError=!1,this.currentEpisode?this.loadEpisodeCasting(this.currentEpisode).then(()=>{this.casting.isLoading=!1}).catch(e=>{this.casting.isLoading=!1,this.casting.isError=!0,console.error(e)}):this.resetData()}).catch(console.error)},computed:{...d(["currentProduction","getTaskTypePriority","episodeMap","episodeMetadataDescriptors","episodeSearchText","isCurrentUserManager","route","taskMap","taskTypeMap"]),title(){return this.currentEpisode?`${this.currentEpisode.name}`:"Loading..."},currentEntity(){return this.currentEpisode},getEpisodesRoute(){const i={name:"episodes",params:{production_id:this.currentProduction.id,project_id:this.currentProduction.id},query:{search:this.episodeSearchText}};return i.name="episodes",i},nbAssets(){let i=0;return this.currentEpisode&&this.currentSection==="casting"&&this.currentEpisode.castingAssetsByType&&this.currentEpisode.castingAssetsByType.forEach(e=>{i+=e.length}),i}},methods:{...l(["clearSelectedTasks","editEpisode","setCurrentEpisode","loadEpisodesWithTasks","loadEpisodeCasting"]),loadCurrentEpisode(){return new Promise((i,e)=>{const t=this.route.params.episode_id,s=this.episodeMap.get(t)||null;return!s||!s.validations?this.loadEpisodesWithTasks().then(()=>{const a=this.episodeMap.get(t)||null;return i(a)}):i(s)})},confirmEditEpisode(i){i.id=this.currentEpisode.id,this.loading.edit=!0,this.errors.edit=!1,this.editEpisode(i).then(()=>{this.loading.edit=!1,this.modals.edit=!1}).catch(e=>{console.error(e),this.loading.edit=!1,this.errors.edit=!0})},buildAssetRoute(i){let e=i.episode_id;e||(e="main");const t={name:"asset",params:{production_id:this.currentProduction.id,asset_id:i.asset_id}};return u(t,e)},resetData(){this.casting.isLoading=!0,this.$nextTick(()=>{this.getCurrentEpisode().then(i=>(this.currentEpisode=i,this.loadEpisodeCasting(this.currentEpisode))).then(()=>{this.casting.isLoading=!1}).catch(i=>{this.casting.isError=!0,this.casting.isLoading=!1,console.error(i)})})}},watch:{},metaInfo(){return{title:`${this.title} - Kitsu`}}};var M=function(){var e=this,t=e._self._c;return t("div",{staticClass:"columns fixed-page episode xyz-in",attrs:{xyz:"fade"}},[t("div",{staticClass:"column main-column"},[t("div",{staticClass:"page-header flexrow"},[t("router-link",{staticClass:"flexrow-item has-text-centered back-link",attrs:{to:e.getEpisodesRoute}},[t("corner-left-up-icon")],1),t("span",{staticClass:"flexrow-item ml2"},[e.currentEpisode?t("entity-thumbnail",{staticClass:"entity-thumbnail",attrs:{entity:e.currentEpisode,"empty-width":120,"empty-height":50,width:120}}):e._e()],1),t("div",{staticClass:"flexrow-item"},[t("page-title",{staticClass:"entity-title",attrs:{text:e.title}})],1)],1),t("div",{staticClass:"flexrow infos"},[t("div",{staticClass:"flexrow-item block flexcolumn"},[t("page-subtitle",{attrs:{text:e.$t("episodes.tasks")}}),t("entity-task-list",{staticClass:"task-list",attrs:{entries:e.currentTasks.map(s=>s.id),"is-loading":!e.currentEpisode,"is-error":!1},on:{"task-selected":e.onTaskSelected}})],1),t("div",{staticClass:"flexrow-item block flexcolumn"},[t("div",{staticClass:"flexrow"},[t("page-subtitle",{attrs:{text:e.$t("main.info")}}),t("div",{staticClass:"filler"}),t("div",{staticClass:"flexrow-item has-text-right"},[e.isCurrentUserManager?t("button-simple",{attrs:{icon:"edit"},on:{click:function(s){e.modals.edit=!0}}}):e._e()],1)],1),t("div",{staticClass:"table-body"},[e.currentEpisode?t("table",{staticClass:"datatable no-header"},[t("tbody",{staticClass:"datatable-body"},[t("tr",{staticClass:"datatable-row"},[t("td",{staticClass:"field-label"},[e._v(e._s(e.$t("shots.fields.description")))]),t("description-cell",{attrs:{entry:e.currentEpisode,full:!0}})],1),e._l(e.episodeMetadataDescriptors,function(s){return t("tr",{key:s.id,staticClass:"datatable-row"},[t("td",{staticClass:"field-label"},[e._v(e._s(s.name))]),t("td",[e._v(" "+e._s(e.currentEpisode&&e.currentEpisode.data?e.currentEpisode.data[s.field_name]:"")+" ")])])})],2)]):e._e()])])]),t("div",{staticClass:"episode-data block"},[t("div",{staticClass:"flexrow"},[t("combobox-styled",{staticClass:"section-combo flexrow-item",attrs:{options:e.entityNavOptions},model:{value:e.currentSection,callback:function(s){e.currentSection=s},expression:"currentSection"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:e.currentSection==="casting",expression:"currentSection === 'casting'"}]},[e._v(" "+e._s(e.nbAssets)+" "+e._s(e.$tc("assets.number",e.nbAssets))+" ")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.currentSection==="casting"&&e.currentEpisode.is_casting_standby,expression:"currentSection === 'casting' && currentEpisode.is_casting_standby"}],staticClass:"tag tag-standby"},[e._v(" "+e._s(e.$t("breakdown.fields.standby"))+" ")]),t("div",{staticClass:"filler"}),t("span",{directives:[{name:"show",rawName:"v-show",value:e.currentSection==="schedule",expression:"currentSection === 'schedule'"}],staticClass:"flexrow-item mt05"},[e._v(" "+e._s(e.$t("schedule.zoom_level"))+": ")]),t("combobox-number",{directives:[{name:"show",rawName:"v-show",value:e.currentSection==="schedule",expression:"currentSection === 'schedule'"}],staticClass:"zoom-level flexrow-item",attrs:{options:e.zoomOptions,"is-simple":""},model:{value:e.zoomLevel,callback:function(s){e.zoomLevel=s},expression:"zoomLevel"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.currentSection==="casting",expression:"currentSection === 'casting'"}],staticClass:"episode-casting"},[e.currentEpisode?t("div",[e.currentEpisode&&e.currentEpisode.castingAssetsByType&&e.currentEpisode.castingAssetsByType[0].length>0?t("div",e._l(e.currentEpisode.castingAssetsByType,function(s){return t("div",{key:s.length>0?s[0].asset_type_name:"",staticClass:"type-assets"},[t("div",{staticClass:"asset-type"},[e._v(" "+e._s(s.length>0?s[0].asset_type_name:"")+" ("+e._s(s.length)+") ")]),t("div",{staticClass:"asset-list"},e._l(s,function(a){return t("router-link",{key:a.id,staticClass:"asset-link",attrs:{to:e.buildAssetRoute(a)}},[t("entity-thumbnail",{staticClass:"entity-thumbnail",attrs:{entity:a,square:!0,"empty-width":103,"empty-height":103,"with-link":!1,"no-cache":!0}}),t("div",[e._v(" "+e._s(a.asset_name)+" "),a.nb_occurences>1?t("span",[e._v(" ("+e._s(a.nb_occurences)+") ")]):e._e()]),t("div",{staticClass:"ready-for flexrow"},[a.ready_for?t("task-type-name",{staticClass:"flexrow-item",attrs:{"task-type":e.taskTypeMap.get(a.ready_for),"current-production-id":e.currentProduction.id,title:"Ready for: "+e.taskTypeMap.get(a.ready_for).name}}):e._e()],1)],1)}),1)])}),0):t("div",{staticClass:"mt1"},[e._v(" "+e._s(e.$t("episodes.no_casting"))+" ")])]):t("table-info",{attrs:{"is-loading":e.casting.isLoading,"is-error":e.casting.isError}})],1),e.scheduleItems[0].children.length>0?t("div",{directives:[{name:"show",rawName:"v-show",value:e.currentSection==="schedule",expression:"currentSection === 'schedule'"}],staticClass:"schedule mt1"},[t("div",{staticClass:"wrapper"},[t("schedule",{ref:"schedule-widget",attrs:{"start-date":e.tasksStartDate,"end-date":e.tasksEndDate,hierarchy:e.scheduleItems,"zoom-level":e.zoomLevel,"is-loading":!1,"is-estimation-linked":!0,"hide-root":!0,"with-milestones":!1}})],1)]):t("div",{directives:[{name:"show",rawName:"v-show",value:e.currentSection==="schedule",expression:"currentSection === 'schedule'"}],staticClass:"mt1"},[e._v(" "+e._s(e.$t("main.empty_schedule"))+" ")]),e.currentSection==="preview-files"?t("entity-preview-files",{attrs:{entity:e.currentEpisode}}):e._e(),e.currentSection==="activity"?t("entity-news",{attrs:{entity:e.currentEpisode}}):e._e(),e.currentSection==="time-logs"?t("entity-time-logs",{attrs:{entity:e.currentEpisode}}):e._e()],1)]),e.currentTask?t("div",{staticClass:"column side-column"},[t("task-info",{attrs:{task:e.currentTask}})],1):e._e(),t("edit-episode-modal",{ref:"edit-episode-modal",attrs:{active:e.modals.edit,"is-loading":e.loading.edit,"is-error":e.errors.edit,"episode-to-edit":e.currentEpisode},on:{cancel:function(s){e.modals.edit=!1},confirm:e.confirmEditEpisode}})],1)},$=[],z=p(L,M,$,!1,null,"8c9993dd",null,null);const R=z.exports;export{R as default};