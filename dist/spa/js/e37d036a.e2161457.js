(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["e37d036a"],{4395:function(e,t,r){},"8b24":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"row items-center justify-center bg-grey-4",attrs:{padding:""}},[r("div",{staticClass:"col-10 q-gutter-y-md"},[r("q-card",[r("q-card-section",[r("div",{staticClass:"text-h6"},[e._v("Espaço métrico, servidores e requisições")])]),r("q-card-section",{staticClass:"q-gutter-y-md"},[r("div",{staticClass:"row justify-between"},[r("div",{staticClass:"col-12"},[r("q-input",{attrs:{outlined:"",label:"Pontos no espaço. Ex.: a b c d e"},model:{value:e.pontos_em_m,callback:function(t){e.pontos_em_m=t},expression:"pontos_em_m"}})],1)]),r("div",{staticClass:"row justify-between"},[r("div",{staticClass:"col-6 q-pr-sm"},[r("q-input",{attrs:{outlined:"",label:"Configuração inicial. Ex.: a b c"},model:{value:e.configuracao_inicial,callback:function(t){e.configuracao_inicial=t},expression:"configuracao_inicial"}})],1),r("div",{staticClass:"col-6"},[r("q-input",{attrs:{outlined:"",label:"Requisições. Ex.: e c a b a b d"},model:{value:e.requisicoes,callback:function(t){e.requisicoes=t},expression:"requisicoes"}})],1)])]),r("q-card-section",[r("div",{staticClass:"text-h6"},[e._v("Custos")])]),r("q-card-section",[r("div",{staticClass:"row q-gutter-md"},e._l(e.custos,function(t){return r("div",{key:t.x+t.y},[r("q-input",{staticStyle:{width:"100px"},attrs:{dense:"",outlined:"",label:"Custo ("+t.x+","+t.y+")",type:"number"},model:{value:t.d,callback:function(r){e.$set(t,"d",e._n(r))},expression:"custo.d"}})],1)}),0)]),r("q-separator",{attrs:{dark:""}}),r("q-card-actions",{attrs:{vertical:"",align:"center"}},[r("q-btn",{attrs:{color:"secondary","full-width":""},on:{click:e.calcular}},[e._v("Calcular")])],1)],1),r("q-card",[r("q-card-section",[r("div",{staticClass:"text-h6"},[e._v("Matriz de custo")])]),r("q-card-section",[e.matriz.length>0?r("q-markup-table",{attrs:{separator:"cell",flat:"",bordered:""}},[r("thead",[r("tr",{staticStyle:{"background-color":"rgb(70,124,185)",color:"rgb(255,255,255)"}},[r("th",{staticClass:"text-center light-blue-1"},[e._v("Requisição")]),r("th",{staticClass:"text-center"},[e._v("i")]),e._l(e.matriz[0].configuracoes,function(t){return r("th",{key:t.configuracao,staticClass:"text-center"},[e._v(e._s(t.configuracao))])})],2)]),r("tbody",e._l(e.matriz,function(t){return r("tr",{key:t.i,class:t.i%2==0?"b1":"b2"},[r("td",{staticClass:"text-center"},[e._v(e._s(0==t.i?"∅":t.requisicao))]),r("td",{staticClass:"text-center"},[e._v(e._s(0==t.i?"-":t.i))]),e._l(t.configuracoes,function(n){return r("td",{key:t.i+"_"+t.requisicao+"_"+n.configuracao.split(" ").join("."),staticClass:"text-center"},[e._v(e._s(n.distancia+(n.servidor?" ("+n.servidor+")":"")))])})],2)}),0)]):e._e()],1)],1)],1)])},o=[],i=r("2b0e"),a="undefined"!==typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function s(e,t){c(e,t),Object.getOwnPropertyNames(t.prototype).forEach(function(r){c(e.prototype,t.prototype,r)}),Object.getOwnPropertyNames(t).forEach(function(r){c(e,t,r)})}function c(e,t,r){var n=r?Reflect.getOwnMetadataKeys(t,r):Reflect.getOwnMetadataKeys(t);n.forEach(function(n){var o=r?Reflect.getOwnMetadata(n,t,r):Reflect.getOwnMetadata(n,t);r?Reflect.defineMetadata(n,o,e,r):Reflect.defineMetadata(n,o,e)})}var u={__proto__:[]},l=u instanceof Array;function f(e){return function(t,r,n){var o="function"===typeof t?t:t.constructor;o.__decorators__||(o.__decorators__=[]),"number"!==typeof n&&(n=void 0),o.__decorators__.push(function(t){return e(t,r,n)})}}function d(e){var t=typeof e;return null==e||"object"!==t&&"function"!==t}function p(e,t){var r=t.prototype._init;t.prototype._init=function(){var t=this,r=Object.getOwnPropertyNames(e);if(e.$options.props)for(var n in e.$options.props)e.hasOwnProperty(n)||r.push(n);r.forEach(function(r){"_"!==r.charAt(0)&&Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){e[r]=t},configurable:!0})})};var n=new t;t.prototype._init=r;var o={};return Object.keys(n).forEach(function(e){void 0!==n[e]&&(o[e]=n[e])}),o}var g=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function y(e,t){void 0===t&&(t={}),t.name=t.name||e._componentTag||e.name;var r=e.prototype;Object.getOwnPropertyNames(r).forEach(function(e){if("constructor"!==e)if(g.indexOf(e)>-1)t[e]=r[e];else{var n=Object.getOwnPropertyDescriptor(r,e);void 0!==n.value?"function"===typeof n.value?(t.methods||(t.methods={}))[e]=n.value:(t.mixins||(t.mixins=[])).push({data:function(){var t;return t={},t[e]=n.value,t}}):(n.get||n.set)&&((t.computed||(t.computed={}))[e]={get:n.get,set:n.set})}}),(t.mixins||(t.mixins=[])).push({data:function(){return p(this,e)}});var n=e.__decorators__;n&&(n.forEach(function(e){return e(t)}),delete e.__decorators__);var o=Object.getPrototypeOf(e.prototype),c=o instanceof i["a"]?o.constructor:i["a"],u=c.extend(t);return h(u,e,c),a&&s(u,e),u}var v={prototype:!0,arguments:!0,callee:!0,caller:!0};function h(e,t,r){Object.getOwnPropertyNames(t).forEach(function(n){if(!v[n]){var o=Object.getOwnPropertyDescriptor(e,n);if(!o||o.configurable){var i=Object.getOwnPropertyDescriptor(t,n);if(!l){if("cid"===n)return;var a=Object.getOwnPropertyDescriptor(r,n);if(!d(i.value)&&a&&a.value===i.value)return}0,Object.defineProperty(e,n,i)}}})}function _(e){return"function"===typeof e?y(e):function(t){return y(t,e)}}_.registerHooks=function(e){g.push.apply(g,e)};var m=_;"undefined"!==typeof Reflect&&Reflect.getMetadata;function b(e,t){void 0===t&&(t={});var r=t.deep,n=void 0!==r&&r,o=t.immediate,i=void 0!==o&&o;return f(function(t,r){"object"!==typeof t.watch&&(t.watch=Object.create(null));var o=t.watch;"object"!==typeof o[e]||Array.isArray(o[e])?"undefined"===typeof o[e]&&(o[e]=[]):o[e]=[o[e]],o[e].push({handler:r,deep:n,immediate:i})})}let w=new Array,O=new Array,q=new Array,x=new Array,j=new Array,C=new Array,A=new Array(O.length);function P(e,t,r){if(0===t)return C.push(A.join(" "));for(var n=r;n<=e.length-t;n++)A[A.length-t]=e[n],P(e,t-1,n+1)}function k(e,t){return j[e].configuracoes.filter(e=>{if(e.configuracao.split(" ").every(e=>t.includes(e)))return e})[0]}function E(e,t){let r=q.filter(r=>r.x==e&&r.y==t||r.x==t&&r.y==e);return 0==r.length?0:r[0].d}function R(e,t){let r=Array.isArray(t)?t:t.split(" "),n=Array.isArray(e)?e:e.split(" ");if(r.length!=n.length)return console.error("Erro: a configuração de origem deve ter a mesma quantidade de servidores da configuração de destino.");let o=r.filter(e=>{if(-1!==n.indexOf(e))return e}),i=n.filter(e=>-1===o.indexOf(e)),a=r.filter(e=>-1===o.indexOf(e)),s=0;for(let c=0;c<i.length;c++){let e=Number.POSITIVE_INFINITY;for(let t=0;t<a.length;t++){let r=E(i[c],a[t]);r<e&&(e=r,a.splice(t,1))}s+=e}return s}function N(e,t){let r=0,n="",o=t.split(" ");if(o.some(t=>t==x[e]))r=k(e-1,o).distancia,n=x[e];else{let t=Number.POSITIVE_INFINITY;for(let r=0;r<o.length;r++){let i=[...o],a=i.splice(r,1,x[e])[0],s=k(e-1,i),c=E(a,x[e]),u=s.distancia+c;u<t&&(t=u,n=a)}r=t}return{menor_distancia:r,servidor_de_melhor_escolha:n}}function M(e,t,r,n){w=e,O=t,q=r,x=n,C=new Array,A=new Array(O.length),j=new Array,P(w,A.length,0);for(let o=0;o<x.length;o++)if(0==o){j[0]={i:0,requisicao:null,configuracoes:new Array};for(let e=0;e<C.length;e++){let t=R(O,C[e]);j[0].configuracoes.push({configuracao:C[e],distancia:t})}}else{j[o]={i:o,requisicao:x[o],configuracoes:new Array};for(let e=0;e<C.length;e++){let t=N(o,C[e]);j[o].configuracoes.push({configuracao:C[e],distancia:t.menor_distancia,servidor:t.servidor_de_melhor_escolha})}}return j}var I=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};let z=class extends i["a"]{constructor(){super(...arguments),this.text="a",this.pontos_em_m="",this.configuracao_inicial="",this.custos=new Array,this.requisicoes="",this.matriz=new Array}onPontos(e){this.matriz.length>0&&(this.matriz=new Array),e&&this.genCustos(e.trim().split(" "))}genCustos(e){this.custos=[];for(let t=0;t<e.length-1;t++)for(let r=t+1;r<e.length;r++)this.custos.push({x:e[t],y:e[r],d:0})}calcular(){let e=this.pontos_em_m.trim().split(" "),t=this.configuracao_inicial.trim().split(" "),r=this.requisicoes.trim().split(" "),n="";e.length<2&&(n+="\r\nÉ necessário informar os pontos no espaço métrico."),t.length<2&&(n+="\r\nÉ necessário informar a configuração inicial dos servidores."),r.length<2&&(n+="\r\nÉ necessário configurar informar a sequência de requisições."),this.custos.some(e=>isNaN(e.d)||void 0===e.d||""===e.d||null===e.d)&&(n+="\r\nTodos os custos devem ser números."),""!==n&&alert("Atenção:\r\n\r\n"+n),this.matriz=M(e,t,this.custos,[0,...r])}};I([b("pontos_em_m")],z.prototype,"onPontos",null),z=I([m],z);var D=z,T=D,S=(r("de3e"),r("2877")),$=Object(S["a"])(T,n,o,!1,null,"32c40df2",null);t["default"]=$.exports},de3e:function(e,t,r){"use strict";var n=r("4395"),o=r.n(n);o.a}}]);