// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyTrapdoorRecipe(
    event,
    "<identifier>:<name>",
    "snowyspirit:gingerbread_trapdoor",
    ["#snowyspirit:gingerbreads"]
  );
});
