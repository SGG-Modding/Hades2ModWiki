---
sidebar_position: 3
---

# Adding Sounds & Music

Learn how to add new sounds or music to the game.

---

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

:::tip[`bus:/Game` is the SFX slider]
The `bus:/Game` GUID referenced above is the game's **SFX** bus.
Routing to it makes your audio audible, but it also means the in-game SFX slider (not the Music slider) controls its volume.
If you are adding music, see [Controlling which volume slider affects your audio](#controlling-which-volume-slider-affects-your-audio) below to route it to the Music slider instead.
:::

## Basics 

In Hades II, sounds and music are stored in `.bank` files, which are then loaded into the game's audio system.

These `.bank` files are stored in the `Content/Audio/Desktop` folder in your Hades II installation.

## Creating soundbanks

Use the template FMOD studio project linked above and add your assets to the project.

For music tracks, you will want to create each event as a `2D Timeline` in most cases.
Using the `3D timeline` adds a Spatializer to the event, and can cause the event to not play if e.g. this is a Music Maker song and the player loads a save in the Training Grounds.
Unless you have a good reason to go with a 3D event, stick with 2D.

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

## Controlling which volume slider affects your audio

Which of the game's volume sliders (`Options -> Audio`) controls your sounds is decided by the **mixer bus** your events route to, which is baked into the bank when you build it.

The game applies each volume slider to a fixed set of FMOD buses (by GUID), and the value cascades down to every child bus.
So a sound follows whichever of these buses sits on its bus's parent chain:

| In-game slider/context | Bus path | Bus GUID |
| --- | --- | --- |
| **Master** | `bus:/` | `{a531b196-bb6e-4cd0-b5b3-420e81b5af19}` |
| **Music** | `bus:/Music` | `{764b5aef-b84a-486a-8484-b80b26a6cfb7}` |
| **Music** (Music Maker) | `bus:/Music/MUSIC PLAYER` | `{837ae5af-d2e1-423d-bde4-42ac2884cf0f}` |
| **SFX** | `bus:/Game` | `{9b320436-fb96-4de1-8229-63da4b1d52af}` |
| **SFX** (UI sounds) | `bus:/UI` | `{30b6f7ba-1ed3-4994-9f31-fe8554991a2e}` |
| **Ambience** | `bus:/Game/In World/Ambience` | `{7030c0dc-5dcc-4ad7-93a7-0bd20262ced4}` |
| **Speech** | `bus:/VO` | `{029a988e-8e1c-4f5c-a239-30ad2201d324}` |

The template project routes its master bus to `bus:/Game`, so by default every event you add is controlled by the **SFX** slider.
This is correct for sound effects, but means any **music** you add will be on the SFX slider instead of the Music slider until you re-route it.

:::info[Ambience bus]
For some reason, the Ambience bus is nested under the SFX bus.
This means that any ambience sounds in your bank will be controlled by *both* the SFX and the Ambience sliders.
Turning either off will also turn off your ambience sounds.
:::

:::info[Music Maker songs]
If you are adding songs to the Music Maker in the Crossroads, route them to `bus:/Music/MUSIC PLAYER`.
This is the bus the vanilla songs use, it follows the Music slider, and it avoids the vocal muting that the game applies to its in-combat music buses.
:::

### Re-routing your events to a different bus

The template hard-wires the `bus:/Game` GUID `{9b320436-fb96-4de1-8229-63da4b1d52af}` as its mixer master.
To move your bank onto a different slider, replace that GUID with your target bus GUID from the table above, everywhere it appears in your project's metadata:

1. Close FMOD Studio, so it does not overwrite your changes on save.
2. In your project's `Metadata` folder, replace every occurrence of `9b320436-fb96-4de1-8229-63da4b1d52af` with your target GUID (for music, use `764b5aef-b84a-486a-8484-b80b26a6cfb7`) in:
   - `Master.xml` (the `MixerMaster` `id`)
   - `Mixer.xml` (the `masterBus` destination)
   - every file under `Metadata/Event/` that references it (each event's output routing)
3. Re-open FMOD Studio and rebuild your bank via `File -> Build`.

This re-routes the whole bank, which is what you want for a music-only mod.

:::tip[Verify the routing]
The quickest in-game check is to open the audio settings and confirm the matching slider now changes your audio's volume (turning the other sliders to zero makes it obvious).
:::

## Load and play sounds in the game

In your mod, you must load the soundbank before you can play any events from it, using `rom.audio.load_bank(path)`, e.g. like this if you need the bank to be loaded when in the Crossroads:

```lua
function loadModBanks()
	rom.audio.load_bank(rom.path.combine(_PLUGIN.plugins_data_mod_folder_path, "Audio\\AuthorNameModNameCustomMusicBank.bank"))
end

-- Loads the sound bank when entering the Crossroads or switching between rooms in the Crossroads
modutil.mod.Path.Wrap("DeathAreaRoomTransition", function(base, source, args)
	loadModBanks()
	return base(source, args)
end)

-- If returning from a Chaos Trial, HubPostBountyLoad will be called instead of DeathAreaRoomTransition
modutil.mod.Path.Wrap("HubPostBountyLoad", function(base, source, args)
	loadModBanks()
	return base(source, args)
end)

-- If returning from a Dream Dive, HubPostDreamLoad will be called instead of DeathAreaRoomTransition
modutil.mod.Path.Wrap("HubPostDreamLoad", function(base, source, args)
	loadModBanks()
	return base(source, args)
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
