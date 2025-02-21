"use strict";(self.webpackChunkhades_2_mod_wiki=self.webpackChunkhades_2_mod_wiki||[]).push([[84725],{41089:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"creating-mods/audio/adding-voicelines","title":"Adding Voicelines","description":"Learn how to add new voicelines to the game.","source":"@site/docs/creating-mods/audio/adding-voicelines.md","sourceDirName":"creating-mods/audio","slug":"/creating-mods/audio/adding-voicelines","permalink":"/Hades2ModWiki/docs/creating-mods/audio/adding-voicelines","draft":false,"unlisted":false,"editUrl":"https://github.com/sgg-modding/hades2modwiki/tree/main/docs/creating-mods/audio/adding-voicelines.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Prerequisites","permalink":"/Hades2ModWiki/docs/creating-mods/audio/prerequisites"},"next":{"title":"Adding Sounds & Music","permalink":"/Hades2ModWiki/docs/creating-mods/audio/adding-sounds-music"}}');var t=i(74848),r=i(28453);const a={sidebar_position:2},s="Adding Voicelines",d={},l=[{value:"Basics",id:"basics",level:2},{value:"Creating voiceover files",id:"creating-voiceover-files",level:2},{value:"Prepare your voicelines",id:"prepare-your-voicelines",level:3},{value:"Create an FMOD Studio project",id:"create-an-fmod-studio-project",level:3},{value:"Convert <code>.bank</code> files to <code>.fsb</code> and <code>.txt</code> files",id:"convert-bank-files-to-fsb-and-txt-files",level:3},{value:"Load voiceover files in your mod",id:"load-voiceover-files-in-your-mod",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"adding-voicelines",children:"Adding Voicelines"})}),"\n",(0,t.jsx)(n.p,{children:"Learn how to add new voicelines to the game."}),"\n",(0,t.jsx)(n.admonition,{title:"Install the required tools",type:"info",children:(0,t.jsxs)(n.p,{children:["Make sure you have followed the ",(0,t.jsx)(n.a,{href:"/Hades2ModWiki/docs/creating-mods/audio/prerequisites",children:"prerequisites"})," page to install the necessary tools before proceeding.\r\nNote that opposed the guidance in ",(0,t.jsx)(n.a,{href:"/Hades2ModWiki/docs/creating-mods/audio/adding-sounds-music",children:"Adding Sounds & Music"}),", you do not need the template project linked there in order to add voicelines to the game."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Reference mod",type:"info",children:(0,t.jsxs)(n.p,{children:["You can refer to the work-in-progress ",(0,t.jsx)(n.a,{href:"https://github.com/NikkelM/Hades-II-HadesBiomes",children:"Hades in Hades II"})," mod as an example of how to add voicelines to the game using this method.\r\nThis project is very extensive and goes way beyond the scope of adding voicelines, so please replace this reference with another mod if you come across one that is more fitting!"]})}),"\n",(0,t.jsx)(n.h2,{id:"basics",children:"Basics"}),"\n",(0,t.jsxs)(n.p,{children:["In Hades II, voicelines are stored in ",(0,t.jsx)(n.code,{children:"<SpeakerName>.fsb"})," files, with supporting ",(0,t.jsx)(n.code,{children:"<SpeakerName>.txt"})," files that define the order of voicelines in the corresponding ",(0,t.jsx)(n.code,{children:".fsb"}),' file, we\'ll call these two files together the "voiceover files" for a speaker.\r\nVoiceover files exist per speaker, and can have different variants for different contexts as well, e.g. there are ',(0,t.jsx)(n.code,{children:"MelinoeField"})," and ",(0,t.jsx)(n.code,{children:"Melinoe"})," voiceover files, in the context of being in the Hub/Crossroads, or in a run."]}),"\n",(0,t.jsxs)(n.p,{children:["Voiceover files are stored in the ",(0,t.jsx)(n.code,{children:"Content/Audio/Desktop/VO"})," folder in your Hades II installation."]}),"\n",(0,t.jsx)(n.h2,{id:"creating-voiceover-files",children:"Creating voiceover files"}),"\n",(0,t.jsx)(n.admonition,{title:"Not all speakername formats are supported",type:"warning",children:(0,t.jsxs)(n.p,{children:["Loading voiceover files is handled in-engine, and not all speaker name (filename) formats work. If it seems the voiceover files for your speaker are not loading correctly, try using a different name.\r\nAn example of a speaker name that does not work is ",(0,t.jsx)(n.code,{children:"MegaeraHome"}),", while ",(0,t.jsx)(n.code,{children:"Megaera"})," and ",(0,t.jsx)(n.code,{children:"MegaeraField"})," do work.\r\nIt's possible that there are still some hardcoded references to speaker names in the engine that prevent custom voiceover files from loading correctly.\r\nIf you use original speaker names (i.e. not referencing existing speakers in Hades or Hades II), you should not run into this problem."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Example speaker name",type:"info",children:(0,t.jsxs)(n.p,{children:["For this guide, we will use the speaker name ",(0,t.jsx)(n.code,{children:"Megaera"})," as an example."]})}),"\n",(0,t.jsx)(n.h3,{id:"prepare-your-voicelines",children:"Prepare your voicelines"}),"\n",(0,t.jsx)(n.p,{children:"Voicelines you want to add to the game should have the following format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Megaera_0053.ogg\r\nMegaera_0057.ogg\r\nMegaera_0061.ogg\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The specific numbers do not matter (you do not need to have these ascending, and numbers in between can be missing), but try to adhere to the four digit numbering style that Hades II uses.\r\nIt's possible that the base assets do not have to be ",(0,t.jsx)(n.code,{children:".ogg"})," files to start with (before importing them into FMOD Studio), but it is recommended."]}),"\n",(0,t.jsx)(n.admonition,{title:"Event names must start with the speaker name!",type:"danger",children:(0,t.jsxs)(n.p,{children:["All voiceover event names in FMOD Studio ",(0,t.jsx)(n.strong,{children:"MUST"})," start with the speaker's exact name, followed by an underscore ",(0,t.jsx)(n.code,{children:"_"}),", otherwise the game will not load them!\r\nThus it is recommended to name the asset files in this format as well, to prevent requiring renaming within FMOD Studio."]})}),"\n",(0,t.jsx)(n.h3,{id:"create-an-fmod-studio-project",children:"Create an FMOD Studio project"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new project in FMOD Studio and create a folder with the name of your speaker (",(0,t.jsx)(n.code,{children:"Megaera"}),").\r\nImport your voicelines into this folder, with each asset being imported as a new 2D event:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(61645).A+"",children:(0,t.jsx)(n.img,{alt:"Import assets into FMOD Studio",src:i(44359).A+"",width:"439",height:"481"})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(14272).A+"",children:(0,t.jsx)(n.img,{alt:"FMOD Studio folder structure",src:i(43702).A+"",width:"297",height:"160"})})}),"\n",(0,t.jsxs)(n.p,{children:["Now, right-click your folder name, and select ",(0,t.jsx)(n.code,{children:"Assign to Bank"})," -> ",(0,t.jsx)(n.code,{children:"New Bank..."}),".\r\nName this bank the ",(0,t.jsx)(n.strong,{children:"exact"})," same as your speaker name (",(0,t.jsx)(n.code,{children:"Megaera"}),")."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(29286).A+"",children:(0,t.jsx)(n.img,{alt:"FMOD Studio bank structure",src:i(68476).A+"",width:"301",height:"162"})})}),"\n",(0,t.jsxs)(n.p,{children:["You should now see the previous ",(0,t.jsx)(n.code,{children:"#unassigned"})," tag disappear from the events in your folder, and all events having been added to the bank with the speaker's name.\r\nRepeat this process for each different speaker you want to add voicelines for."]}),"\n",(0,t.jsxs)(n.p,{children:["You can now build your project through ",(0,t.jsx)(n.code,{children:"File"})," -> ",(0,t.jsx)(n.code,{children:"Build"})," to create a ",(0,t.jsx)(n.code,{children:".bank"})," file for each of your speakers in the ",(0,t.jsx)(n.code,{children:"Build/Desktop"})," folder of your project."]}),"\n",(0,t.jsxs)(n.h3,{id:"convert-bank-files-to-fsb-and-txt-files",children:["Convert ",(0,t.jsx)(n.code,{children:".bank"})," files to ",(0,t.jsx)(n.code,{children:".fsb"})," and ",(0,t.jsx)(n.code,{children:".txt"})," files"]}),"\n",(0,t.jsxs)(n.p,{children:["Extract the ",(0,t.jsx)(n.code,{children:".bank"})," files you created in the previous step using FMOD bank tools, which will create a ",(0,t.jsx)(n.code,{children:".fsb"})," file for each ",(0,t.jsx)(n.code,{children:".bank"})," file in the ",(0,t.jsx)(n.code,{children:"fsb"})," output folder, and a folder containing the voicelines as ",(0,t.jsx)(n.code,{children:".wav"})," files (we do not need these), as well as a ",(0,t.jsx)(n.code,{children:".txt"})," file - in the ",(0,t.jsx)(n.code,{children:".wav"})," folder."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".fsb"})," file is the voiceover file for your speaker, which you can use as-is in your mod.\r\nIn our example, we will create a ",(0,t.jsx)(n.code,{children:"data/Content/Audio/Desktop/VO"})," folder for our mod, into which we can place the ",(0,t.jsx)(n.code,{children:"Megaera.fsb"})," file.\r\nThe contents of this folder will be added to the ",(0,t.jsx)(n.code,{children:"plugins_data"})," folder in our Thunderstore mod package."]}),"\n",(0,t.jsxs)(n.p,{children:["You will need to convert the contents of the ",(0,t.jsx)(n.code,{children:".txt"})," file to the format expected by Hades II."]}),"\n",(0,t.jsxs)(n.p,{children:["The file created by FMOD bank tools will contain each asset/filename (voiceline) on a new line, in the order they were added to the bank by FMOD Studio.\r\nIf you renamed your events in the project, the names in the ",(0,t.jsx)(n.code,{children:".txt"})," file will be the original names of the assets, not the renamed ones.\r\nAs long as the event name in FMOD Studio matches the folder, bank and speaker name, the game will load the correct events if if the original filename was different.\r\nDo ",(0,t.jsx)(n.strong,{children:"not"})," change the names in the ",(0,t.jsx)(n.code,{children:".txt"})," file."]}),"\n",(0,t.jsx)(n.admonition,{title:"Do not change the order of voicelines!",type:"danger",children:(0,t.jsxs)(n.p,{children:["The voicelines may be in a different order in the ",(0,t.jsx)(n.code,{children:".txt"})," file than they were in FMOD Studio, but you must not change the order of the voicelines in the ",(0,t.jsx)(n.code,{children:".txt"})," file, as this will cause the game to play the wrong events."]})}),"\n",(0,t.jsx)(n.p,{children:"The original file may look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Megaera_0053.wav\r\nMegaera_0061.wav\r\nMegaera_0057.wav\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In our example, the game would expect the ",(0,t.jsx)(n.code,{children:".txt"})," file to have the following format:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"#ifndef _Megaera_H\r\n#define _Megaera_H\r\n\r\n#define Megaera_0053 0\r\n#define Megaera_0061 1\r\n#define Megaera_0057 2\r\n\r\n#endif\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"#ifndef"})," and ",(0,t.jsx)(n.code,{children:"#define"})," lines must be added with the speaker name in the ",(0,t.jsx)(n.code,{children:"_SpeakerName_H"})," format."]}),"\n",(0,t.jsxs)(n.li,{children:["For each asset/voiceline, the line must start with ",(0,t.jsx)(n.code,{children:"#define"}),", followed by the original filename (without the extension), and the index of the voiceline in the ",(0,t.jsx)(n.code,{children:".fsb"})," file, starting from 0."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"#endif"})," line must be added at the end of the file."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The following snippet is a Powershell script you can use to automate the conversion of the ",(0,t.jsx)(n.code,{children:".txt"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Bank name that is being looked at\r\n$speakerName = "Megaera"\r\n# Reading the input .txt files directly from the output created by FMOD bank tools\r\n$inputFile = ".\\Fmod Bank Tools\\wav\\$speakerName\\$speakerName.txt"\r\n# The output file that will be created\r\n# This path would work if you have a data directory in the parent folder of this script\r\n$outputFile = ".\\..\\data\\Content\\Audio\\Desktop\\VO\\$speakerName.txt"\r\n\r\n# Reading the input file\r\n$content = Get-Content $inputFile\r\n$lineCount = $content.Length\r\n\r\n# Add the two header lines with the speakerName\r\n$header = @("#ifndef _${speakerName}_H", "#define _${speakerName}_H", "")\r\n\r\n# Translate the event names to the expected format\r\nfor ($i = 0; $i -lt $lineCount; $i++) {\r\n  $line = $content[$i] -replace \'\\.wav\', \'\'\r\n  $content[$i] = "#define $line $i"\r\n}\r\n\r\n# Combine the header, the modified content, and add the footer\r\n$footer = @("", "#endif")\r\n$finalContent = $header + $content + $footer\r\n\r\n# Write the final content to the output file\r\n$finalContent | Set-Content $outputFile\n'})}),"\n",(0,t.jsx)(n.h2,{id:"load-voiceover-files-in-your-mod",children:"Load voiceover files in your mod"}),"\n",(0,t.jsx)(n.admonition,{title:"Copy voiceover files from your mod to the game's installation directory",type:"info",children:(0,t.jsxs)(n.p,{children:["The game can only load voiceover files from the ",(0,t.jsx)(n.code,{children:"Content/Audio/Desktop/VO"})," folder in the game's installation directory.\r\nAt the moment, we do not have a way to load modded voiceover files directly from a mod's folder, so you will need to have your mod copy the voiceover files to the game's installation directory, or instruct users to do so manually when they install your mod.\r\nTry to automate this process to happen once when the mod is first installed, to reduce the amount of manual work required by the user."]})}),"\n",(0,t.jsxs)(n.p,{children:["In your mod, you can load voiceover files by name using the ",(0,t.jsx)(n.code,{children:"LoadVoicebanks(speakerNames)"})," function.\r\n",(0,t.jsx)(n.code,{children:"speakerNames"})," is a table of strings, where each string is the name of a voiceover file (speaker) to load."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'game.LoadVoicebanks( { "Megaera" } )\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you want to load all voiceover files for a speaker, you can also use the following wildcard syntax, e.g. if you added ",(0,t.jsx)(n.code,{children:"Megaera"})," and ",(0,t.jsx)(n.code,{children:"MegaeraField"})," voiceover files, you can use:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'game.LoadVoicebanks( { "Megaera*" } )\n'})}),"\n",(0,t.jsxs)(n.p,{children:["which will load all voiceover files that start with ",(0,t.jsx)(n.code,{children:"Megaera"}),".\r\nThe wildcard can be placed at the start or end of the string."]}),"\n",(0,t.jsxs)(n.p,{children:["In-game, you can reference voicelines by the event name in FMOD Studio, prefixed by ",(0,t.jsx)(n.code,{children:"/VO/"}),", e.g. as such:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local megaeraVoicelines = {\r\n  {\r\n    RandomRemaining = true,\r\n    PreLineWait = 0.25,\r\n    Cooldowns = {\r\n      { Name = "MegaeraSpeechCooldown", Time = 10 }\r\n    },\r\n\r\n    { Cue = "/VO/Megaera_0053", Text = "{#Emph}Tsch!" },\r\n    { Cue = "/VO/Megaera_0057", Text = "Hmph.", PlayFirst = true },\r\n    { Cue = "/VO/Megaera_0061", Text = "Hmm." },\r\n  },\r\n}\r\n\r\ngame.thread(PlayVoicelines( megaeraVoicelines ))\n'})}),"\n",(0,t.jsx)(n.p,{children:"...or add the new cues to existing voiceline tables."}),"\n",(0,t.jsx)(n.admonition,{title:"Subtitles",type:"info",children:(0,t.jsx)(n.p,{children:"As of yet it is unclear how to add substitles for custom voicelines.\r\nIf you find a way to do this, please update this page!"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},29286:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/files/fmod_bank_structure-6c6ed2768c8f2ca85867f687c88a95ea.png"},14272:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/files/fmod_folder_structure-0cef167b30f62c62500655bde61336ed.png"},61645:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/files/fmod_import_assets-f80d5a21078035bd26025cc54a1403dc.png"},68476:(e,n,i)=>{i.d(n,{A:()=>o});const o="data:image/png;base64,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"},43702:(e,n,i)=>{i.d(n,{A:()=>o});const o="data:image/png;base64,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"},44359:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/fmod_import_assets-f80d5a21078035bd26025cc54a1403dc.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var o=i(96540);const t={},r=o.createContext(t);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);