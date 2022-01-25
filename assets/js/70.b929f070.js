(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{487:function(t,a,e){"use strict";e.r(a);var n=e(56),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"eclipse-vert-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-vert-x"}},[t._v("#")]),t._v(" Eclipse Vert.x")]),t._v(" "),e("p",[t._v("Όπως θα έπρεπε να είναι σαφές σε αυτό το σημείο, το Vert.x είναι το IO και το προεπιλεγμένο μοντέλο προγραμματισμού που χρησιμοποιείται από το ES4X. 56/5000\nΥπάρχουν ωστόσο μερικές ωραίες βελτιώσεις στα πρότυπα "),e("a",{attrs:{href:"https://vertx.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vert.x APIs"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"δημιουργημενα-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#δημιουργημενα-api"}},[t._v("#")]),t._v(" Δημιουργημένα API")]),t._v(" "),e("p",[t._v("Όλα τα API που δημοσιεύτηκαν στο "),e("code",[t._v("npm")]),t._v(" κάτω από τους χώρους ονομάτων "),e("code",[t._v("@vertx")]),t._v(" και "),e("code",[t._v("@reactiverse")]),t._v(" έχουν δημιουργηθεί ap;o κώδικa. Δημιουργία κώδικα είναι ένας βοηθός που επιτρέπει τη χρήση αυτών των API από χρήστες "),e("code",[t._v("JavaScript")]),t._v(" σε μορφή που είναι οικεία χωρίς να διακυβεύεται η\nαπόδοση της εφαρμογής.")]),t._v(" "),e("p",[t._v("Η αλληλεπίδραση με το JVM συμβαίνει πάνω από το αντικείμενο "),e("code",[t._v("Java")]),t._v(". Το πιο σημαντικό κομμάτι είναι να χρησιμοποιήστε μια class JVM για JS:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Εισαγάγετε την class java.lang.Math για να μπορείτε να χρησιμοποιήσετε")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ως τύπος JS")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Math "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'javalang.Math'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Τώρα μπορεί κανείς να το κάνει αυτό για όλα τα API, αλλά υπάρχουν αρκετοί περιορισμοί που προσπαθεί να αντιμετωπίσει το ES4X:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Επιρρεπής σε λάθη")]),t._v(" - Κάποιος πρέπει να γνωρίζει τα ακριβή API και τους τύπους Java για να τα χρησιμοποιήσει από το JavaScript.")]),t._v(" "),e("li",[e("strong",[t._v("Δεν υπάρχει τρόπος καθορισμού εξαρτήσεων")]),t._v(" - Εάν πρέπει να χρησιμοποιήσετε API από διαφορετικές ενότητες, η εισαγωγή class ανά class δεν μπορεί να καθορίσει τις εξαρτήσεις μεταξύ τους.")]),t._v(" "),e("li",[e("strong",[t._v("Χωρίς υποστήριξη IDE")]),t._v(" - Ο προγραμματιστής θα πρέπει να γνωρίζει το API πριν το χρησιμοποιήσει γιατί το IDE δεν θα βοηθήσει.")])]),t._v(" "),e("p",[t._v("Ο δημιουργός ES4X το επιλύει δημιουργώντας μια ενότητα "),e("code",[t._v("npm")]),t._v(" για κάθε ενότητα "),e("code",[t._v("vertx")]),t._v(" και ορισμούς τύπων για κάθε τάξη.")]),t._v(" "),e("p",[t._v("Κάθε ενότητα θα έχει τα ακόλουθα αρχεία:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("package.json")]),t._v(" - Ορίζει τις εξαρτήσεις μεταξύ των ενοτήτων")]),t._v(" "),e("li",[e("code",[t._v("index.js")]),t._v(" - commonjs API interfaces")]),t._v(" "),e("li",[e("code",[t._v("index.mjs")]),t._v(" - ESM API interfaces")]),t._v(" "),e("li",[e("code",[t._v("index.d.ts")]),t._v(" - Πλήρης ορισμοί τύπων για τα API interfaces")]),t._v(" "),e("li",[e("code",[t._v("enum.js")]),t._v(" - commonjs API enumerations")]),t._v(" "),e("li",[e("code",[t._v("enum.mjs")]),t._v(" - ESM API enumerations")]),t._v(" "),e("li",[e("code",[t._v("enum.d.ts")]),t._v(" - Πλήρης ορισμοί τύπων για το API enumerations")]),t._v(" "),e("li",[e("code",[t._v("options.js")]),t._v(" - commonjs API αντικείμενα δεδομένων.")]),t._v(" "),e("li",[e("code",[t._v("options.mjs")]),t._v(" - ESM API αντικείμενα δεδομένων.")]),t._v(" "),e("li",[e("code",[t._v("options.d.ts")]),t._v(" - Πλήρης ορισμοί τύπων για τα API αντικείμενα δεδομένων.")])]),t._v(" "),e("p",[t._v("Όλα τα αρχεία "),e("code",[t._v("index")]),t._v(" θα απλοποιήσουν την εισαγωγή JVM classes αντικαθιστώντας, για παράδειγμα:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// χωρίς ES4X")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Java"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'io.vertx.ext.web.Router'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// me")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Router "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vertx/web'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Αυτή η μικρή αλλαγή θα κάνει τους IDE να βοηθήσουν στην ανάπτυξη και στους διαχειριστές πακέτων να κατεβάσουν εξαρτήσεις ανάλογα με τις ανάγκες τους.\nΤέλος, όλα τα αρχεία "),e("code",[t._v(".d.ts")]),t._v(" θα υποδείξουν το IDE σχετικά με τους τύπους και θα υποστηρίξουν την ολοκλήρωση κώδικα.")]),t._v(" "),e("h2",{attrs:{id:"promise-future"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-future"}},[t._v("#")]),t._v(" Promise/Future")]),t._v(" "),e("p",[t._v("Vert.x έχει 2 τύπους:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("io.vertx.core.Future")])]),t._v(" "),e("li",[e("code",[t._v("io.vertx.core.Promise")])])]),t._v(" "),e("p",[t._v("Παραδόξως, ένα Vert.x "),e("code",[t._v("Promise")]),t._v(" δεν είναι το ίδιο με ένα JavaScript "),e("code",[t._v("Future")]),t._v(". Ένα Vert.x "),e("code",[t._v("Promise")]),t._v(" είναι η εγγράψιμη πλευρά του\nVert.x "),e("code",[t._v("Future")]),t._v(". Σε όρους JavaScript:")]),t._v(" "),e("ul",[e("li",[t._v("Vert.x "),e("code",[t._v("Future")]),t._v(" === JavaScript "),e("code",[t._v("Σαν υπόσχεση (Thenable)")])]),t._v(" "),e("li",[t._v("Vert.x "),e("code",[t._v("Promise")]),t._v(" === JavaScript "),e("code",[t._v("Λειτουργία Executor")])])]),t._v(" "),e("h2",{attrs:{id:"async-await"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[t._v("#")]),t._v(" async/await")]),t._v(" "),e("p",[e("code",[t._v("async/await")]),t._v(" υποστηρίζεται χωρίς καμία ανάγκη για compilation step από το "),e("code",[t._v("GraalVM")]),t._v(". ES4X προσθέτει ένα επιπλέον χαρακτηριστικό στον Vert.x\n"),e("code",[t._v("Future")]),t._v(" τύπο. API που επιστρέφουν Vert.x "),e("code",[t._v("Future")]),t._v(" μπορούν να χρησιμοποιηθούν ως "),e("code",[t._v("Thenable")]),t._v(", αυτό σημαίνει ότι:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// χρησιμοποιώντας το Java API")]),t._v("\nvertx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHttpServer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onSuccess")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("server")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server ready!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFailure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server startup failed!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Μπορεί να χρησιμοποιηθεί ως "),e("code",[t._v("Thenable")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" server "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" vertx\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHttpServer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server Ready!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Server startup failed!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v(":::υπόδειξη\n"),e("code",[t._v("async/await")]),t._v(" λειτουργεί ακόμη και με loops, γεγονός που καθιστά την εργασία με ασύγχρονο κώδικα αρκετά εύκολη, ακόμη και ανάμειξη κώδικα JS και Java.\n:::")]),t._v(" "),e("h2",{attrs:{id:"μετατροπες-τυπων"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#μετατροπες-τυπων"}},[t._v("#")]),t._v(" Μετατροπές Τύπων")]),t._v(" "),e("p",[t._v("Vert.x κωδικοποιείται σε "),e("code",[t._v("Java")]),t._v(", ωστόσο σε "),e("code",[t._v("JavaScript")]),t._v(" δεν χρειάζεται να ανησυχούμε για τους τύπους όσο στην "),e("code",[t._v("Java")]),t._v(". Το ES4X\nεκτελεί ορισμένες αυτόματες μετατροπές εκτός πλαισίου:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Java")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("TypeScript")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("void")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("void")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("byte")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("short")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("long")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("float")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("double")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("char")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("boolean[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("boolean[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("byte[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("short[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("int[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("long[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("float[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("double[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("char[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Void")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("void")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("any")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Double")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Float")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Integer")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Long")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Short")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Char")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.String")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.CharSequence")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Boolean[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("boolean[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Double[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Float[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Integer[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Long[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Short[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("number[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Char[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.String[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.CharSequence[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("string[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Object[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("any[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Iterable")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("any[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BiConsumer")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, U extends any>(arg0: T, arg1: U) => void")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BiFunction")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, U extends any, R extends any>(arg0: T, arg1: U) => R")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BinaryOperator")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T, arg1: T) => T")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.BiPredicate")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, U extends any>(arg0: T, arg1: U) => boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Consumer")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T) => void")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Function")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any, R extends any>(arg0: T) => R")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Predicate")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T) => boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.Supplier")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>() => T")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.function.UnaryOperator")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T extends any>(arg0: T) => T")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.Instant")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.LocalDate")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.LocalDateTime")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.time.ZonedDateTime")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Date")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.lang.Iterable<T>")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T>[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.Collection<T>")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T>[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.List<T>")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("<T>[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("java.util.Map<K, V>")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("{ [key: <K>]: <V> }")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);