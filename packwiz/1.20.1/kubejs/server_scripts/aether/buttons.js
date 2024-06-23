// Modifies the recipes for trapdoors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyButtonRecipe(event, "<identifier>:<name>", "aether:skyroot_button");

  gregifyButtonRecipe(event, "<identifier>:<name>", "aether:holystone_button", [
    `aether:holystone`,
    "#forge:tools/hammers",
  ]);
});
