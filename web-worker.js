"use strict";!function(){importScripts("htmlminifier.min.js");var e=require("html-minifier").minify;addEventListener("message",function(i){if(!i.data.pong){var n=!1;try{var s=e(i.data.input,Object.assign({},i.data.config,{log:function(e){if(console.log(e),e instanceof Error){n=!0;var i="number"==typeof e.line?"Line "+e.line+":"+e.col+"\n  ":"";postMessage({error:i+e.message})}}}));n||postMessage(s)}catch(e){var r="number"==typeof e.line?"Line "+e.line+":"+e.col+"\n  ":"";postMessage({error:r+e.message})}}}),postMessage({ping:!0})}();