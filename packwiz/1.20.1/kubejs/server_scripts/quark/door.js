// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  ["quark:ancient_door", "quark:azalea_door", "quark:blossom_door"].forEach(
    (d) =>
      gregifyDoorRecipe(event, "quark:world/crafting/woodsets/<type>/door", d)
  );
});
