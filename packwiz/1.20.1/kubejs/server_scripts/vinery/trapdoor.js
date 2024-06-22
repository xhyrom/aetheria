// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyTrapdoorRecipe(
    event,
    "<identifier>:<name>",
    "vinery:dark_cherry_trapdoor"
  );
});
