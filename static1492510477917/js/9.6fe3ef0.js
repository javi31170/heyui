webpackJsonp([9],{100:function(e,t,o){var n=o(0)(o(558),o(660),null,null);n.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/input1.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] input1.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},558:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{value:"",value2:""}}}},660:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text",placeholder:"请输入"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value2,expression:"value2"}],attrs:{placeholder:"请输入"},domProps:{value:e.value2},on:{input:function(t){t.target.composing||(e.value2=t.target.value)}}})]),e._v(" "),o("p",[e._v("input对应的值："+e._s(e.value))]),e._v(" "),o("p",[e._v("textarea对应的值："+e._s(e.value2))])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});