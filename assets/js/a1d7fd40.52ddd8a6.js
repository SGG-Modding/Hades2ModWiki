"use strict";(self.webpackChunkhades_2_mod_wiki=self.webpackChunkhades_2_mod_wiki||[]).push([[68316],{72224:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"h2m-docs/classes/rom.config.config_file","title":"Class: rom.config.config_file","description":"A helper class to handle persistent data.","source":"@site/docs/h2m-docs/classes/rom.config.config_file.md","sourceDirName":"h2m-docs/classes","slug":"/h2m-docs/classes/rom.config.config_file","permalink":"/Hades2ModWiki/docs/h2m-docs/classes/rom.config.config_file","draft":false,"unlisted":false,"editUrl":"https://github.com/sgg-modding/hades2modwiki/tree/main/docs/h2m-docs/classes/rom.config.config_file.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Class: rom.config.config_entry","permalink":"/Hades2ModWiki/docs/h2m-docs/classes/rom.config.config_entry"},"next":{"title":"Class: rom.lua_patch","permalink":"/Hades2ModWiki/docs/h2m-docs/classes/rom.lua_patch"}}');var c=i(74848),o=i(28453);const l={},d="Class: rom.config.config_file",r={},t=[{value:"Fields (3)",id:"fields-3",level:2},{value:"<code>owner_guid</code>",id:"owner_guid",level:3},{value:"<code>config_file_path</code>",id:"config_file_path",level:3},{value:"<code>entries</code>",id:"entries",level:3},{value:"Constructors (1)",id:"constructors-1",level:2},{value:"<code>new(config_path, save_on_init)</code>",id:"newconfig_path-save_on_init",level:3},{value:"Functions (4)",id:"functions-4",level:2},{value:"<code>bind(section, key, default_value, description)</code>",id:"bindsection-key-default_value-description",level:3},{value:"<code>remove(section, key)</code>",id:"removesection-key",level:3},{value:"<code>save()</code>",id:"save",level:3},{value:"<code>reload()</code>",id:"reload",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"class-romconfigconfig_file",children:"Class: rom.config.config_file"})}),"\n",(0,c.jsx)(n.p,{children:"A helper class to handle persistent data."}),"\n",(0,c.jsx)(n.h2,{id:"fields-3",children:"Fields (3)"}),"\n",(0,c.jsx)(n.h3,{id:"owner_guid",children:(0,c.jsx)(n.code,{children:"owner_guid"})}),"\n",(0,c.jsx)(n.p,{children:"The owner GUID of this config file."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Type: ",(0,c.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"config_file_path",children:(0,c.jsx)(n.code,{children:"config_file_path"})}),"\n",(0,c.jsx)(n.p,{children:"The file path of this config file."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Type: ",(0,c.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"entries",children:(0,c.jsx)(n.code,{children:"entries"})}),"\n",(0,c.jsx)(n.p,{children:"All config entries of the config file."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Type: ",(0,c.jsx)(n.code,{children:"table<config_definition, config_entry>"})]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"constructors-1",children:"Constructors (1)"}),"\n",(0,c.jsx)(n.h3,{id:"newconfig_path-save_on_init",children:(0,c.jsx)(n.code,{children:"new(config_path, save_on_init)"})}),"\n",(0,c.jsx)(n.p,{children:"Create a new config file at the specified config path."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"config_path"})," (string): Full path to a file that contains settings. The file will be created as needed. It's recommended to use ",(0,c.jsx)(n.code,{children:".cfg"})," as the file extension. The mod manager will pick it up and make it show nicely inside the mod manager UI."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"save_on_init"})," (bool): If the config file/directory doesn't exist, create it immediately."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"myInstance = config.config_file:new(config_path, save_on_init)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"functions-4",children:"Functions (4)"}),"\n",(0,c.jsx)(n.h3,{id:"bindsection-key-default_value-description",children:(0,c.jsx)(n.code,{children:"bind(section, key, default_value, description)"})}),"\n",(0,c.jsx)(n.p,{children:"Create a new setting. The setting is saved to drive and loaded automatically.\r\nEach section and key pair can be used to add only one setting,\r\ntrying to add a second setting will throw an exception."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"section"})," (string): Section/category/group of the setting. Settings are grouped by this."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"key"})," (string): Name of the setting."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"default_value"})," (bool or number or string): Value of the setting if the setting was not created yet."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"description"})," (string): Simple description of the setting shown to the user."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"config_entry"}),": new config_entry object."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"config_entry = rom.config.config_file:bind(section, key, default_value, description)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"removesection-key",children:(0,c.jsx)(n.code,{children:"remove(section, key)"})}),"\n",(0,c.jsx)(n.p,{children:"Removes a setting from the config file."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"section"})," (string): Section/category/group of the setting. Settings are grouped by this."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"key"})," (string): Name of the setting."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"rom.config.config_file:remove(section, key)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"save",children:(0,c.jsx)(n.code,{children:"save()"})}),"\n",(0,c.jsx)(n.p,{children:"Writes the config to disk."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"rom.config.config_file:save()\n"})}),"\n",(0,c.jsx)(n.h3,{id:"reload",children:(0,c.jsx)(n.code,{children:"reload()"})}),"\n",(0,c.jsx)(n.p,{children:"Reloads the config from disk. Unsaved changes are lost."}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Example Usage:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"rom.config.config_file:reload()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var s=i(96540);const c={},o=s.createContext(c);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);