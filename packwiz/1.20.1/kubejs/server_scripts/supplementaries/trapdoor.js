// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyTrapdoorRecipe(
    event,
    "<identifier>:<name>",
    "supplementaries:gold_trapdoor",
    ["gtceu:gold_plate", "#forge:rods/gold"]
  );
});
