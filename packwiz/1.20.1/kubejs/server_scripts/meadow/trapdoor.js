// Modifies the recipes for trapdoors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyTrapdoorRecipe(event, "<identifier>:<name>", "meadow:pine_trapdoor", [
    "meadow:pine_planks",
  ]);

  gregifyTrapdoorRecipe(
    event,
    "<identifier>:<name>",
    "meadow:pine_barn_trapdoor",
    ["meadow:pine_slab"]
  );
});
