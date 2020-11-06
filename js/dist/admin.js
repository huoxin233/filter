module.exports=function(t){var e={};function a(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=14)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["utils/withAttr"]},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat["components/FieldSet"]},,function(t,e){t.exports=flarum.core.compat["components/AdminNav"]},function(t,e){t.exports=flarum.core.compat["components/AdminLinkButton"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["utils/saveSettings"]},,function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(1),i=a(7),s=a.n(i),l=a(8),f=a.n(l);var u=a(9),c=a.n(u),p=a(10),d=a.n(p),h=a(11),g=a.n(h),v=a(4),b=a.n(v),x=(a(13),a(5)),w=a.n(x),y=a(3),P=a.n(y),S=a(2),_=a.n(S),N=function(t){var e,a;function n(){return t.apply(this,arguments)||this}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var o=n.prototype;return o.oninit=function(e){var a=this;t.prototype.oninit.call(this,e);var n=app.data.settings;this.fields=["words","flaggedEmail","flaggedSubject","count","cooldown"],this.switches=["autoMergePosts","emailWhenFlagged"],this.values={},this.settingsPrefix="fof-filter",this.switches.forEach((function(t){return a.values[t]=P()("1"===n[a.addPrefix(t)])})),this.fields.forEach((function(t){return a.values[t]=P()(n[a.addPrefix(t)])})),this.values.cooldown=P()(this.values.cooldown()||20)},o.view=function(){return m("div",{className:"WordConfigPage"},m("div",{className:"container"},m("form",{onsubmit:this.onsubmit.bind(this)},m("h2",null,app.translator.trans("fof-filter.admin.title")),w.a.component({label:app.translator.trans("fof-filter.admin.filter_label"),className:"WordConfigPage-Settings"},[m("div",{className:"WordConfigPage-Settings-input"},m("div",{className:"helpText"},app.translator.trans("fof-filter.admin.help")),m("textarea",{className:"FormControl",placeholder:app.translator.trans("fof-filter.admin.input.placeholder"),rows:"6",value:this.values.words()||null,oninput:_()("value",this.values.words)}))]),w.a.component({label:app.translator.trans("fof-filter.admin.input.email_label"),className:"WordConfigPage-Settings"},[m("div",{className:"WordConfigPage-Settings-input"},m("label",null,app.translator.trans("fof-filter.admin.input.email_subject")),m("input",{className:"FormControl",value:this.values.flaggedSubject()||app.translator.trans("fof-filter.admin.email.default_subject"),oninput:_()("value",this.values.flaggedSubject)}),m("label",null,app.translator.trans("fof-filter.admin.input.email_body")),m("div",{className:"helpText"},app.translator.trans("fof-filter.admin.email_help")),m("textarea",{className:"FormControl",rows:"4",value:this.values.flaggedEmail()||app.translator.trans("fof-filter.admin.email.default_text"),oninput:_()("value",this.values.flaggedEmail)}))]),b.a.component({state:this.values.autoMergePosts(),className:"WordConfigPage-Settings-switch",onchange:this.values.autoMergePosts},app.translator.trans("fof-filter.admin.input.switch.merge")),m("label",null,app.translator.trans("fof-filter.admin.cooldownLabel")),m("input",{className:"FormControl",value:this.values.cooldown(),type:"number",oninput:_()("value",this.values.cooldown)}),m("div",{className:"helpText"},app.translator.trans("fof-filter.admin.help2")),b.a.component({state:this.values.emailWhenFlagged(),className:"WordConfigPage-Settings-switch",onchange:this.values.emailWhenFlagged},app.translator.trans("fof-filter.admin.input.switch.email")),d.a.component({type:"submit",className:"Button Button--primary",loading:this.loading},app.translator.trans("core.admin.email.submit_button")))))},o.onsubmit=function(t){var e=this;if(t.preventDefault(),!this.loading){this.loading=!0;var a={};this.switches.forEach((function(t){return a[e.addPrefix(t)]=e.values[t]()})),this.fields.forEach((function(t){return a[e.addPrefix(t)]=e.values[t]()})),g()(a).then((function(){app.alerts.show({type:"success"},app.translator.trans("core.admin.basics.saved_message"))})).catch((function(){})).then((function(){e.loading=!1,m.redraw()}))}},o.addPrefix=function(t){return this.settingsPrefix+"."+t},n}(c.a);o.a.initializers.add("fof-filter",(function(t){o.a.routes["fof-filter"]={path:"/filter",component:N},o.a.extensionSettings["fof-filter"]=function(){return m.route.set(o.a.route("fof-filter"))},Object(r.extend)(s.a.prototype,"items",(function(t){t.add("fof-filter",f.a.component({href:o.a.route("fof-filter"),icon:"fas fa-filter",description:o.a.translator.trans("fof-filter.admin.nav.desc")},o.a.translator.trans("fof-filter.admin.nav.text")))}))}))}]);
//# sourceMappingURL=admin.js.map