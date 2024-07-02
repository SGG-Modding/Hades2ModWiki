# OnUsed

This triggers whenever a game object is interacted with, regardless if it is a reward, a NPC, a collectible or an object in the crossroads.

## Known causes

- Interacting with a NPC
- Using a reward
- Picking up collectibles
- Interacting with objects such as the cauldron or the altar of ashes etc. in the crossroads

## Signals dispatched

Many objects dispatch a signal consisting of `'OnUsed'` + the object ID via `notifyAllWaiters()` when used.