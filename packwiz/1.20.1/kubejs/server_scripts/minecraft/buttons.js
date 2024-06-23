// Modifies the recipes for buttons to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  [
    "minecraft:oak_button",
    "minecraft:spruce_button",
    "minecraft:birch_button",
    "minecraft:jungle_button",
    "minecraft:acacia_button",
    "minecraft:dark_oak_button",
    "minecraft:mangrove_button",
    "minecraft:cherry_button",
    "minecraft:bamboo_button",
    "minecraft:crimson_button",
    "minecraft:warped_button",
  ].forEach((d) => gregifyButtonRecipe(event, "<identifier>:<name>", d));

  ["minecraft:stone_button", "minecraft:polished_blackstone_button"].forEach(
    (d) =>
      gregifyButtonRecipe(event, "<identifier>:<name>", d, [
        `minecraft:${idToType(d)}`,
        "#forge:tools/hammers",
      ])
  );

  event.remove({ id: "regions_unexplored:oak_button" });
});
