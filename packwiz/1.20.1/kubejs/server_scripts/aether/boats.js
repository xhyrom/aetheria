// Modifies the recipes for boats to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  gregifyBoatRecipe(event, "<identifier>:<name>", "aether:skyroot_boat");
});
