---
sidebar_position: 1
---

# Getting Started
Welcome! This guide will help you set up **r2modman** so you can begin downloading and using **Hell2Modding** (also known as h2m) mods from Thunderstore.

## Browsing available mods
All available mods can be viewed in the [Thunderstore Hades II](https://thunderstore.io/c/hades-ii/) community.

## 1. Remove old mods
If you were using mods from Nexus, you will need to uninstall them before using r2modman. if you were not, skip this step. \
[How to clean up ModImporter mods](#how-do-i-clean-up-old-modimporter-mods)

:::danger[Remove old-format mods]

    Mods downloaded from Nexus Mods are NOT compatible with r2modman mods!
    If you were using old-format (ModImporter) mods from Nexus Mods, [you must uninstall them first](#how-do-i-clean-up-old-modimporter-mods).

:::


## 2. Install r2modman
**TEMPORARY!** \
The current build of r2modman does NOT have Hades 2 support. Please use our custom release until r2modman is updated.

:::warning[You must use the custom Hades 2 release for r2modman]

Please use the *temporary* 3.1.48 r2modman release with Hades 2 support: \
[`Direct Download Link for Windows`](https://github.com/xiaoxiao921/r2modmanPlus/releases/download/v3.1.48/r2modman-3.1.48.exe) \
[GitHub Releases Page](https://github.com/xiaoxiao921/r2modmanPlus/releases/tag/v3.1.48)

:::

Learn more about [why there is a custom release](#why-do-i-have-to-use-an-unofficial-r2modman-release).

## 3. Start r2modman

1. Start **r2modman**
2. Search for **Hades II** and click `Select Game`
3. Click `Select profile` to continue with the default profile
4. Browse the `Online` mod section and download whatever you like
5. Click `Start modded` in the top-left of the screen to start the game with your downloaded mods
6. Have fun!

---
## FAQ
### What if I want to use mods I found on Nexus Mods?
Short answer - you can't use them if you plan on using r2modman.

Long answer - this guide is specifically for Hell2Modding mods, not ModImporter/Nexus Mods. Please be aware that many mod authors are no longer developing for ModImporter, and no longer post updates on Nexus Mods.

If you were using old format (ModImporter) mods from Nexus Mods, [uninstall them before installing r2modman](#how-do-i-clean-up-old-modimporter-mods).

### Why move away from ModImporter and Nexus Mods?
ModImporter and Nexus Mods served the community well for the original Hades, and was quickly ported over to Hades II during the Technical Test. Unfortunately, ModImporter works by physically modifying the game scripts on your computer. With enough mods, this could put your game installation into an unstable state. There were also a lot of manual steps, like having to navigate into your game directory to drop files in there. It was an error-prone, manual process.

### What's the deal with Hell2Modding?
The new h2m framework has significant benefits over ModImporter. It does not need to touch your game installation files. Additionally, with r2modman there is no need for any manual installation steps. Installing mods with r2modman/h2m is a much more user-friendly, seamless process. It's also convenient for mod developers, as they can publish directly to Thunderstore from GitHub.

### Why do I have to use an unofficial r2modman release?
**This is temporary, until official Hades II support is merged into r2modman!** \
The pull request is approved, but still pending! You can watch its status here: \
https://github.com/ebkr/r2modmanPlus/pull/1348

### What if I don't want to use r2modman?
This is not recommended, as manual installation of h2m and its mods is not a straightforward process.

### How do I clean up old ModImporter mods?
1. Navigate to your `Hades II/Content` directory
2. Delete the `Mods` directory
3. Run `modimporter.exe` (or `modimporter.py`) one last time to clean up your files

#### What do I do if cleaning up ModImporter fails?
If you're using Steam, validate your game files to revert to a clean state. Otherwise, you may need to reinstall.
