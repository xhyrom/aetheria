// Modifies the recipes for boats to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  ["quark:ancient_boat", "quark:azalea_boat", "quark:blossom_boat"].forEach(
    (b) => {
      gregifyBoatRecipe(event, "quark:world/crafting/woodsets/<type>/boat", b);

      event.remove({
        id: `quark:tweaks/crafting/utility/chest_boat/direct_${idToType(
          b
        )}_chest_boat`,
      });
    }
  );
});
