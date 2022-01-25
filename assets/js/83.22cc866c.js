(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{502:function(a,t,s){"use strict";s.r(t);var n=s(56),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"graalvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graalvm"}},[a._v("#")]),a._v(" GraalVM")]),a._v(" "),s("p",[a._v("ES4X używa GraalVM, jednakże ten sam kod będzie mógł zostać uruchomiony w trybie "),s("strong",[a._v("interpretowanym")]),a._v(" w Javie 8, 9, 10 i\nw OpenJ9.")]),a._v(" "),s("p",[a._v("ES4X uruchamia się w trybie "),s("strong",[a._v("skompilowanym")]),a._v(" dla JDK >= 11 (z JVMCI) lub GraalVM.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("W innych słowach lepiej jest używać Javy w wersji >= 11 lub GraalVM.")])]),a._v(" "),s("p",[a._v("Jest kilka benefitów z korzystania z GraalJS, chociażby zupdatowany support dla >= ES6, support generatorów, itp.")]),a._v(" "),s("h2",{attrs:{id:"roznice-z-nashornem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roznice-z-nashornem"}},[a._v("#")]),a._v(" Różnice z Nashornem")]),a._v(" "),s("p",[a._v("W przeciwieństwie do "),s("code",[a._v("Nashorn")]),a._v(", "),s("code",[a._v("GraalJS")]),a._v(" "),s("em",[a._v("java")]),a._v(" interop podąża za tą samą nazwą klasy/metody, co w Javie. Na przykład\njeśli chcemy odnieść się do pól będących getterem czy setterem w klasie Javy musimy używać nazw "),s("em",[a._v("getter")]),a._v(" oraz "),s("em",[a._v("setter")]),a._v(".\nNp.:")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Hello")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Używając obiektu Javy z Graala, to nie będzie działało w ten sposób:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" hello "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// get the name")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// FAIL")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// set the name")]),a._v("\nhello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Paulo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// FAIL")]),a._v("\n")])])]),s("p",[a._v("Powyższy kod nie jest poprawny w Graal i powinien wyglądać:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" hello "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// get the name")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// set the name")]),a._v("\nhello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Paulo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"watkowanie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watkowanie"}},[a._v("#")]),a._v(" Wątkowanie")]),a._v(" "),s("p",[a._v("GraalJS bardzo rygorystycznie podchodzi do posiadania jednego wątku w trakcie działania programu. Podczas pracy tylko z\nasynchronicznym Vert.x API nie powinno być z tym problemu, jednak inne biblioteki mogą już sprawiać problem. Aby ominąć\nte ograniczenia radzi się, aby używać "),s("code",[a._v("Worker")]),a._v(" API lub "),s("code",[a._v("EventBusa")]),a._v(".")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("GraalJS nie pozwala na wielowątkowy dostęp do tego samego kontekstu skryptowego. Jeśli wymagana jest praca na wielu\nwątkach, rozważ użycie "),s("a",{attrs:{href:"./worker"}},[a._v("Worker API")]),a._v(".")])]),a._v(" "),s("h2",{attrs:{id:"obrazy-natywne"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#obrazy-natywne"}},[a._v("#")]),a._v(" Obrazy natywne")]),a._v(" "),s("p",[a._v("Obecnie nie możesz generować obrazów natywnych przy pomocy ES4X. Ograniczenie jest spowodowane tym, że statyczna analiza\nkompilatora AOT nie weźmie pod uwagę kodu javowego wywołanego ze skryptu (więc klasy nie będą dostępne), dodatkowo\ntrzeba wziąć pod uwagę fakt, że kompilator nie wspiera jvm interop podczas runtime'u.")])])}),[],!1,null,null,null);t.default=e.exports}}]);