---
sidebar_position: 1
---

# Prerequisites

Necessary tools before you can start adding audio to the game.

---

> Parts of this guidance were adapted from [AlexKage's HadesAudioHelper](https://github.com/AlexKage69/HadesAudioHelper) for Hades.

Before you continue reading any of the guides in the Audio section, please ensure you are familiar with how to develop mods for Hades II, following the [Creating your first Mod](../../category/creating-your-first-mod) guides if necessary.

## Tools

You should download the following tools before starting to work on adding new voicelines to the game (in addition to any software already required for modding Hades II):

- [FMOD Studio version 2.02.23](https://fmod.com/download#fmodstudio) to create soundbanks or voiceover files for the game.

:::danger[Download the correct version!]
Ensure you download version `2.02.23` of FMOD studio, as this is the version that Hades II uses, and any soundbanks created with other versions will **not** work.
:::

- The FMOD bank tools application ([click here for direct download of version 0.0.1.6](<./files/Fmod Bank Tools.zip>)) to extract audio from existing `.bank` files, or convert `.bank` files to `.fsb` files for voiceovers (if required). Different version of this tool float around the internet, this one is confirmed to work with Hades II.
- [Python-fsb5](https://github.com/HearthSim/python-fsb5/releases/latest) to extract `.ogg` files from `.fsb` files, if you want to add voicelines from Hades (or another project) to Hades II.
