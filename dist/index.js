"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=v(function(C,m){
var j=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-abs/dist');function l(e,r,i,f){var u,n,s,a,t;if(e<=0)return NaN;if(e===1||i===0)return d(r[f]);for(s=f,n=d(r[s]),u=n,t=1;t<e;t++){if(s+=i,a=d(r[s]),j(a))return a;a<n?n=a:a>u&&(u=a)}return(u+n)/2}m.exports=l
});var b=v(function(D,c){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=q();function E(e,r,i){return _(e,r,i,R(e,i))}c.exports=E
});var g=v(function(F,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=b(),h=q();O(p,"ndarray",h);y.exports=p
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=g(),o,x=w(k(__dirname,"./native.js"));z(x)?o=A:o=x;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
