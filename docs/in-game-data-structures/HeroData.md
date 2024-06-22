# HeroData

The `HeroData` structure is copied over to `CurrentRun` when starting a new run.

```lua
-- this is NOT the entire structure, just some interesting values!
{
    ...
    MaxHealth = 30,
    MaxHealthMultiplier = 1,
    MaxMana = 50,
    ...
    ManaData = {
        MinManaTickRate = 0.05,
        ManaRegenCooldown = 1.0
    },
    ...
    MaxGodsPerRun = 4,
    BoonData = {
        ...
        RarityChances = {
            Rare = 0.10,
            Epic = 0.05,
            Duo = 0.12,
            Legendary = 0.10,
        },
        ReplaceChance = 0.1
    }
    ...
}
```
