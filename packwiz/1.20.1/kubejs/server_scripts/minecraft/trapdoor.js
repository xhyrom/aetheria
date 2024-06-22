// Modifies the recipes for trapdoors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  [
    "minecraft:oak_trapdoor",
    "minecraft:spruce_trapdoor",
    "minecraft:birch_trapdoor",
    "minecraft:jungle_trapdoor",
    "minecraft:acacia_trapdoor",
    "minecraft:dark_oak_trapdoor",
    "minecraft:mangrove_trapdoor",
    "minecraft:cherry_trapdoor",
    "minecraft:bamboo_trapdoor",
    "minecraft:crimson_trapdoor",
    "minecraft:warped_trapdoor",
  ].forEach((d) => gregifyTrapdoorRecipe(event, "<identifier>:<name>", d));

  gregifyTrapdoorRecipe(
    event,
    "<identifier>:<name>",
    "minecraft:iron_trapdoor",
    ["gtceu:iron_plate", "#forge:rods/iron"]
  );

  event.remove({ id: "regions_unexplored:oak_trapdoor" });
});
