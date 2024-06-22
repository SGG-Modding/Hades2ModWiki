# HeroData

This entire structure is copied over to `CurrentRun` when starting a new run.

```lua
{
    Name = string,
    DefaultWeapon = string,
    MaxHealth = int,
    MaxHealthMultiplier = int,
    MaxMana = int,
    LastStands = table,
    UnusedWeaponThreshold = int,
    DashManeuverTimeThreshold = float,
    LastStandData = {
        Heal = float,
        Duration = float,
        Modifier = float
    },
    ManaData = {
        MinManaTickRate = float,
        ManaRegenCooldown = float
    },
    InvulnerableFrameThreshold = float,
    InvulnerableFrameMinDamage = 15,
    InvulnerableFrameCumulativeDamageDuration = float,
    InvulnerableFrameDuration = float,
    PerfectDashHitDisableDuration = float,
    ...
}
```
