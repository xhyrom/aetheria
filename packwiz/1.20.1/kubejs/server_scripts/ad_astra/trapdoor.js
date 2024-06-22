// Modifies the recipes for trapdoors to match the Gregified Integrations recipes

ServerEvents.recipes((event) => {
  [
    "ad_astra:aeronos_trapdoor",
    "ad_astra:strophar_trapdoor",
    "ad_astra:glacian_trapdoor",
  ].forEach((d) => gregifyTrapdoorRecipe(event, "<identifier>:<name>", d));

  gregifyTrapdoorRecipe(
    event,
    "<identifier>:<name>",
    "ad_astra:steel_trapdoor",
    ["gtceu:steel_plate", "#forge:rods/steel"]
  );
});
