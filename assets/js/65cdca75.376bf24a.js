"use strict";(self.webpackChunkhades_2_mod_wiki=self.webpackChunkhades_2_mod_wiki||[]).push([[11953],{33376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var i=t(26105),a=t(74848),r=t(28453);const s={title:"Multithreaded modding",slug:"multithreading",authors:"siuhnexus",tags:["multithreading","signal","processing","asynchronous"]},o="Multithreaded modding",l={authorsImageUrls:[void 0]},d=[{value:"Waiting and resuming",id:"waiting-and-resuming",level:2},{value:"Signal based processing",id:"signal-based-processing",level:2},{value:"But why should I care?",id:"but-why-should-i-care",level:2},{value:"Building a little example mod",id:"building-a-little-example-mod",level:2},{value:"Setting up",id:"setting-up",level:3},{value:"Hooking into the reward spawning",id:"hooking-into-the-reward-spawning",level:3},{value:"Displaying a random quote",id:"displaying-a-random-quote",level:3},{value:"Tagging threads for easy deletion",id:"tagging-threads-for-easy-deletion",level:3},{value:"Dispatching custom signals",id:"dispatching-custom-signals",level:3},{value:"A real-world example",id:"a-real-world-example",level:2},{value:"Final notes",id:"final-notes",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Any fun game has to deal with multiple jobs at the same time to provide a good experience. Hades 2 in particular plays Music and sound effects, moves enemies, reacts to the player's input, renders the beautiful scenery, manages game and run state and so on and so forth. For all this to work at the same time, the script and the engine run many functions in parallel. For example, the AI for every enemy gets its own thread to execute in."}),"\n",(0,a.jsxs)(n.p,{children:["On the lua scripting side of things (we don't know much about the engine) this is achieved using lua's built in coroutines. The difference between these coroutines and \"real\" multithreading is meaningful, but since it is neither relevant to this post's main point nor am I an expert on the topic I will just reference the lua docs on ",(0,a.jsx)(n.a,{href:"https://www.lua.org/pil/9.4.html",children:"coroutines vs. threads"}),". Also, I will continue to call the asynchronous workers threads, because Supergiant Games chooses this name aswell in their ",(0,a.jsx)(n.code,{children:"Main.lua"})," script."]}),"\n",(0,a.jsx)(n.h2,{id:"waiting-and-resuming",children:"Waiting and resuming"}),"\n",(0,a.jsx)(n.p,{children:"Sometimes one of these threads has to wait for something to happen in another thread. This is where the capability for any thread to yield execution while the thing hasn't happened comes in handy. For example, some enemies stand still while the player character is not in range. The enemy AI thread just tells the program to give execution time to other threads until the player character is in range for the AI to start doing something."}),"\n",(0,a.jsxs)(n.p,{children:["Supergiant provides some very useful helper methods to manage these kinds of behaviours in their ",(0,a.jsx)(n.code,{children:"Main.lua"})," script. In particular, the method ",(0,a.jsx)(n.code,{children:"waitUntil()"})," is used to yield until a certain condition is met. When you do a quick search through the codebase, you will find many examples of this (not only the one I picked out for this post)."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:t(83256).A+"",width:"1035",height:"726"})}),"\n",(0,a.jsx)(n.p,{children:"While looking at a few examples, you will notice that every call of this function has to provide some kind of special string. This string is the name of the signal that the thread is waiting for."}),"\n",(0,a.jsx)(n.h2,{id:"signal-based-processing",children:"Signal based processing"}),"\n",(0,a.jsx)(n.p,{children:"Signals are one method to handle reacting to things that happen. Many of you will also be familiar with events as a similar concept. The main difference here is that events are processed synchronously via callbacks and signals are processed asynchronously (for example by using different threads)."}),"\n",(0,a.jsxs)(n.p,{children:["While some signals in Hades 2 are triggered by the engine, the game also has lua functions for triggering signals, namely ",(0,a.jsx)(n.code,{children:"notify()"})," and ",(0,a.jsx)(n.code,{children:"notifyExistingWaiters()"}),' both in "Main.lua", which are used extensively (especially the latter). The first function registers that something, that can only happen once, has happened. This resumes all threads waiting for the signal and saves the information that this signal has been fired, so that future threads waiting for the signal can be resumed immediately. Despite this useful feature this function is used only very rarely throughout the scripts (and those uses are probably missed code updates, but I am not sure about this). The other function only continues currently waiting threads that a thing happened, which can happen multiple times.']}),"\n",(0,a.jsx)(n.h2,{id:"but-why-should-i-care",children:"But why should I care?"}),"\n",(0,a.jsxs)(n.p,{children:["Many modding tasks can be achieved by starting threads that wait for a certain signal. As an example, I will show you how to build a simple mod that prints a stoic quote every time a boon is obtained. To do this, I obtained quotes in a JSON file from ",(0,a.jsx)(n.a,{href:"https://gist.github.com/miharekar/d57b58b017c457cd18062a1c36d82e02",children:"here"})," and transformed them into a lua table with this quick and dirty python script:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import json;\r\n\r\nf = open("quotes.json", \'r\', encoding="UTF-8")\r\ncontent = f.read()\r\nf.close()\r\n\r\ndata = json.loads(content)\r\nquoteArray = data["quotes"]\r\n\r\nf = open("quotes.lua", "w", encoding="UTF-8")\r\nf.write("StoicQuotes = {\\n")\r\n\r\nfor i in range(len(quoteArray)):\r\n    pivot = quoteArray[i]\r\n    text = str.replace(pivot["text"], "\\"", "\\\\\\"")\r\n    author = str.replace(pivot["author"], "\\"", "\\\\\\"")\r\n    f.write(f"    {{\\n        Quote = \\042{text}\\042,\\n        Author = \\042{author}\\042\\n    }},\\n")\r\n\r\nf.write("}")\r\nf.close()\n'})}),"\n",(0,a.jsx)(n.h2,{id:"building-a-little-example-mod",children:"Building a little example mod"}),"\n",(0,a.jsx)(n.h3,{id:"setting-up",children:"Setting up"}),"\n",(0,a.jsxs)(n.p,{children:["For this mod I use the ",(0,a.jsx)(n.a,{href:"https://github.com/SGG-Modding/Hades2ModTemplate",children:"Hades 2 Mod Template"}),". After cloning (or downloading), we just make one little adjustment. We want every global (or mod-local) variable to be PascalCased. For example, line 28 in ",(0,a.jsx)(n.code,{children:"main.lua"})," becomes ",(0,a.jsx)(n.code,{children:"ModUtil = mods['SGG_Modding-ModUtil']"})," instead of ",(0,a.jsx)(n.code,{children:"modutil = mods['SGG_Modding-ModUtil']"}),". Now the ",(0,a.jsx)(n.code,{children:"quotes.lua"})," file has to be copied into the ",(0,a.jsx)(n.code,{children:"src/"})," folder of the mod. After that, the quotes can be imported in ",(0,a.jsx)(n.code,{children:"main.lua"})," like this:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"main.lua"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"...\r\nlocal function on_ready()\r\n    -- what to do when we are ready, but not re-do on reload.\r\n    if Config.Enabled == false then return end\r\n\r\n    import 'ready.lua'\r\n    import 'quotes.lua'\r\nend\r\n...\n"})}),"\n",(0,a.jsx)(n.h3,{id:"hooking-into-the-reward-spawning",children:"Hooking into the reward spawning"}),"\n",(0,a.jsxs)(n.p,{children:["Next, we need to know when a reward gets spawned, so that we can start listening to the signal indicating that the boon choice is finished. After a bit of searching, I found the function ",(0,a.jsx)(n.code,{children:"SpawnRoomReward()"})," in ",(0,a.jsx)(n.code,{children:"RewardLogic.lua"}),". This function creates the reward and returns it. Thus, we can get access to the properties of the reward. One of these properties indicates whether the reward is associated with a menu to choose upgrade options from. If it is, the menu will fire a signal when it is closed and the choice has benn made. This is exactly when we want to display our quotes."]}),"\n",(0,a.jsx)(n.p,{children:"We set up the hook like this:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"ready.lua"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'---@meta _\r\n-- globals we define are private to our plugin!\r\n---@diagnostic disable: lowercase-global\r\n\r\n-- here is where your mod sets up all the things it will do.\r\n-- this file will not be reloaded if it changes during gameplay\r\n-- \tso you will most likely want to have it reference\r\n--\tvalues and functions later defined in `reload.lua`.\r\n\r\nModUtil.mod.Path.Wrap("SpawnRoomReward", function(base, event, source)\r\n\treturn patch_SpawnRoomReward(base, event, source)\r\nend)\n'})}),"\n",(0,a.jsx)(n.p,{children:"We implement the function like this:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"reload.lua"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"function patch_SpawnRoomReward(base, event, source)\r\n\tlocal reward = base(event, source)\r\n\r\n\tif reward ~= nil and reward.MenuNotify ~= nil then\r\n\t\tthread(waitingPrinter, Game.UIData.BoonMenuId)\r\n\tend\r\n\r\n\treturn reward\r\nend\r\n\r\nfunction waitingPrinter(signalName)\r\n\twaitUntil(signalName)\r\nend\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now we spawn a thread every time a reward with an associated boon menu is spawned. This thread waits for the close signal of the menu but does not do anything after that. We change that in the next step."}),"\n",(0,a.jsx)(n.h3,{id:"displaying-a-random-quote",children:"Displaying a random quote"}),"\n",(0,a.jsxs)(n.p,{children:["There is a useful function for displaying text near a unit named ",(0,a.jsx)(n.code,{children:"InCombatText()"})," which can be found in ",(0,a.jsx)(n.code,{children:"CombatPresentation.lua"}),". This function needs the object ID of a unit, some text to display and a display duration. We choose a random quote and build a string to display from it (pasting newlines at some places to prevent text overflow), take the object ID from the ",(0,a.jsx)(n.code,{children:"Hero"})," object and display the quote for 15 seconds."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"reload.lua"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'...\r\nfunction waitingPrinter(signalName)\r\n\twaitUntil(signalName)\r\n\tlocal quote = GetRandomValue(StoicQuotes)\r\n\tlocal spaceChars = 0\r\n\tlocal quoteText = quote.Quote:gsub("%s", function(c)\r\n\t\tspaceChars = spaceChars + 1\r\n\t\tif spaceChars == 10 then\r\n\t\t\tspaceChars = 0\r\n\t\t\treturn "\\n"\r\n\t\tend\r\n\t\treturn c\r\n\tend)\r\n\tlocal toPrint = "\\"" .. quoteText .. "\\" - " .. quote.Author\r\n\tInCombatText(Game.CurrentRun.Hero.ObjectId, toPrint, 15)\r\nend\n'})}),"\n",(0,a.jsx)(n.h3,{id:"tagging-threads-for-easy-deletion",children:"Tagging threads for easy deletion"}),"\n",(0,a.jsxs)(n.p,{children:["Since all threads are saved in a table in the ",(0,a.jsx)(n.code,{children:"Main.lua"})," script of the game, we should clean up the threads that didn't trigger when they can't trigger anymore. In this example a quote cannot be printed anymore when the room is left without (for whatever reason) picking up the boon. There is built-in functionality for this once again with the function ",(0,a.jsx)(n.code,{children:"killTaggedThreads()"})," in ",(0,a.jsx)(n.code,{children:"Main.lua"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Every thread that calls ",(0,a.jsx)(n.code,{children:"waitUntil()"})," can provide an optional tag name as the second argument. This way, the thread can be killed via calling ",(0,a.jsx)(n.code,{children:"killTaggedThreads()"})," at any point with the chosen tag name. We can use this in a hook for the ",(0,a.jsx)(n.code,{children:"LeaveRoom()"})," function from ",(0,a.jsx)(n.code,{children:"RoomLogic.lua"})," to dispose of the threads that didn't trigger."]}),"\n",(0,a.jsx)(n.p,{children:"Setting the additional hook:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"ready.lua"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'...\r\nModUtil.mod.Path.Wrap("LeaveRoom", function(base, currentRun, door)\r\n\treturn patch_LeaveRoom(base, currentRun, door)\r\nend)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Implementing tag name and desctruction:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"reload.lua"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'...\r\nfunction waitingPrinter(signalName)\r\n\twaitUntil(signalName, "Siuhnexus-StoicQuotes-QuotePrinter")\r\n\t...\r\nend\r\n\r\nfunction patch_LeaveRoom(base, currentRun, door)\r\n\tkillTaggedThreads("Siuhnexus-StoicQuotes-QuotePrinter")\r\n\tbase(currentRun, door)\r\nend\n'})}),"\n",(0,a.jsx)(n.p,{children:"Since every tag name has to play nice with the game tags and other mods, it is best practice to prefix every custom tag with your creator name and your mod name. You can write a convenience function in larger projects like this:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"reload.lua"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'function prefixTag(tagName)\r\n\treturn "Siuhnexus-StoicQuotes-"..tagName\r\nend\r\n...\r\nfunction waitingPrinter(signalName)\r\n\twaitUntil(signalName, prefixTag("QuotePrinter"))\r\n\t...\r\nend\r\n\r\nfunction patch_LeaveRoom(base, currentRun, door)\r\n\tkillTaggedThreads(prefixTag("QuotePrinter"))\r\n\tbase(currentRun, door)\r\nend\n'})}),"\n",(0,a.jsx)(n.h3,{id:"dispatching-custom-signals",children:"Dispatching custom signals"}),"\n",(0,a.jsx)(n.p,{children:"With this system, you can even allow other mods to react to your quotes being printed. Just dispatch a custom signal (prefixed to play nice):"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"reload.lua"})})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'function prefixTag(tagName)\r\n\treturn "Siuhnexus-StoicQuotes-"..tagName\r\nend\r\nfunction prefixSignal(signalName)\r\n\treturn "Siuhnexus-StoicQuotes-"..signalName\r\nend\r\n...\r\nfunction waitingPrinter(signalName)\r\n\t...\r\n\tnotifyExistingWaiters(prefixSignal("QuotePrinted"))\r\nend\n'})}),"\n",(0,a.jsx)(n.h2,{id:"a-real-world-example",children:"A real-world example"}),"\n",(0,a.jsx)(n.p,{children:'The reason for me knowing about this and being very excited about it is my first little dabble into Hades 2 modding. I was looking for some fun mods and came across "MultiReward" by "abevol" on Thunderstore. This mod lets you spawn multiple copies of any room reward and lifts the maximum god restriction to let you experience what the full support of Olympus would be like. This is very fun, but the old way of spawning the boon had its limitations. Since rewards were spawned in a loop all at the same location and time, the screen was full of glow effects when spawning many boons, making it hard to see the god icon. Also, the bow in the fields of mourning pinged once for every spawned reward, which was annoying. Caged rewards could be obtained before clearing the encounter since every cage is associated with only one reward aswell.'}),"\n",(0,a.jsxs)(n.p,{children:["This problem could be resolved by firing a custom signal in a very cautious ",(0,a.jsx)(n.code,{children:"OnUsed"})," engine hook and spawning a thread in ",(0,a.jsx)(n.code,{children:"SpawnRoomReward()"})," which reacted to the custom event. This spawns the rewards one after another without blocking the game logic and was exactly what I was looking for. If you are interested in the details, just check out the ",(0,a.jsx)(n.a,{href:"https://github.com/abevol/MultiReward",children:"source code"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"final-notes",children:"Final notes"}),"\n",(0,a.jsx)(n.p,{children:"Thank you for making it this far! I hope you are as excited about the potential of this concept as I am. I am looking forward to seeing what you can build with this."})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},83256:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/waitUntilSearch-7b5d248d78f27f2a568e433bcd1ba758.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},26105:e=>{e.exports=JSON.parse('{"permalink":"/Hades2ModWiki/blog/multithreading","editUrl":"https://github.com/sgg-modding/hades2modwiki/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-02-multithreading/index.md","source":"@site/blog/2024-07-02-multithreading/index.md","title":"Multithreaded modding","description":"Any fun game has to deal with multiple jobs at the same time to provide a good experience. Hades 2 in particular plays Music and sound effects, moves enemies, reacts to the player\'s input, renders the beautiful scenery, manages game and run state and so on and so forth. For all this to work at the same time, the script and the engine run many functions in parallel. For example, the AI for every enemy gets its own thread to execute in.","date":"2024-07-02T00:00:00.000Z","tags":[{"inline":false,"label":"Multithreading","permalink":"/Hades2ModWiki/blog/tags/multithreading","description":"Multithreading"},{"inline":false,"label":"Signal","permalink":"/Hades2ModWiki/blog/tags/signal","description":"Signal"},{"inline":false,"label":"Processing","permalink":"/Hades2ModWiki/blog/tags/processing","description":"Processing"},{"inline":false,"label":"Asynchronous","permalink":"/Hades2ModWiki/blog/tags/asynchronous","description":"Asynchronous"}],"readingTime":8.445,"hasTruncateMarker":true,"authors":[{"name":"Siuhnexus","title":"Hades 2 modding newbie","url":"https://github.com/Siuhnexus","key":"siuhnexus","page":null}],"frontMatter":{"title":"Multithreaded modding","slug":"multithreading","authors":"siuhnexus","tags":["multithreading","signal","processing","asynchronous"]},"unlisted":false}')}}]);