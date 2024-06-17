// Modifies the recipes for boats to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  const boats = [
    "minecraft:oak_boat", // allow only wooden shovel
    "minecraft:spruce_boat", // allow only wooden shovel
    "minecraft:birch_boat", // allow only wooden shovel
    "minecraft:jungle_boat", // allow only wooden shovel
    "minecraft:acacia_boat", // allow only wooden shovel
    "minecraft:dark_oak_boat", // allow only wooden shovel
    "minecraft:mangrove_boat", // allow only wooden shovel
    "minecraft:cherry_boat", // allow only wooden shovel
  ];

  boats.forEach((id) => {
    gregifyBoatRecipe(event, "<identifier>:<name>", id);

    event.remove({ id: `gtceu:shaped/${id.split(":")[1]}` });
    event.remove({
      id: `quark:tweaks/crafting/utility/chest_boat/direct_${idToType(
        id
      )}_chest_boat`,
    });
  });
});
