---
sidebar_position: 3
---

# Adding Sounds & Music

Learn how to add new sounds or music to the game.

:::info[Install the required tools]
Make sure you have followed the [prerequisites](./prerequisites.md) page to install the necessary tools before proceeding.
:::

You should additionally use the following FMOD Studio project as a template for your project, as it references the game's master bank GUID correctly (thanks to [iDeathHD](https://github.com/xiaoxiao921) for creating the template):

[Download the TestHades2FModProject.zip](./files/TestHades2FModProject.zip)

:::warning[Unique Bank GUIDs]
You'll notice that the template project does not contain a bank.
This is to ensure each mod's banks have unique GUIDs assigned to them.
If this template contained a bank, each mod using it would have the same GUID and only the first one loaded would be used by the game.
Renaming the bank does not change the GUID.
When using other mods' FMOD projects as a base, make sure to delete and create a new bank to prevent this conflict.
:::

Some additional information regarding this template from the relevant [Hell2Modding documentation](https://github.com/SGG-Modding/Hell2Modding/blob/master/docs/lua/tables/rom.audio.md):

> The game currently uses FMOD Studio `2.02.23`.
> You can query the version by clicking checking `Properties` -> `Details` of the game's `fmodstudio.dll`.
> If your sound events correcty play (no `Failed to play event` warning in the console) but nothing can be heard, make sure that the guid of the Mixer masterBus, MixerInput output and MixerMaster id match the one from the game.
> One known to work is the guid that can be found inside the vanilla game file `GUIDS.txt`, called `bus:/Game`.
> You'll want to string replace the guids in the (at minimum 2) `.xml` files Master, Mixer, and any Metadata/Event events files that were made before the guid setup change.

:::info[Reference mod]
You can refer to the [Hades OST for the Music Maker](https://github.com/NikkelM/Hades-II-UnlockHadesMusic) mod as an example of how to add music to the game using this method.
:::

## Basics 

In Hades II, sounds and music are stored in `.bank` files, which are then loaded into the game's audio system.

These `.bank` files are stored in the `Content/Audio/Desktop` folder in your Hades II installation.

## Creating soundbanks

Use the template FMOD studio project linked above and add your assets to the project.
For music tracks, you will want to create each event as a `3D Timeline` in most cases.

:::info[Looping]
If you are adding music or sounds that should loop, select the event in FMOD Studio, right-click the timeline/preview of the event and select `New Loop Region`.
This will add a new logic track on top of the event that you can use to define the looping region.
When previewing the event, the event should loop seamlessly.
:::

Now, add your events to a new bank, this should be a unique name not used by any other bank in the game, or by another mod.
It is recommended to use the same name format as for mods, i.e. `AuthorNameModName`, such as `NikkelMUnlockHadesMusic` to prevent clashes.

Next, build your bank by using `File` -> `Build` in FMOD Studio.
Add the resulting `.bank` file to your mod's `data` folder (which should be added to `plugins_data` when your mod is installed through Thunderstore).

You will need the events' GUIDs to play them in the game, so you should also export the `GUID.txt` file from FMOD Studio, through `File` -> `Export GUIDs...`.
You do not have to include this file in your mod, but you should have it ready as a reference.
The file will look like this:

```plaintext
{f0979c2d-d4d0-418e-b172-86c36619ccc3} bank:/ModsNikkelMUnlockHadesMusic
{57fbe830-4207-4601-8ca1-cd69eebfa742} event:/Mods/NikkelMUnlockHadesMusic/DeathAndI
{b0533fd9-9980-4fc6-b0a7-23813f2cda1c} event:/Mods/NikkelMUnlockHadesMusic/FieldOfSouls
{1d2d987b-853b-4a65-aa2d-a3e8c7e0e99b} event:/Mods/NikkelMUnlockHadesMusic/FinalExpense
...
```

You will need the GUIDs for the events (the bank GUID is irrelevant) later on when you want to play the events in the game.
It is recommended to create some sort of mapping of GUIDs to event names within your mod, to make your mod more maintainable and readable by others.

## Load and play sounds in the game

In your mod, you must load the soundbank before you can play any events from it, using `rom.audio.load_bank(path)`, e.g.:

```lua
-- Loads the sound bank when entering the Crossroads or switching between rooms in the Crossroads
modutil.mod.Path.Wrap("DeathAreaRoomTransition", function(base, source, args)
	rom.audio.load_bank(rom.path.combine(_PLUGIN.plugins_data_mod_folder_path, "Audio\\ModsNikkelMUnlockHadesMusic.bank"))
	base(source, args)
end)
```

`_PLUGIN.plugins_data_mod_folder_path` automatically resolves to your mod's `plugins_data` folder, which should contain your `.bank` file.

After loading your bank, you can play events using their GUIDs in the following format `{GUID}`, e.g.:

```lua
local trackName = "{57fbe830-4207-4601-8ca1-cd69eebfa742}"

PlaySound({ Name = trackName })
```

You can get the GUID for an event from the exported `GUIDs.txt` file.

:::warning[Curly braces]
Make sure to include the curly braces `{}` around the GUID, as this is how the game recognizes the GUID as a GUID instead of a name.
:::

:::warning[Event names are not supported]
It is important to note that you **cannot** play events by their name for custom soundbanks, only by their GUID.
This is a restriction imposed by the way FMOD's master bank works.
:::

