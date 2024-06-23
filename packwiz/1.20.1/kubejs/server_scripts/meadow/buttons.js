// Modifies the recipes for trapdoors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyButtonRecipe(event, "<identifier>:<name>", "meadow:pine_button");
});
