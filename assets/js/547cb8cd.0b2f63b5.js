"use strict";(self.webpackChunkhades_2_mod_wiki=self.webpackChunkhades_2_mod_wiki||[]).push([[55009],{49153:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"h2m-docs/tables/rom.audio","title":"Table: rom.audio","description":"Functions (1)","source":"@site/docs/h2m-docs/tables/rom.audio.md","sourceDirName":"h2m-docs/tables","slug":"/h2m-docs/tables/rom.audio","permalink":"/Hades2ModWiki/docs/h2m-docs/tables/rom.audio","draft":false,"unlisted":false,"editUrl":"https://github.com/sgg-modding/hades2modwiki/tree/main/docs/h2m-docs/tables/rom.audio.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Table: ImGui","permalink":"/Hades2ModWiki/docs/h2m-docs/tables/ImGui"},"next":{"title":"Table: rom.config","permalink":"/Hades2ModWiki/docs/h2m-docs/tables/rom.config"}}');var s=t(74848),i=t(28453);const a={},r="Table: rom.audio",d={},l=[{value:"Functions (1)",id:"functions-1",level:2},{value:"<code>load_bank(file_path)</code>",id:"load_bankfile_path",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"table-romaudio",children:"Table: rom.audio"})}),"\n",(0,s.jsx)(n.h2,{id:"functions-1",children:"Functions (1)"}),"\n",(0,s.jsx)(n.h3,{id:"load_bankfile_path",children:(0,s.jsx)(n.code,{children:"load_bank(file_path)"})}),"\n",(0,s.jsxs)(n.p,{children:["The game currently use FMod Studio ",(0,s.jsx)(n.code,{children:"2.02.23"}),". You can query the version by clicking checking Properties -> Details of the game ",(0,s.jsx)(n.code,{children:"fmodstudio.dll"}),".\r\nIf your sound events correcty play but nothing can be heard, make sure that the guid of the Mixer masterBus, MixerInput output and MixerMaster id matches one from the game, one known to work is the guid that can be found inside the vanilla game file GUIDS.txt, called bus:/Game\r\nYou'll want to string replace the guids in the (at minimum 2) .xml files Master, Mixer, and any Metadata/Event events files that were made before the guid setup change"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file_path"})," (string): Path to the fmod .bank to load"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bool"}),": Returns true if bank loaded successfully."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"bool = rom.audio.load_bank(file_path)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);