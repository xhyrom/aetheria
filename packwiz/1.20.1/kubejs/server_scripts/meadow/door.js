// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyDoorRecipe(event, "<identifier>:<name>", "meadow:pine_door");

  gregifyDoorRecipe(event, "<identifier>:<name>", "meadow:pine_barn_door", [
    "meadow:pine_planks",
    "meadow:pine_slab",
    "meadow:pine_planks",
    "meadow:pine_planks",
  ]);
});
