// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyDoorRecipe(event, "<identifier>:<name>", "supplementaries:gold_door", [
    "minecraft:gold_ingot",
  ]);
});
