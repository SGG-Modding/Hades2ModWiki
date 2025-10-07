---
sidebar_position: 1
---

# Development Environment

This article contains a number of tools and resources to help you get started with modding Hades II.

Also join the [Hades II Modding Discord](https://discord.gg/fewDSuPj) if you haven't already, as it is a great resource for getting help and sharing your ideas.

For an easy and quick start to developing your first mod, use the [Hades2ModTemplate](https://github.com/SGG-Modding/Hades2ModTemplate) created by the community.
This template contains a basic mod structure to work with Hell2Modding, our mod loader, as well as a GitHub Actions workflow to automatically publish new versions of your mod to Thunderstore when you push a new release to GitHub.

## Absolute Minimum Requirements

- Code editor - [Visual Studio Code](https://code.visualstudio.com/) is recommended.
- [Thunderstore](https://thunderstore.io/c/hades-ii/) account - if you intend to share your mods with the community.
	- Note that the wider modding community for Hades II has moved away from Nexus and is now using Thunderstore. Any mods created for Nexus are *not* compatible with Thunderstore mods, and all of the guides in this wiki are based on development for Thunderstore.
- [GitHub](https://github.com/) account - primarily for code source control, but also for automated publishing of new mod package versions to Thunderstore through GitHub Actions.
- [r2modman](https://thunderstore.io/c/hades-ii/p/ebkr/r2modman/) to install dependencies and locally test your mods. The mod template already contains dependencies that most mods will require. Note that locally installing a mod will not automatically install its dependencies. Either manually install them, or install another mod that requires these base dependencies, such as [PonyMenu](https://thunderstore.io/c/hades-ii/p/PonyWarrior/PonyMenu/). If you have already downloaded any mods, you will have these dependencies installed.

## Situational tools

This section is very likely incomplete depending on your specific needs and how the modding landscape has evolved since this was written.
More niche and up-to-date tools may have be shared on the [Hades II Modding Discord](https://discord.gg/fewDSuPj) since.

If you think a tool is missing from this list, please open a PR on the [GitHub repository](https://github.com/sgg-modding/hades2modwiki) to add it.

- [deppth](https://github.com/SGG-Modding/deppth) - Allows unpacking and repacking of `.pkg` files, which contain all the game's textures.
	- You need this tool if you want to extract or add any kind of texture to the game, such as custom character portraits, objects, or even any UI elements.
	- The [Hades Texture Packer](https://github.com/SGG-Modding/Hades-Texture-Packer) is a related tool to assist in packing textures into `.pkg` files that can be loaded by the game. Work is ongoing to integrate this functionality into deppth.
	- Character models are *not* stored in `.pkg` files, but their textures are.
	- Please note that for Hades II, all mods should create and load their own custom `.pkg` files, and *not* replace any of the game's original `.pkg` files. Custom package discovery is supported through Hell2Modding.

- [Fmod Bank Tools (direct download)](<./audio/files/Fmod Bank Tools.zip>) - A utility that allows the extraction and repacking of FMOD `.bank` and `.fsb` soundbank files.
	- `.bank` files are used for any music, ambient sounds and sound effects in the game. If you want to reference, replace or add onto these sounds, you will need this tool.
	- `.fsb` files contain all voice lines in the game. If you want to change or add voice lines, you will need this tool. Use Python-fsb5 below to further extract separate voice lines from the `.fsb` files.
	- Refer to the [Audio Modding](../category/audio) guides for more information on adding or modifying audio in Hades II.

- [Python-fsb5](https://github.com/HearthSim/python-fsb5), directly related to the above - A python tool to convert `.fsb` voice line banks into separate `.ogg` files that can be played by most audio players.
	- You will need this if you need to extract any existing voice lines from Hades II. For adding new voice lines, only the above Fmod Bank Tools are required.

- [HadesMapper](https://github.com/SGG-Modding/HadesMapper) - To decode and encode the game's map (level) files.
	- You will need this tool in certain cases where you want to modify existing rooms.
	- It can in theory also be used to create entirely new rooms, but this has not been done before and is heavily discouraged due to the sheer complexity of the task.
	  - Some community members are working on a level editor tool, so check the Discord for updates.

- [Bink2ForUnreal](https://www.radgametools.com/bnkdown.htm) - To view and convert `.bik` video files.
	- Most full-screen videos in Hades II are stored as `.bik` files, such as the main menu video, location and event banners and many in-game menu backgrounds.
	- This tool allows you both to view these videos, as well as convert them to many file formats (such as a `.png` sequence), as well as encode those sequences into `.bik` files.
	- In Hades, character animations were also stored in this format, but this is no longer the case in Hades II.

- [Hades-SaveExtractor](https://github.com/TheNormalnij/Hades-SavesExtractor) - To extract Hades and Hades II save game files into a human-readable lua format.
	- Only required if you want to inspect what actually gets saved into a save file using an example, as the white- and blacklists for what is saved is also available in the game code.
	- Useful to un-corrupt broken save files.

- [Hades2blender](https://github.com/LuneMods/io_Hades2blender) - A Blender plugin to export Hades II 3D models into Blender.
	- *IMPORTANT* - the current version of this tool does not work with models from the 1.0 release of Hades II, but only with models from the "The Unseen" update or earlier. Use Steam Depot downloader to download an earlier version of the game if you want to extract models from there.
	- Some community members are working on a version that allows extracting the current models, so check the Discord for updates.

### Visual Studio Code Extensions

The following extensions are recommended to install in Visual Studio Code to improve your modding experience:

- [Lua](https://marketplace.visualstudio.com/items?itemName=sumneko.lua) - A lua language server
  - You can optionally also refer to [luaCATS](https://luals.github.io/wiki/annotations/) to learn how to document your mod with annotations.
- [Autodesk Interactive Debugger](https://marketplace.visualstudio.com/items?itemName=jschmidt42.stingray-debug) - Works as a very basic language server for `.sjson` files, allowing you to e.g. collapse objects in the editor. Don't expect any advanced features though.
