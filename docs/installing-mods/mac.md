---
sidebar_position: 3
---

# Mac Installation

Before continuing, please note that Hell2Modding (our mod loader) - and thereby all Thunderstore mods created by the community - are not natively supported on Mac.

The below guide was shared by community members and may not work for everyone.
If you have any additional questions, you may find help on the [Hades II Modding Discord](https://discord.gg/KuMbyrN).

The only current known way to use Thunderstore mods using Hell2Modding on Mac is through CrossOver, a paid software that allows running Windows applications on macOS.

:::danger[CrossOver]
CrossOver is paid third-party software. The existence of this guide does *not* mean that you will be able to use mods on Mac. **Use the latest version of CrossOver, or at least version 23.7+**, which includes DXVK and MSync support for improved performance and compatibility. CrossOver has a trial available, which you should make use of before purchasing to ensure it works for you.
:::

:::warning[Limitations]
If you're using an older CrossOver version without the latest DXVK/MSync support, certain mods—especially those requiring `imgui` (used by some mods to provide in-game configuration)—may fail or cause crashes. If a mod uses `imgui` or not is not visible from their Thunderstore page, so if mods do not work for you or the game crashes, uninstall mods until you find the culprit.
:::

## Setting up CrossOver and r2modman

Start by installing a `CrossOver` bottle with Hades II installed.
If you want to use the `Zagreus' Journey` mod, also install Hades in this bottle.

Next, in the **Advanced Settings** for your CrossOver bottle and ensure:

- Graphics -> `DXVK`
- MSYNC -> `enabled`

Then, install r2modman version `3.2.18` in the same bottle.
You can try newer versions, but this was the only one that has been reported to work at the time of writing of this guide.

Afterwards, go to the Wine configuration in CrossOver, then to Library and add these overrides:

- `winhttp` → `native, builtin`
- `libglesv2` → `native, builtin`
- `d3d12` → `native, builtin`

## Installing mods

To install mods, download them directly through r2modman.

Then, launch the game directly through r2modman using `Start Modded`.
If this does not work, try launching it once through Steam first, then try again.
Mods are only enabled if you launch the game through r2modman.

## Known issues

There have been reports of occasional crashes during startup/in menus (likely related to lua memory corruption in the mod framework).
A restart should fix this, and the issue has not been reported during gameplay.

Mods that use `imgui` will not work as expected, or may cause crashes. If you are experiencing `imgui` issues even with CrossOver version 23.7+, try installing **Microsoft .NET Framework 4.8** into the same CrossOver bottle, as some `imgui`-dependent mods require it to function properly. Please review the limitations above before troubleshooting, as it outlines what is and isn't supported on Mac.

## Contribute to the guide

This guide is very bare-bones, as there are very few Mac users in the community that also mod the game there.
If you find there are inaccuracies, missing steps, or outdated information, please either directly [suggest a change on GitHub](https://github.com/SGG-Modding/Hades2ModWiki), or reach out on the [Hades II Modding Discord](https://discord.gg/KuMbyrN) so we can improve this guide.
