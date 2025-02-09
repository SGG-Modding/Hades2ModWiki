---
sidebar_position: 1
---

# Prerequisites

Read through this page first to understand and download the necessary tools before you can start adding sounds or voicelines to the game.

> Parts of this guidance were adapted from [AlexKage's HadesAudioHelper](https://github.com/AlexKage69/HadesAudioHelper) for Hades.

## Tools

You should download the following tools before starting to work on adding new voicelines to the game (in addition to any software already required for modding Hades II):

- [FMOD Studio version 2.02.23](https://fmod.com/download#fmodstudio) to create soundbanks or voiceover files for the game.

:::danger[Download the correct version!]
Ensure you download version `2.02.23` of FMOD studio, as this is the version that Hades II uses, and any soundbanks created with other versions will **not** work.
:::

- [FMOD bank tools](https://www.nexusmods.com/rugbyleaguelive3/mods/2?tab=description) to extract audio from existing `.bank` files, or convert `.bank` files to `.fsb` files for voiceovers (if required).
- [Python-fsb5](https://github.com/HearthSim/python-fsb5/releases/latest) to extract `.ogg` files from `.fsb` files, if you want to add voicelines from Hades (or another project) to Hades II.
