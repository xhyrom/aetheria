// Modifies the recipes for trapdoors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  [
    "quark:ancient_trapdoor",
    "quark:azalea_trapdoor",
    "quark:blossom_trapdoor",
  ].forEach((d) =>
    gregifyTrapdoorRecipe(
      event,
      "quark:world/crafting/woodsets/<type>/trapdoor",
      d,
      [`quark:${idToType(d)}_planks_slab`]
    )
  );
});
