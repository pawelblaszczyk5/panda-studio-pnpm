import{r as w}from"./index.03be2d59.js";import{B as c,Q as u,X as b,Y as V,Z as z,T as E,_ as y,I,C as B,R as K,U as j,S as _,J as G,K as X,P as A,L as Q,M as q,N as x}from"./token-search-combobox.37a6d974.js";import{c as J}from"./create-context.cec53aa5.js";import{j as t,p as l,c as L,a as Y}from"./jsx-runtime.5e1c725e.js";import{f as Z,F as H}from"./flex.97e9d549.js";import{G as F}from"./grid.0eee2e42.js";import{X as ee}from"./icons.197eee5d.js";import{S as te}from"./select-label.3316d13b.js";import{W as ae}from"./wrap.e25e874e.js";import"./stack.809b5254.js";import"./index.fe6623c6.js";import"./index.f669b601.js";import"./input.4a1acd09.js";import"./index.840e397f.js";function re({list:e,columns:r}){return t.jsxs(l.div,{children:[t.jsx(F,{gridTemplateColumns:"80px repeat(auto-fit, minmax(30px, 1fr))",w:"full",fontWeight:"bold",fontSize:"lg",mb:"2",children:r.map(a=>t.jsx(l.div,{children:a.header},a.header))}),t.jsx(l.div,{className:Z({direction:"column",gap:"2"}),children:e.map((a,o)=>t.jsx(F,{gridTemplateColumns:"80px repeat(auto-fit, minmax(30px, 1fr))",w:"full",children:r.map(n=>t.jsx(l.div,{wordBreak:"break-word",children:n.cell?.(a)??a[n.accessor]},n.accessor))},o))})]})}const se=e=>{let r=[],a=[],o=[],n=[],p=[],d=!1;return e.value&&(r=c.details.globalMaps.byTokenName[e.value]??[],d=!0),e.category&&(a=c.details.globalMaps.byCategory[e.category]??[],d=!0),e.propName&&(o=c.details.globalMaps.byPropertyName[e.propName]??[],d=!0),e.from&&(n=c.details.globalMaps.byInstanceName[e.from]??[],d=!0),e.filepath&&(p=c.details.byFilepath[e.filepath]??[],d=!0),{params:e,hasParam:d,byTokenName:r.map(u),byCategory:a.map(u),byPropName:o.map(u),byInstanceName:n.map(u),byFilepath:p.map(u),reportItemList:le(r,a,o,n,p).map(u)}};function le(...e){return e.reduce((r,a)=>r.length?a.length?oe(r,a):r:a,[])}function oe(e,r){const a=new Set;for(const o of r)e.includes(o)&&a.add(o);return Array.from(a)}const ne=[{header:"#",accessor:"id",cell:e=>t.jsx(l.span,{onClick:()=>console.log(e),children:e.id})},{header:"from",accessor:"from",cell:e=>t.jsx(b,{from:e.from})},{header:"category",accessor:"category",cell:e=>t.jsx(b,{category:e.category})},{header:"property name",accessor:"propName",cell:e=>t.jsx(b,{propName:e.propName})},{header:"token name",accessor:"value",cell:e=>t.jsxs(l.div,{display:"flex",alignItems:"center",children:[!e.isKnown&&t.jsx(V,{tooltip:t.jsx(l.span,{p:"2",bgColor:"card",border:"1px solid token(colors.border)",shadow:"sm",rounded:"md",children:"unknown token"}),children:t.jsx(l.span,{mr:"2",userSelect:"none",children:"❌"})}),t.jsx(b,{value:e.value})]})},{header:"filepath",accessor:"filepath",cell:e=>t.jsx(z,{withRange:!0,...e})}],Fe=()=>{const e=new URLSearchParams(window.location.search),r=Object.fromEntries(e.entries()),[a,o]=w.useState(r),n=se(a);return t.jsxs(l.div,{children:[t.jsxs(l.div,{display:"flex",children:[t.jsxs(l.a,{href:"/token-analyzer",children:[t.jsxs(l.span,{fontWeight:"bold",children:["<"," "]}),"Back"]}),t.jsx(l.div,{ml:"auto",children:t.jsx(E,{placeholder:"Global search"})})]}),t.jsx(l.div,{p:"4",mt:"4",children:t.jsxs(ie,{value:[n,o],children:[t.jsx(ce,{}),t.jsx("hr",{}),n.reportItemList.length?t.jsx(pe,{}):n.hasParam?t.jsx(l.div,{display:"flex",justifyContent:"center",fontSize:"xl",p:"16",fontWeight:"bold",children:"No results"}):t.jsx(l.div,{display:"flex",justifyContent:"center",fontSize:"xl",p:"16",fontWeight:"bold",children:"Use at least one filter"})]})})]})},[ie,v]=J({name:"UtilityDetailsContext"}),i=(e,r)=>{const a=new URLSearchParams(window.location.search);r===void 0?a.delete(e):a.set(e,r),window.history.pushState(Object.fromEntries(a.entries()),"",`${window.location.pathname}?${a.toString()}`)},f=e=>Array.from(new Set(e)),g=e=>typeof e=="string"?{value:e,label:e}:e,P=e=>({value:e,label:j(e)}),ce=()=>{const[e,r]=v(),[a,o]=w.useState(0),n=Object.keys(c.details.globalMaps.byTokenName),p=f(e.reportItemList.map(s=>String(s.value))),d=p.length>0?p:n,T=Object.keys(c.details.globalMaps.byCategory),N=f(e.reportItemList.map(s=>s.category)),O=N.length>0?N:T,R=Object.keys(c.details.globalMaps.byPropertyName),S=f(e.reportItemList.map(s=>s.propName)),M=S.length>0?S:R,U=Object.keys(c.details.globalMaps.byInstanceName),k=f(e.reportItemList.map(s=>s.from)),D=k.length>0?k:U,W=Object.keys(c.details.byFilepath).map(P),C=f(e.reportItemList.map(s=>s.filepath)).map(P),$=C.length>0?C:W;return t.jsxs(l.div,{mb:"4",children:[t.jsxs(H,{children:[t.jsx(l.h3,{children:"Filters"}),e.hasParam&&t.jsx(l.button,{ml:"auto",cursor:"pointer",userSelect:"none",bg:"card",px:"3",py:"2",rounded:"md",_hover:{opacity:.8},onClick:()=>{i("value",void 0),i("category",void 0),i("propName",void 0),i("from",void 0),i("filepath",void 0),r({}),o(s=>s+1)},children:t.jsxs(l.span,{display:"flex",gap:"2",alignItems:"center",children:[t.jsx(ee,{width:"16",height:"16"})," Clear filters"]})})]}),t.jsxs(ae,{children:[t.jsx(y,{label:"Token name",options:d.map(g),onSelect:s=>(i("value",s.value),r(m=>({...m,value:s.value}))),defaultValue:String(e.params.value??"")}),t.jsx(y,{label:"Property name",options:M.map(g),onSelect:s=>(i("propName",s.value),r(m=>({...m,propName:s.value}))),defaultValue:String(e.params.propName??"")}),t.jsx(y,{label:"Category",options:O.map(g),onSelect:s=>(i("category",s.value),r(m=>({...m,category:s.value}))),defaultValue:String(e.params.category??"")}),t.jsx(y,{label:"Instance name (from)",options:D.map(g),onSelect:s=>(i("from",s.value),r(m=>({...m,from:s.value}))),defaultValue:String(e.params.from??"")}),t.jsx(y,{label:"Filepath",options:$.map(g),onSelect:s=>(i("filepath",s.value),r(m=>({...m,filepath:s.value}))),defaultValue:String(e.params.filepath??"")})]},a)]})},pe=()=>{const[e]=v();return t.jsxs(t.Fragment,{children:[t.jsx(de,{...e}),t.jsx(me,{})]})},me=()=>{const[e]=v(),r=f(e.reportItemList.map(a=>a.filepath));return t.jsxs(l.div,{children:[t.jsx(l.h3,{children:t.jsx(I,{count:r.length,children:"Used in files"})}),t.jsx(l.div,{display:"flex",flexDirection:"column",children:r.map(a=>t.jsx(l.a,{mt:"1",className:B({}),href:K({filepath:a}),onClick:o=>o.stopPropagation(),children:t.jsx(I,{count:e.reportItemList.filter(o=>o.filepath===a).length,children:j(a)})},a))})]})},h=L({padding:"4px 8px",rounded:"md","& li":{cursor:"pointer",_hover:{opacity:.8}}}),de=e=>{const r=e.params.value,a={label:"matching search filters",value:"reportItemList"},o=ne.filter(n=>e.params[n.accessor]===void 0);return t.jsx(t.Fragment,{children:t.jsx(_,{defaultValue:a,children:({selectedOption:n})=>{const p=n?.value??a.value;return t.jsxs(G,{title:t.jsxs(t.Fragment,{children:[t.jsx(te,{children:"By "}),t.jsx(X,{asChild:!0,children:t.jsx("button",{children:n?.label})})]}),subTitle:t.jsxs(l.span,{fontSize:"md",fontWeight:"bold",ml:"auto",children:["Found (",e[p].length,") matches"," "]}),bg:"card",children:[t.jsx(re,{list:e[p],columns:o}),t.jsx(t.Fragment,{children:t.jsx(A,{children:t.jsx(Q,{children:t.jsxs(q,{className:Y(h,L({listStyle:"none"})),children:[t.jsx(x,{className:h,value:a.value,label:a.label}),e.params.value&&t.jsx(x,{className:h,label:`token name (${r})`,value:"byTokenName"}),e.params.propName&&t.jsx(x,{className:h,value:"byPropName",label:`property name (${e.params.propName})`}),e.params.category&&t.jsx(x,{className:h,value:"byCategory",label:`category (${e.params.category})`}),e.params.from&&t.jsx(x,{className:h,value:"byInstanceName",label:`from (${e.params.from})`}),e.params.filepath&&t.jsx(x,{className:h,value:"byFilepath",label:`filepath (${j(e.params.filepath)})`})]})})})})]})}})})};export{Fe as UtilityDetails};
