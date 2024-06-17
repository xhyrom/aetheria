// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  const RECIPES = {
    "minecraft:iron_door": ["minecraft:iron_ingot"],
    "ad_astra:steel_door": ["gtceu:steel_plate"],
    "ad_astra:aeronos_door": [],
    "ad_astra:strophar_door": [],
    "ad_astra:glacian_door": [],
    "quark:ancient_door": [],
    "quark:azalea_door": [],
    "quark:blossom_door": [],
    "snowyspirit:gingerbread_door": ["#snowyspirit:gingerbreads"],
    "vinery:dark_cherry_door": [],
    "supplementaries:gold_door": ["minecraft:gold_ingot"],
    "aether:skyroot_door": [],
    "thermal:rubberwood_door": [],
    "meadow:pine_door": [],
    "meadow:pine_barn_door": ["meadow:pine_planks"],
    "regions_unexplored:baobab_door": [],
    "regions_unexplored:blackwood_door": [],
    "regions_unexplored:blue_bioshroom_door": [],
    "regions_unexplored:brimwood_door": [],
    "regions_unexplored:cobalt_door": [],
    "regions_unexplored:cypress_door": [],
    "regions_unexplored:dead_door": [],
    "regions_unexplored:eucalyptus_door": [],
    "regions_unexplored:green_bioshroom_door": [],
    "regions_unexplored:joshua_door": [],
    "regions_unexplored:kapok_door": [],
    "regions_unexplored:larch_door": [],
    "regions_unexplored:magnolia_door": [],
    "regions_unexplored:maple_door": [],
    "regions_unexplored:mauve_door": [],
    "regions_unexplored:palm_door": [],
    "regions_unexplored:pine_door": [],
    "regions_unexplored:pink_bioshroom_door": [],
    "regions_unexplored:redwood_door": [],
    "regions_unexplored:socotra_door": [],
    "regions_unexplored:willow_door": [],
    "regions_unexplored:yellow_bioshroom_door": [],
  };

  const MOD_RECIPE_IDS_PATTERN = {
    minecraft: "<identifier>:<name>",
    ad_astra: "<identifier>:<name>",
    quark: "quark:world/crafting/woodsets/<type>/door",
    snowyspirit: "<identifier>:<name>",
    vinery: "<identifier>:<name>",
    supplementaries: "<identifier>:<name>",
    aether: "<identifier>:<name>",
    thermal: "<identifier>:<name>",
    meadow: "<identifier>:<name>",
    regions_unexplored: "<identifier>:<name>",
  };

  Object.entries(RECIPES).forEach(([recipeId, materials]) => {
    const [identifier, name] = recipeId.split(":");
    const type = name.split("_").slice(0, -1).join("_");

    event.remove({
      id: MOD_RECIPE_IDS_PATTERN[identifier]
        .replace("<identifier>", identifier)
        .replace("<name>", name)
        .replace("<type>", type),
    });

    if (materials.length === 0) materials.push(`${identifier}:${type}_planks`);

    event.shaped(Item.of(recipeId, 1), ["WTS", "WRC", "WWB"], {
      W: materials[0],
      T: `${identifier}:${type}_trapdoor`,
      S: "#forge:tools/screwdrivers",
      R: "gtceu:iron_ring",
      C: "gtceu:iron_screw",
      B: "#forge:tools/saws",
    });
  });

  event.remove({ id: "regions_unexplored:oak_door" });
});

