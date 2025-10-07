---
sidebar_position: 1
---

# Development Environment

This article contains a number of tools and resources to help you get started with modding Hades II.
It is implied that you already have a basic understanding of tools like git, and how to use a code editor like Visual Studio Code, as well as basic programming knowledge.

Also join the [Hades II Modding Discord](https://discord.gg/fewDSuPj) if you haven't already, as it is a great resource for getting help and sharing your ideas.

## Absolute Minimum Requirements

- Code editor - [Visual Studio Code](https://code.visualstudio.com/) is recommended.
- [Thunderstore](https://thunderstore.io/c/hades-ii/) account - if you intend to share your mods with the community.
	- Note that the wider modding community for Hades II has moved away from Nexus and is now using Thunderstore. Any mods created for Nexus are *not* compatible with Thunderstore mods, and all of the guides in this wiki are based on development for Thunderstore.
- [GitHub](https://github.com/) account - primarily for code source control, but also for automated publishing of new mod package versions to Thunderstore through GitHub Actions.
- [r2modman](https://thunderstore.io/c/hades-ii/p/ebkr/r2modman/) to install dependencies and locally test your mods.

## Should-Haves

- [deppth](https://github.com/SGG-Modding/deppth) - Allows unpacking and repacking of `.pkg` files, which contain all the game's textures.
	- You need this tool if you want to extract or add any kind of texture to the game, such as custom character portraits, objects, or even any UI elements.
	- The [Hades Texture Packer](https://github.com/SGG-Modding/Hades-Texture-Packer) is a related tool to assist in packing textures into `.pkg` files that can be loaded by the game. Work is ongoing to integrate this functionality into deppth.
	- Character models are *not* stored in `.pkg` files, but their textures are.
	- Please note that for Hades II, all mods should create and load their own custom `.pkg` files, and *not* replace any of the game's original `.pkg` files. Custom package discovery is supported through Hell2Modding.

## Situational tools

This section is very likely incomplete depending on your specific needs and how the modding landscape has evolved since this was written.
More niche and up-to-date tools may have be shared on the [Hades II Modding Discord](https://discord.gg/fewDSuPj) since.

If you think a tool is missing from this list, please open a PR on the [GitHub repository](https://github.com/sgg-modding/hades2modwiki) to add it.

- [Fmod Bank Tools (direct download)](<./audio/files/Fmod Bank Tools.zip>) - A utility that allows the extraction and repacking of FMOD `.bank` and `.fsb` soundbank files.
	- `.bank` files are used for any music, ambient sounds and sound effects in the game. If you want to reference, replace or add onto these sounds, you will need this tool.
	- `.fsb` files contain all voice lines in the game. If you want to change or add voice lines, you will need this tool.
	- Refer to the [Audio Modding](../category/audio) guides for more information on adding or modifying audio in Hades II.

- [HadesMapper](https://github.com/SGG-Modding/HadesMapper) - To decode and encode the game's map (level) files.
	- You will need this tool in certain cases where you want to modify existing rooms.
	- It can in theory also be used to create entirely new rooms, but this has not been done before and is heavily discouraged due to the sheer complexity of the task.
	  - Some community members are working on a level editor tool, but there is no ETA on when this will be available.