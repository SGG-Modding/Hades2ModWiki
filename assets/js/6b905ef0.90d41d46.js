"use strict";(self.webpackChunkhades_2_mod_wiki=self.webpackChunkhades_2_mod_wiki||[]).push([[49648],{6756:(e,l,d)=>{d.r(l),d.d(l,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"h2m-docs/tables/rom.mods","title":"Table: rom.mods","description":"Fields (1)","source":"@site/docs/h2m-docs/tables/rom.mods.md","sourceDirName":"h2m-docs/tables","slug":"/h2m-docs/tables/rom.mods","permalink":"/Hades2ModWiki/docs/h2m-docs/tables/rom.mods","draft":false,"unlisted":false,"editUrl":"https://github.com/sgg-modding/hades2modwiki/tree/main/docs/h2m-docs/tables/rom.mods.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Table: rom.mime","permalink":"/Hades2ModWiki/docs/h2m-docs/tables/rom.mime"},"next":{"title":"Table: rom.on_import","permalink":"/Hades2ModWiki/docs/h2m-docs/tables/rom.on_import"}}');var o=d(74848),s=d(28453);const i={},a="Table: rom.mods",r={},c=[{value:"Fields (1)",id:"fields-1",level:2},{value:"<code>[Mod GUID]</code>",id:"mod-guid",level:3},{value:"Functions (2)",id:"functions-2",level:2},{value:"<code>loading_order()</code>",id:"loading_order",level:3},{value:"<code>on_all_mods_loaded(callback)</code>",id:"on_all_mods_loadedcallback",level:3}];function t(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.header,{children:(0,o.jsx)(l.h1,{id:"table-rommods",children:"Table: rom.mods"})}),"\n",(0,o.jsx)(l.h2,{id:"fields-1",children:"Fields (1)"}),"\n",(0,o.jsx)(l.h3,{id:"mod-guid",children:(0,o.jsx)(l.code,{children:"[Mod GUID]"})}),"\n",(0,o.jsxs)(l.p,{children:["Each mod once loaded will have a key in this table, the key will be their guid string and the value their ",(0,o.jsx)(l.code,{children:"_ENV"}),"."]}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsxs)(l.li,{children:["Type: ",(0,o.jsx)(l.code,{children:"string"})]}),"\n"]}),"\n",(0,o.jsx)(l.h2,{id:"functions-2",children:"Functions (2)"}),"\n",(0,o.jsx)(l.h3,{id:"loading_order",children:(0,o.jsx)(l.code,{children:"loading_order()"})}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.strong,{children:"Returns:"}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"table<int, string>"}),": Table containing the order in which mods are loaded by the mod loader."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(l.p,{children:(0,o.jsx)(l.strong,{children:"Example Usage:"})}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-lua",children:"table<int, string> = rom.mods.loading_order()\n"})}),"\n",(0,o.jsx)(l.h3,{id:"on_all_mods_loadedcallback",children:(0,o.jsx)(l.code,{children:"on_all_mods_loaded(callback)"})}),"\n",(0,o.jsx)(l.p,{children:"Registers a callback that will be called once all mods are loaded. Will be called instantly if mods are already loaded and that you are just hot-reloading your mod."}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.strong,{children:"Parameters:"}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"callback"})," (function): callback that will be called once all mods are loaded. The callback function should match signature func()"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(l.p,{children:(0,o.jsx)(l.strong,{children:"Example Usage:"})}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-lua",children:"rom.mods.on_all_mods_loaded(callback)\n"})})]})}function h(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,o.jsx)(l,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},28453:(e,l,d)=>{d.d(l,{R:()=>i,x:()=>a});var n=d(96540);const o={},s=n.createContext(o);function i(e){const l=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:l},e.children)}}}]);