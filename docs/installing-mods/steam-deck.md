---
sidebar_position: 2
---

# Steam Deck Installation

:::important
Install Hades II to the internal storage, NOT a MicroSD card.
:::

## 1. Enter Desktop mode

## 2. Download and install r2modman

[Download r2modman from Thunderstore](https://thunderstore.io/c/hades-ii/p/ebkr/r2modman/) using the Manual Download button.

- Go to your Downloads folder and double click the downloaded `.zip` file.
- This will open **Ark**, the archive application.
- Extract the archive into the `Downloads` folder.
- In your `Downloads` folder, navigate into the newly extracted directory.
- Move the `.AppImage` file to the **Applications** directory.

## 3. Add r2modman as a non-Steam game

Navigate to the **Applications** directory and select the `.AppImage` file.

## 4. Run r2modman

- Open the `.AppImage` file.
- If you see a **Dolphin** warning, you may bypass it and allow it to run.
- In **r2modman**, search for Hades II, then click select game.

:::danger[IGNORE THE TEXT IT TELLS YOU TO COPY]
**r2modman** will tell you to copy the following text - it won't work. \
`"/home/deck/.config/r2modmanPlus-local/HadesII/linux_wrapper.sh" %command%`
:::

- Click **Continue**.
- Click **Select Profile** to use the _Default_ profile.

## 5. Update r2modman settings

- In Settings, scroll down to _Change Hades II Directory_.
- Navigate into `Ship`.
- Select `Hades2.exe`.
- Click **Select Executable**.

## 6. Go back to Gaming mode

Once back in Gaming mode, run the **r2modman** shortcut you added as a Non-Steam game.

## 6. Find some mods

Click on some mods you want to install, always opting to _Download with Dependencies_.

## 7. Starting the game

- Start the game via **r2modman** (click **Start Modded**).
- Load a save.
- Click **Open Gui Keybind** on the touchscreen.
- Bring up keyboard with `Steam+X`.
- Set a bind. I personally use `backspace` on the Deck.
- Close the keyboard.
- Press the `close` button on the touchscreen.

# Gotchas

- The default ImGui keybind is `insert`, which the Steam Deck keyboard doesn't have. There are a few ways past this:
  - Pair a keyboard.
  - Manually edit the imgui.cfg file

### References

[Lethal Company Wiki - r2modman instructions](https://lethal.wiki/installation/installing-r2modman-linux)
