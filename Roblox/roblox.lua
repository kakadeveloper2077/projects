logMessage = "User has more than 10 items!"
print(logMessage) --> User has more than 10 items!
print(type(logMessage)) --> string

local msg = "agua"
function send_mg()
	return print(msg)
end
send_mg()

local msg_to_player
print(msg_to_player)
print((type(msg_to_player)))
if msg_to_player then
	
end

local myArray = {"chips", "sparkling water", "salsa"} -- array sem colchetes
local myDictionary = { 
	snack = "chips",
	drink = "sparkling water",
	dip = "salsa"
} -- objeto sem atribuição dos 2 pontos
print(myArray[1]) --> chips -- array pelo indice
print(myDictionary.dip) --> salsa -- o nome do obj.dip -> salsa

for index, value in ipairs(myArray) do -- standard Lua
	print(index, value)
end
for key, value in pairs(myDictionary) do -- standard Lua
	print(key, value)
end
for key, value in myDictionary do -- Luau generalized iteration
	print(key, value)
end