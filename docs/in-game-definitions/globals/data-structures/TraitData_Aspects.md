# TraitData - Aspects 

The `TraitData` structure contains all of the game traits which includes Boons / Daedalic Hammers and Weapon Aspects

Aspects contains all of the game Weapon Aspects.

## Aspects contain the following parameters:

```lua
InheritFrom = { "WeaponEnchantmentTrait" },
```
### Icon 
contains the reference to the icon exactly as mentioned in the `.pkg_manifest`

```lua
Icon = "Hammer_Icon_41", --example base_game

Icon = "JarlUlsfark-AspectYoungMel\\SkullAspectYoungMelIcon", --example from deppth2 hpk
```
### RequiredWeapon 
the name of the base weapon the Aspect belongs to

Staff = `WeaponStaffSwing`

Dagger = `WeaponDagger`

Torches = `WeaponTorch`

Axe = `WeaponAxe`

Skull = `WeaponLob`

Suit = `WeaponSuit`

```lua
RequiredWeapon = "WeaponStaffSwing",
```
### WeaponKitGrannyModel
The name of the model that would appear in the aspect selection menu
```lua
WeaponKitGrannyModel = "WeaponLob_Mesh",
```
### ReplacementGrannyModels 
The models that the character would wear during the game
```lua
ReplacementGrannyModels = 
		{
			WeaponDaggerA_Mesh = "WeaponDaggerA_Mesh",
			WeaponDaggerB_Mesh = "WeaponDaggerB_Mesh"
		},
```
### RarityLevels
The value that changes between aspect ranks
```lua
RarityLevels =
		{
			Common = --Rank 1
			{
				Multiplier = 1,
			},
			Rare = --Rank 2
			{
				Multiplier = 1.333,
			},
			Epic = --Rank 3
			{
				Multiplier = 1.666,
			},
			Heroic = --Rank 4
			{
				Multiplier = 2,
			},
			Legendary = --Rank 5
			{
				Multiplier = 2.333,
			},
			Perfect = --Rank 6
			{
				Multiplier = 2.666,
			},
		},
```
Elsewhere in the aspect whenever the value `{BaseValue = 1)` is mentioned `BaseValue` is the 
multiplier based on the rank with 1 being the default value if there are no specified ranks

### WeaponDataOverride
Changes from the default weapon of all parameters in `WeaponData`
Specify for each different attack 
```lua
WeaponDataOverride =
		{
			WeaponDaggerThrow = { --Changes Dagger special
				ChargeWeaponStages =
					{
						{ ManaCost = 12, WeaponProperties = { Projectile = "ProjectileDaggerThrow", FireGraphic = "Melinoe_Dagger_SpecialEx_Fire", NumProjectiles = 3, AdditionalProjectileWaveChance = 0, ProjectileInterval = 0.08}, ApplyEffects = { "WeaponDaggerThrowEXDisable", "WeaponDaggerThrowEXDisableCancellable", "WeaponDaggerThrowEXDisableMoveHold" }, Wait = 0.32, HideStageReachedFx = true, ChannelSlowEventOnEnter = true },
						{ ManaCost = 16, WeaponProperties = { NumProjectiles = 4, AdditionalProjectileWaveChance = 0}, ApplyEffects = { "WeaponDaggerThrowEXDisable", "WeaponDaggerThrowEXDisableCancellable", "WeaponDaggerThrowEXDisableMoveHold" }, Wait = 0.14, HideStageReachedFx = true, },
					},
				Sounds = 
					{
						ImpactSounds = {
							Invulnerable = "/SFX/Player Sounds/ZagreusShieldRicochet",
							Armored = "/SFX/Player Sounds/ZagreusShieldRicochet",
						},
					},
			},
		},
```
### PropertyChanges
Changes to any properties specified in `Game/Weapons/PlayerWeapons.sjson` 
Including damage, projectiles, VFX...
```lua
PropertyChanges =
		{
			{
				WeaponName = "WeaponDagger2",
				WeaponProperty = "SwapOnFire",
				ChangeValue = "WeaponDagger",
			},
			{
				WeaponName = "WeaponDagger",
				ProjectileName ="ProjectileDaggerSliceLeft",
				ProjectileProperty = "Damage",
				ChangeValue = 40,
				ChangeType = "Absolute"
			},
    },
```
### Triggers
Functions that occur while wearing the aspect each time the trigger occurs.
Each trigger later calls a function. A perfect way to introduce aspect traits. 

`OnWeaponFiredFunctions` - activates whenever an attack button is used.

`OnProjectileCreationFunction` - activates whenever a projectile is created.

`OnProjectileDeathFunction` - activates whenever a projectile is destroyed, (can be at max range or by a hit)  

`OnWeaponChargeFunctions` - activates whenever a weapon charges

`OnEnemyDamagedAction` - activates whenever an enemy receives damage.

`OnEnemyDeathFunction` - activates whenever an enemy dies.

`OnBlockDamageFunction` - activates whenever whenever damage is blocked.

`OnSelfDamagedFunction` - activates whenever the hero receives damage.

`OnUnequipFunctionName` - When the aspect is removed.

**Note!** - each trigger may have slightly different arguement names.

```lua
OnEnemyDamagedAction = 
		{
			ValidWeapons = WeaponSets.HeroPrimaryWeapons, --Which attacks are allowed to trigger this funcion.
			FunctionName = _PLUGIN.guid .. "." .. "ComboPresentation", -- the name of the function to be used following the trigger (mod.ComboPresentation)
			FirstHitOnly = false, --If the attack strikes several targets would each target seperatly activates the function
			Args = { --the arguements that pass into the function as functionArgs
				test =''
			},
		},
```
Each function called by these triggets receives 

`weaponData` - Any data about the attack from weaponData such as `WeaponName` 

`functionArgs` - Any arguements given to the function in Args field.

`triggerArgs` - Any arguements about what triggered the function.

### Add Modifiers
Add modifiers to attacks

`AddOutgoingDamageModifiers` - Adds damage modifiers

`WeaponSpeedMultiplier` - Adds speed modifiers

`AddOutgoingLifestealModifiers` - Adds Lifesteal modifiers

`AddOutgoingCritModifiers` - Adds critical hit modifiers

**Note!** - each modifier may have slightly different arguement names.

### Miscellaneous parameters

Any variable the user wants to store, other functions could access these variable using
`local trait = GetHeroTrait()` then access them by `trait.VariableName`
```lua
Combo = 0,
ComboDamageMod = 1,
```

### FlavorText
The text id for the small sentence at the bottom when selecting an aspect.
```lua
FlavorText = "DaggerAspectofYoungMelinoe_FlavorText",
```

### ExtractValues
Extracts `ReportValues` as `key` and export them as `ExtractAs` so other functions such as texts could access them.
```lua
ExtractValues =
		{
			{
				Key = "ReportedIncrement",
				ExtractAs = "TooltipIncrement",
				Format = "Percent",
				DecimalPlaces = 1,
				SkipAutoExtract = true
			},
```
### StatLines
The text id for the number value that appear in the aspect card
```lua
StatLines =
		{
			"AspectDashRechargeStatDisplay",
		},
```

## Adding new Aspects into the game

### Overwriting existing Trait
```lua
OverwriteTableKeys( TraitSetData.Aspects.AxeRecoveryAspect, AxeAspectofYoungMelinoe)
```

### Adding new Aspects
Adding new aspects also requires Modifiying upgrade and shop menus so the new aspect would be selectable.
```lua
TraitData.AxeAspectofYoungMelinoe = AxeAspectofYoungMelinoe
```
