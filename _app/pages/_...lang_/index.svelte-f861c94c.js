import{S as $r,i as wr,s as xr,e as u,t as h,c as d,a as c,h as g,d as n,b as a,g as w,P as e,_ as Me,k as v,m as _,j as y,v as sn,w as M,N as Ct,R as an,x as q,O as Ft,Q as qe,y as Q,q as B,o as G,B as T,F as nn}from"../../chunks/vendor-cf06609c.js";import{L as Qe}from"../../chunks/Link-e657120f.js";import{T as Dr,t as on,l as fn}from"../../chunks/Trans-c3b6647f.js";function un(m){let t,r,l;return{c(){t=u("span"),r=u("span"),l=h("Open Diffix"),this.h()},l(o){t=d(o,"SPAN",{class:!0});var i=c(t);r=d(i,"SPAN",{class:!0});var s=c(r);l=g(s,"Open Diffix"),s.forEach(n),i.forEach(n),this.h()},h(){a(r,"class","text-transparent inline-block bg-gradient-to-r bg-clip-text from-shamrock-500 to-royalblue-500"),a(t,"class","font-bold text-white")},m(o,i){w(o,t,i),e(t,r),e(r,l)},p:Me,i:Me,o:Me,d(o){o&&n(t)}}}class Er extends $r{constructor(t){super();wr(this,t,null,un,xr,{})}}function ln(m){let t,r,l,o,i,s,p,b,k,I;return{c(){t=u("pre"),r=u("br"),l=h(`
   count
  -------
  `),o=h(m[2]),i=h(`
  (1 row)`),s=v(),p=u("div"),b=h("# "),k=u("span"),I=h("_"),this.h()},l(x){t=d(x,"PRE",{class:!0});var D=c(t);r=d(D,"BR",{class:!0}),l=g(D,`
   count
  -------
  `),o=g(D,m[2]),i=g(D,`
  (1 row)`),D.forEach(n),s=_(x),p=d(x,"DIV",{class:!0});var V=c(p);b=g(V,"# "),k=d(V,"SPAN",{class:!0});var C=c(k);I=g(C,"_"),C.forEach(n),V.forEach(n),this.h()},h(){a(r,"class","h-1"),a(t,"class","-mt-8"),a(k,"class","blink svelte-1r7cld8"),a(p,"class","mt-4")},m(x,D){w(x,t,D),e(t,r),e(t,l),e(t,o),e(t,i),w(x,s,D),w(x,p,D),e(p,b),e(p,k),e(k,I)},p:Me,d(x){x&&n(t),x&&n(s),x&&n(p)}}}function dn(m){let t,r,l,o,i,s,p,b,k,I,x,D,V,C,S=m[0]===""&&ln(m);return{c(){t=u("div"),r=u("div"),l=u("div"),o=u("div"),i=v(),s=u("div"),p=v(),b=u("div"),k=v(),I=u("div"),x=u("pre"),D=h(`$ psql

# SELECT `),V=h(m[1]),C=v(),S&&S.c(),this.h()},l(L){t=d(L,"DIV",{class:!0});var A=c(t);r=d(A,"DIV",{class:!0});var H=c(r);l=d(H,"DIV",{class:!0});var R=c(l);o=d(R,"DIV",{class:!0}),c(o).forEach(n),i=_(R),s=d(R,"DIV",{class:!0}),c(s).forEach(n),p=_(R),b=d(R,"DIV",{class:!0}),c(b).forEach(n),R.forEach(n),k=_(H),I=d(H,"DIV",{class:!0});var ne=c(I);x=d(ne,"PRE",{});var P=c(x);D=g(P,`$ psql

# SELECT `),V=g(P,m[1]),P.forEach(n),C=_(ne),S&&S.l(ne),ne.forEach(n),H.forEach(n),A.forEach(n),this.h()},h(){a(o,"class","w-3 h-3 bg-red-500 rounded-full hover:bg-red-400"),a(s,"class","w-3 h-3 ml-1 bg-yellow-500 rounded-full hover:bg-yellow-400"),a(b,"class","w-3 h-3 ml-1 bg-green-500 rounded-full hover:bg-green-400"),a(l,"class","flex px-2 pt-2 pb-2 transition-colors border-b border-gray-700"),a(I,"class","h-full p-2 font-mono text-gray-300 bg-gray-800"),a(r,"class","overflow-hidden text-white bg-gray-900 rounded-lg shadow-lg h-96"),a(t,"class","mx-1 mt-8 text-base lg:mt-0 lg:mx-0 lg:w-3/5")},m(L,A){w(L,t,A),e(t,r),e(r,l),e(l,o),e(l,i),e(l,s),e(l,p),e(l,b),e(r,k),e(r,I),e(I,x),e(x,D),e(x,V),e(I,C),S&&S.m(I,null)},p(L,[A]){A&2&&y(V,L[1]),L[0]===""?S?S.p(L,A):(S=ln(L),S.c(),S.m(I,null)):S&&(S.d(1),S=null)},i:Me,o:Me,d(L){L&&n(t),S&&S.d()}}}function cn(){return 25+100*Math.floor(Math.random()*2)}function mn(m,t,r){const l=[{query:`count(dogs)
  FROM dalmatians`,answer:"   103"},{query:`count(samurai)
  FROM kurosawa_movies`,answer:"     6"},{query:`count(soldiers)
  FROM movie_dirty_dozen`,answer:"    11"},{query:`count(citizens)
  FROM citizen_kane`,answer:"  null"}];let{query:o,answer:i}=l[Math.floor(Math.random()*l.length)],s="";function p(){o.length>0&&(r(1,s=s+o.substr(0,1)),o.length>1?r(0,o=o.substr(1,o.length)):(r(1,s=s+";"),r(0,o="")),setTimeout(p,cn()))}return sn(()=>setTimeout(p,100)),[o,s,i]}class pn extends $r{constructor(t){super();wr(this,t,mn,dn,xr,{})}}function hn(m){let t;return{c(){t=h("Download here")},l(r){t=g(r,"Download here")},m(r,l){w(r,t,l)},d(r){r&&n(t)}}}function gn(m){let t;return{c(){t=h("hosted demo")},l(r){t=g(r,"hosted demo")},m(r,l){w(r,t,l)},d(r){r&&n(t)}}}function vn(m){let t,r,l,o,i;return t=new Qe({props:{href:"/en/download",$$slots:{default:[hn]},$$scope:{ctx:m}}}),l=new Qe({props:{href:"/en/demo",$$slots:{default:[gn]},$$scope:{ctx:m}}}),{c(){M(t.$$.fragment),r=h(" or try the "),M(l.$$.fragment),o=h(".")},l(s){q(t.$$.fragment,s),r=g(s," or try the "),q(l.$$.fragment,s),o=g(s,".")},m(s,p){Q(t,s,p),w(s,r,p),Q(l,s,p),w(s,o,p),i=!0},p(s,p){const b={};p&4&&(b.$$scope={dirty:p,ctx:s}),t.$set(b);const k={};p&4&&(k.$$scope={dirty:p,ctx:s}),l.$set(k)},i(s){i||(B(t.$$.fragment,s),B(l.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),G(l.$$.fragment,s),i=!1},d(s){T(t,s),s&&n(r),T(l,s),s&&n(o)}}}function _n(m){let t;return{c(){t=h("Herunterladen")},l(r){t=g(r,"Herunterladen")},m(r,l){w(r,t,l)},d(r){r&&n(t)}}}function $n(m){let t;return{c(){t=h("Demo testen")},l(r){t=g(r,"Demo testen")},m(r,l){w(r,t,l)},d(r){r&&n(t)}}}function wn(m){let t,r,l,o,i;return t=new Qe({props:{href:"/de/download",$$slots:{default:[_n]},$$scope:{ctx:m}}}),l=new Qe({props:{href:"/de/demo",$$slots:{default:[$n]},$$scope:{ctx:m}}}),{c(){M(t.$$.fragment),r=h(" oder "),M(l.$$.fragment),o=h(".")},l(s){q(t.$$.fragment,s),r=g(s," oder "),q(l.$$.fragment,s),o=g(s,".")},m(s,p){Q(t,s,p),w(s,r,p),Q(l,s,p),w(s,o,p),i=!0},p(s,p){const b={};p&4&&(b.$$scope={dirty:p,ctx:s}),t.$set(b);const k={};p&4&&(k.$$scope={dirty:p,ctx:s}),l.$set(k)},i(s){i||(B(t.$$.fragment,s),B(l.$$.fragment,s),i=!0)},o(s){G(t.$$.fragment,s),G(l.$$.fragment,s),i=!1},d(s){T(t,s),s&&n(r),T(l,s),s&&n(o)}}}function xn(m){let t;return{c(){t=h("Download Diffix for Desktop")},l(r){t=g(r,"Download Diffix for Desktop")},m(r,l){w(r,t,l)},d(r){r&&n(t)}}}function Dn(m){let t,r,l;return t=new Qe({props:{href:"/en/download",$$slots:{default:[xn]},$$scope:{ctx:m}}}),{c(){M(t.$$.fragment),r=h(".")},l(o){q(t.$$.fragment,o),r=g(o,".")},m(o,i){Q(t,o,i),w(o,r,i),l=!0},p(o,i){const s={};i&4&&(s.$$scope={dirty:i,ctx:o}),t.$set(s)},i(o){l||(B(t.$$.fragment,o),l=!0)},o(o){G(t.$$.fragment,o),l=!1},d(o){T(t,o),o&&n(r)}}}function En(m){let t;return{c(){t=h("Diffix f\xFCr Desktop herunterladen")},l(r){t=g(r,"Diffix f\xFCr Desktop herunterladen")},m(r,l){w(r,t,l)},d(r){r&&n(t)}}}function bn(m){let t,r,l;return t=new Qe({props:{href:"/de/download",$$slots:{default:[En]},$$scope:{ctx:m}}}),{c(){M(t.$$.fragment),r=h(".")},l(o){q(t.$$.fragment,o),r=g(o,".")},m(o,i){Q(t,o,i),w(o,r,i),l=!0},p(o,i){const s={};i&4&&(s.$$scope={dirty:i,ctx:o}),t.$set(s)},i(o){l||(B(t.$$.fragment,o),l=!0)},o(o){G(t.$$.fragment,o),l=!1},d(o){T(t,o),o&&n(r)}}}function kn(m){let t,r,l,o;return l=new Er({}),{c(){t=u("span"),r=h("Stay informed about the development of "),M(l.$$.fragment)},l(i){t=d(i,"SPAN",{});var s=c(t);r=g(s,"Stay informed about the development of "),q(l.$$.fragment,s),s.forEach(n)},m(i,s){w(i,t,s),e(t,r),Q(l,t,null),o=!0},i(i){o||(B(l.$$.fragment,i),o=!0)},o(i){G(l.$$.fragment,i),o=!1},d(i){i&&n(t),T(l)}}}function Sn(m){let t,r,l,o;return l=new Er({}),{c(){t=u("span"),r=h("Bleiben Sie auf dem Laufenden "),M(l.$$.fragment)},l(i){t=d(i,"SPAN",{});var s=c(t);r=g(s,"Bleiben Sie auf dem Laufenden "),q(l.$$.fragment,s),s.forEach(n)},m(i,s){w(i,t,s),e(t,r),Q(l,t,null),o=!0},i(i){o||(B(l.$$.fragment,i),o=!0)},o(i){G(l.$$.fragment,i),o=!1},d(i){i&&n(t),T(l)}}}function yn(m){let t,r,l,o,i,s,p,b=m[0]({en:"Strong Anonymization for Structured Data. Open. Free.",de:"Starke Anonymisierung f\xFCr strukturierte Daten. Offen. Frei."})+"",k,I,x,D,V,C=m[0]({en:"Diffix for PostgreSQL",de:"Diffix f\xFCr PostgreSQL"})+"",S,L,A,H=m[0]({en:"Diffix as a PostgreSQL extension.",de:"Diffix als PostgreSQL-Erweiterung."})+"",R,ne,P,Be,Ge=m[0]({en:'"GDPR Strength" anonymization on a standard PostgreSQL API',de:"GDPR(DSGVO)-konforme Anonymisierung auf einer Standard PostgreSQL-API"})+"",ht,Nt,Te,Ce=m[0]({en:"Easily build privacy-preserving web backends, dashboards, and apps",de:"Einfaches Erstellen von datenschutzfreundlichen Web-Backends, Dashboards und Anwendungen"})+"",gt,Rt,Fe,Ne=m[0]({en:"No anonymization expertise needed",de:"Keine Anonymisierungskenntnisse erforderlich"})+"",vt,jt,Re,je=m[0]({en:"Easy installation and configuration",de:"Einfache Installation und Konfiguration"})+"",_t,Ht,He,Ke=m[0]({en:"Scale and speed of PostgreSQL",de:"Skalierung und Geschwindigkeit von PostgreSQL"})+"",$t,Kt,we,le,Ut,ce,wt,te,O,xe,Ue=m[0]({en:"Diffix for Desktop",de:"Diffix als Desktopanwendung"})+"",xt,Wt,De,We=m[0]({en:"Desktop app for unprecedented ease-of-use.",de:"Desktopanwendung mit hoher Benutzerfreundlichkeit."})+"",Dt,Yt,Ee,Ye=m[0]({en:"Built on the .NET Diffix query engine.",de:"Basiert auf der .NET Diffix query engine."})+"",Et,Zt,F,Ze,Je=m[0]({en:"Import data from CSV",de:"CSV-Dateien importieren"})+"",bt,Jt,Xe,et=m[0]({en:"Select columns and bin sizes",de:"Spalten und Klassengr\xF6\xDFen bestimmen"})+"",kt,Xt,tt,rt=m[0]({en:"Examine data quality",de:"Datenqualit\xE4t pr\xFCfen"})+"",St,er,nt,lt=m[0]({en:"Export anonymized data as CSV",de:"Exportieren von anonymisierten Daten als CSV"})+"",yt,tr,be,se,rr,ke,ae,K,st,nr,at,lr,ot,sr,N,Se,br,ar,It,j,oe,or,U,W,it,ir,ft=m[0]({en:"Follow @OpenDiffix on Twitter",de:"@OpenDiffix auf Twitter folgen"})+"",Pt,fr,Y,Z,ie,ur,ut=m[0]({en:"Sign up to our newsletter",de:"Melden Sie sich f\xFCr unseren Newsletter an"})+"",Vt,Lt,At,re,ye,dt=m[0]({en:"Open Diffix is supported by",de:"Open Diffix wird unterst\xFCtzt durch"})+"",Ot,dr,Ie,z,ct,fe,me,kr,cr,Pe,mr,pr,Ve,pe,Sr,hr,he,ge,yr,gr,Le,ve,Ir,vr,Ae,_e,Pr,E;return document.title=t=`
    `+m[0]({en:"Open Diffix - Free and Open Anonymization",de:"Open Diffix - Freie und offene Anonymisierung"})+`
  `,i=new Er({}),le=new Dr({props:{$$slots:{de:[wn],en:[vn]},$$scope:{ctx:m}}}),ce=new pn({}),se=new Dr({props:{$$slots:{de:[bn],en:[Dn]},$$scope:{ctx:m}}}),oe=new Dr({props:{$$slots:{de:[Sn],en:[kn]},$$scope:{ctx:m}}}),{c(){r=v(),l=u("header"),o=u("h1"),M(i.$$.fragment),s=v(),p=u("h2"),k=h(b),I=v(),x=u("div"),D=u("div"),V=u("p"),S=h(C),L=v(),A=u("p"),R=h(H),ne=v(),P=u("ul"),Be=u("li"),ht=h(Ge),Nt=v(),Te=u("li"),gt=h(Ce),Rt=v(),Fe=u("li"),vt=h(Ne),jt=v(),Re=u("li"),_t=h(je),Ht=v(),He=u("li"),$t=h(Ke),Kt=v(),we=u("p"),M(le.$$.fragment),Ut=v(),M(ce.$$.fragment),wt=v(),te=u("div"),O=u("div"),xe=u("p"),xt=h(Ue),Wt=v(),De=u("p"),Dt=h(We),Yt=v(),Ee=u("p"),Et=h(Ye),Zt=v(),F=u("ul"),Ze=u("li"),bt=h(Je),Jt=v(),Xe=u("li"),kt=h(et),Xt=v(),tt=u("li"),St=h(rt),er=v(),nt=u("li"),yt=h(lt),tr=v(),be=u("p"),M(se.$$.fragment),rr=v(),ke=u("div"),ae=u("div"),K=u("div"),st=u("div"),nr=v(),at=u("div"),lr=v(),ot=u("div"),sr=v(),N=u("video"),Se=u("source"),ar=h(`
        Your browser does not support the video tag.`),It=v(),j=u("div"),M(oe.$$.fragment),or=v(),U=u("a"),W=Ct("svg"),it=Ct("path"),ir=v(),Pt=h(ft),fr=v(),Y=u("a"),Z=Ct("svg"),ie=Ct("path"),ur=v(),Vt=h(ut),At=v(),re=u("div"),ye=u("h2"),Ot=h(dt),dr=v(),Ie=u("div"),z=u("div"),ct=u("div"),fe=u("a"),me=u("img"),cr=v(),Pe=u("span"),mr=h("Max-Planck-Gesellschaft"),pr=v(),Ve=u("a"),pe=u("img"),hr=v(),he=u("a"),ge=u("img"),gr=v(),Le=u("a"),ve=u("img"),vr=v(),Ae=u("a"),_e=u("img"),this.h()},l(f){an('[data-svelte="svelte-1maszqo"]',document.head).forEach(n),r=_(f),l=d(f,"HEADER",{class:!0});var $e=c(l);o=d($e,"H1",{class:!0});var mt=c(o);q(i.$$.fragment,mt),mt.forEach(n),s=_($e),p=d($e,"H2",{class:!0});var pt=c(p);k=g(pt,b),pt.forEach(n),$e.forEach(n),I=_(f),x=d(f,"DIV",{class:!0});var zt=c(x);D=d(zt,"DIV",{class:!0});var ue=c(D);V=d(ue,"P",{class:!0});var Vr=c(V);S=g(Vr,C),Vr.forEach(n),L=_(ue),A=d(ue,"P",{class:!0});var Lr=c(A);R=g(Lr,H),Lr.forEach(n),ne=_(ue),P=d(ue,"UL",{class:!0});var J=c(P);Be=d(J,"LI",{});var Ar=c(Be);ht=g(Ar,Ge),Ar.forEach(n),Nt=_(J),Te=d(J,"LI",{});var Or=c(Te);gt=g(Or,Ce),Or.forEach(n),Rt=_(J),Fe=d(J,"LI",{});var zr=c(Fe);vt=g(zr,Ne),zr.forEach(n),jt=_(J),Re=d(J,"LI",{});var Mr=c(Re);_t=g(Mr,je),Mr.forEach(n),Ht=_(J),He=d(J,"LI",{});var qr=c(He);$t=g(qr,Ke),qr.forEach(n),J.forEach(n),Kt=_(ue),we=d(ue,"P",{class:!0});var Qr=c(we);q(le.$$.fragment,Qr),Qr.forEach(n),ue.forEach(n),Ut=_(zt),q(ce.$$.fragment,zt),zt.forEach(n),wt=_(f),te=d(f,"DIV",{class:!0});var Mt=c(te);O=d(Mt,"DIV",{class:!0});var X=c(O);xe=d(X,"P",{class:!0});var Br=c(xe);xt=g(Br,Ue),Br.forEach(n),Wt=_(X),De=d(X,"P",{class:!0});var Gr=c(De);Dt=g(Gr,We),Gr.forEach(n),Yt=_(X),Ee=d(X,"P",{class:!0});var Tr=c(Ee);Et=g(Tr,Ye),Tr.forEach(n),Zt=_(X),F=d(X,"UL",{class:!0});var de=c(F);Ze=d(de,"LI",{});var Cr=c(Ze);bt=g(Cr,Je),Cr.forEach(n),Jt=_(de),Xe=d(de,"LI",{});var Fr=c(Xe);kt=g(Fr,et),Fr.forEach(n),Xt=_(de),tt=d(de,"LI",{});var Nr=c(tt);St=g(Nr,rt),Nr.forEach(n),er=_(de),nt=d(de,"LI",{});var Rr=c(nt);yt=g(Rr,lt),Rr.forEach(n),de.forEach(n),tr=_(X),be=d(X,"P",{class:!0});var jr=c(be);q(se.$$.fragment,jr),jr.forEach(n),X.forEach(n),rr=_(Mt),ke=d(Mt,"DIV",{class:!0});var Hr=c(ke);ae=d(Hr,"DIV",{class:!0});var qt=c(ae);K=d(qt,"DIV",{class:!0});var Oe=c(K);st=d(Oe,"DIV",{class:!0}),c(st).forEach(n),nr=_(Oe),at=d(Oe,"DIV",{class:!0}),c(at).forEach(n),lr=_(Oe),ot=d(Oe,"DIV",{class:!0}),c(ot).forEach(n),Oe.forEach(n),sr=_(qt),N=d(qt,"VIDEO",{width:!0,height:!0});var _r=c(N);Se=d(_r,"SOURCE",{src:!0,type:!0}),ar=g(_r,`
        Your browser does not support the video tag.`),_r.forEach(n),qt.forEach(n),Hr.forEach(n),Mt.forEach(n),It=_(f),j=d(f,"DIV",{class:!0});var ze=c(j);q(oe.$$.fragment,ze),or=_(ze),U=d(ze,"A",{href:!0,target:!0,class:!0});var Qt=c(U);W=Ft(Qt,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var Kr=c(W);it=Ft(Kr,"path",{d:!0}),c(it).forEach(n),Kr.forEach(n),ir=_(Qt),Pt=g(Qt,ft),Qt.forEach(n),fr=_(ze),Y=d(ze,"A",{href:!0,class:!0});var Bt=c(Y);Z=Ft(Bt,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var Ur=c(Z);ie=Ft(Ur,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),c(ie).forEach(n),Ur.forEach(n),ur=_(Bt),Vt=g(Bt,ut),Bt.forEach(n),ze.forEach(n),At=_(f),re=d(f,"DIV",{class:!0});var Gt=c(re);ye=d(Gt,"H2",{class:!0});var Wr=c(ye);Ot=g(Wr,dt),Wr.forEach(n),dr=_(Gt),Ie=d(Gt,"DIV",{class:!0});var Yr=c(Ie);z=d(Yr,"DIV",{class:!0});var ee=c(z);ct=d(ee,"DIV",{});var Zr=c(ct);fe=d(Zr,"A",{href:!0});var Tt=c(fe);me=d(Tt,"IMG",{class:!0,src:!0,alt:!0}),cr=_(Tt),Pe=d(Tt,"SPAN",{class:!0});var Jr=c(Pe);mr=g(Jr,"Max-Planck-Gesellschaft"),Jr.forEach(n),Tt.forEach(n),Zr.forEach(n),pr=_(ee),Ve=d(ee,"A",{href:!0});var Xr=c(Ve);pe=d(Xr,"IMG",{class:!0,src:!0,alt:!0}),Xr.forEach(n),hr=_(ee),he=d(ee,"A",{href:!0,class:!0});var en=c(he);ge=d(en,"IMG",{class:!0,src:!0,alt:!0}),en.forEach(n),gr=_(ee),Le=d(ee,"A",{href:!0});var tn=c(Le);ve=d(tn,"IMG",{class:!0,src:!0,alt:!0}),tn.forEach(n),vr=_(ee),Ae=d(ee,"A",{href:!0});var rn=c(Ae);_e=d(rn,"IMG",{class:!0,src:!0,alt:!0}),rn.forEach(n),ee.forEach(n),Yr.forEach(n),Gt.forEach(n),this.h()},h(){a(o,"class","text-center text-8xl w-full px-4 md:text-9xl"),a(p,"class","mx-12 mt-8 text-2xl text-center"),a(l,"class","max-w-3xl pt-8 md:pt-12 mx-auto"),a(V,"class","mt-4 text-2xl font-semibold"),a(A,"class","mt-2"),a(P,"class","list-disc ml-8 mt-1"),a(we,"class","mt-2"),a(D,"class","flex-col justify-center max-w-lg mx-auto lg:w-2/5 lg:pr-10 lg:pb-16 lg:flex"),a(x,"class","max-w-6xl px-4 mx-auto mt-20 text-lg lg:flex"),a(xe,"class","mt-4 text-2xl font-semibold"),a(De,"class","mt-2"),a(Ee,"class","mt-2"),a(F,"class","list-disc ml-8 mt-1"),a(be,"class","mt-2"),a(O,"class","flex-col justify-center max-w-lg mx-auto lg:w-2/5 lg:pr-10 lg:pb-16 lg:flex"),a(st,"class","w-3 h-3 bg-red-500 rounded-full hover:bg-red-400"),a(at,"class","w-3 h-3 ml-1 bg-yellow-500 rounded-full hover:bg-yellow-400"),a(ot,"class","w-3 h-3 ml-1 bg-green-500 rounded-full hover:bg-green-400"),a(K,"class","flex px-2 pt-2 pb-2 transition-colors border-b border-gray-700"),qe(Se.src,br="short_demo.webm")||a(Se,"src",br),a(Se,"type","video/webm"),a(N,"width","1920"),a(N,"height","1080"),N.autoplay=!0,N.controls=!0,N.muted=!0,N.loop=!0,a(ae,"class","overflow-hidden text-white bg-gray-900 rounded-lg shadow-lg"),a(ke,"class","mx-1 mt-8 text-base lg:mt-0 lg:mx-0 lg:w-3/5"),a(te,"class","max-w-6xl px-4 mx-auto mt-20 text-lg lg:flex"),a(it,"d","M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"),a(W,"class","inline w-6 h-6 mr-1"),a(W,"fill","currentColor"),a(W,"stroke","none"),a(W,"viewBox","0 0 24 24"),a(W,"xmlns","http://www.w3.org/2000/svg"),a(U,"href","https://twitter.com/OpenDiffix"),a(U,"target","_blank"),a(U,"class","inline-block px-4 py-3 text-xl text-center text-white transition-all duration-300 rounded-lg bg-sky-500 hover:bg-sky-400"),a(ie,"stroke-linecap","round"),a(ie,"stroke-linejoin","round"),a(ie,"stroke-width","2"),a(ie,"d","M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"),a(Z,"class","inline w-6 h-6 mr-1"),a(Z,"fill","none"),a(Z,"stroke","currentColor"),a(Z,"viewBox","0 0 24 24"),a(Z,"xmlns","http://www.w3.org/2000/svg"),a(Y,"href",Lt="/"+m[1]+"/newsletter"),a(Y,"class","inline-block px-4 py-3 text-xl text-center text-white transition-all duration-300 rounded-lg bg-shamrock-600 hover:bg-shamrock-500"),a(j,"class","flex flex-col items-center max-w-xl px-4 mx-auto mt-32 space-y-4 text-lg"),a(ye,"class","text-xl text-center text-gray-500"),a(me,"class","inline-block h-12"),qe(me.src,kr="mpg-logo.svg")||a(me,"src",kr),a(me,"alt","Max-Planck-Gesellschaft"),a(Pe,"class","text-lg text-gray-800"),a(fe,"href","https://www.mpg.de"),a(pe,"class","h-12"),qe(pe.src,Sr="mpi-sws-logo.svg")||a(pe,"src",Sr),a(pe,"alt","Max Planck Institute for Software Systems"),a(Ve,"href","https://www.mpi-sws.org"),a(ge,"class","h-16"),qe(ge.src,yr="foev-logo.png")||a(ge,"src",yr),a(ge,"alt","F\xD6V"),a(he,"href","https://www.foev-speyer.de"),a(he,"class","pb-2 lg:pb-4"),a(ve,"class","h-10"),qe(ve.src,Ir="aircloak_web.svg")||a(ve,"src",Ir),a(ve,"alt","Aircloak GmbH"),a(Le,"href","https://aircloak.com"),a(_e,"class","h-20"),qe(_e.src,Pr="kdvz-logo.svg")||a(_e,"src",Pr),a(_e,"alt","Zweckverband Kommunale Datenverarbeitungszentrale"),a(Ae,"href","https://kdvz.nrw"),a(z,"class","flex flex-col lg:flex-row flex-wrap gap-x-14 gap-y-10 justify-center items-center"),a(Ie,"class","max-w-5xl mx-auto mt-12"),a(re,"class","flex-grow px-4 py-32 mt-32 mb-10 bg-gray-50")},m(f,$){w(f,r,$),w(f,l,$),e(l,o),Q(i,o,null),e(l,s),e(l,p),e(p,k),w(f,I,$),w(f,x,$),e(x,D),e(D,V),e(V,S),e(D,L),e(D,A),e(A,R),e(D,ne),e(D,P),e(P,Be),e(Be,ht),e(P,Nt),e(P,Te),e(Te,gt),e(P,Rt),e(P,Fe),e(Fe,vt),e(P,jt),e(P,Re),e(Re,_t),e(P,Ht),e(P,He),e(He,$t),e(D,Kt),e(D,we),Q(le,we,null),e(x,Ut),Q(ce,x,null),w(f,wt,$),w(f,te,$),e(te,O),e(O,xe),e(xe,xt),e(O,Wt),e(O,De),e(De,Dt),e(O,Yt),e(O,Ee),e(Ee,Et),e(O,Zt),e(O,F),e(F,Ze),e(Ze,bt),e(F,Jt),e(F,Xe),e(Xe,kt),e(F,Xt),e(F,tt),e(tt,St),e(F,er),e(F,nt),e(nt,yt),e(O,tr),e(O,be),Q(se,be,null),e(te,rr),e(te,ke),e(ke,ae),e(ae,K),e(K,st),e(K,nr),e(K,at),e(K,lr),e(K,ot),e(ae,sr),e(ae,N),e(N,Se),e(N,ar),w(f,It,$),w(f,j,$),Q(oe,j,null),e(j,or),e(j,U),e(U,W),e(W,it),e(U,ir),e(U,Pt),e(j,fr),e(j,Y),e(Y,Z),e(Z,ie),e(Y,ur),e(Y,Vt),w(f,At,$),w(f,re,$),e(re,ye),e(ye,Ot),e(re,dr),e(re,Ie),e(Ie,z),e(z,ct),e(ct,fe),e(fe,me),e(fe,cr),e(fe,Pe),e(Pe,mr),e(z,pr),e(z,Ve),e(Ve,pe),e(z,hr),e(z,he),e(he,ge),e(z,gr),e(z,Le),e(Le,ve),e(z,vr),e(z,Ae),e(Ae,_e),E=!0},p(f,[$]){(!E||$&1)&&t!==(t=`
    `+f[0]({en:"Open Diffix - Free and Open Anonymization",de:"Open Diffix - Freie und offene Anonymisierung"})+`
  `)&&(document.title=t),(!E||$&1)&&b!==(b=f[0]({en:"Strong Anonymization for Structured Data. Open. Free.",de:"Starke Anonymisierung f\xFCr strukturierte Daten. Offen. Frei."})+"")&&y(k,b),(!E||$&1)&&C!==(C=f[0]({en:"Diffix for PostgreSQL",de:"Diffix f\xFCr PostgreSQL"})+"")&&y(S,C),(!E||$&1)&&H!==(H=f[0]({en:"Diffix as a PostgreSQL extension.",de:"Diffix als PostgreSQL-Erweiterung."})+"")&&y(R,H),(!E||$&1)&&Ge!==(Ge=f[0]({en:'"GDPR Strength" anonymization on a standard PostgreSQL API',de:"GDPR(DSGVO)-konforme Anonymisierung auf einer Standard PostgreSQL-API"})+"")&&y(ht,Ge),(!E||$&1)&&Ce!==(Ce=f[0]({en:"Easily build privacy-preserving web backends, dashboards, and apps",de:"Einfaches Erstellen von datenschutzfreundlichen Web-Backends, Dashboards und Anwendungen"})+"")&&y(gt,Ce),(!E||$&1)&&Ne!==(Ne=f[0]({en:"No anonymization expertise needed",de:"Keine Anonymisierungskenntnisse erforderlich"})+"")&&y(vt,Ne),(!E||$&1)&&je!==(je=f[0]({en:"Easy installation and configuration",de:"Einfache Installation und Konfiguration"})+"")&&y(_t,je),(!E||$&1)&&Ke!==(Ke=f[0]({en:"Scale and speed of PostgreSQL",de:"Skalierung und Geschwindigkeit von PostgreSQL"})+"")&&y($t,Ke);const $e={};$&4&&($e.$$scope={dirty:$,ctx:f}),le.$set($e),(!E||$&1)&&Ue!==(Ue=f[0]({en:"Diffix for Desktop",de:"Diffix als Desktopanwendung"})+"")&&y(xt,Ue),(!E||$&1)&&We!==(We=f[0]({en:"Desktop app for unprecedented ease-of-use.",de:"Desktopanwendung mit hoher Benutzerfreundlichkeit."})+"")&&y(Dt,We),(!E||$&1)&&Ye!==(Ye=f[0]({en:"Built on the .NET Diffix query engine.",de:"Basiert auf der .NET Diffix query engine."})+"")&&y(Et,Ye),(!E||$&1)&&Je!==(Je=f[0]({en:"Import data from CSV",de:"CSV-Dateien importieren"})+"")&&y(bt,Je),(!E||$&1)&&et!==(et=f[0]({en:"Select columns and bin sizes",de:"Spalten und Klassengr\xF6\xDFen bestimmen"})+"")&&y(kt,et),(!E||$&1)&&rt!==(rt=f[0]({en:"Examine data quality",de:"Datenqualit\xE4t pr\xFCfen"})+"")&&y(St,rt),(!E||$&1)&&lt!==(lt=f[0]({en:"Export anonymized data as CSV",de:"Exportieren von anonymisierten Daten als CSV"})+"")&&y(yt,lt);const mt={};$&4&&(mt.$$scope={dirty:$,ctx:f}),se.$set(mt);const pt={};$&4&&(pt.$$scope={dirty:$,ctx:f}),oe.$set(pt),(!E||$&1)&&ft!==(ft=f[0]({en:"Follow @OpenDiffix on Twitter",de:"@OpenDiffix auf Twitter folgen"})+"")&&y(Pt,ft),(!E||$&1)&&ut!==(ut=f[0]({en:"Sign up to our newsletter",de:"Melden Sie sich f\xFCr unseren Newsletter an"})+"")&&y(Vt,ut),(!E||$&2&&Lt!==(Lt="/"+f[1]+"/newsletter"))&&a(Y,"href",Lt),(!E||$&1)&&dt!==(dt=f[0]({en:"Open Diffix is supported by",de:"Open Diffix wird unterst\xFCtzt durch"})+"")&&y(Ot,dt)},i(f){E||(B(i.$$.fragment,f),B(le.$$.fragment,f),B(ce.$$.fragment,f),B(se.$$.fragment,f),B(oe.$$.fragment,f),E=!0)},o(f){G(i.$$.fragment,f),G(le.$$.fragment,f),G(ce.$$.fragment,f),G(se.$$.fragment,f),G(oe.$$.fragment,f),E=!1},d(f){f&&n(r),f&&n(l),T(i),f&&n(I),f&&n(x),T(le),T(ce),f&&n(wt),f&&n(te),T(se),f&&n(It),f&&n(j),T(oe),f&&n(At),f&&n(re)}}}function In(m,t,r){let l,o;return nn(m,on,i=>r(0,l=i)),nn(m,fn,i=>r(1,o=i)),[l,o]}class An extends $r{constructor(t){super();wr(this,t,In,yn,xr,{})}}export{An as default};
