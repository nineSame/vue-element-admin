(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e33384e"],{"2d6f":function(e,t,a){"use strict";var s=a("81b3"),n=a.n(s);n.a},"4c91":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("svg-icon",{attrs:{"icon-class":"international"}}),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.$t("i18nView.title")))])],1),e._v(" "),a("div",[a("el-radio-group",{attrs:{size:"small"},model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}},[a("el-radio",{attrs:{label:"zh",border:""}},[e._v("\n          简体中文\n        ")]),e._v(" "),a("el-radio",{attrs:{label:"en",border:""}},[e._v("\n          English\n        ")]),e._v(" "),a("el-radio",{attrs:{label:"es",border:""}},[e._v("\n          Español\n        ")]),e._v(" "),a("el-radio",{attrs:{label:"ja",border:""}},[e._v("\n          日本語\n        ")])],1),e._v(" "),a("el-tag",{staticStyle:{"margin-top":"15px",display:"block"},attrs:{type:"info"}},[e._v("\n        "+e._s(e.$t("i18nView.note"))+"\n      ")])],1)]),e._v(" "),a("el-row",{staticStyle:{margin:"100px 15px 50px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:12,xs:24}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{placeholder:e.$t("i18nView.datePlaceholder"),type:"date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-select",{attrs:{placeholder:e.$t("i18nView.selectPlaceholder")},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("div",{staticClass:"block"},[a("el-button",{staticClass:"item-btn",attrs:{size:"small"}},[e._v("\n          "+e._s(e.$t("i18nView.default"))+"\n        ")]),e._v(" "),a("el-button",{staticClass:"item-btn",attrs:{size:"small",type:"primary"}},[e._v("\n          "+e._s(e.$t("i18nView.primary"))+"\n        ")]),e._v(" "),a("el-button",{staticClass:"item-btn",attrs:{size:"small",type:"success"}},[e._v("\n          "+e._s(e.$t("i18nView.success"))+"\n        ")]),e._v(" "),a("el-button",{staticClass:"item-btn",attrs:{size:"small",type:"info"}},[e._v("\n          "+e._s(e.$t("i18nView.info"))+"\n        ")]),e._v(" "),a("el-button",{staticClass:"item-btn",attrs:{size:"small",type:"warning"}},[e._v("\n          "+e._s(e.$t("i18nView.warning"))+"\n        ")]),e._v(" "),a("el-button",{staticClass:"item-btn",attrs:{size:"small",type:"danger"}},[e._v("\n          "+e._s(e.$t("i18nView.danger"))+"\n        ")])],1)]),e._v(" "),a("el-col",{attrs:{span:12,xs:24}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,fit:"","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{label:e.$t("i18nView.tableName"),prop:"name",width:"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("i18nView.tableDate"),prop:"date",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("i18nView.tableAddress"),prop:"address"}})],1)],1)],1)],1)},n=[],l={zh:{i18nView:{title:"切换语言",note:"本项目国际化基于 vue-i18n",datePlaceholder:"请选择日期",selectPlaceholder:"请选择",tableDate:"日期",tableName:"姓名",tableAddress:"地址",default:"默认按钮",primary:"主要按钮",success:"成功按钮",info:"信息按钮",warning:"警告按钮",danger:"危险按钮",one:"一",two:"二",three:"三"}},en:{i18nView:{title:"Switch Language",note:"The internationalization of this project is based on vue-i18n",datePlaceholder:"Pick a day",selectPlaceholder:"Select",tableDate:"tableDate",tableName:"tableName",tableAddress:"tableAddress",default:"default:",primary:"primary",success:"success",info:"info",warning:"warning",danger:"danger",one:"One",two:"Two",three:"Three"}},es:{i18nView:{title:"Switch Language",note:"The internationalization of this project is based on vue-i18n",datePlaceholder:"Pick a day",selectPlaceholder:"Select",tableDate:"tableDate",tableName:"tableName",tableAddress:"tableAddress",default:"default:",primary:"primary",success:"success",info:"info",warning:"warning",danger:"danger",one:"One",two:"Two",three:"Three"}},ja:{i18nView:{title:"言語切替",note:"vue-i18nを使っています",datePlaceholder:"日時選択",selectPlaceholder:"選択してください",tableDate:"日時",tableName:"姓名",tableAddress:"住所",default:"default",primary:"primary",success:"success",info:"info",warning:"warning",danger:"danger",one:"1",two:"2",three:"3"}}},i="i18nView",r={name:"I18n",data:function(){return{date:"",tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],options:[],value:""}},computed:{lang:{get:function(){return this.$store.state.app.language},set:function(e){this.$i18n.locale=e,this.$store.dispatch("app/setLanguage",e)}}},watch:{lang:function(){this.setOptions()}},created:function(){this.$i18n.getLocaleMessage("en")[i]||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh),this.$i18n.mergeLocaleMessage("es",l.es),this.$i18n.mergeLocaleMessage("ja",l.ja)),this.setOptions()},methods:{setOptions:function(){this.options=[{value:"1",label:this.$t("i18nView.one")},{value:"2",label:this.$t("i18nView.two")},{value:"3",label:this.$t("i18nView.three")}]}}},o=r,c=(a("2d6f"),a("0c7c")),d=Object(c["a"])(o,s,n,!1,null,"29d45876",null);t["default"]=d.exports},"81b3":function(e,t,a){}}]);