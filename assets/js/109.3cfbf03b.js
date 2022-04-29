(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{547:function(t,a,e){"use strict";e.r(a);var s=e(62),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"логирование"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#логирование"}},[t._v("#")]),t._v(" Логирование")]),t._v(" "),e("p",[t._v("Логирование широко распространено во всех приложениях. ES4X не реализует свой логгер, а использует логгер из JDK,\nтакже известный как "),e("em",[t._v("java util logging")]),t._v(" или "),e("em",[t._v("JUL")]),t._v(". Даже объект "),e("code",[t._v("console")]),t._v(" связан с ним, так что вы можете отключить\nлогирование console на нужном уровне во время выполнения приложения с помощью настроек.")]),t._v(" "),e("p",[t._v("Для того, чтобы определить свои настройки логирования, создайте файл "),e("code",[t._v("logging.properties")]),t._v(" с вашей конфигурацией.\nСтандартная конфигурация:")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("handlers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("java.util.logging.ConsoleHandler")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("java.util.logging.ConsoleHandler.formatter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("io.reactiverse.es4x.jul.ANSIFormatter")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("java.util.logging.ConsoleHandler.level")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("FINEST")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v(".level")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("INFO")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("io.reactiverse.level")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("INFO")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("io.vertx.level")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("INFO")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("com.hazelcast.level")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("INFO")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("io.netty.util.internal.PlatformDependent.level")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("SEVERE")]),t._v("\n")])])]),e("p",[t._v("Здесь вы можете видеть подготовленный заранее форматер, который предлагает логирование с цветами "),e("code",[t._v("ANSI")]),t._v(". При выключении\nформатера все логи будут представлены только текстом, без кодов "),e("code",[t._v("ANSI")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Чтобы логировать только замечания и ошибки во время выполнения приложения, в том числе из объекта "),e("code",[t._v("console")]),t._v(", просто\nподнимите ConsoleHandler.level")]),t._v(" "),e("p",[t._v("Вы также можете отправить логи куда-либо еще, добавив больше обработчиков.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);