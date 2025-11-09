# ChooseNextRoomData
Function name in RunLogic.lua
Called once per door generated, determines room contents (rewards, encounters, map)
## Usage
```lua
ChooseNextRoomData(currentRun, args, otherDoors)
```
## Parameters
`currentRun`, `args`, `otherDoors`
## Returns
Line of global table RoomData

# Sample Usage
The following snippets make it so Dionysius is forced every other room.

ready.lua:
```lua
modutil.mod.Path.Wrap("ChooseNextRoomData", function(base, currentRun, ...)
  -- Both EncounterData and RoomData have variables limiting how often a room can appear in a run and biome.
  -- Failing to edit those results in a crash
  EncounterData = mod.AdjustMaxDioEncounters(EncounterData)
	RoomData = mod.AdjustMaxDioRooms(RoomData)
	return mod.ChooseNextRoomDataWrap(base, currentRun, ...)
end)
```

reload.lua:
```lua
function mod.ChooseNextRoomDataWrap(base, currentRun, ...)
	if currentRun.CurrentRoom.Name ~= 'P_Story01' then
		return RoomData['P_Story01']
	else
    -- Here we go a step back in the room history - this is so the biome remains the same.
    --Otherwise the base function will drop us in Olympus entrance
		currentRun.CurrentRoom = currentRun.RoomHistory[TableLength(currentRun.RoomHistory)]
		return base(currentRun, ...)
	end
end

function mod.AdjustMaxDioEncounters(encounterData)
	local dioRoom = encounterData['Story_Dionysus_01']
	if dioRoom == nil then
	  return encounterData
    end
	dioRoom.MaxAppearancesThisBiome = 10
	return encounterData
end

function mod.AdjustMaxDioRooms(roomData)
	local dioRoom = roomData['P_Story01']
	if dioRoom == nil then
	  return roomData
    end
	dioRoom.MaxCreationsThisRun = 10
	dioRoom.MaxAppearancesThisBiome = 10
	return roomData
end
```
---
