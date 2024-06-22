// Modifies the recipes for trapdoors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyTrapdoorRecipe(
    event,
    "<identifier>:<name>",
    "aether:skyroot_trapdoor"
  );
});
