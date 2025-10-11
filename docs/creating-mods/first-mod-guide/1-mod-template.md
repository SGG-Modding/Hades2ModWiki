---
sidebar_position: 2
---

# Using the Mod template

*Please ensure you've read the [Introduction](./0-intro.md) before starting this guide.*

## Setting up a local copy

In this first part of the guide, you'll learn how to clone and set up your own copy of the [Hades II Mod template](https://github.com/SGG-Modding/Hades2ModTemplate).

To get started, navigate to the latest release of the [Hades II Mod template](https://github.com/SGG-Modding/Hades2ModTemplate/releases/latest), and download the `hades2-mod-template.zip`.
Unzip the contents of this folder to where you'll be doing your mod development, and push the contents to a new GitHub repository.

:::note[Symlinking to r2modman]
It's recommended to create a symlink from your mod development folder to the `ReturnOfModding` folder used by r2modman, as described in the [Development Environment](../development-environment.md#creating-a-aymbolic-link-from-your-development-directory-to-r2modman) guide.
:::

## Creating a Thunderstore team

To publish your mods to Thunderstore, you need to create a **Team**.
This is the name shown as the mod author on your mod page, and will be part of your mod's unique identifier on Thunderstore.
A mod's team (just like its name) cannot be changed after publishing, so choose wisely.

To make use of the [release workflow](#release-workflow) included in the mod template, you will also need to create a **Service Account** for your mod, and add its API token as a secret in your GitHub repository:

- To create a team, first sign up for a [Thunderstore](https://thunderstore.io/c/hades-ii/) account, on the top right. You can choose to sign up using your GitHub account, which is recommended, or a Discord or Overwolf account.
  - After signing in, go to the [Teams settings](https://thunderstore.io/settings/teams/) on Thunderstore and create a new team. New options should appear in the left sidebar.
  - Create a new **Service Account** for your mod (we recommend using the same name as the mod name, to keep service accounts separate from each other and easily identifiable).
  - You will get an **API token** associated to the new **Service Account**. Copy this token now, as it will not be shown again. If you lose it, you will need to remove and recreate the service account.

- In your GitHub repository:
  - Go to **Settings** > **Secrets and variables** > **Actions**.
  - Create a **new repository secret** named `TCLI_AUTH_TOKEN` and copy/paste the **API token** as its value.

## Understanding the components

Open the mod template in your chosen code editor (e.g. Visual Studio Code).
You can learn more about each of the core files in the template by expanding the sections below:

<details>
<summary><h3>thunderstore.toml</h3></summary>

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
See the [Thunderstore API](https://thunderstore.io/api/experimental/community/hades-ii/category/) for a full list of available categories.
</details>

<details>
<summary><h3>Readme.md, Changelog.md, License & icon.png</h3></summary>

The `Readme.md` should contain a description of your mod, alongside any possible configuration option (see [config.lua](#config) below).
The contents of the Readme will be shown on the Thunderstore mod page.
If you link any images in the Readme, these must be URLs, as relative paths to files in your repository will not work.

The `Changelog.md` should contain a list of changes made in each version of your mod.
A short guide on how to use the file is included in the template - remove this guidance before publishing.

In the `LICENSE` file, replace the `[year]` and `[fullname]` placeholders.
By default, the template ships the [MIT license](https://choosealicense.com/licenses/mit/), which is recommended to use in this community.

The `icon.png` is the icon shown for your mod on Thunderstore and in r2modman.
It *must* be a 256x256 PNG icon.

</details>

<details>
<summary><h3><a id="release-workflow">.github/workflows/release.yaml</a></h3></summary>

This file contains a GitHub Actions workflow that builds and publishes your mod package to both GitHub and Thunderstore.
To release a new package version, follow these steps, first follow the [Creating a Thunderstore team](#creating-a-thunderstore-team) guide and create a service account as shown there.

- To trigger a new release, from your GitHub repository go to **Actions** and select the **Release** workflow on the left.
- Select the **Run workflow** dropdown on the right.
  - By default, your repository's default branch (`main` by default) is selected. If you want to release from another branch, select it.
- Input the version to release, e.g. `1.2.0`.
  - For good practices on versioning, please see [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
- Click the **Run workflow** button.
- A new workflow run will be triggered, and will take care of:
  - Rotating version in `CHANGELOG.md` and `thunderstore.toml`.
  - Building the Thunderstore mod package.
  - Uploading the package to the workflow run as an artifact.
  - Pushing the changes and tagging the git repository.
  - Publishing the package on Thunderstore.
  - Making a new GitHub release.
  - Uploading the package to the GitHub release as an asset.
- After a new release has been published, you should `git pull` the changes to ensure your local `CHANGELOG.md` and `thunderstore.toml` are up to date.

</details>









Once you've set up the template locally, continue on to: [2. TODO](./1-mod-template.md).
