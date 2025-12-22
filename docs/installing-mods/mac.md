---
sidebar_position: 3
---

# Mac Installation

Before continuing, please note that Hell2Modding (our mod loader) - and thereby all Thunderstore mods created by the community - are not natively supported on Mac.

The below guide was shared by community members and may not work for everyone.
If you have any additional questions, you may find help on the [Hades II Modding Discord](https://discord.gg/KuMbyrN).

The only current known way to use Thunderstore mods using Hell2Modding on Mac is through CrossOver, a paid software that allows running Windows applications on macOS.

:::danger[CrossOver]
CrossOver is paid third-party software.
The existence of this guide does *not* mean that you will be able to use mods on Mac.
CrossOver has a trial available, which you should make use of before purchasing to ensure it works for you.
:::

:::warning[Limitations]
You will not be able to run mods that require `imgui`, which is sometimes used by mods to allow you to configure them in-game.
If a mod uses `imgui` or not is not visible from their Thunderstore page, so if mods do not work for you or the game crashes, uninstall mods until you find the culprit.
:::

## Setting up CrossOver and r2modman

Start by installing a `CrossOver` bottle with Hades II installed.
If you want to use the `Zagreus' Journey` mod, also install Hades in this bottle.

Next, install r2modman version `3.1.58` in the same bottle.
You can try newer versions, but this was the only one that has been reported to work at the time of writing of this guide.

Afterwards, go to the Wine configuration in CrossOver, then to Library and add these overrides:
- `winhttp` → `native, builtin`
- `libglesv2` → `disabled`
- `d3d12` → `native, builtin`

## Installing mods

To install mods, download them directly through r2modman.
Then, manually copy the content of your r2modman profile folder to the game directory:
- From: `~/Library/Application Support/r2modman-local/Hades2/profiles/Default/BepInEx`
- To: `~/Library/Application Support/CrossOver/Bottles/[YourBottle]/.../Hades II/Ship/BepInEx`

As this is a manual step, you will need to repeat this every time a mod is updated, as the updated files will be placed in the r2modman profile folder.

Then, launch the game directly through r2modman using `Start Modded`.
If this does not work, try launching it once through Steam first, then try again.
Mods are only enabled if you launch the game through r2modman.

## Known issues

There have been reports of occasional crashes during startup/in menus (likely related to lua memory corruption in the mod framework).
A restart should fix this, and the issue has not been reported during gameplay.

Mods that use `imgui` will not work as expected, or may cause crashes.

## Contribute to the guide

This guide is very bare-bones, as there are very few Mac users in the community that also mod the game there.
If you find there are inaccuracies, missing steps, or outdated information, please either directly [suggest a change on GitHub](https://github.com/SGG-Modding/Hades2ModWiki), or reach out on the [Hades II Modding Discord](https://discord.gg/KuMbyrN) so we can improve this guide.
