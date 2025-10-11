---
sidebar_position: 2
---

# Using the Mod template

*Please ensure you've read the [Introduction](./0-intro.md) before starting this guide.*

## Setting up a local copy

In this first part of the guide, you'll learn how to clone and set up your own copy of the [Hades II Mod template](https://github.com/SGG-Modding/Hades2ModTemplate).

To get started, navigate to the latest release of the [Hades II Mod template](https://github.com/SGG-Modding/Hades2ModTemplate/releases/latest), and download the `hades2-mod-template.zip`.
Unzip the contents of this folder to where you'll be doing your mod development.

:::note[Symlinking to r2modman]
It's recommended to create a symlink from your mod development folder to the `ReturnOfModding` folder used by r2modman, as described in the [Development Environment](../development-environment.md#creating-a-aymbolic-link-from-your-development-directory-to-r2modman) guide.
:::

## Understanding the components

Open the mod template in your chosen code editor (e.g. Visual Studio Code).
Let's explore the core parts of the template:

### `thunderstore.toml`

This file contains all of the metadata required for publishing your mod to Thunderstore.
You can find the full specification for both the contents of this file and other parts of your mod package in the [Thunderstore package format requirements](https://thunderstore.io/c/hades-ii/create/docs/) online.

#### `[config]`

This contains the schema version of the `thunderstore.toml` file.
You should not need to change this.

#### `[package]`

- `namespace`: This is your Thunderstore team name, which is the author name shown on your mod page. Once set, this cannot be changed without creating a new team and republishing your mod.
- `name`: The name of your mod. Like the team name, this cannot be changed for an already published mod. It cannot contain spaces or any special characters besides underscores. Underscores are converted to spaces for display purposes on some views (like the mod browser).
- `versionNumber`: The version of your mod, which should follow [Semantic Versioning](https://semver.org/). Thunderstore only supports the `Major.Minor.Patch` format.
- `description`: A short description of what your mod does. It is shown in the mod browsers online and in r2modman. Cannot be longer than 250 characters.
- `websiteUrl`: A URL to your mod's website (e.g. your GitHub repository). It is highly recommended to include your GitHub repository here, as this is the primary way for users to file bug reports and leave feedback, as Thunderstore does not have discussion or comment functionality. If you don't have URL, leave this as an empty string `""`.
- `containsNsfwContent`: Whether your mod contains any NSFW content. All mods with NSFW content must be marked as such. NSFW is a search filter on Thunderstore that must be explicitly enabled by users.

#### `[package.dependencies]`

This should be a list of mods that your mod depends on to function.
The mod template already contains a list of dependencies that will be required by most mods.
You should not have to remove any of these, unless you know for certain you do not require them.
These dependencies will already be installed by most users through other mods, so having them listed here will not cause any issues.

If you need to depend on a new mod, you can add it here as `"AuthorName-ModName" = "version"`.
Note that this is not a pinned version, and by default, Thunderstore will always get the latest version of any dependency.
So if a later version of one of your dependencies breaks your mod, this will not prevent users from updating to that version.

#### `[build]` sections

The `[build]` section defines what files are included in your mod package when you publish it to Thunderstore.
The `icon`, `readme` and `outdir` fields should not be changed.

The `[build.copy]` sections define fieles and directories that are copied from your source folder into the built mod package.
The two most relevant of these are the `./src` folder being copied to `./plugins`, and the `./data` folder being copied to `./plugins_data`.
You must not change the target folders, as these are used by the mod loader to discover your mod.
You may change the source folders if required.

Copying the `./data` folder is commented out of the template by default, as it doesn't include any data files (such as `.pkg` packages or `.bank` sound files).
Change this if your mod includes these.

#### `[publish]` sections

You must not change the `[publish]` section, as this defines that your mod will be published to the Hades II community on Thunderstore.

You may add additional, *existing* tags to the `[publish.categories]` list if you wish.
You can find a list of valid tags on the search page of the [Hades II community on Thunderstore](https://thunderstore.io/c/hades-ii/).
Most mods will only fit into the generic `Mods` category.












Once you've set up the template locally, continue on to: [2. TODO](./1-mod-template.md).
