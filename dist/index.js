!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.cookieSolution=o():e.cookieSolution=o()}(this,(()=>(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e),Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"CookieConsent",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(exports,"CookiePreferences",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"CookieProvider",{enumerable:!0,get:function(){return n.CookieProvider}}),Object.defineProperty(exports,"DisplayCookies",{enumerable:!0,get:function(){return r.default}});var o=i(require("./components/CookieConsent")),t=i(require("./components/CookiePreferences")),r=i(require("./components/DisplayCookies")),n=require("./contexts/CookieContext");function i(e){return e&&e.__esModule?e:{default:e}}return e})()));