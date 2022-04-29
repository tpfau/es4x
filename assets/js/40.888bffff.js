(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{470:function(e,a,t){"use strict";t.r(a);var s=t(62),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"registro"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registro"}},[e._v("#")]),e._v(" Registro")]),e._v(" "),t("p",[e._v("El registro es una caracteristica comun en todas las aplicaciones. ES4X no implementa un registrador, en su lugar simplemente usa\nel registrador de JDK, tambien conocido como "),t("em",[e._v("java util logging")]),e._v(" o "),t("em",[e._v("JUL")]),e._v(". Hasta el objecto "),t("code",[e._v("console")]),e._v(" esta enlazado a esto asi que puedes\ndeshabilitar el registro de la consola a un nivel especifico del tiempo de ejecucion (runtime) simplemente utilizando la configuracion.")]),e._v(" "),t("p",[e._v("Para personalizar el registro, crea un archivo "),t("code",[e._v("logging.properties")]),e._v(" con la configuracion que tu quieras.\nLa configuracion por defecto es:")]),e._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("handlers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("java.util.logging.ConsoleHandler")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("java.util.logging.ConsoleHandler.formatter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("io.reactiverse.es4x.jul.ANSIFormatter")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("java.util.logging.ConsoleHandler.level")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("FINEST")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v(".level")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("INFO")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("io.reactiverse.level")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("INFO")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("io.vertx.level")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("INFO")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("com.hazelcast.level")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("INFO")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("io.netty.util.internal.PlatformDependent.level")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("SEVERE")]),e._v("\n")])])]),t("p",[e._v("Puede ver que hay un formateador personalizado, esto es para ofrecerte un registrador coloreado "),t("code",[e._v("ANSI")]),e._v(". Si el formateador esta\ndeshabilitado todo los registros seran en texto simple sin los codigos "),t("code",[e._v("ANSI")]),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Para registrar solo los avisos y los error en la ejecucion, incluyendo del objeto "),t("code",[e._v("console")]),e._v(", simplemente aumenta el nivel del\nhandler de la consola.")]),e._v(" "),t("p",[e._v("Pueden include enviar los registros a otras localizaciones añadiendo mas handlers.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);