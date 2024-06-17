// Modifies the recipes for doors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyDoorRecipe(
    event,
    "<identifier>:<name>",
    "snowyspirit:gingerbread_door",
    ["#snowyspirit:gingerbreads"]
  );
});
