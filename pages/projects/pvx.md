---
title: PlayerVaultsX
layout: project

project:
  authors:
  - name: drtshock
    url: https://github.com/drtshock
  tagline: Player vaults for player players
  website: https://github.com/drtshock/PlayerVaults

---

<p class="has-text-centered">
  <img src="https://i.imgur.com/svutdur.png" alt="PlayerVaultsX">
</p>

<b-message title="A message from drtshock" type="is-tertiary" :closable="false">
[Purchase the plugin on SpigotMC if you'd like any support.](https://www.spigotmc.org/resources/playervaultsx.51204/) Otherwise, use at your own risk!
</b-message>

# Features

* Configurable amount of allowed vaults and size of vaults.
* Unlimited vaults.
* Admins can see all vaults.
* Admins can delete vaults.
* Open / delete offline vaults.
* Saves enchantments and books!
* Drag and drop install!
* Should work on any Minecraft version.

# Commands
* `/pv #` - Open up that chest.
* `/pv <player>` - Lists vaults that player has.
* `/pv <player> <#>` - Open up that player's vault.
    Aliases: /pv, /chest, /playervaults, /vault
* `/pvdel <#>` - Delete your vault.
* `/pvdel <player> <#>` - Delete that player's vault.
* `/pvsign <#>` - Bind a sign to open vault.
* `/pvsign <player> <#>` - Bind a sign to open a certain player's vault.
* `/pvreload` - Reloads config and lang files.
* `/pvconvert <all -or- plugin name>` - Convert other plugins to playervaults. Currently only supports backpack.
* `/workbench` - Open a crafting bench.

# Permissions
* `playervaults.*` - Have max amount of vaults and admin. Default: op
* `playervaults.amount.#` - Amount of vaults you want a player to have.
* `playervaults.size.#` - Number of rows for a player's vaults to have (1-6). Default: 6
* `playervaults.admin` - Be able to open up and delete any chest.
* `playervaults.delete` - Delete other player's vaults. Default: op
* `playervaults.signs.use` - Use a PlayerVaults sign.
* `playervaults.signs.set` - Create a PlayerVaults sign.
* `playervaults.signs.bypass` - Allows users to open via signs without the correct command permission.
* `playervaults.workbench` - Open a crafting bench.
* `playervaults.notify` - Get notified on login if there is an available update.
* `playervaults.commands.use` - Open vaults with commands. Defaults to true

To remove the ability to open vaults with commands while leaving signs as an option, you will need to negate the `playervaults.commands.use permission`.
