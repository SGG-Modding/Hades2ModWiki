"use strict";(self.webpackChunkhades_2_mod_wiki=self.webpackChunkhades_2_mod_wiki||[]).push([[92621],{24357:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=r(74848),l=r(28453);const i={},o="Table: rom.log",d={id:"h2m-docs/tables/rom.log",title:"Table: rom.log",description:"Table containing functions for printing to console / log file.",source:"@site/docs/h2m-docs/tables/rom.log.md",sourceDirName:"h2m-docs/tables",slug:"/h2m-docs/tables/rom.log",permalink:"/Hades2ModWiki/docs/h2m-docs/tables/rom.log",draft:!1,unlisted:!1,editUrl:"https://github.com/sgg-modding/hades2modwiki/tree/main/docs/h2m-docs/tables/rom.log.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Table: rom.inputs",permalink:"/Hades2ModWiki/docs/h2m-docs/tables/rom.inputs"},next:{title:"Table: rom.lpeg",permalink:"/Hades2ModWiki/docs/h2m-docs/tables/rom.lpeg"}},c={},a=[{value:"Functions (5)",id:"functions-5",level:2},{value:"<code>info(args)</code>",id:"infoargs",level:3},{value:"<code>warning(args)</code>",id:"warningargs",level:3},{value:"<code>debug(args)</code>",id:"debugargs",level:3},{value:"<code>error(arg, level)</code>",id:"errorarg-level",level:3},{value:"<code>refresh_filters()</code>",id:"refresh_filters",level:3}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"table-romlog",children:"Table: rom.log"})}),"\n",(0,s.jsx)(n.p,{children:"Table containing functions for printing to console / log file."}),"\n",(0,s.jsx)(n.h2,{id:"functions-5",children:"Functions (5)"}),"\n",(0,s.jsx)(n.h3,{id:"infoargs",children:(0,s.jsx)(n.code,{children:"info(args)"})}),"\n",(0,s.jsx)(n.p,{children:"Logs an informational message."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"args"})," (any)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"rom.log.info(args)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"warningargs",children:(0,s.jsx)(n.code,{children:"warning(args)"})}),"\n",(0,s.jsx)(n.p,{children:"Logs a warning message."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"args"})," (any)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"rom.log.warning(args)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"debugargs",children:(0,s.jsx)(n.code,{children:"debug(args)"})}),"\n",(0,s.jsx)(n.p,{children:"Logs a debug message."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"args"})," (any)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"rom.log.debug(args)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"errorarg-level",children:(0,s.jsx)(n.code,{children:"error(arg, level)"})}),"\n",(0,s.jsxs)(n.p,{children:["Logs an error message. This is a mirror of lua classic ",(0,s.jsx)(n.code,{children:"error"})," function."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"arg"})," (any)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"level"})," (integer)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"rom.log.error(arg, level)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"refresh_filters",children:(0,s.jsx)(n.code,{children:"refresh_filters()"})}),"\n",(0,s.jsx)(n.p,{children:"Refresh the log filters (Console and File) from the config file."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"rom.log.refresh_filters()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var s=r(96540);const l={},i=s.createContext(l);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);