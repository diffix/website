import{S as cs,i as ms,s as ps,e as c,t as h,c as m,a as p,h as g,d as a,b as i,g as v,P as s,_ as Oe,k as b,m as x,j as I,v as Js,w as L,N as Gt,R as Ys,x as A,O as Nt,Q as ze,y,q as V,o as M,B as O,F as Xs}from"../../chunks/vendor-cf06609c.js";import{L as Y}from"../../chunks/Link-e657120f.js";import{T as qt,t as er,l as tr}from"../../chunks/Trans-d72ba112.js";function sr(d){let e,t,r;return{c(){e=c("span"),t=c("span"),r=h("Open Diffix"),this.h()},l(n){e=m(n,"SPAN",{class:!0});var f=p(e);t=m(f,"SPAN",{class:!0});var l=p(t);r=g(l,"Open Diffix"),l.forEach(a),f.forEach(a),this.h()},h(){i(t,"class","text-transparent inline-block bg-gradient-to-r bg-clip-text from-shamrock-500 to-royalblue-500"),i(e,"class","font-bold text-white")},m(n,f){v(n,e,f),s(e,t),s(t,r)},p:Oe,i:Oe,o:Oe,d(n){n&&a(e)}}}class $s extends cs{constructor(e){super();ms(this,e,null,sr,ps,{})}}function Zs(d){let e,t,r,n,f,l,$,D,o,_;return{c(){e=c("pre"),t=c("br"),r=h(`
   count
  -------
  `),n=h(d[2]),f=h(`
  (1 row)`),l=b(),$=c("div"),D=h("# "),o=c("span"),_=h("_"),this.h()},l(E){e=m(E,"PRE",{class:!0});var S=p(e);t=m(S,"BR",{class:!0}),r=g(S,`
   count
  -------
  `),n=g(S,d[2]),f=g(S,`
  (1 row)`),S.forEach(a),l=x(E),$=m(E,"DIV",{class:!0});var q=p($);D=g(q,"# "),o=m(q,"SPAN",{class:!0});var Q=p(o);_=g(Q,"_"),Q.forEach(a),q.forEach(a),this.h()},h(){i(t,"class","h-1"),i(e,"class","-mt-8"),i(o,"class","blink svelte-1r7cld8"),i($,"class","mt-4")},m(E,S){v(E,e,S),s(e,t),s(e,r),s(e,n),s(e,f),v(E,l,S),v(E,$,S),s($,D),s($,o),s(o,_)},p:Oe,d(E){E&&a(e),E&&a(l),E&&a($)}}}function rr(d){let e,t,r,n,f,l,$,D,o,_,E,S,q,Q,k=d[0]===""&&Zs(d);return{c(){e=c("div"),t=c("div"),r=c("div"),n=c("div"),f=b(),l=c("div"),$=b(),D=c("div"),o=b(),_=c("div"),E=c("pre"),S=h(`$ psql

# SELECT `),q=h(d[1]),Q=b(),k&&k.c(),this.h()},l(z){e=m(z,"DIV",{class:!0});var F=p(e);t=m(F,"DIV",{class:!0});var ee=p(t);r=m(ee,"DIV",{class:!0});var j=p(r);n=m(j,"DIV",{class:!0}),p(n).forEach(a),f=x(j),l=m(j,"DIV",{class:!0}),p(l).forEach(a),$=x(j),D=m(j,"DIV",{class:!0}),p(D).forEach(a),j.forEach(a),o=x(ee),_=m(ee,"DIV",{class:!0});var C=p(_);E=m(C,"PRE",{});var te=p(E);S=g(te,`$ psql

# SELECT `),q=g(te,d[1]),te.forEach(a),Q=x(C),k&&k.l(C),C.forEach(a),ee.forEach(a),F.forEach(a),this.h()},h(){i(n,"class","w-3 h-3 bg-red-500 rounded-full hover:bg-red-400"),i(l,"class","w-3 h-3 ml-1 bg-yellow-500 rounded-full hover:bg-yellow-400"),i(D,"class","w-3 h-3 ml-1 bg-green-500 rounded-full hover:bg-green-400"),i(r,"class","flex px-2 pt-2 pb-2 transition-colors border-b border-gray-700"),i(_,"class","h-full p-2 font-mono text-gray-300 bg-gray-800"),i(t,"class","overflow-hidden text-white bg-gray-900 rounded-lg shadow-lg h-96"),i(e,"class","mx-1 mt-8 text-base lg:mt-0 lg:mx-0 lg:w-3/5")},m(z,F){v(z,e,F),s(e,t),s(t,r),s(r,n),s(r,f),s(r,l),s(r,$),s(r,D),s(t,o),s(t,_),s(_,E),s(E,S),s(E,q),s(_,Q),k&&k.m(_,null)},p(z,[F]){F&2&&I(q,z[1]),z[0]===""?k?k.p(z,F):(k=Zs(z),k.c(),k.m(_,null)):k&&(k.d(1),k=null)},i:Oe,o:Oe,d(z){z&&a(e),k&&k.d()}}}function lr(){return 25+100*Math.floor(Math.random()*2)}function ar(d,e,t){const r=[{query:`count(dogs)
  FROM dalmatians`,answer:"   103"},{query:`count(samurai)
  FROM kurosawa_movies`,answer:"     6"},{query:`count(soldiers)
  FROM movie_dirty_dozen`,answer:"    11"},{query:`count(citizens)
  FROM citizen_kane`,answer:"  null"}];let{query:n,answer:f}=r[Math.floor(Math.random()*r.length)],l="";function $(){n.length>0&&(t(1,l=l+n.substr(0,1)),n.length>1?t(0,n=n.substr(1,n.length)):(t(1,l=l+";"),t(0,n="")),setTimeout($,lr()))}return Js(()=>setTimeout($,100)),[n,l,f]}class nr extends cs{constructor(e){super();ms(this,e,ar,rr,ps,{})}}function ir(d){let e;return{c(){e=h("Diffix Dashboards")},l(t){e=g(t,"Diffix Dashboards")},m(t,r){v(t,e,r)},d(t){t&&a(e)}}}function or(d){let e;return{c(){e=h("Learn more")},l(t){e=g(t,"Learn more")},m(t,r){v(t,e,r)},d(t){t&&a(e)}}}function fr(d){let e,t,r,n,f,l,$,D;return n=new Y({props:{href:"/en/download/",$$slots:{default:[ir]},$$scope:{ctx:d}}}),l=new Y({props:{href:"/en/blog/",$$slots:{default:[or]},$$scope:{ctx:d}}}),{c(){e=c("span"),t=h("NEW!"),r=b(),L(n.$$.fragment),f=h(` released!
        `),L(l.$$.fragment),$=h("."),this.h()},l(o){e=m(o,"SPAN",{class:!0});var _=p(e);t=g(_,"NEW!"),_.forEach(a),r=x(o),A(n.$$.fragment,o),f=g(o,` released!
        `),A(l.$$.fragment,o),$=g(o,"."),this.h()},h(){i(e,"class","text-red-500")},m(o,_){v(o,e,_),s(e,t),v(o,r,_),y(n,o,_),v(o,f,_),y(l,o,_),v(o,$,_),D=!0},p(o,_){const E={};_&4&&(E.$$scope={dirty:_,ctx:o}),n.$set(E);const S={};_&4&&(S.$$scope={dirty:_,ctx:o}),l.$set(S)},i(o){D||(V(n.$$.fragment,o),V(l.$$.fragment,o),D=!0)},o(o){M(n.$$.fragment,o),M(l.$$.fragment,o),D=!1},d(o){o&&a(e),o&&a(r),O(n,o),o&&a(f),O(l,o),o&&a($)}}}function ur(d){let e;return{c(){e=h("Diffix Dashboards")},l(t){e=g(t,"Diffix Dashboards")},m(t,r){v(t,e,r)},d(t){t&&a(e)}}}function dr(d){let e;return{c(){e=h("Erfahren Sie mehr")},l(t){e=g(t,"Erfahren Sie mehr")},m(t,r){v(t,e,r)},d(t){t&&a(e)}}}function cr(d){let e,t,r,n,f,l,$,D;return n=new Y({props:{href:"/en/download/",$$slots:{default:[ur]},$$scope:{ctx:d}}}),l=new Y({props:{href:"/de/blog/",$$slots:{default:[dr]},$$scope:{ctx:d}}}),{c(){e=c("span"),t=h("NEU!"),r=b(),L(n.$$.fragment),f=h(` ver\xF6ffentlicht!
        `),L(l.$$.fragment),$=h("."),this.h()},l(o){e=m(o,"SPAN",{class:!0});var _=p(e);t=g(_,"NEU!"),_.forEach(a),r=x(o),A(n.$$.fragment,o),f=g(o,` ver\xF6ffentlicht!
        `),A(l.$$.fragment,o),$=g(o,"."),this.h()},h(){i(e,"class","text-red-500")},m(o,_){v(o,e,_),s(e,t),v(o,r,_),y(n,o,_),v(o,f,_),y(l,o,_),v(o,$,_),D=!0},p(o,_){const E={};_&4&&(E.$$scope={dirty:_,ctx:o}),n.$set(E);const S={};_&4&&(S.$$scope={dirty:_,ctx:o}),l.$set(S)},i(o){D||(V(n.$$.fragment,o),V(l.$$.fragment,o),D=!0)},o(o){M(n.$$.fragment,o),M(l.$$.fragment,o),D=!1},d(o){o&&a(e),o&&a(r),O(n,o),o&&a(f),O(l,o),o&&a($)}}}function mr(d){let e;return{c(){e=h("Download Diffix Dashboards")},l(t){e=g(t,"Download Diffix Dashboards")},m(t,r){v(t,e,r)},d(t){t&&a(e)}}}function pr(d){let e,t,r;return e=new Y({props:{href:"/en/download/",$$slots:{default:[mr]},$$scope:{ctx:d}}}),{c(){L(e.$$.fragment),t=h(".")},l(n){A(e.$$.fragment,n),t=g(n,".")},m(n,f){y(e,n,f),v(n,t,f),r=!0},p(n,f){const l={};f&4&&(l.$$scope={dirty:f,ctx:n}),e.$set(l)},i(n){r||(V(e.$$.fragment,n),r=!0)},o(n){M(e.$$.fragment,n),r=!1},d(n){O(e,n),n&&a(t)}}}function $r(d){let e;return{c(){e=h("Diffix Dashboards herunterladen")},l(t){e=g(t,"Diffix Dashboards herunterladen")},m(t,r){v(t,e,r)},d(t){t&&a(e)}}}function hr(d){let e,t,r;return e=new Y({props:{href:"/de/download/",$$slots:{default:[$r]},$$scope:{ctx:d}}}),{c(){L(e.$$.fragment),t=h(".")},l(n){A(e.$$.fragment,n),t=g(n,".")},m(n,f){y(e,n,f),v(n,t,f),r=!0},p(n,f){const l={};f&4&&(l.$$scope={dirty:f,ctx:n}),e.$set(l)},i(n){r||(V(e.$$.fragment,n),r=!0)},o(n){M(e.$$.fragment,n),r=!1},d(n){O(e,n),n&&a(t)}}}function gr(d){let e;return{c(){e=h("Download here")},l(t){e=g(t,"Download here")},m(t,r){v(t,e,r)},d(t){t&&a(e)}}}function _r(d){let e;return{c(){e=h("hosted demo")},l(t){e=g(t,"hosted demo")},m(t,r){v(t,e,r)},d(t){t&&a(e)}}}function vr(d){let e,t,r,n,f;return e=new Y({props:{href:"/en/download/",$$slots:{default:[gr]},$$scope:{ctx:d}}}),r=new Y({props:{href:"/en/demo/",$$slots:{default:[_r]},$$scope:{ctx:d}}}),{c(){L(e.$$.fragment),t=h(" or try the "),L(r.$$.fragment),n=h(".")},l(l){A(e.$$.fragment,l),t=g(l," or try the "),A(r.$$.fragment,l),n=g(l,".")},m(l,$){y(e,l,$),v(l,t,$),y(r,l,$),v(l,n,$),f=!0},p(l,$){const D={};$&4&&(D.$$scope={dirty:$,ctx:l}),e.$set(D);const o={};$&4&&(o.$$scope={dirty:$,ctx:l}),r.$set(o)},i(l){f||(V(e.$$.fragment,l),V(r.$$.fragment,l),f=!0)},o(l){M(e.$$.fragment,l),M(r.$$.fragment,l),f=!1},d(l){O(e,l),l&&a(t),O(r,l),l&&a(n)}}}function wr(d){let e;return{c(){e=h("Herunterladen")},l(t){e=g(t,"Herunterladen")},m(t,r){v(t,e,r)},d(t){t&&a(e)}}}function br(d){let e;return{c(){e=h("Demo testen")},l(t){e=g(t,"Demo testen")},m(t,r){v(t,e,r)},d(t){t&&a(e)}}}function xr(d){let e,t,r,n,f;return e=new Y({props:{href:"/de/download/",$$slots:{default:[wr]},$$scope:{ctx:d}}}),r=new Y({props:{href:"/de/demo/",$$slots:{default:[br]},$$scope:{ctx:d}}}),{c(){L(e.$$.fragment),t=h(" oder "),L(r.$$.fragment),n=h(".")},l(l){A(e.$$.fragment,l),t=g(l," oder "),A(r.$$.fragment,l),n=g(l,".")},m(l,$){y(e,l,$),v(l,t,$),y(r,l,$),v(l,n,$),f=!0},p(l,$){const D={};$&4&&(D.$$scope={dirty:$,ctx:l}),e.$set(D);const o={};$&4&&(o.$$scope={dirty:$,ctx:l}),r.$set(o)},i(l){f||(V(e.$$.fragment,l),V(r.$$.fragment,l),f=!0)},o(l){M(e.$$.fragment,l),M(r.$$.fragment,l),f=!1},d(l){O(e,l),l&&a(t),O(r,l),l&&a(n)}}}function Dr(d){let e,t,r,n;return r=new $s({}),{c(){e=c("span"),t=h("Stay informed about the development of "),L(r.$$.fragment)},l(f){e=m(f,"SPAN",{});var l=p(e);t=g(l,"Stay informed about the development of "),A(r.$$.fragment,l),l.forEach(a)},m(f,l){v(f,e,l),s(e,t),y(r,e,null),n=!0},i(f){n||(V(r.$$.fragment,f),n=!0)},o(f){M(r.$$.fragment,f),n=!1},d(f){f&&a(e),O(r)}}}function Er(d){let e,t,r,n;return r=new $s({}),{c(){e=c("span"),t=h("Bleiben Sie auf dem Laufenden "),L(r.$$.fragment)},l(f){e=m(f,"SPAN",{});var l=p(e);t=g(l,"Bleiben Sie auf dem Laufenden "),A(r.$$.fragment,l),l.forEach(a)},m(f,l){v(f,e,l),s(e,t),y(r,e,null),n=!0},i(f){n||(V(r.$$.fragment,f),n=!0)},o(f){M(r.$$.fragment,f),n=!1},d(f){f&&a(e),O(r)}}}function kr(d){let e,t,r,n,f,l,$,D=d[0]({en:"Strong Anonymization for Structured Data. Open. Free.",de:"Starke Anonymisierung f\xFCr strukturierte Daten. Offen. Frei."})+"",o,_,E,S,q,Q,k,z,F=d[0]({en:"Diffix Dashboards",de:"Diffix Dashboards"})+"",ee,j,C,te=d[0]({en:"Desktop app for unprecedented ease-of-use.",de:"Desktopanwendung mit hoher Benutzerfreundlichkeit."})+"",dt,Ft,ve,Qe=d[0]({en:"Bundled with Metabase data visualization.",de:"Geb\xFCndelt mit Metabase Datenvisualisierung."})+"",ct,Bt,B,Ge,Ne=d[0]({en:"Import CSV table, export anonymized data",de:"CSV-Tabelle importieren, anonymisierte Daten exportieren"})+"",mt,Tt,qe,Fe=d[0]({en:"UX-based or SQL-based query build",de:"UX-basierter oder SQL-basierter Abfrageaufbau"})+"",pt,Ct,Be,Te=d[0]({en:"Visual analytics with Metabase",de:"Visuelle Analyse mit Metabase"})+"",$t,Rt,Ce,Re=d[0]({en:"Compare anonymized and original data for quality",de:"Vergleichen Sie anonymisierte und Originaldaten auf Qualit\xE4t"})+"",ht,jt,we,ae,Ht,be,xe,De,hs,gt,se,T,Ee,je=d[0]({en:"Diffix for PostgreSQL",de:"Diffix f\xFCr PostgreSQL"})+"",_t,Ut,ke,He=d[0]({en:"Diffix as a PostgreSQL extension.",de:"Diffix als PostgreSQL-Erweiterung."})+"",vt,Wt,G,Ue,We=d[0]({en:'"GDPR Strength" anonymization on a standard PostgreSQL API',de:"GDPR(DSGVO)-konforme Anonymisierung auf einer Standard PostgreSQL-API"})+"",wt,Kt,Ke,Xe=d[0]({en:"Easily build privacy-preserving web backends, dashboards, and apps",de:"Einfaches Erstellen von datenschutzfreundlichen Web-Backends, Dashboards und Anwendungen"})+"",bt,Xt,Ze,Je=d[0]({en:"No anonymization expertise needed",de:"Keine Anonymisierungskenntnisse erforderlich"})+"",xt,Zt,Ye,et=d[0]({en:"Easy installation and configuration",de:"Einfache Installation und Konfiguration"})+"",Dt,Jt,tt,st=d[0]({en:"Scale and speed of PostgreSQL",de:"Skalierung und Geschwindigkeit von PostgreSQL"})+"",Et,Yt,Se,ne,es,ce,kt,R,ie,ts,H,U,rt,ss,lt=d[0]({en:"Follow @OpenDiffix on Twitter",de:"@OpenDiffix auf Twitter folgen"})+"",St,rs,W,K,oe,ls,at=d[0]({en:"Sign up to our newsletter",de:"Melden Sie sich f\xFCr unseren Newsletter an"})+"",Pt,It,Lt,re,Pe,nt=d[0]({en:"Open Diffix is supported by",de:"Open Diffix wird unterst\xFCtzt durch"})+"",At,as,Ie,N,it,fe,me,gs,ns,Le,is,os,Ae,pe,_s,fs,$e,he,vs,us,ye,ge,ws,ds,Ve,_e,bs,P;return document.title=e=`
    `+d[0]({en:"Open Diffix - Free and Open Anonymization",de:"Open Diffix - Freie und offene Anonymisierung"})+`
  `,f=new $s({}),S=new qt({props:{$$slots:{de:[cr],en:[fr]},$$scope:{ctx:d}}}),ae=new qt({props:{$$slots:{de:[hr],en:[pr]},$$scope:{ctx:d}}}),ne=new qt({props:{$$slots:{de:[xr],en:[vr]},$$scope:{ctx:d}}}),ce=new nr({}),ie=new qt({props:{$$slots:{de:[Er],en:[Dr]},$$scope:{ctx:d}}}),{c(){t=b(),r=c("header"),n=c("h1"),L(f.$$.fragment),l=b(),$=c("h2"),o=h(D),_=b(),E=c("h3"),L(S.$$.fragment),q=b(),Q=c("div"),k=c("div"),z=c("p"),ee=h(F),j=b(),C=c("p"),dt=h(te),Ft=b(),ve=c("p"),ct=h(Qe),Bt=b(),B=c("ul"),Ge=c("li"),mt=h(Ne),Tt=b(),qe=c("li"),pt=h(Fe),Ct=b(),Be=c("li"),$t=h(Te),Rt=b(),Ce=c("li"),ht=h(Re),jt=b(),we=c("p"),L(ae.$$.fragment),Ht=b(),be=c("div"),xe=c("div"),De=c("img"),gt=b(),se=c("div"),T=c("div"),Ee=c("p"),_t=h(je),Ut=b(),ke=c("p"),vt=h(He),Wt=b(),G=c("ul"),Ue=c("li"),wt=h(We),Kt=b(),Ke=c("li"),bt=h(Xe),Xt=b(),Ze=c("li"),xt=h(Je),Zt=b(),Ye=c("li"),Dt=h(et),Jt=b(),tt=c("li"),Et=h(st),Yt=b(),Se=c("p"),L(ne.$$.fragment),es=b(),L(ce.$$.fragment),kt=b(),R=c("div"),L(ie.$$.fragment),ts=b(),H=c("a"),U=Gt("svg"),rt=Gt("path"),ss=b(),St=h(lt),rs=b(),W=c("a"),K=Gt("svg"),oe=Gt("path"),ls=b(),Pt=h(at),Lt=b(),re=c("div"),Pe=c("h2"),At=h(nt),as=b(),Ie=c("div"),N=c("div"),it=c("div"),fe=c("a"),me=c("img"),ns=b(),Le=c("span"),is=h("Max-Planck-Gesellschaft"),os=b(),Ae=c("a"),pe=c("img"),fs=b(),$e=c("a"),he=c("img"),us=b(),ye=c("a"),ge=c("img"),ds=b(),Ve=c("a"),_e=c("img"),this.h()},l(u){Ys('[data-svelte="svelte-1maszqo"]',document.head).forEach(a),t=x(u),r=m(u,"HEADER",{class:!0});var le=p(r);n=m(le,"H1",{class:!0});var ot=p(n);A(f.$$.fragment,ot),ot.forEach(a),l=x(le),$=m(le,"H2",{class:!0});var ft=p($);o=g(ft,D),ft.forEach(a),_=x(le),E=m(le,"H3",{class:!0});var ut=p(E);A(S.$$.fragment,ut),ut.forEach(a),le.forEach(a),q=x(u),Q=m(u,"DIV",{class:!0});var yt=p(Q);k=m(yt,"DIV",{class:!0});var X=p(k);z=m(X,"P",{class:!0});var xs=p(z);ee=g(xs,F),xs.forEach(a),j=x(X),C=m(X,"P",{class:!0});var Ds=p(C);dt=g(Ds,te),Ds.forEach(a),Ft=x(X),ve=m(X,"P",{class:!0});var Es=p(ve);ct=g(Es,Qe),Es.forEach(a),Bt=x(X),B=m(X,"UL",{class:!0});var ue=p(B);Ge=m(ue,"LI",{});var ks=p(Ge);mt=g(ks,Ne),ks.forEach(a),Tt=x(ue),qe=m(ue,"LI",{});var Ss=p(qe);pt=g(Ss,Fe),Ss.forEach(a),Ct=x(ue),Be=m(ue,"LI",{});var Ps=p(Be);$t=g(Ps,Te),Ps.forEach(a),Rt=x(ue),Ce=m(ue,"LI",{});var Is=p(Ce);ht=g(Is,Re),Is.forEach(a),ue.forEach(a),jt=x(X),we=m(X,"P",{class:!0});var Ls=p(we);A(ae.$$.fragment,Ls),Ls.forEach(a),X.forEach(a),Ht=x(yt),be=m(yt,"DIV",{class:!0});var As=p(be);xe=m(As,"DIV",{class:!0});var ys=p(xe);De=m(ys,"IMG",{src:!0,alt:!0}),ys.forEach(a),As.forEach(a),yt.forEach(a),gt=x(u),se=m(u,"DIV",{class:!0});var Vt=p(se);T=m(Vt,"DIV",{class:!0});var de=p(T);Ee=m(de,"P",{class:!0});var Vs=p(Ee);_t=g(Vs,je),Vs.forEach(a),Ut=x(de),ke=m(de,"P",{class:!0});var Ms=p(ke);vt=g(Ms,He),Ms.forEach(a),Wt=x(de),G=m(de,"UL",{class:!0});var Z=p(G);Ue=m(Z,"LI",{});var Os=p(Ue);wt=g(Os,We),Os.forEach(a),Kt=x(Z),Ke=m(Z,"LI",{});var zs=p(Ke);bt=g(zs,Xe),zs.forEach(a),Xt=x(Z),Ze=m(Z,"LI",{});var Qs=p(Ze);xt=g(Qs,Je),Qs.forEach(a),Zt=x(Z),Ye=m(Z,"LI",{});var Gs=p(Ye);Dt=g(Gs,et),Gs.forEach(a),Jt=x(Z),tt=m(Z,"LI",{});var Ns=p(tt);Et=g(Ns,st),Ns.forEach(a),Z.forEach(a),Yt=x(de),Se=m(de,"P",{class:!0});var qs=p(Se);A(ne.$$.fragment,qs),qs.forEach(a),de.forEach(a),es=x(Vt),A(ce.$$.fragment,Vt),Vt.forEach(a),kt=x(u),R=m(u,"DIV",{class:!0});var Me=p(R);A(ie.$$.fragment,Me),ts=x(Me),H=m(Me,"A",{href:!0,target:!0,class:!0});var Mt=p(H);U=Nt(Mt,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var Fs=p(U);rt=Nt(Fs,"path",{d:!0}),p(rt).forEach(a),Fs.forEach(a),ss=x(Mt),St=g(Mt,lt),Mt.forEach(a),rs=x(Me),W=m(Me,"A",{href:!0,class:!0});var Ot=p(W);K=Nt(Ot,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var Bs=p(K);oe=Nt(Bs,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),p(oe).forEach(a),Bs.forEach(a),ls=x(Ot),Pt=g(Ot,at),Ot.forEach(a),Me.forEach(a),Lt=x(u),re=m(u,"DIV",{class:!0});var zt=p(re);Pe=m(zt,"H2",{class:!0});var Ts=p(Pe);At=g(Ts,nt),Ts.forEach(a),as=x(zt),Ie=m(zt,"DIV",{class:!0});var Cs=p(Ie);N=m(Cs,"DIV",{class:!0});var J=p(N);it=m(J,"DIV",{});var Rs=p(it);fe=m(Rs,"A",{href:!0});var Qt=p(fe);me=m(Qt,"IMG",{class:!0,src:!0,alt:!0}),ns=x(Qt),Le=m(Qt,"SPAN",{class:!0});var js=p(Le);is=g(js,"Max-Planck-Gesellschaft"),js.forEach(a),Qt.forEach(a),Rs.forEach(a),os=x(J),Ae=m(J,"A",{href:!0});var Hs=p(Ae);pe=m(Hs,"IMG",{class:!0,src:!0,alt:!0}),Hs.forEach(a),fs=x(J),$e=m(J,"A",{href:!0,class:!0});var Us=p($e);he=m(Us,"IMG",{class:!0,src:!0,alt:!0}),Us.forEach(a),us=x(J),ye=m(J,"A",{href:!0});var Ws=p(ye);ge=m(Ws,"IMG",{class:!0,src:!0,alt:!0}),Ws.forEach(a),ds=x(J),Ve=m(J,"A",{href:!0});var Ks=p(Ve);_e=m(Ks,"IMG",{class:!0,src:!0,alt:!0}),Ks.forEach(a),J.forEach(a),Cs.forEach(a),zt.forEach(a),this.h()},h(){i(n,"class","text-center text-8xl w-full px-4 md:text-9xl"),i($,"class","mx-12 mt-8 text-2xl text-center"),i(E,"class","font-bold mx-12 mt-8 text-xl text-center"),i(r,"class","max-w-3xl pt-8 md:pt-12 mx-auto"),i(z,"class","mt-4 text-2xl font-semibold"),i(C,"class","mt-2"),i(ve,"class","mt-2"),i(B,"class","list-disc ml-8 mt-1"),i(we,"class","mt-2"),i(k,"class","flex-col justify-center max-w-lg mx-auto lg:w-2/5 lg:pr-10 lg:pb-16 lg:flex"),ze(De.src,hs="/dashboards-home.png")||i(De,"src",hs),i(De,"alt","Diffix Dashboards"),i(xe,"class","rounded-lg shadow-lg"),i(be,"class","mx-1 mt-8 text-base lg:mt-0 lg:mx-0 lg:w-3/5"),i(Q,"class","max-w-6xl px-4 mx-auto mt-20 text-lg lg:flex"),i(Ee,"class","mt-4 text-2xl font-semibold"),i(ke,"class","mt-2"),i(G,"class","list-disc ml-8 mt-1"),i(Se,"class","mt-2"),i(T,"class","flex-col justify-center max-w-lg mx-auto lg:w-2/5 lg:pr-10 lg:pb-16 lg:flex"),i(se,"class","max-w-6xl px-4 mx-auto mt-20 text-lg lg:flex"),i(rt,"d","M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"),i(U,"class","inline w-6 h-6 mr-1"),i(U,"fill","currentColor"),i(U,"stroke","none"),i(U,"viewBox","0 0 24 24"),i(U,"xmlns","http://www.w3.org/2000/svg"),i(H,"href","https://twitter.com/OpenDiffix"),i(H,"target","_blank"),i(H,"class","inline-block px-4 py-3 text-xl text-center text-white transition-all duration-300 rounded-lg bg-sky-500 hover:bg-sky-400"),i(oe,"stroke-linecap","round"),i(oe,"stroke-linejoin","round"),i(oe,"stroke-width","2"),i(oe,"d","M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"),i(K,"class","inline w-6 h-6 mr-1"),i(K,"fill","none"),i(K,"stroke","currentColor"),i(K,"viewBox","0 0 24 24"),i(K,"xmlns","http://www.w3.org/2000/svg"),i(W,"href",It="/"+d[1]+"/newsletter/"),i(W,"class","inline-block px-4 py-3 text-xl text-center text-white transition-all duration-300 rounded-lg bg-shamrock-600 hover:bg-shamrock-500"),i(R,"class","flex flex-col items-center max-w-xl px-4 mx-auto mt-32 space-y-4 text-lg"),i(Pe,"class","text-xl text-center text-gray-500"),i(me,"class","inline-block h-12"),ze(me.src,gs="/mpg-logo.svg")||i(me,"src",gs),i(me,"alt","Max-Planck-Gesellschaft"),i(Le,"class","text-lg text-gray-800"),i(fe,"href","https://www.mpg.de"),i(pe,"class","h-12"),ze(pe.src,_s="/mpi-sws-logo.svg")||i(pe,"src",_s),i(pe,"alt","Max Planck Institute for Software Systems"),i(Ae,"href","https://www.mpi-sws.org"),i(he,"class","h-16"),ze(he.src,vs="/foev-logo.png")||i(he,"src",vs),i(he,"alt","F\xD6V"),i($e,"href","https://www.foev-speyer.de"),i($e,"class","pb-2 lg:pb-4"),i(ge,"class","h-10"),ze(ge.src,ws="/aircloak_web.svg")||i(ge,"src",ws),i(ge,"alt","Aircloak GmbH"),i(ye,"href","https://aircloak.com"),i(_e,"class","h-20"),ze(_e.src,bs="/kdvz-logo.svg")||i(_e,"src",bs),i(_e,"alt","Zweckverband Kommunale Datenverarbeitungszentrale"),i(Ve,"href","https://kdvz.nrw"),i(N,"class","flex flex-col lg:flex-row flex-wrap gap-x-14 gap-y-10 justify-center items-center"),i(Ie,"class","max-w-5xl mx-auto mt-12"),i(re,"class","flex-grow px-4 py-32 mt-32 mb-10 bg-gray-50")},m(u,w){v(u,t,w),v(u,r,w),s(r,n),y(f,n,null),s(r,l),s(r,$),s($,o),s(r,_),s(r,E),y(S,E,null),v(u,q,w),v(u,Q,w),s(Q,k),s(k,z),s(z,ee),s(k,j),s(k,C),s(C,dt),s(k,Ft),s(k,ve),s(ve,ct),s(k,Bt),s(k,B),s(B,Ge),s(Ge,mt),s(B,Tt),s(B,qe),s(qe,pt),s(B,Ct),s(B,Be),s(Be,$t),s(B,Rt),s(B,Ce),s(Ce,ht),s(k,jt),s(k,we),y(ae,we,null),s(Q,Ht),s(Q,be),s(be,xe),s(xe,De),v(u,gt,w),v(u,se,w),s(se,T),s(T,Ee),s(Ee,_t),s(T,Ut),s(T,ke),s(ke,vt),s(T,Wt),s(T,G),s(G,Ue),s(Ue,wt),s(G,Kt),s(G,Ke),s(Ke,bt),s(G,Xt),s(G,Ze),s(Ze,xt),s(G,Zt),s(G,Ye),s(Ye,Dt),s(G,Jt),s(G,tt),s(tt,Et),s(T,Yt),s(T,Se),y(ne,Se,null),s(se,es),y(ce,se,null),v(u,kt,w),v(u,R,w),y(ie,R,null),s(R,ts),s(R,H),s(H,U),s(U,rt),s(H,ss),s(H,St),s(R,rs),s(R,W),s(W,K),s(K,oe),s(W,ls),s(W,Pt),v(u,Lt,w),v(u,re,w),s(re,Pe),s(Pe,At),s(re,as),s(re,Ie),s(Ie,N),s(N,it),s(it,fe),s(fe,me),s(fe,ns),s(fe,Le),s(Le,is),s(N,os),s(N,Ae),s(Ae,pe),s(N,fs),s(N,$e),s($e,he),s(N,us),s(N,ye),s(ye,ge),s(N,ds),s(N,Ve),s(Ve,_e),P=!0},p(u,[w]){(!P||w&1)&&e!==(e=`
    `+u[0]({en:"Open Diffix - Free and Open Anonymization",de:"Open Diffix - Freie und offene Anonymisierung"})+`
  `)&&(document.title=e),(!P||w&1)&&D!==(D=u[0]({en:"Strong Anonymization for Structured Data. Open. Free.",de:"Starke Anonymisierung f\xFCr strukturierte Daten. Offen. Frei."})+"")&&I(o,D);const le={};w&4&&(le.$$scope={dirty:w,ctx:u}),S.$set(le),(!P||w&1)&&F!==(F=u[0]({en:"Diffix Dashboards",de:"Diffix Dashboards"})+"")&&I(ee,F),(!P||w&1)&&te!==(te=u[0]({en:"Desktop app for unprecedented ease-of-use.",de:"Desktopanwendung mit hoher Benutzerfreundlichkeit."})+"")&&I(dt,te),(!P||w&1)&&Qe!==(Qe=u[0]({en:"Bundled with Metabase data visualization.",de:"Geb\xFCndelt mit Metabase Datenvisualisierung."})+"")&&I(ct,Qe),(!P||w&1)&&Ne!==(Ne=u[0]({en:"Import CSV table, export anonymized data",de:"CSV-Tabelle importieren, anonymisierte Daten exportieren"})+"")&&I(mt,Ne),(!P||w&1)&&Fe!==(Fe=u[0]({en:"UX-based or SQL-based query build",de:"UX-basierter oder SQL-basierter Abfrageaufbau"})+"")&&I(pt,Fe),(!P||w&1)&&Te!==(Te=u[0]({en:"Visual analytics with Metabase",de:"Visuelle Analyse mit Metabase"})+"")&&I($t,Te),(!P||w&1)&&Re!==(Re=u[0]({en:"Compare anonymized and original data for quality",de:"Vergleichen Sie anonymisierte und Originaldaten auf Qualit\xE4t"})+"")&&I(ht,Re);const ot={};w&4&&(ot.$$scope={dirty:w,ctx:u}),ae.$set(ot),(!P||w&1)&&je!==(je=u[0]({en:"Diffix for PostgreSQL",de:"Diffix f\xFCr PostgreSQL"})+"")&&I(_t,je),(!P||w&1)&&He!==(He=u[0]({en:"Diffix as a PostgreSQL extension.",de:"Diffix als PostgreSQL-Erweiterung."})+"")&&I(vt,He),(!P||w&1)&&We!==(We=u[0]({en:'"GDPR Strength" anonymization on a standard PostgreSQL API',de:"GDPR(DSGVO)-konforme Anonymisierung auf einer Standard PostgreSQL-API"})+"")&&I(wt,We),(!P||w&1)&&Xe!==(Xe=u[0]({en:"Easily build privacy-preserving web backends, dashboards, and apps",de:"Einfaches Erstellen von datenschutzfreundlichen Web-Backends, Dashboards und Anwendungen"})+"")&&I(bt,Xe),(!P||w&1)&&Je!==(Je=u[0]({en:"No anonymization expertise needed",de:"Keine Anonymisierungskenntnisse erforderlich"})+"")&&I(xt,Je),(!P||w&1)&&et!==(et=u[0]({en:"Easy installation and configuration",de:"Einfache Installation und Konfiguration"})+"")&&I(Dt,et),(!P||w&1)&&st!==(st=u[0]({en:"Scale and speed of PostgreSQL",de:"Skalierung und Geschwindigkeit von PostgreSQL"})+"")&&I(Et,st);const ft={};w&4&&(ft.$$scope={dirty:w,ctx:u}),ne.$set(ft);const ut={};w&4&&(ut.$$scope={dirty:w,ctx:u}),ie.$set(ut),(!P||w&1)&&lt!==(lt=u[0]({en:"Follow @OpenDiffix on Twitter",de:"@OpenDiffix auf Twitter folgen"})+"")&&I(St,lt),(!P||w&1)&&at!==(at=u[0]({en:"Sign up to our newsletter",de:"Melden Sie sich f\xFCr unseren Newsletter an"})+"")&&I(Pt,at),(!P||w&2&&It!==(It="/"+u[1]+"/newsletter/"))&&i(W,"href",It),(!P||w&1)&&nt!==(nt=u[0]({en:"Open Diffix is supported by",de:"Open Diffix wird unterst\xFCtzt durch"})+"")&&I(At,nt)},i(u){P||(V(f.$$.fragment,u),V(S.$$.fragment,u),V(ae.$$.fragment,u),V(ne.$$.fragment,u),V(ce.$$.fragment,u),V(ie.$$.fragment,u),P=!0)},o(u){M(f.$$.fragment,u),M(S.$$.fragment,u),M(ae.$$.fragment,u),M(ne.$$.fragment,u),M(ce.$$.fragment,u),M(ie.$$.fragment,u),P=!1},d(u){u&&a(t),u&&a(r),O(f),O(S),u&&a(q),u&&a(Q),O(ae),u&&a(gt),u&&a(se),O(ne),O(ce),u&&a(kt),u&&a(R),O(ie),u&&a(Lt),u&&a(re)}}}function Sr(d,e,t){let r,n;return Xs(d,er,f=>t(0,r=f)),Xs(d,tr,f=>t(1,n=f)),[r,n]}class Ar extends cs{constructor(e){super();ms(this,e,Sr,kr,ps,{})}}export{Ar as default};
