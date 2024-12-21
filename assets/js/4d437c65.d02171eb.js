"use strict";(self.webpackChunkhades_2_mod_wiki=self.webpackChunkhades_2_mod_wiki||[]).push([[81233],{20288:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>h,toc:()=>d});var r=s(74848),t=s(28453);const i={},l="Table: rom.path",h={id:"h2m-docs/tables/rom.path",title:"Table: rom.path",description:"Table containing helpers for manipulating file or directory paths",source:"@site/docs/h2m-docs/tables/rom.path.md",sourceDirName:"h2m-docs/tables",slug:"/h2m-docs/tables/rom.path",permalink:"/Hades2ModWiki/docs/h2m-docs/tables/rom.path",draft:!1,unlisted:!1,editUrl:"https://github.com/sgg-modding/hades2modwiki/tree/main/docs/h2m-docs/tables/rom.path.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Table: rom.on_import",permalink:"/Hades2ModWiki/docs/h2m-docs/tables/rom.on_import"},next:{title:"Table: rom.paths",permalink:"/Hades2ModWiki/docs/h2m-docs/tables/rom.paths"}},c={},d=[{value:"Functions (7)",id:"functions-7",level:2},{value:"<code>combine(path)</code>",id:"combinepath",level:3},{value:"<code>get_parent(path)</code>",id:"get_parentpath",level:3},{value:"<code>get_directories(root_path)</code>",id:"get_directoriesroot_path",level:3},{value:"<code>get_files(root_path)</code>",id:"get_filesroot_path",level:3},{value:"<code>filename(path)</code>",id:"filenamepath",level:3},{value:"<code>stem(path)</code>",id:"stempath",level:3},{value:"<code>create_directory(path)</code>",id:"create_directorypath",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"table-rompath",children:"Table: rom.path"})}),"\n",(0,r.jsx)(n.p,{children:"Table containing helpers for manipulating file or directory paths"}),"\n",(0,r.jsx)(n.h2,{id:"functions-7",children:"Functions (7)"}),"\n",(0,r.jsx)(n.h3,{id:"combinepath",children:(0,r.jsx)(n.code,{children:"combine(path)"})}),"\n",(0,r.jsx)(n.p,{children:"Combines strings into a path."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"})," (string): Any amount of string is accepted."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"string"}),": Returns the combined path"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"string = rom.path.combine(path)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"get_parentpath",children:(0,r.jsx)(n.code,{children:"get_parent(path)"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the parent directory of the specified path, including both absolute and relative paths."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"})," (string): The path for which to retrieve the parent directory."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"string"}),": Returns the parent path"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"string = rom.path.get_parent(path)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"get_directoriesroot_path",children:(0,r.jsx)(n.code,{children:"get_directories(root_path)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"root_path"})," (string): The path to the directory to search."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"string table"}),": Returns the names of subdirectories under the given root_path"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"string table = rom.path.get_directories(root_path)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"get_filesroot_path",children:(0,r.jsx)(n.code,{children:"get_files(root_path)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"root_path"})," (string): The path to the directory to search."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"string table"}),": Returns the names of all the files under the given root_path"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"string table = rom.path.get_files(root_path)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"filenamepath",children:(0,r.jsx)(n.code,{children:"filename(path)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"})," (string): The path for which to retrieve the filename."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"string"}),": Returns the filename identified by the path."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"string = rom.path.filename(path)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"stempath",children:(0,r.jsx)(n.code,{children:"stem(path)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"})," (string): The path for which to retrieve the stem."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"string"}),": Returns the stem of the filename identified by the path (i.e. the filename without the final extension)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"string = rom.path.stem(path)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create_directorypath",children:(0,r.jsx)(n.code,{children:"create_directory(path)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"})," (string): The path to the new directory to create."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"boolean"}),": true if a directory was newly created for the directory p resolves to, false otherwise."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"boolean = rom.path.create_directory(path)\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>h});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);