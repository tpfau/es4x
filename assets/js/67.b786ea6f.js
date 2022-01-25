(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{484:function(t,s,a){"use strict";a.r(s);var n=a(56),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jars"}},[t._v("#")]),t._v(" JARs")]),t._v(" "),a("p",[t._v("Το ES4Xτρέχει σε ένα JVM, και αρα προσθέτοντας ή χρησιμοποιώντας "),a("code",[t._v("jar")]),t._v("s από το Maven Central είναι απλό. Αυτή η δυνατότητα είναι χρήσιμη, για παράδειγμα\nόταν πρέπει να προσθέσουμε βιβλιοθήκες χρόνου εκτέλεσης που δεν έχουν "),a("code",[t._v("npm")]),t._v(" αντίστοιχο, ή είναι απλώς βιβλιοθήκες υποστήριξης. Για παράδειγμα,\nμπορούμε σε ορισμένες περιπτώσεις να βελτιώσουμε την απόδοση IO του "),a("code",[t._v("vert.x")]),t._v(" προσθέτοντας\n"),a("a",{attrs:{href:"https://netty.io/wiki/native-transports.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("native-transports"),a("OutboundLink")],1),t._v(" στον χρόνος εκτέλεσης.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"benchmark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.12.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"private"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@vertx/core"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.9.2"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mvnDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.netty:netty-transport-native-epoll:jar:linux-x86_64:4.1.49.Final"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Προσθέτοντας "),a("code",[t._v("mvnDependencies")]),t._v(" arrayστο package json, αυτές οι εξαρτήσεις προστίθενται στον χρόνο εκτέλεσης της εφαρμογής. Η μορφή είναι η συνήθης για το maven:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("group:artifact[:type][:classifier]:version\n")])])]),a("ul",[a("li",[a("strong",[t._v("group")]),t._v(" τον οργανισμό που διαθέτει την ενότητα")]),t._v(" "),a("li",[a("strong",[t._v("artifact")]),t._v(" η ενότητα αυτή καθεαυτή")]),t._v(" "),a("li",[a("strong",[t._v("type")]),t._v(" προαιρετικός τύπος αρχείου")]),t._v(" "),a("li",[a("strong",[t._v("classifier")]),t._v(" προαιρετικός ταξινομητής, αυτό επιτρέπει την ύπαρξη ξεχωριστών ενοτήτων για συγκεκριμένους ρόλους")]),t._v(" "),a("li",[a("strong",[t._v("version")]),t._v(" η έκδοση της ενότητας")])])])}),[],!1,null,null,null);s.default=r.exports}}]);