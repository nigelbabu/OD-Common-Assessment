this.Templates=this.Templates||{},this.Templates.filter={v:3,t:[{t:7,e:"div",a:{"class":"filter"},f:["\n  ",{t:7,e:"div",a:{"class":"btn-group"},f:["\n    ",{t:7,e:"button",a:{"class":"label label-default dropdown-toggle dropdown",type:"button","data-toggle":"dropdown","aria-expanded":"false"},f:[{t:7,e:"span",a:{"class":"text"},f:[{t:7,e:"span",f:["+"]}]}]},"\n    ",{t:7,e:"div",a:{id:"filter-dropdown","class":"dropdown-menu keep-open form-horizontal",role:"menu"},f:["\n      ",{t:7,e:"ul",f:["\n",{t:4,f:["        ",{t:7,e:"li",f:["\n        ",{t:7,e:"label",f:["\n          ",{t:7,e:"input",a:{type:"checkbox",name:[{t:2,r:"indicators.visible"}],value:[{t:2,r:"."}],"class":[{t:2,r:"."}]}},"\n          ",{t:2,x:{r:["getIndicator","."],s:'_0(_1,"title")'}},"\n        "]},"\n        "]},"\n"],r:"indicators.scoring"},"      "]},"\n    "]},"\n  "]},"\n"]}]},this.Templates.group={v:3,t:[" ",{t:7,e:"div",a:{"class":"grouping"},f:["\n  ",{t:7,e:"div",a:{"class":"btn-group"},f:["\n    ",{t:7,e:"div",a:{id:"grouping","class":"form-horizontal",role:"menu"},f:["\n      ",{t:7,e:"label",f:["Group by:"]},"\n      ",{t:7,e:"select",a:{"class":"form-control",value:[{t:2,r:"sorting.grouping"}]},f:["\n          ",{t:7,e:"option",a:{value:"",selected:"selected"},f:["none"]},"\n",{t:4,f:["          ",{t:7,e:"option",a:{value:[{t:2,r:"."}]},f:[{t:2,x:{r:["getIndicator","."],s:'_0(_1,"title")'}}]},"\n"],n:52,i:"item",r:"indicators.grouping"},"      "]},"\n    "]},"\n  "]},"\n"]}]},this.Templates.list={v:3,t:[{t:7,e:"div",a:{id:"grouping"},f:[{t:7,e:"grouping"}]},"\n",{t:7,e:"table",a:{"class":"countries"},f:["\n  ",{t:7,e:"thead",f:["\n    ",{t:7,e:"tr",f:["\n",{t:4,f:["      ",{t:7,e:"th",a:{"class":"grouping theader"},f:["Grouping"]},"\n"],r:"sorting.grouping"},"      ",{t:7,e:"th",v:{tap:{n:"sorting.sort",a:"title"}},a:{"class":["country sortable theader ",{t:2,x:{r:["sorting.column"],s:'_0==="title"?"sorted":""'}}," ",{t:2,x:{r:["sorting.direction","sorting.column"],s:'_0===-1&&_1==="title"?"dropup":""'}}]},f:["Country",{t:7,e:"span",a:{"class":"caret"}}]},"\n      ",{t:7,e:"th",f:["\n",{t:4,f:["        ",{t:7,e:"div",a:{"class":"indicator-pil label label-default theader truncate",style:["background-color: ",{t:2,x:{r:["getIndicator","."],s:'_0(_1,"colour")'}},"; width: indicators.scoring.length / indicators.visible.length-1"]},f:["\n            ",{t:7,e:"button",v:{tap:"indicator.remove"},a:{type:"button","class":"close","aria-label":"Close"},f:[{t:7,e:"span",a:{"aria-hidden":"true"},f:["×"]},"\n            "]},"\n           ",{t:2,x:{r:["getIndicator","."],s:'_0(_1,"title")'}},"\n        "]},"\n"],i:"item",r:"indicators.visible"},"        ",{t:7,e:"div",a:{id:"filter"},f:[{t:7,e:"filter"}]},"\n      "]},"\n      ",{t:7,e:"th",v:{tap:{n:"sorting.sort",a:"score"}},a:{"class":["score sortable theader\n        ",{t:2,x:{r:["sorting.column"],s:'_0==="score"?"sorted":""'}},"\n        ",{t:2,x:{r:["sorting.direction","sorting.column"],s:'_0===-1&&_1==="score"?"dropup":""'}}]},f:["\n        ",{t:7,e:"div",f:["Score",{t:7,e:"span",a:{"class":"caret"}}]}]},"\n    "]},"\n  "]},"\n  ",{t:7,e:"tbody",f:["\n",{t:4,f:["    ",{t:4,f:["\n\n    ",{t:7,e:"tr",a:{"class":["data-",{t:2,r:"id"}],"data-country":[{t:2,r:"title"}]},f:["\n",{t:4,f:["        ",{t:4,f:["\n          ",{t:7,e:"td",a:{"class":"grouping-category",rowspan:[{t:2,r:"places.length"}]},f:[{t:7,e:"span",f:[{t:2,rx:{r:"valuesMap",m:[{t:30,n:"sorting.grouping"},"normalised"]}}]}]},"\n"],r:"first"}],r:"sorting.grouping"},"      ",{t:7,e:"td",a:{"class":"country"},f:[{t:7,e:"a",a:{href:["#/country/",{t:2,r:"id"}]},f:[{t:2,r:"title"}]}]},"\n      ",{t:7,e:"td",a:{"class":"results"},f:["\n        ",{t:7,e:"div",a:{"class":"result-wrapper"},f:["\n",{t:4,f:["              ",{t:7,e:"a",a:{"class":"indicator",href:"#",title:"",style:[{t:4,f:["width: ",{t:2,x:{r:[".","valuesMap","indicators.visible.length"],s:"_1[_0].normalised/_2-1"}},"%;"],rx:{r:"valuesMap",m:[{t:30,n:"."},"normalised"]}}," background-color: ",{t:2,x:{r:["getIndicator","."],s:'_0(_1,"colour")'}}],"data-title":["<h3>",{t:2,x:{r:["getIndicator","."],s:'_0(_1,"title")'}},"</h3><p>",{t:2,rx:{r:"valuesMap",m:[{t:30,n:"."},"normalised"]}},"</p><p>",{t:2,x:{r:["getIndicator","."],s:'_0(_1,"description")'}},"</p>"]}},"\n"],n:52,r:"indicators.visible"},"        "]},"\n      "]},"\n      ",{t:7,e:"td",f:[{t:2,r:"score"}]},"\n\n    "]},"\n"],r:"places"}],n:52,i:"i",x:{r:["sorting","groups","sorting.column","sorting.direction"],s:"_0.sort(_1,_2,_3)"}},"  "]},"\n"]}]},Ractive.prototype.remove=function(t,e){var i=this.get(t),r=i.indexOf(e);return-1!==r?this.splice(t,r,1):Promise.defer()};var views=function(){function t(t){var e=Ractive.extend({isolated:!1,template:Templates.filter}),i=Ractive.extend({isolated:!1,template:Templates.group}),r=new Ractive({el:"#app",template:Templates.list,data:t,computed:{},components:{filter:e,grouping:i}});r.on("sorting.sort",function(t,e){this.set("sorting.column",e),this.set("sorting.direction",-1*this.get("sorting.direction"))}),r.on("indicator.remove",function(t,e){this.remove("indicators.visible",t.context)}),r.observe("sorting.grouping indicators.visible",function(t,e,i){var n=services.updateGrouping(r.get("model"),r.get("sorting.column"),r.get("sorting.direction"),r.get("sorting.grouping"),r.get("indicators.all."+r.get("sorting.grouping")+".sortorder"));r.set("groups",services.calculateVisibleScores(n,this.get("indicators.visible")))})}return{init:t}}(),controllers=void 0,utilities=function(){function t(t,i,r){var n=t;for(var s in n){var a=[];a=e(n[s].places,i,r),n[s].places=a}return n}function e(t,e,i){t=t.slice();var r=t.sort(function(t,r){return t[e]<r[e]?-i:i});return r}function i(t){return t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function r(t){return"y"===t.toLowerCase()||"true"===t.toLowerCase()||1==t?!0:!1}return{sort:e,sortGroups:t,isTrue:r,slugify:i}}(),services=function(){function t(t){var e="1kOOvztwbY1RNm545RKG8Ua6bh2GgX-P_wFadPkdH2ig";Tabletop.init({key:e,callback:function(e,i){t(i.sheets("places").elements,i.sheets("indicators").elements,i.sheets("values").elements)},simpleSheet:!1,prettyColumnNames:!1})}function e(t){for(var e={},i=[],r=[],n=[],s=0;s<t.length;s++){var a=t[s].id;e[a]=t[s],utilities.isTrue(t[s].grouping)&&r.push(a),utilities.isTrue(t[s].scoring)&&(i.push(a),utilities.isTrue(t[s]["default"])&&(n.push(a),e[a].visible=!0))}return{all:e,scoring:i,grouping:r,visible:n}}function i(t,e,i){var r=t;return r.map(function(t){t.score=0,t.valuesMap={},e.filter(function(e,i){return e.placeid===t.id&&(t.valuesMap[e.indicatorid]=e),!0})}),r}function r(t,e){var i=t;return i.map(function(t){t.places=t.places.map(function(t){var i=!0,r=0,n=t.valuesMap;for(var s in n)i&&e.indexOf(n[s].indicatorid)>-1&&(n[s].normalised?r+=parseInt(n[s].normalised):i=!1);return t.first=!1,t.score=r,t.show=i,t}).filter(function(t){return t.show}),t.places[0].first=!0}),i}function n(t,e,i,r,n){var s=t,a=r,o={},r=[];if(a){for(var l in s){var c=s[l].valuesMap[a];if(c&&c.normalised){var u=utilities.slugify(c.normalised);u in o||(o[u]={id:u,value:c.normalised,places:[]}),o[u].places.push(s[l])}}var p=n.split("|");if(n)for(var d in p){var g=o[utilities.slugify(p[d])];g.places=utilities.sort(g.places,e,i),r.push(g)}}else r.push({id:"",places:s});return r}return{getData:t,prepareIndicators:e,preparePlaces:i,calculateVisibleScores:r,updateGrouping:n}}(),app=function(t){function e(){$("#filter-dropdown ul").click(function(t){t.stopPropagation()})}function i(t,i,r){var n=services.prepareIndicators(i),s=services.preparePlaces(t,r,n.visible),a={indicators:n,model:s,groups:[{id:"",places:s}],sorting:{sort:utilities.sortGroups,column:"title",direction:1,grouping:""},getIndicator:function(t,e){return this.get("indicators.all")[t][e]},isVisible:function(t){return this.get("indicators.visible").indexOf(t)>-1}};views.init(a),e()}function r(){services.getData(i)}return{start:r}}(window);