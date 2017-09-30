webpackJsonp([17],{1147:function(e,t,s){var r=s(1)(s(1373),s(1411),null,null,null);e.exports=r.exports},1373:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},methods:{},components:{}}},1411:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"doc"},[s("h2",[e._v("快速上手")]),e._v(" "),s("p",[e._v("我们建议使用webpack进行系统构建。")]),e._v(" "),e._m(0),e._v(" "),s("p",[e._v("Hey-Cli 是我们开源的脚手架，支持单纯的ES6项目开发，也支持Vue, React项目开发。集成了开发与打包等一系列功能。")]),e._v(" "),e._m(1),e._v(" "),s("h4",[e._v("全局less变量定义引用")]),e._v(" "),s("p",[e._v("在自己定义的 var.less 文件中引用 heyui 的 var.less 文件，并按照自己的需求重新定义更换主题，然后在hey.js脚手架配置文件中设定全局引用文件。")]),e._v(" "),e._m(2),e._v(" "),s("codes",{attrs:{type:"less"}},[e._v('@import (less) "~/heyui/themes/var.less";\n//重新定义主题\n@primary-color: #FDA729;\n@red-color: #D64244;\n@green-color: #3cb357;\n@yellow-color: #EAC12C;\n@blue-color: #77A2DC;')]),e._v(" "),s("p",{directives:[{name:"height",rawName:"v-height",value:10,expression:"10"}]}),e._v(" "),e._m(3),e._v(" "),s("codes",{attrs:{type:"javascript"}},[e._v("globalVars: './src/css/var.less',")]),e._v(" "),s("p",{directives:[{name:"height",rawName:"v-height",value:10,expression:"10"}]}),e._v(" "),s("h4",[e._v("样式引用")]),e._v(" "),e._m(4),e._v(" "),s("codes",{attrs:{type:"less"}},[e._v('@import (less) "~heyui/themes/common.less";')]),e._v(" "),s("h4",[e._v("引入 HeyUI")]),e._v(" "),s("p",[e._v("一般，我们在webpack 入口页面引用。")]),e._v(" "),e._m(5),e._v(" "),s("codes",{attrs:{type:"less"}},[e._v("import Vue from 'vue';\nimport HeyUI from 'heyui';\nVue.use(HeyUI);\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});")]),e._v(" "),s("h3",[e._v("使用 Vue-Cli / 自己搭建webpack")]),e._v(" "),s("p",[e._v("这里的引用有一些差别，主要在于样式的引用上。")]),e._v(" "),s("p",[e._v("对于 less 变量的定义，我们并没有写入common.less文件，所以需要自己定义一个less文件做引用。")]),e._v(" "),s("codes",{attrs:{type:"less"}},[e._v('@import (less) "~heyui/themes/var.less";\n//重新定义主题\n@primary-color: #FDA729;\n@red-color: #D64244;\n@green-color: #3cb357;\n@yellow-color: #EAC12C;\n@blue-color: #77A2DC;\n@import (less) "~heyui/themes/common.less";\n\n//使用这种方式引用，可以在自己的less文件中使用var.less定义的变量。\n@import (less) "自己的less文件";\n')]),e._v(" "),s("p",[e._v("注意：使用这种引用方式，在 Vue 文件中将无法使用 var.less 文件中的变量。")]),e._v(" "),s("h3",[e._v("快速搭建")]),e._v(" "),s("p",[e._v("如果你需要搭建一个新的项目，我们建议你直接使用我们的heyui-demo进行基础搭建。")]),e._v(" "),e._m(6),e._v(" "),e._m(7)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",[e._v("使用 "),s("a",{attrs:{href:"https://github.com/heyui/hey-cli",target:"_blank"}},[e._v("Hey-Cli")]),e._v(" 脚手架(推荐)")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("使用 Hey-Cli 可以设定全局的 "),s("code",[e._v("var.less")]),e._v(" 文件，文件中定义的变量可以使用在任意"),s("code",[e._v("less")]),e._v("文件中，以及"),s("code",[e._v("vue")]),e._v("文件的less样式中。")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("var.less，"),s("a",{attrs:{href:"https://github.com/heyui/heyui-demo/blob/master/src/css/var.less",target:"_blank"}},[e._v("示例")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Hey-Cli 配置文件 hey.js ，"),s("a",{attrs:{href:"https://github.com/heyui/heyui-demo/blob/master/hey.js",target:"_blank"}},[e._v("示例")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("对于样式引用，您可以在入口js文件中import，也可以直接在app.less中引用。 "),s("a",{attrs:{href:"https://github.com/heyui/heyui-demo/blob/master/src/css/app.less",target:"_blank"}},[e._v("示例")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("同时，HeyUI 也可以设置为全局引用，因为 HeyUI 拥有Message, Loadding等全局可以调用的方法。"),s("a",{attrs:{href:"https://github.com/heyui/heyui-demo/blob/master/src/app.js",target:"_blank"}},[e._v("示例")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("在线地址: "),s("a",{attrs:{href:"http://demo.heyui.top/",target:"_blank"}},[e._v("http://demo.heyui.top")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("github地址: "),s("a",{attrs:{href:"https://github.com/heyui/heyui-demo",target:"_blank"}},[e._v("https://github.com/heyui/heyui-demo")])])}]}}});