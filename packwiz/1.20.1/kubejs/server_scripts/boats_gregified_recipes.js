// Modifies the recipes for boats to match the Biome O' Plenty Gregified Integrations recipes

const BOATS_RECIPES = [
  "minecraft:oak_boat",
  "minecraft:spruce_boat",
  "minecraft:birch_boat",
  "minecraft:jungle_boat",
  "minecraft:acacia_boat",
  "minecraft:dark_oak_boat",
  "minecraft:mangrove_boat",
  "minecraft:cherry_boat",
  "quark:ancient_boat",
  "quark:azalea_boat",
  "quark:blossom_boat",
  "aether:skyroot_boat",
  "thermal:rubberwood_boat",
  "meadow:pine_boat",
  "regions_unexplored:baobab_boat",
  "regions_unexplored:blackwood_boat",
  "regions_unexplored:cypress_boat",
  "regions_unexplored:dead_boat",
  "regions_unexplored:eucalyptus_boat",
  "regions_unexplored:joshua_boat",
  "regions_unexplored:kapok_boat",
  "regions_unexplored:larch_boat",
  "regions_unexplored:magnolia_boat",
  "regions_unexplored:maple_boat",
  "regions_unexplored:mauve_boat",
  "regions_unexplored:palm_boat",
  "regions_unexplored:pine_boat",
  "regions_unexplored:redwood_boat",
  "regions_unexplored:socotra_boat",
  "regions_unexplored:willow_boat",
];

const BOATS_MOD_RECIPE_IDS_PATTERN = {
  minecraft: "<identifier>:<name>",
  quark: "quark:world/crafting/woodsets/<type>/boat",
  aether: "<identifier>:<name>",
  thermal: "<identifier>:<name>",
  meadow: "<identifier>:<name>",
  regions_unexplored: "<identifier>:<name>",
};

ServerEvents.recipes((event) => {
  BOATS_RECIPES.forEach((recipe) => {
    const [identifier, name] = recipe.split(":");
    const type = name.split("_").slice(0, -1).join("_");

    event.remove({
      id: BOATS_MOD_RECIPE_IDS_PATTERN[identifier]
        .replace("<identifier>", identifier)
        .replace("<name>", name)
        .replace("<type>", type),
    });

    if (identifier === "minecraft" || identifier === "quark") {
      event.remove({
        id: `quark:tweaks/crafting/utility/chest_boat/direct_${type}_chest_boat`,
      });
    }

    event.shaped(Item.of(recipe, 1), ["WHW", "WKW", "SSS"], {
      W: `${identifier}:${type}_planks`,
      H: "minecraft:wooden_shovel",
      K: "#forge:tools/knives",
      S: `${identifier}:${
        identifier === "quark" ? `${type}_planks` : type
      }_slab`,
    });
  });

  event.remove({ id: "regions_unexplored:oak_boat" });
});
