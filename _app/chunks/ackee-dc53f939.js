var O=Object.defineProperty,q=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))N.call(t,n)&&b(e,n,t[n]);if(v)for(var n of v(t))C.call(t,n)&&b(e,n,t[n]);return e},m=(e,t)=>q(e,B(t));import{O as d,P as H,D as T,Q as V}from"./vendor-8665e618.js";const F=typeof window!="undefined",j=function(e={}){const t={};return t.detailed=e.detailed===!0,t.ignoreLocalhost=e.ignoreLocalhost!==!1,t.ignoreOwnVisits=e.ignoreOwnVisits!==!1,t},E=function(e){return e===""||e==="localhost"||e==="127.0.0.1"||e==="::1"},J=function(e){return/bot|crawler|spider|crawling/i.test(e)},w=function(e){return e==="88888888-8888-8888-8888-888888888888"},A=function(){return document.visibilityState==="hidden"},P=function(){const e=(window.location.search.split("source=")[1]||"").split("&")[0];return e===""?void 0:e},I=function(e=!1){const t={siteLocation:window.location.href,siteReferrer:document.referrer,source:P()},n={siteLanguage:(window.navigator.language||window.navigator.userLanguage).substr(0,2),screenWidth:screen.width,screenHeight:screen.height,screenColorDepth:screen.colorDepth,deviceName:d.product,deviceManufacturer:d.manufacturer,osName:d.os.family,osVersion:d.os.version,browserName:d.name,browserVersion:d.version,browserWidth:window.outerWidth,browserHeight:window.outerHeight};return p(p({},t),e===!0?n:{})},U=function(e,t){return{query:`
			mutation createRecord($domainId: ID!, $input: CreateRecordInput!) {
				createRecord(domainId: $domainId, input: $input) {
					payload {
						id
					}
				}
			}
		`,variables:{domainId:e,input:t}}},k=function(e){return{query:`
			mutation updateRecord($recordId: ID!) {
				updateRecord(id: $recordId) {
					success
				}
			}
		`,variables:{recordId:e}}},W=function(e,t){return{query:`
			mutation createAction($eventId: ID!, $input: CreateActionInput!) {
				createAction(eventId: $eventId, input: $input) {
					payload {
						id
					}
				}
			}
		`,variables:{eventId:e,input:t}}},M=function(e,t){return{query:`
			mutation updateAction($actionId: ID!, $input: UpdateActionInput!) {
				updateAction(id: $actionId, input: $input) {
					success
				}
			}
		`,variables:{actionId:e,input:t}}},z=function(e){const t=e.substr(-1)==="/";return e+(t===!0?"":"/")+"api"},l=function(e,t,n,o){const r=new XMLHttpRequest;r.open("POST",e),r.onload=()=>{if(r.status!==200)throw new Error("Server returned with an unhandled status");let i=null;try{i=JSON.parse(r.responseText)}catch{throw new Error("Failed to parse response from server")}if(i.errors!=null)throw new Error(i.errors[0].message);if(typeof o=="function")return o(i)},r.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r.withCredentials=n.ignoreOwnVisits,r.send(JSON.stringify(t))},Q=function(){const e=document.querySelector("[data-ackee-domain-id]");if(e==null)return;const t=e.getAttribute("data-ackee-server")||"",n=e.getAttribute("data-ackee-domain-id"),o=e.getAttribute("data-ackee-opts")||"{}";R(t,JSON.parse(o)).record(n)},R=function(e,t,n){n=j(n);const o=z(t),r=()=>{},i={record:()=>({stop:r}),updateRecord:()=>({stop:r}),action:r,updateAction:r};return n.ignoreLocalhost===!0&&E(e.location.hostname)===!0?(console.warn("Ackee ignores you because you are on localhost"),i):J(e.navigator.userAgent)===!0?(console.warn("Ackee ignores you because you are a bot"),i):{record:(a,c=I(n.detailed),s)=>{let u=!1;const f=()=>{u=!0};return l(o,U(a,c),n,D=>{const y=D.data.createRecord.payload.id;if(w(y)===!0)return console.warn("Ackee ignores you because this is your own site");const S=setInterval(()=>{if(u===!0){clearInterval(S);return}A()!==!0&&l(o,k(y),n)},15e3);if(typeof s=="function")return s(y)}),{stop:f}},updateRecord:a=>{let c=!1;const s=()=>{c=!0};if(w(a)===!0)return console.warn("Ackee ignores you because this is your own site"),{stop:s};const u=setInterval(()=>{if(c===!0){clearInterval(u);return}A()!==!0&&l(o,k(a),n)},15e3);return{stop:s}},action:(a,c,s)=>{l(o,W(a,c),n,u=>{const f=u.data.createAction.payload.id;if(w(f)===!0)return console.warn("Ackee ignores you because this is your own site");if(typeof s=="function")return s(f)})},updateAction:(a,c)=>{if(w(a)===!0)return console.warn("Ackee ignores you because this is your own site");l(o,M(a,c),n)}}};F===!0&&Q();let h,g;const $=T(null);function X(){return!g||g!==window.location.pathname}function L(e,t,n){if(typeof window!="undefined"&&X()){h!==void 0&&(h(),h=void 0);const o=I(n.detailed),r=m(p({},o),{siteLocation:window.location.href,siteReferrer:document.referrer}),{stop:i}=e.record(t,r);h=i,g=window.location.pathname}}function ee(e,t,n={}){if(typeof window!="undefined"){const o=R(window,e,n);$.set(o),L(o,t,n),H(()=>{L(o,t,n)})}}function te(e,t,n){const o=V($);o!==void 0?o.action(e,{key:t,value:n}):console.error("Cannot track acke events unless you first initialize ackee with useAckee")}export{te as t,ee as u};
